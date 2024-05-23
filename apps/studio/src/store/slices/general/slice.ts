import { createSlice } from "@reduxjs/toolkit";
import type { GeneralSliceState } from "./types";

const initialState: GeneralSliceState = {};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
});

export const actions = generalSlice.actions;
export const reducer = generalSlice.reducer;
