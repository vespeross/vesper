import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth";
import { reducer as generalReducer } from "./general";
import { reducer as projectsReducer } from "./projects";
import { api } from "../api";

export const rootReducer = combineReducers({
  auth: authReducer,
  general: generalReducer,
  projects: projectsReducer,
  [api.reducerPath]: api.reducer,
});
