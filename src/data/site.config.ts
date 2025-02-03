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
    'Nano Blog is a performant, lightweight and SEO friendly modern blog system made by Astro, TypeScript and TailwindCSS, without any database and backend', // Description to display in the meta tags
  lang: 'en',
  ogLocale: 'en',
  shareMessage: 'Share this post', // Message to share a post on social media
}
