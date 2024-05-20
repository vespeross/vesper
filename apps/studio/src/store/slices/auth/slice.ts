import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserSliceState, AddUserPayload } from "./types";

const initialState: UserSliceState = {
  access_token: null,
  user: null,
};

export const counterSlice = createSlice({
  name: "user",
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

export const actions = counterSlice.actions;
export const reducer = counterSlice.reducer;
