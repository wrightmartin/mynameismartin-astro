import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Work collection
 *
 * Each entry represents a portfolio project. The "order" field controls
 * the display position on listing pages (lower numbers appear first).
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title:     z.string(),
    slug:      z.string(),
    subtitle:  z.string(),
    cardTitle: z.string().optional(),
    category:  z.string(),
    role:      z.string().optional(),
    client:    z.string().optional(),
    date:      z.string().optional(),
    url:       z.string().url().optional(),
    thumbnail: z.string(),
    featured:  z.boolean().default(false),
    order:     z.number(),
  }),
});

/**
 * Blog collection
 *
 * Supports two categories: regular "blog" posts and "weeknote" entries.
 * Both live in the same collection and can be filtered by category.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:    z.string(),
    slug:     z.string(),
    date:     z.date(),
    excerpt:  z.string(),
    category: z.enum(['blog', 'weeknote']),
    featured: z.boolean().default(false),
  }),
});

export const collections = { work, blog };
