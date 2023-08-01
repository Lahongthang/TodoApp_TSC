import { combineReducers } from 'redux';
import apiService from './services/apiService';
import authReducer, { authSlice } from './redux/auth/authSlice';

const rootReducer = combineReducers({
    [authSlice.name]: authReducer,
    [apiService.reducerPath]: apiService.reducer,
})

export default rootReducer;
