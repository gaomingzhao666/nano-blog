import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      heroImage: image(),
      tags: z.array(z.string()),
    }),
})

export const collections = { blog }
