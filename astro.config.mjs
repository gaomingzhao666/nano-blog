// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-template-gray.vercel.app/', // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight',
        },
        wrap: true,
      },
      drafts: true,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en', // 所有不包含 `es` 或 `fr` 的链接都将被视为默认语言环境，即 `en`
        locales: {
          en: 'en',
          ja: 'ja',
          cn: 'cn',
        },
      },
    }),
    tailwind(),
  ],
})
