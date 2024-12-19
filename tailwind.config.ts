import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],

  theme: {
    extend: {
      colors: {
        grayDeep: '#273444',
        gray: '#8492a6',
        grayLight: '#d3dce6',
      },
      fontFamily: {
        body: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fill, minmax(400px, max-content))',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
} satisfies Config
