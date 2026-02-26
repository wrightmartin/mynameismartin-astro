/*
  RSS Feed
  --------
  Generates an RSS feed from the blog collection using @astrojs/rss.
  Available at /blog/rss.xml
*/

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'Martin Wright — Blog',
    description: 'Blog posts and weeknotes from Martin Wright.',
    site: context.site!,
    items: sorted.map((post) => ({
      title:   post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link:    `/blog/${post.data.slug}/`,
    })),
  });
}
