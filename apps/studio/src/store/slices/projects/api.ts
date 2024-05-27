import { customFetchBase } from "@/store/api";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { GetProjectsResponse, CreateProjectPayload } from "./types";
import { toast } from "sonner";
import { actions } from "./slice";

export const api = createApi({
  reducerPath: "projectApi",
  baseQuery: customFetchBase,
  tagTypes: ["Project"],
  endpoints: (build) => ({
    getProjects: build.query<GetProjectsResponse, void>({
      query: () => "/project",
      providesTags: (result) =>
        result ? [{ type: "Project", id: "LIST" }] : [],
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
            // TODO: Add a key to the body
            key: Math.random().toString(36).substring(7),
          },
        };
      },
      invalidatesTags: ["Project"],
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success("Project created successfully");
        } catch (error: any) {
          toast.error(error.error.data.message);
        }
      },
    }),
    deleteProject: build.mutation<void, string>({
      query: (id) => ({
        url: `/project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
} = api;
