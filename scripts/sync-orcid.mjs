#!/usr/bin/env node
/**
 * sync-orcid.mjs
 *
 * Fetches public works from the ORCID API (v3.0) for a given ORCID iD and
 * creates Astro content collection Markdown files for any publications not
 * already present in src/content/publications/.
 *
 * Usage:
 *   node scripts/sync-orcid.mjs
 *
 * Environment variables:
 *   ORCID_ID          Your ORCID iD, e.g. 0000-0000-0000-0000  (required)
 *   OWNER_NAME        Your name exactly as it appears in publication author
 *                     lists, e.g. "Álvaro Researcher"           (required)
 *   DRY_RUN           Set to "true" to print what would be created without
 *                     writing any files                         (optional)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ORCID_ID   = process.env.ORCID_ID;
const OWNER_NAME = process.env.OWNER_NAME;
const DRY_RUN    = process.env.DRY_RUN === 'true';

if (!ORCID_ID)   fatal('ORCID_ID environment variable is required.');
if (!OWNER_NAME) fatal('OWNER_NAME environment variable is required.');
if (!/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(ORCID_ID)) {
  fatal('ORCID_ID must use the format 0000-0000-0000-0000.');
}

const ORCID_BASE   = 'https://pub.orcid.org/v3.0';
const ACCEPT_JSON  = { Accept: 'application/json' };

const ROOT_DIR  = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBS_DIR  = join(ROOT_DIR, 'src', 'content', 'publications');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fatal(msg) {
  console.error(`[sync-orcid] ERROR: ${msg}`);
  process.exit(1);
}

function log(msg)  { console.log(`[sync-orcid] ${msg}`); }
function warn(msg) { console.warn(`[sync-orcid] WARN: ${msg}`); }

async function fetchJSON(url) {
  const res = await fetch(url, {
    headers: ACCEPT_JSON,
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// Slug generation
// ---------------------------------------------------------------------------

/**
 * Build a filesystem-safe slug from year + sanitised title.
 * e.g. "A Survey of CAN Bus Security" → "2024-survey-can-bus-security"
 */
function makeSlug(year, title) {
  const sanitised = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // strip punctuation
    .trim()
    .replace(/\s+/g, '-')       // spaces → dashes
    .replace(/-{2,}/g, '-')     // collapse double dashes
    .substring(0, 60)           // cap length
    .replace(/-$/, '');         // remove trailing dash
  return `${year}-${sanitised}`;
}

// ---------------------------------------------------------------------------
// ORCID work-type → content collection type mapping
// ---------------------------------------------------------------------------

const WORK_TYPE_MAP = {
  'journal-article':            'journal',
  'conference-paper':           'conference',
  'conference-abstract':        'conference',
  'conference-poster':          'poster',
  'working-paper':              'preprint',
  'preprint':                   'preprint',
  'book-chapter':               'book-chapter',
  'dissertation':               'thesis',
  'dissertation-thesis':        'thesis',
  'edited-book':                'book-chapter',
  'workshop-paper':             'workshop',
  'data-set':                   'preprint',
  'other':                      'conference',
};

function mapWorkType(orcidType) {
  return WORK_TYPE_MAP[orcidType] ?? 'conference';
}

// ---------------------------------------------------------------------------
// Extract helpers — ORCID JSON field access
// ---------------------------------------------------------------------------

function getTitle(work) {
  return work?.title?.title?.value ?? '';
}

function getYear(work) {
  const date = work?.['publication-date'];
  if (!date) return null;
  const y = date?.year?.value;
  return y ? parseInt(y, 10) : null;
}

function getDoi(work) {
  const ids = work?.['external-ids']?.['external-id'] ?? [];
  const doiEntry = ids.find(id => id['external-id-type'] === 'doi');
  if (!doiEntry) return null;
  const val = doiEntry['external-id-value'];
  return val ? `https://doi.org/${val.replace(/^https?:\/\/doi\.org\//i, '')}` : null;
}

function getVenue(work) {
  return work?.['journal-title']?.value
    ?? work?.['source']?.['source-name']?.value
    ?? '';
}

function getWorkType(work) {
  return work?.type ?? 'other';
}

function getContributors(work) {
  const contributors = work?.contributors?.contributor ?? [];
  return contributors
    .filter(c => c['credit-name']?.value)
    .map(c => c['credit-name'].value.trim());
}

function getUrl(work) {
  const value = work?.url?.value;
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Existing publication registry — index by DOI and by slug prefix
// ---------------------------------------------------------------------------

function loadExistingPubs(dir) {
  if (!existsSync(dir)) return { dois: new Set(), slugs: new Set() };

  const files = readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const dois  = new Set();
  const slugs = new Set(files.map(f => f.replace(/\.mdx?$/, '')));

  for (const file of files) {
    const content = readFileSync(join(dir, file), 'utf-8');
    // Extract DOI from frontmatter doi: field
    const doiMatch = content.match(/^doi:\s*["']?(.+?)["']?\s*$/m);
    if (doiMatch) {
      // Normalise: strip https://doi.org/ prefix for comparison
      const raw = doiMatch[1].trim().replace(/^https?:\/\/doi\.org\//i, '');
      dois.add(raw.toLowerCase());
    }
  }

  return { dois, slugs };
}

// ---------------------------------------------------------------------------
// Markdown / YAML serialisation
// ---------------------------------------------------------------------------

function yamlString(value) {
  if (value === null || value === undefined) return '~';
  // JSON string literals are valid YAML double-quoted scalars and safely encode
  // quotes, backslashes, newlines, and values such as "true" or "null".
  return JSON.stringify(String(value));
}

function markdownText(value) {
  return String(value)
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildFrontmatter(fields) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(fields)) {
    if (value === null || value === undefined) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}:`);
      for (const item of value) {
        lines.push(`  - ${yamlString(String(item))}`);
      }
    } else if (typeof value === 'boolean') {
      lines.push(`${key}: ${value}`);
    } else if (typeof value === 'number') {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: ${yamlString(String(value))}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function buildMarkdown(work, putCode) {
  const title    = getTitle(work);
  const year     = getYear(work);
  const venue    = getVenue(work);
  const doi      = getDoi(work);
  const orcidUrl = getUrl(work);
  const type     = mapWorkType(getWorkType(work));
  let   authors  = getContributors(work);

  // ORCID often omits contributor lists on public records — fall back to owner
  if (authors.length === 0) {
    authors = [OWNER_NAME];
    warn(`No contributors found for "${title}" (put-code ${putCode}) — defaulting to OWNER_NAME.`);
  }

  const frontmatter = buildFrontmatter({
    title,
    authors,
    venue,
    year,
    type,
    status: 'published',
    doi:    doi ?? undefined,
    pdf:    undefined,   // placeholder — fill in manually
    code:   undefined,
    slides: undefined,
    bibtex: undefined,
    tags:   [],
    featured: false,
    orcidPutCode: putCode,   // internal — used for dedup on future runs
  });

  const body = [
    '',
    `<!-- Auto-generated by scripts/sync-orcid.mjs on ${new Date().toISOString().slice(0, 10)} -->`,
    `<!-- ORCID put-code: ${Number.parseInt(putCode, 10)} -->`,
    `<!-- Review and edit frontmatter fields as needed, then remove these comments. -->`,
    '',
    `> **TODO:** Verify author list, add PDF link, and add BibTeX entry if available.`,
    `${doi ? `>\n> DOI: ${markdownText(doi)}` : ''}`,
    `${orcidUrl && !doi ? `>\n> URL: ${markdownText(orcidUrl)}` : ''}`,
  ].join('\n').replace(/\n{3,}/g, '\n\n');

  return `${frontmatter}\n${body}\n`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  log(`Starting ORCID sync for ${ORCID_ID}`);
  log(`Owner name: "${OWNER_NAME}"`);
  if (DRY_RUN) log('DRY RUN — no files will be written.');

  // 1. Load existing publications
  const existing = loadExistingPubs(PUBS_DIR);
  log(`Found ${existing.dois.size} DOIs and ${existing.slugs.size} files in existing publications.`);

  // 2. Fetch works summary list from ORCID
  log(`Fetching works from ${ORCID_BASE}/${ORCID_ID}/works …`);
  let worksData;
  try {
    worksData = await fetchJSON(`${ORCID_BASE}/${ORCID_ID}/works`);
  } catch (err) {
    fatal(`Failed to fetch ORCID works: ${err.message}`);
  }

  const groups = worksData?.group ?? [];
  log(`Retrieved ${groups.length} work group(s) from ORCID.`);

  if (groups.length === 0) {
    log('No works found. Nothing to sync.');
    return;
  }

  // 3. For each group, take the first work-summary (preferred source)
  const created = [];
  const skipped = [];

  for (const group of groups) {
    const summaries = group['work-summary'] ?? [];
    if (summaries.length === 0) continue;

    // Pick the summary with the most data (prefer non-self-asserted, then most recent)
    const summary = summaries.find(s => !s['source']?.['source-orcid']) ?? summaries[0];
    const putCode = summary['put-code'];
    const title   = getTitle(summary);
    const year    = getYear(summary) ?? new Date().getFullYear();

    if (!Number.isSafeInteger(putCode) || putCode < 0) {
      warn(`Skipping work with invalid put-code: ${String(putCode)}`);
      continue;
    }

    // Check DOI dedup first (fastest)
    const doi = getDoi(summary);
    if (doi) {
      const normDoi = doi.replace(/^https?:\/\/doi\.org\//i, '').toLowerCase();
      if (existing.dois.has(normDoi)) {
        log(`  SKIP (DOI exists): ${title}`);
        skipped.push(title);
        continue;
      }
    }

    // Check slug dedup
    const slug = makeSlug(year, title);
    if (existing.slugs.has(slug)) {
      log(`  SKIP (slug exists): ${slug}`);
      skipped.push(title);
      continue;
    }

    // 4. Fetch full work record for complete metadata (contributors, etc.)
    let fullWork = summary;
    try {
      log(`  Fetching full record for put-code ${putCode}: "${title}"`);
      fullWork = await fetchJSON(`${ORCID_BASE}/${ORCID_ID}/work/${putCode}`);
    } catch (err) {
      warn(`Could not fetch full work for put-code ${putCode}: ${err.message}. Using summary.`);
    }

    // 5. Build and write Markdown
    const filename = `${slug}.md`;
    const filepath = join(PUBS_DIR, filename);
    const content  = buildMarkdown(fullWork, putCode);

    if (DRY_RUN) {
      log(`  [DRY RUN] Would create: ${filename}`);
      console.log('---');
      console.log(content);
      console.log('---');
    } else {
      if (!existsSync(PUBS_DIR)) mkdirSync(PUBS_DIR, { recursive: true });
      writeFileSync(filepath, content, 'utf-8');
      log(`  CREATED: src/content/publications/${filename}`);
    }

    // Update tracking sets so duplicates within the same run are also caught
    if (doi) existing.dois.add(doi.replace(/^https?:\/\/doi\.org\//i, '').toLowerCase());
    existing.slugs.add(slug);
    created.push(filename);
  }

  // 6. Summary
  console.log('');
  log(`Sync complete.`);
  log(`  Created : ${created.length} file(s)`);
  log(`  Skipped : ${skipped.length} (already present)`);
  if (created.length > 0) {
    log('  New files:');
    created.forEach(f => log(`    - src/content/publications/${f}`));
  }

  // Exit code 0 regardless — let the CI workflow decide what to do
}

main().catch(err => fatal(err.message));
