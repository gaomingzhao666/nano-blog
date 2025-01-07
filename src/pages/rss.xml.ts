import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'

export const GET = async (context: any) => {
  const posts = await getCollection('blog')

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `post/${post.slug}/`,
    })),
  })
}
