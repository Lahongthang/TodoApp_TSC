import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { AuthState } from "../../../utils/types";

const persistConfig = {
	key: 'auth',
	storage,
};

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
    loggedInAt: null as Date | null,
    loggedOutAt: null as Date | null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state, action) {
            const token = action.payload
            console.log({token})
            state.token = token
            state.isAuthenticated = true
            state.loggedInAt = new Date()
        },
        signOut(state, action) {
            state.user = null
            state.isAuthenticated = false
            state.token = null
            state.loggedOutAt = new Date()
        },
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

// selectors
const selectToken = (state: AuthState) => state.auth.token
const selectIsAuthenticated = (state: AuthState) => state.auth.isAuthenticated
const selectCurrUser = (state: AuthState) => state.auth.user
const selectAuthData = (state: AuthState) => state.auth

export {
    selectToken,
    selectCurrUser,
    selectIsAuthenticated,
    selectAuthData,
}

export const {
    signIn,
    signOut,
    setUser,
} = authSlice.actions

export default persistReducer(persistConfig, authSlice.reducer)
