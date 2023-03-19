import { combineReducers } from 'redux';

import { employeesReducer } from './employeesReducer';
import { filtersReducer } from './filterReducer';

export const rootReducer = combineReducers({
    employeesReducer,
    filtersReducer
});
