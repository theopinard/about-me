import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    url: z.string().url(),
    date: z.date(),
    publisher: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    keywords: z.string().optional(),
    authors: z.array(z.string()).optional(),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    year: z.number(),
    video: z.string().url().optional(),
    description: z.string().optional(),
    slides: z.string().url().optional(),
    schedule: z.string().url().optional(),
  }),
});

export const collections = { blog, talks };
