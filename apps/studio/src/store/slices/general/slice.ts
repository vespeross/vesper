import { createSlice } from "@reduxjs/toolkit";
import type { GeneralSliceState } from "./types";

const initialState: GeneralSliceState = {
  isNewInstall: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleInstall: (state) => {
      state.isNewInstall = !state.isNewInstall;
    },
  },
});

export const actions = generalSlice.actions;
export const reducer = generalSlice.reducer;
