import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth";
import { api } from "../api";

export const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});
