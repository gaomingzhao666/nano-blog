// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import pagefind from 'astro-pagefind'
import { remarkReadingTime } from './src/utils/readTime'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://nano-blog-bice.vercel.app',

  devToolbar: {
    enabled: false,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  integrations: [
    mdx(),
    pagefind(),

    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ja: 'ja',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
