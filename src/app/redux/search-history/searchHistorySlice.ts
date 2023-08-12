import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'search-history',
    storage,
}

const initialState: any = {

}

const appendKeyword = (history: string[], maxDepth: number = 10, keyword: string) => {
    let list = history.filter((k) => k !== keyword)
    list = [keyword, ...list]
    if (list.length > maxDepth) list.pop()
    return list 
}

export const searchHistorySlice = createSlice({
    name: 'searchHistory',
    initialState,
    reducers: {
        registerUi: (state, action) => {
            const { uiId, maxDepth } = action.payload
            state[uiId] = {
                configs: { maxDepth: maxDepth ?? 10 },
                keywords: [],
            }
        },
        addKeyword: (state, action) => {
            const { uiId, keyword } = action.payload
            if (!isEmpty(uiId) && !isEmpty(state[uiId])) {
                const history = state[uiId].keywords
                const maxDepth = state[uiId].configs.keywords
                const newHistory = appendKeyword(history, maxDepth, keyword)
                state[uiId].keywords = newHistory
            }
        }
    }
})

const hasRegistered = (state: any, uiId: string) => !isEmpty(state.searchHistory?.[uiId])
const selectHistory = (state: any, uiId: string) => state.searchHistory?.[uiId]?.keywords

export { hasRegistered, selectHistory }

export const { registerUi, addKeyword } = searchHistorySlice.actions

export default persistReducer(persistConfig, searchHistorySlice.reducer);
