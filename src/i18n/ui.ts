import en from './en.json'
import ja from './ja.json'

export const languages = {
  en: 'English',
  ja: '日本語',
}

export const defaultLang = 'en'

export const ui = {
  en: en,
  ja: ja,
} as const
