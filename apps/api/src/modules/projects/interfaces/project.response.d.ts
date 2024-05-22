import { Project } from '@prisma/client';

export type CreateProjectResponse = {
  project: Project;
};

export type GetLatestProjectsResponse = {
  projects: Project[];
};

export type GetRecentProjectsResponse = {
  projects: Project[];
};

export type GetProjectsResponse = {
  projects: Project[];
};

export type GetProjectByIdResponse = {
  project: Project;
};

export type GetProjectByNameResponse = {
  projects: Project[];
};
