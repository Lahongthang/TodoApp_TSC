import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid'
import { dispatch, useSelector } from "../../../app/store";
import { hasRegistered, registerUi } from "../../../app/redux/search-history/searchHistorySlice";

type SearchHistoryProviderProps = {
    uiId: string,
    maxDepth?: number,
    children: ReactNode,
}

export const SearchHistoryContext =  createContext({})

const SearchHistoryProvider: React.FC<SearchHistoryProviderProps> = ({ uiId, children, maxDepth = 10 }) => {
    const isExisted = useSelector((state) => hasRegistered(state, uiId))

    useEffect(() => {
        if (!isExisted) dispatch(registerUi({ uiId: uiId, maxDepth }))
    }, [uiId])

    return <SearchHistoryContext.Provider value={{ uiId }}>
        {children}
    </SearchHistoryContext.Provider>
}

export default SearchHistoryProvider;
