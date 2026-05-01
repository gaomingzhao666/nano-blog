/// <reference path="../.astro/types.d.ts" />

declare module '*.css' {
  const css: string
  export default css
}
// Side-effect style alias used in `BaseLayout.astro`
declare module '@/styles'
