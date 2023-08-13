import React, { ReactNode } from "react"
import StateManager, { specifyState } from "./StateManager"
import { RestProps } from "../utils/types"

type Props = {
    children: ReactNode,
    responseArr: any[],
    depth?: number,
}

type MultiStatesManagerProps = Props & RestProps

const MultiStatesManager: React.FC<MultiStatesManagerProps> = ({ children, responseArr = [], depth = 0, ...props }) => {
    const response = responseArr[depth] ?? {}
    const state = specifyState(response)

    return <StateManager state={state} {...props}>
        {
            depth < responseArr?.length - 1 ? (
                <MultiStatesManager
                    depth={depth + 1}
                    children={children}
                    responseArr={responseArr}
                    {...props}
                />
            ) : children
        }
    </StateManager>
}

export default MultiStatesManager;
