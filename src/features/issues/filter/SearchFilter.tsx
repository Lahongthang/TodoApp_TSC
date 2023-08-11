import React from "react";
import Searchbar from "../../../components/Searchbar";
import useFilterParams from "../../../components/filters/useFilterParams";

const SearchFilter: React.FC = () => {
    const { values, setParam } = useFilterParams()
    const { keyword } = values ?? {}

    const handleSearch = (keyword: string) => {
        setParam('keyword', keyword)
    }

    return (
        <Searchbar
            defaultKeyword={keyword}
            onSearch={handleSearch}
        />
    )
}

export default SearchFilter;
