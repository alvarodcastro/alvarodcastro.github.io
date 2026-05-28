# Academic Portfolio — Cybersecurity Researcher

A minimalistic, academic-grade portfolio built with [Astro](https://astro.build), TypeScript, Tailwind CSS, and MDX. Designed for static deployment on GitHub Pages.

---

## Stack

| Tool | Purpose |
|------|---------|
| Astro 4 | Static site generation |
| TypeScript | Type safety throughout |
| Tailwind CSS | Utility-first styling |
| MDX | Rich content for blog posts |
| Astro Content Collections | Type-safe content management |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Hosting |

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/     # Header, Footer, Navigation, MobileNav
│   ├── ui/         # Container, Section, Badge, Card, ExternalLink, PageHeader
│   ├── academic/   # PublicationItem, TalkItem, ProjectItem, TimelineItem, ResearchAreaCard
│   └── seo/        # SEO meta component
├── content/
│   ├── publications/   # .md files, one per publication
│   ├── talks/          # .md files, one per talk
│   ├── projects/       # .md files, one per project
│   ├── posts/          # .md/.mdx blog posts
│   ├── teaching/       # .md files, one per teaching activity
│   └── config.ts       # Zod schemas for all collections
├── data/
│   ├── profile.ts      # Name, title, bio, email
│   ├── social.ts       # GitHub, Scholar, ORCID, LinkedIn
│   ├── research.ts     # Research area descriptions
│   ├── navigation.ts   # Navigation links
│   └── experience.ts   # Education, experience, awards, skills
├── layouts/            # BaseLayout, PageLayout, MarkdownLayout
├── pages/              # One .astro file per route
├── styles/             # global.css (Tailwind base + custom layers)
└── utils/              # dates.ts, publications.ts, seo.ts, sorting.ts
```

---

## How to Update Content

### Personal information

Edit `src/data/profile.ts` — name, title, institution, email, bio text.

Edit `src/data/social.ts` — GitHub, Google Scholar, ORCID, LinkedIn URLs.

Edit `src/data/experience.ts` — education, work experience, awards, service, skills.

Edit `src/data/research.ts` — research area titles, descriptions, and keywords.

### Publications

Create a new file in `src/content/publications/` following this naming convention:

```
YYYY-short-title.md
```

Required frontmatter fields:

```yaml
title: "Paper title"
authors:
  - "Your Name"          # Must match profile.name exactly to be bolded
  - "Coauthor Name"
venue: "Venue name"
year: 2025
type: "conference"       # journal | conference | workshop | preprint | book-chapter | poster | demo | thesis
status: "published"      # published | accepted | under-review | preprint | in-preparation
featured: true           # show on homepage
```

Optional: `doi`, `pdf`, `code`, `slides`, `bibtex`, `tags`.

The body of the file is not currently rendered on the publications page but can be used for notes.

### Talks

Create a new file in `src/content/talks/`:

```yaml
title: "Talk title"
event: "Conference or event name"
location: "City, Country"
date: 2025-06-15
type: "conference-talk"  # conference-talk | invited-talk | seminar | poster | workshop | lecture | panel
featured: true
```

Optional: `slides`, `video`, `tags`.

### Projects

Create a new file in `src/content/projects/`. The body (Markdown) is not currently rendered on the listing page but can be used for extended notes.

```yaml
title: "Project title"
summary: "One paragraph summary."
startDate: 2024-01-01
status: "active"         # active | completed | archived
role: "Lead Researcher"
technologies:
  - Python
  - Linux
featured: true
```

Optional: `endDate`, `links.github`, `links.demo`, `links.paper`, `tags`.

### Blog posts

Create a new `.md` or `.mdx` file in `src/content/posts/`:

```yaml
title: "Post title"
description: "Short description."
date: 2025-05-01
draft: false
tags:
  - automotive security
```

Set `draft: true` to hide a post from the listing.

### Teaching

Create a new file in `src/content/teaching/`:

```yaml
title: "Course or activity name"
institution: "University name"
academicYear: "2024–2025"
role: "Teaching Assistant"
type: "ta"               # course | ta | supervision | workshop | guest-lecture | training
description: "Short description."
order: 10                # higher numbers appear first
```

---

## Deployment

### GitHub Pages (automatic)

1. Push to the `main` branch.
2. GitHub Actions builds and deploys automatically.

### Configuration

Before deploying, update `astro.config.mjs`:

```js
// User/organisation site (username.github.io):
site: 'https://yourusername.github.io'

// Project site (username.github.io/repo):
site: 'https://yourusername.github.io',
base: '/your-repo-name'
```

Also update the `Sitemap` URL in `public/robots.txt`.

### GitHub Pages settings

In your repository: **Settings → Pages → Source → GitHub Actions**.

---

## Customisation

### Accent colour

The primary accent is `#1E3A8A` (dark blue). To change it, update `tailwind.config.mjs` and the CSS variable `--color-accent` in `src/styles/global.css`.

### Typography

Body uses **Inter** (loaded from Google Fonts). Headings use **Charter/Georgia** (serif). Both can be changed in `tailwind.config.mjs` and `BaseLayout.astro`.

---

## Lighthouse targets

| Category | Target |
|---------|--------|
| Performance | 95+ |
| Accessibility | 95+ |
| SEO | 95+ |
| Best Practices | 95+ |

---

## Licence

MIT — see [LICENSE](./LICENSE).
