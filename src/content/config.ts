import { defineCollection, z } from 'astro:content';

const publicationTypes = [
  'journal', 'conference', 'workshop', 'preprint',
  'book-chapter', 'poster', 'demo', 'thesis',
] as const;

const publicationStatuses = [
  'published', 'accepted', 'under-review', 'preprint', 'in-preparation',
] as const;

const talkTypes = [
  'conference-talk', 'invited-talk', 'seminar',
  'poster', 'workshop', 'lecture', 'panel',
] as const;

const projectStatuses = ['active', 'completed', 'archived'] as const;

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(publicationTypes),
    status: z.enum(publicationStatuses),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    slides: z.string().optional(),
    bibtex: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    type: z.enum(talkTypes),
    slides: z.string().optional(),
    video: z.string().optional(),
    relatedPublication: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    status: z.enum(projectStatuses),
    role: z.string(),
    technologies: z.array(z.string()).default([]),
    links: z.object({
      github: z.string().optional(),
      demo: z.string().optional(),
      paper: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    readingTime: z.boolean().default(true),
  }),
});

const teaching = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    academicYear: z.string(),
    role: z.string(),
    description: z.string(),
    type: z.enum(['course', 'ta', 'supervision', 'workshop', 'guest-lecture', 'training']),
    order: z.number().default(0),
  }),
});

export const collections = {
  publications,
  talks,
  projects,
  posts,
  teaching,
};
