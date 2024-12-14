interface SiteConfig {
  author: string
  title: string
  description: string
  lang: string
  ogLocale: string
  shareMessage: string
}

export const siteConfig: SiteConfig = {
  author: 'Nano', // Site author
  title: 'Nano Blog', // Site title.
  description:
    'Nano Blog is a performant, lightweight, less dependency and SEO friendly open source developer blog made by Astro, the content mainly focuses on technology, web development, and life', // Description to display in the meta tags
  lang: 'en',
  ogLocale: 'en',
  shareMessage: 'Share this post', // Message to share a post on social media
}
