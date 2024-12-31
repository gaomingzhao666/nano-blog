import { getCollection } from 'astro:content'

export const getPosts = async (max?: number) =>
  (await getCollection('blog'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max)

export const getTags = async () => {
  const posts = await getCollection('blog')
  const tags: Set<string> = new Set()

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tags.add(tag.toLowerCase())
    })
  })

  return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
  const posts = await getPosts()
  const lowercaseTag = tag.toLowerCase()

  return posts.filter((post) =>
    post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag),
  )
}
