import { defineCollection, z } from 'astro:content';

const link = z.string().url();

const workEntry = z.object({
  company: z.string(),
  url: link.optional(),
  role: z.string(),
  period: z.string(),
  country: z.string().optional(),
  description: z.string().optional(),
  highlights: z.array(z.string()).optional(),
});

const educationEntry = z.object({
  institution: z.string(),
  degree: z.string(),
  year: z.number(),
  country: z.string().optional(),
  note: z.string().optional(),
});

const blogPost = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  url: link,
  date: z.date(),
  publisher: z.string(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  keywords: z.string().optional(),
  authors: z.array(z.string()).optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  imagePosition: z.string().optional(),
});

const talk = z.object({
  id: z.string(),
  title: z.string(),
  event: z.string(),
  year: z.number(),
  video: link.optional(),
  description: z.string().optional(),
  slides: link.optional(),
  schedule: link.optional(),
  repo: link.optional(),
  logo: z.string().optional(),
  logoAlt: z.string().optional(),
});

const conference = z.object({
  name: z.string(),
  url: link,
  role: z.string(),
  logo: z.string().optional(),
  logoAlt: z.string().optional(),
});

const site = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('kind', [
    z.object({
      kind: z.literal('home'),
      name: z.string(),
      title: z.string(),
      location: z.string(),
      github: z.string(),
      linkedin: z.string(),
      photo: z.string(),
      photoAlt: z.string(),
      keywords: z.string().optional(),
      expertise_tags: z.array(z.string()).optional(),
      bio: z.string(),
      community_summary: z.string().optional(),
      selected_talks: z.array(z.string()).optional(),
      work: z.array(workEntry),
      education: z.array(educationEntry),
      skills: z.record(z.array(z.string())),
    }),
    z.object({
      kind: z.literal('blog'),
      title: z.string(),
      description: z.string(),
      subtitle: z.string(),
      posts: z.array(blogPost),
    }),
    z.object({
      kind: z.literal('talks'),
      title: z.string(),
      description: z.string(),
      subtitle: z.string(),
      talks: z.array(talk),
    }),
    z.object({
      kind: z.literal('community'),
      title: z.string(),
      description: z.string(),
      subtitle: z.string().optional(),
      intro: z.string().optional(),
      image: z.string(),
      imageAlt: z.string(),
      metrics: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })).optional(),
      sections: z.array(z.object({
        title: z.string(),
        body: z.string(),
      })).optional(),
      eventsTitle: z.string().optional(),
      conferences: z.array(conference),
    }),
  ]),
});

export const collections = { site };
