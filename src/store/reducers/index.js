import { combineReducers } from 'redux';

import { employeesReducer } from './employeesReducer';
import { filtersReducer } from './filterReducer';
import { sortOrderReducer } from './sortOrderReducer';

export const rootReducer = combineReducers({
    employeesReducer,
    filtersReducer,
    sortOrderReducer
});
