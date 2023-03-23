import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducers';
// import { employeesMiddleware } from './middleware/employeesMiddleware';


export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [
        ThunkMiddleware
    ],
})
 