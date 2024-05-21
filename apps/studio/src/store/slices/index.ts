import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth";
import { reducer as generalReducer } from "./general";
import { api } from "../api";

export const rootReducer = combineReducers({
  auth: authReducer,
  general: generalReducer,
  [api.reducerPath]: api.reducer,
});
