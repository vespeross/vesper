import { api } from "@/store/api";

const generalApi = api.injectEndpoints({
  endpoints: (build) => ({
    new: build.query({
      query: () => ({
        url: "/init",
      }),
    }),
    health: build.query({
      query: () => ({
        url: "/health",
      }),
    }),
  }),
});

export const { useNewQuery } = generalApi;
