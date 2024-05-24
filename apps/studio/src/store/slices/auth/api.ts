import { customFetchBase } from "@/store/api";
import type { LoginPayload, LoginAPIResponse } from "./types";
import { actions } from "./slice";
import { toast } from "sonner";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store";

export const api = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    login: build.mutation<LoginAPIResponse, LoginPayload>({
      query: (body: LoginPayload) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (!data) return;
          dispatch(
            actions.addUser({
              user: data.body.user,
              access_token: data.body.accessToken,
            })
          );
          document.cookie = `refresh_token=${data.body.refreshToken};`;
        } catch (error: any) {
          toast.error(error.error.data.message);
        }
      },
    }),
    signup: build.mutation({
      query: (body: LoginPayload) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (!data) return;
          dispatch(
            actions.addUser({
              user: data.body.user,
              access_token: data.body.accessToken,
            })
          );
        } catch (error: any) {
          toast.error(error.error.data.message);
        }
      },
    }),
    getMe: build.query({
      query: () => ({
        url: "/user",
      }),
      onQueryStarted: async (_args, { dispatch, queryFulfilled, getState }) => {
        try {
          const { data } = await queryFulfilled;
          const state = getState() as RootState;
          if (!data) return;
          dispatch(
            actions.addUser({
              user: data.body.user,
              access_token: state.auth.access_token!,
            })
          );
        } catch (error: any) {
          if (error.error.status === 404) {
            dispatch(actions.removeUser());
          }
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGetMeQuery } = api;
