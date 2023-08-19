import { useTranslation } from "react-i18next";
import React from "react";
import useFilterParams from "../../../components/filters/useFilterParams";
import SearchBox from "../../../components/filters/search-box/SearchBox";
import useSearchHistory from "../../../components/filters/search-box/useSearchHistory";

const SearchFilter: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { values, setParam } = useFilterParams()
    const { history, addKeyword } = useSearchHistory()
    const { keyword } = values ?? {}

    const handleSearch = (keyword: string) => {
        setParam('keyword', keyword)
        if (keyword) addKeyword(keyword)
    }

    return (
        <SearchBox
            options={history}
            defaultKeyword={keyword}
            onSearch={handleSearch}
            placeholder={t('filters.searchPlaceholder')}
        />
    )
}

export default SearchFilter;
