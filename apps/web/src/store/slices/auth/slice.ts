import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthSliceState, AddUserPayload } from "./types";

const initialState: AuthSliceState = {
  access_token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AddUserPayload>) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    removeUser: (state) => {
      state.user = null;
      state.access_token = null;
      document.cookie =
        "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
  },
});

export const actions = authSlice.actions;
export const reducer = authSlice.reducer;
