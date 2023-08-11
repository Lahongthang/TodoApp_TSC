import { enUS, viVN, jaJP } from '@mui/material/locale'
import { enAU, ja, vi } from 'date-fns/locale'

type LangType = {
    label: string,
    value: 'vi' | 'en' | 'ja',
    systemValue: any,
    icon: string,
}

export const allLangs: LangType[] = [
    {
        label: 'English',
        value: 'en',
        systemValue: enUS,
        icon: '/assets/icons/flags/ic_flag_en.svg',
    },
    {
        label: 'Vietnamese',
        value: 'vi',
        systemValue: viVN,
        icon: '/assets/icons/flags/ic_flag_vn.svg',
    },
    {
        label: 'Japanese',
        value: 'ja',
        systemValue: jaJP,
        icon: '/assets/icons/flags/ic_flag_ja.svg',
    },
]

export const getLocaleDateFns = (currentLang: string) => {
	switch (currentLang) {
		case 'ja':
			return ja
		case 'en':
			return enAU
		case 'vi':
			return vi
		default:
			return ja;
	}
}

export const defaultLang = allLangs[0]; // English
