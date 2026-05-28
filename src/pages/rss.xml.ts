import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { defaultSEO } from '@/utils/seo';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${defaultSEO.siteName} — Blog`,
    description: defaultSEO.description,
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-gb</language>',
  });
}
