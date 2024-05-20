import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth";

export const rootReducer = combineReducers({
  auth: authReducer,
});
