import { customFetchBase } from "@/store/api";
import type {
  CreateInvitePayload,
  CreateInviteResponse,
  GetInvitesResponse,
} from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { actions } from "./slice";

export const api = createApi({
  reducerPath: "inviteApi",
  baseQuery: customFetchBase,
  tagTypes: ["Invite"],
  endpoints: (build) => ({
    getInvites: build.query<GetInvitesResponse, void>({
      query: () => "/user/invite",
      providesTags: (result) =>
        result ? [{ type: "Invite", id: "LIST" }] : [],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          if (!data) return;
          dispatch(actions.setInvites(data.body.invites));
        } catch (error) {
          toast.error("Failed to fetch invites");
        }
      },
    }),
    invite: build.mutation<CreateInviteResponse, CreateInvitePayload>({
      query: (body) => ({
        url: "/user/invite",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Invite"],
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error("Failed to send invite");
        }
      },
    }),
  }),
});

export const { useInviteMutation, useGetInvitesQuery } = api;
