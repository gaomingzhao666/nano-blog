import en from './en.json'
import ja from './ja.json'
import cn from './cn.json'

export const languages = {
  en: 'English',
  ja: '日本語',
  cn: '简体中文',
}

export const defaultLang = 'en'

export const ui = {
  en: en,
  ja: ja,
  cn: cn,
} as const
