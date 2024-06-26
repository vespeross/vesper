import { customFetchBase } from "@/store/api";
import type { IsNewInstallResponse } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "generalApi",
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    new: build.query<IsNewInstallResponse, void>({
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

export const { useNewQuery } = api;
