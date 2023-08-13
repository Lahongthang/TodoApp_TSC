import React, { ReactNode } from "react";
import { RestProps } from "../utils/types";
import { isEmpty } from "lodash";

type Props = {
    idleState?: ReactNode,
    emptyState?: ReactNode,
    errorState?: ReactNode,
    loadingState?: ReactNode,
    successState?: ReactNode,
    state: 'default' | "success" | "idle" | "loading" | "empty" | "error",
    successIsIdle?: boolean,
    children: ReactNode,
}

type StateManagerProps = Props & RestProps

export const specifyState = ({
    data, isLoading = false, isFetching = false,
    isSuccess = false, isError = false, customCondLoading
} : {
    data?: any, isLoading?: boolean, isFetching?: boolean,
    isSuccess?: boolean, isError?: boolean, customCondLoading?: () => void,
}) => {
    if (customCondLoading?.() || isLoading || isFetching) return "loading";
    if (isError) return "error"
    if (isSuccess && isEmpty(data)) return "empty"
    if (isSuccess) return "success"
    return "idle"
}

const StateManager: React.FC<StateManagerProps> = ({
    idleState, emptyState, errorState, loadingState, successState,
    state = "success", successIsIdle = true, children, ...props
}) => {
    if (state === "error") return errorState;
    if (state === "loading") return loadingState;
    if (state === "empty") return emptyState;
    if (!successIsIdle && state === "success") return successState;
    if (state === "idle") return idleState ?? props?.children;
    if (state === "success") return children;
    return <>
    </>
}

export default StateManager;
