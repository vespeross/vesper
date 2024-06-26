import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { InviteSliceState } from "./types";
import type { Invite } from "@/types";

const initialState: InviteSliceState = {
  invites: [],
};

export const inviteSlice = createSlice({
  name: "invite",
  initialState,
  reducers: {
    setInvites(state, action: PayloadAction<Invite[]>) {
      console.log("setInvites", action);
      state.invites = action.payload;
    },
  },
});

export const actions = inviteSlice.actions;
export const reducer = inviteSlice.reducer;
