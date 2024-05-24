import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices";
export * from "./slices";
import { api as authApi } from "./slices/auth";
import { api as generalApi } from "./slices/general";
import { api as projectApi } from "./slices/projects";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      generalApi.middleware,
      projectApi.middleware,
    ]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
