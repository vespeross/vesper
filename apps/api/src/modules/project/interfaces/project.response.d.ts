import { Project } from '@prisma/client';

type GenericProjectResponse = {
  project: Project;
};

type GenericProjectsResponse = {
  projects: Project[];
};

export type CreateProjectResponse = GenericProjectResponse;
export type GetLatestProjectsResponse = GenericProjectsResponse;
export type GetRecentProjectsResponse = GenericProjectsResponse;
export type GetProjectsResponse = GenericProjectsResponse;
export type GetProjectByIdResponse = GenericProjectResponse;
export type GetProjectByNameResponse = GenericProjectsResponse;
export type DeleteProjectResponse = GenericProjectResponse;
export type SoftDeleteProjectResponse = GenericProjectResponse;
export type EditProjectResponse = GenericProjectResponse;
