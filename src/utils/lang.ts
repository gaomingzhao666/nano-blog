export const setLang = (lang: string) => {
  window.localStorage.setItem('lang', lang)
}

export const getLang = () => window.localStorage.getItem('lang') || 'en'
