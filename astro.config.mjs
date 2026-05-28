import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
// -----------------------------------------------------------------------
// IMPORTANT: Change `site` to your actual GitHub Pages URL before deploying.
//   User site:    site: 'https://yourusername.github.io'
//   Project site: site: 'https://yourusername.github.io', base: '/repo-name'
// -----------------------------------------------------------------------
export default defineConfig({
  site: 'https://yourusername.github.io',
  // base: '/portfolio',   // Uncomment and set if deploying as a project site
  integrations: [
    tailwind(),
    mdx(),
    // sitemap() is included in package.json — uncomment below once site URL is configured.
    // sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
