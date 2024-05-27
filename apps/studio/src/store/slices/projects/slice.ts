import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProjectSliceState } from "./types";

const initialState: ProjectSliceState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (
      state,
      action: PayloadAction<ProjectSliceState["projects"]>
    ) => {
      state.projects = action.payload;
    },
  },
});

export const actions = projectSlice.actions;
export const reducer = projectSlice.reducer;
