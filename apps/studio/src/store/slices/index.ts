import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer, api as authApi } from "./auth";
import { reducer as generalReducer, api as generalApi } from "./general";
import { reducer as projectReducer, api as projectApi } from "./projects";

export const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  general: generalReducer,
  [generalApi.reducerPath]: generalApi.reducer,
  projects: projectReducer,
  [projectApi.reducerPath]: projectApi.reducer,
});
