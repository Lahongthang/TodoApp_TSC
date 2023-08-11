import React, { ReactNode, createContext } from "react";

export const FilterContext = createContext({})

type FilterContextProviderProps = {
    uiId: string,
    children: ReactNode,
}

const FilterContextProvider: React.FC<FilterContextProviderProps> = ({ uiId, children }) => {
    const provideValue = { uiId }
    return (
        <FilterContext.Provider value={provideValue}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;
