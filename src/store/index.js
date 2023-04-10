import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";

import { rootReducer } from "./reducers";

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: [ThunkMiddleware],
});
