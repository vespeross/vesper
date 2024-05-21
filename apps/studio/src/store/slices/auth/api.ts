import { api } from "@/store/api";
import type { LoginPayload } from "./types";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body: LoginPayload) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    signup: build.mutation({
      query: (body: LoginPayload) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
