import { enUS, viVN, jaJP } from '@mui/material/locale'
import { enAU, ja, vi } from 'date-fns/locale'

export const LANGUAGE = {
	vi: 'vi',
	en: 'en',
	ja: 'ja'
}

export const allLangs = [
    {
        label: 'English',
        value: LANGUAGE.en,
        systemValue: enUS,
        icon: '/assets/icons/flags/ic_flag_en.svg',
    },
    {
        label: 'Vietnamese',
        value: LANGUAGE.vi,
        systemValue: viVN,
        icon: '/assets/icons/flags/ic_flag_vn.svg',
    },
    {
        label: 'Japanese',
        value: LANGUAGE.ja,
        systemValue: jaJP,
        icon: '/assets/icons/flags/ic_flag_ja.svg',
    },
]

export const getLocaleDateFns = (currentLang: string) => {
	switch (currentLang) {
		case LANGUAGE.ja:
			return ja
		case LANGUAGE.en:
			return enAU
		case LANGUAGE.vi:
			return vi
		default:
			return ja;
	}
}

export const defaultLang = allLangs[0]; // English
