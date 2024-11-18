export const setLang = (lang: string) => {
  window.localStorage.setItem('lang', lang)
}

export const getLang = (isReturnUrl: boolean) => {
  if (isReturnUrl) {
    return window.localStorage.getItem('lang') === 'en'
      ? ''
      : window.localStorage.getItem('lang') + '/'
  } else return window.localStorage.getItem('lang') || 'en'
}
