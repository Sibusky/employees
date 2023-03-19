import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [
    ],
})
