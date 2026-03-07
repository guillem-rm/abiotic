import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Singleton pages: home, company, contact
// passthrough() keeps all frontmatter fields — each page has its own shape
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './content' }),
  schema: z.object({
    title: z.string().optional(),
  }).passthrough(),
});

// Individual service pages
const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    services: z.array(z.string()),
    applications: z.array(z.string()),
  }),
});

export const collections = { pages, services };
