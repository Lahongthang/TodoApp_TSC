import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from 'react-redux'
import rootReducer from "./rootReducer";
import apiService from "./services/apiService";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([apiService.middleware])
})

const persistor = persistStore(store)

const { dispatch } = store

const useSelector = useAppSelector

const useDispatch = () => useAppDispatch()

export { store, dispatch, useSelector, useDispatch, persistor };
