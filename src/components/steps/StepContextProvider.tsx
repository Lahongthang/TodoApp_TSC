import React, { ReactNode, createContext } from "react";
import useStep from "./useStep";

export const StepContext = createContext({})

type StepContextProviderProps = {
    uiId: string,
    children: ReactNode,
}

const StepContextProvider: React.FC<StepContextProviderProps> = ({ uiId, children }) => {
    const { uiId: registeredId } = useStep({ uiId })

    const provideValue = { uiId: registeredId }

    return (
        <StepContext.Provider value={provideValue}>
            {children}
        </StepContext.Provider>
    )
} 

export default StepContextProvider;
