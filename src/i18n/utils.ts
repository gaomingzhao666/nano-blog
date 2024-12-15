import { ui, defaultLang } from './ui'

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export const useTranslations = (lang: keyof typeof ui) => {
  return (key: keyof (typeof ui)[typeof defaultLang]) => {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
