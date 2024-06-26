import { Project } from "@/types";

export type ProjectSliceState = {
  projects: Project[];
};

export type GetProjectsResponse = {
  body: {
    projects: Project[];
  };
};

export type CreateProjectPayload = {
  name: string;
  description: string | null;
};
