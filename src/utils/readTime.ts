import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export const remarkReadingTime = () => {
  return (tree: unknown, { data }: any) => {
    const textOnPage = toString(tree)

    const readingTime = getReadingTime(textOnPage)
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    // and readingTime.minutes will give us the number of minutes
    // i.e. 3
    // here we are using the latter to apply better i18n and make it rounded to the nearest integer
    data.astro.frontmatter.minutesRead = Math.round(readingTime.minutes)
  }
}
