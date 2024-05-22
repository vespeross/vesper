import { createSlice } from "@reduxjs/toolkit";
import type { ProjectSliceState } from "./types";

const initialState: ProjectSliceState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export const actions = projectSlice.actions;
export const reducer = projectSlice.reducer;
