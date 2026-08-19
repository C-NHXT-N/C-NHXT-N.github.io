import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const localizedString = z.object({
  zh: z.string(),
  en: z.string(),
});

const localizedList = z.object({
  zh: z.array(z.string()),
  en: z.array(z.string()),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    period: z.string(),
    title: localizedString,
    role: localizedString,
    summary: localizedString,
    resumeSummary: localizedString,
    challenge: localizedString,
    solution: localizedList,
    contributions: localizedList,
    outcome: localizedString,
    technologies: z.array(z.string()),
    cover: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: localizedString,
        caption: localizedString,
      }),
    ),
    links: z
      .array(
        z.object({
          label: localizedString,
          url: z.url(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
