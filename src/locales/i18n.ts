import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { isDate } from 'date-fns'
import resources from '../resources/lang'
import { defaultLang } from '../configs/lang'
import { formatDate } from '../utils/datetime/formatHelper'

let lng = defaultLang.value

if (typeof window !== 'undefined') {
    lng = localStorage.getItem('i18nextLng') as "vi" | "en" | "ja" || defaultLang.value;
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng,
        fallbackLng: defaultLang.value,
        ns: ['translations'],
        defaultNS: 'translations',
        react: {
            defaultTransParent: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'b'],
        },
        interpolation: {
            escapeValue: false,
            format: (value: any, format: any, lng: any) => {
                if (isDate(value)) return formatDate(value, format, lng)
                return value
            }
        }
    })

export default i18n;
