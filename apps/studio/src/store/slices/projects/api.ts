import { customFetchBase } from "@/store/api";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { GetProjectsResponse, CreateProjectPayload } from "./types";
import { toast } from "sonner";
import { actions } from "./slice";

export const api = createApi({
  reducerPath: "projectApi",
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    getProjects: build.query<GetProjectsResponse, void>({
      query() {
        return {
          url: "/project",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          dispatch(
            actions.setProjects((await queryFulfilled).data.body.projects)
          );
        } catch (error: any) {
          toast.error(error.error.data.message);
        }
      },
    }),
    createProject: build.mutation<void, CreateProjectPayload>({
      query(body) {
        return {
          url: "/project/create",
          method: "POST",
          body: {
            name: body.name,
            description: body.description,
            key: Math.random().toString(36).substring(7),
          },
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(api.endpoints.getProjects.initiate());
          toast.success("Project created successfully");
        } catch (error: any) {
          toast.error(error.error.data.message);
        }
      },
    }),
  }),
});

export const { useGetProjectsQuery, useCreateProjectMutation } = api;
