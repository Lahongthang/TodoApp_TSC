import { useTranslation } from 'react-i18next'
import { allLangs, defaultLang } from '../configs/lang'

const useLocales = () => {
    const { i18n, t: translate } = useTranslation()

    const langStorage = localStorage.getItem('i18nextLng')

    const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang

    const handleChangeLanguage = (newlang: any) => {
        i18n.changeLanguage(newlang);
        localStorage.setItem("i18nextLng", newlang);
    }

    return {
        onChangeLang: handleChangeLanguage,
        translate: (text: string, options: any) => translate(text, options),
        currentLang,
        allLangs,
    }
}

export default useLocales;
