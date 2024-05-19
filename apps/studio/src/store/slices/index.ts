import { combineReducers } from "@reduxjs/toolkit";
import { reducer as userReducer } from "./user";

export const rootReducer = combineReducers({
  user: userReducer,
});
