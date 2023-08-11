import { combineReducers } from 'redux';
import apiService from './services/apiService';
import authReducer, { authSlice } from './redux/auth/authSlice';
import filterReducer, { filterSlice } from './redux/filter/filterSlice';

const rootReducer = combineReducers({
    [authSlice.name]: authReducer,
    [filterSlice.name]: filterReducer,
    [apiService.reducerPath]: apiService.reducer,
})

export default rootReducer;
