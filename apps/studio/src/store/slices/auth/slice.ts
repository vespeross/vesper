import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserSliceState, AddUserPayload } from "./types";

const initialState: UserSliceState = {
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
    },
  },
});

export const actions = authSlice.actions;
export const reducer = authSlice.reducer;
