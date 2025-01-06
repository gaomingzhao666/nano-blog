import { defineCollection, z } from 'astro:content'

// 60 characters
// With Google's Title update, shorter titles are preferred.
// If the title is too long, they are more likely to be rewritten.
// Use these rules of thumb when it comes to the title tag
// length: Maximum length: 60 characters or 575 pixels.2

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
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
