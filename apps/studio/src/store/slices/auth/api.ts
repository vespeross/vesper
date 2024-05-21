import { api } from "@/store/api";

type LoginPayload = {
  email: string;
  password: string;
};

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body: LoginPayload) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
