import React from "react";
import useFilterParams from "../../../components/filters/useFilterParams";
import SearchBox from "../../../components/filters/search-box/SearchBox";
import useSearchHistory from "../../../components/filters/search-box/useSearchHistory";

const SearchFilter: React.FC = () => {
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
            placeholder="Enter keyword here"
        />
    )
}

export default SearchFilter;
