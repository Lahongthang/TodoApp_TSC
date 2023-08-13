import { useCallback, useContext } from "react";
import { FilterContext } from "./FilterContextProvider";
import { dispatch, useSelector } from "../../app/store";
import { selectParams, setParam as setParamAction, reset as resetAction } from "../../app/redux/filter/filterSlice";

export default function useFilterParams() {
    const { uiId }: any = useContext(FilterContext)
    const values = useSelector((state: any) => selectParams(state, uiId))

    const setParam = useCallback((key: any, value: any) => {
        if (uiId) dispatch(setParamAction({ uiId, key, value }))
    }, [uiId])

    const reset = useCallback(() => {
        dispatch(resetAction({ uiId }))
    }, [uiId])

    return {
        values,
        setParam,
        reset,
    }
}
