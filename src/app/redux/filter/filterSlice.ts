import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

const initialState: any = {

}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        registerUi(state, action) {
            const { uiId, defaultValues } = action.payload
            state[uiId] = {
                ...defaultValues ?? {},
                defaultValues: defaultValues ?? {}
            }
        },
        setParam(state, action) {
            const { uiId, key, value } = action.payload
            if (!isEmpty(uiId) && !isEmpty(state[uiId])) {
                state[uiId][key] = value
            }
        },
        reset(state, action) {
            const { uiId } = action.payload
            const defaultValues = state[uiId].defaultValues
            const keyword = state[uiId].keyword
            state[uiId] = {
                ...defaultValues,
                keyword,
                defaultValues,
            }
        }
    }
})

const selectParams = (state: any, uiId: string) => state.filters[uiId]
const hasRegistered = (state: any, uiId: string) => !isEmpty(state.filters[uiId])

export {
    selectParams,
    hasRegistered,
}

export const {
    registerUi,
    setParam,
    reset
} = filterSlice.actions

export default filterSlice.reducer;
