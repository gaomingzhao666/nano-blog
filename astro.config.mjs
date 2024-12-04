// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-template-gray.vercel.app/',
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
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        // experimentalThemes: {
        //   light: 'vitesse-light',
        //   dark: 'material-theme-palenight',
        // },
        theme: 'github-dark',
        wrap: true,
      },
    }),

    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ja: 'ja',
        },
      },
    }),

    tailwind(),
  ],
})
