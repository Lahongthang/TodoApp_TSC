import React, { ReactNode, createContext } from "react";
import useFilter from "./userFilter";

export const FilterContext = createContext({})

type FilterContextProviderProps = {
    uiId?: string,
    children: ReactNode,
    defaultValues?:any,
}

const FilterContextProvider: React.FC<FilterContextProviderProps> = ({ uiId, defaultValues, children }) => {
    const { uiId: registeredUiId } = useFilter({
        fixedKey: uiId,
        defaultValues,
    })

    const provideValue = { uiId: registeredUiId }

    return (
        <FilterContext.Provider value={provideValue}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;
