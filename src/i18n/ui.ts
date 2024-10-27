import en from './en.json'
import ja from './ja.json'
import cn from './cn.json'

export const languages = {
	'en': 'English',
	'ja': '日本語',
	'zh-CN': '简体中文'
}

export const defaultLang = 'en'

export const ui = {
	'en': en,
	'ja': ja,
	'zh-CN': cn
} as const
