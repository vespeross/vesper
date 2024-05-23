import { api } from "@/store/api";
import type { LoginPayload, LoginAPIResponse } from "./types";
import { actions } from "./slice";
import { toast } from "sonner";

const authApi = api.injectEndpoints({
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
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
