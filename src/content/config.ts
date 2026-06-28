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
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imagePosition: z.string().optional(),
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
    repo: z.string().url().optional(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subtitle: z.string().optional(),
    intro: z.string().optional(),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    sections: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).optional(),
    eventsTitle: z.string().optional(),
  }),
});

export const collections = { blog, talks, pages };
