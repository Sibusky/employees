import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';
import { employeesMiddleware } from './middleware/employeesMiddleware';

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [
        employeesMiddleware
    ],
})
