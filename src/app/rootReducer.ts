import { combineReducers } from 'redux';
import apiService from './services/apiService';
import authReducer, { authSlice } from './redux/auth/authSlice';
import filterReducer, { filterSlice } from './redux/filter/filterSlice';
import stepReducer, { stepSlice } from './redux/step/stepSlice';
import searchHistoryReducer, { searchHistorySlice } from './redux/search-history/searchHistorySlice';

const rootReducer = combineReducers({
    [authSlice.name]: authReducer,
    [filterSlice.name]: filterReducer,
    [searchHistorySlice.name]: searchHistoryReducer,
    [stepSlice.name]: stepReducer,
    [apiService.reducerPath]: apiService.reducer,
})

export default rootReducer;
