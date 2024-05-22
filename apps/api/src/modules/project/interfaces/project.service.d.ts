import { CreateProjectDto, EditProjectDto } from '../dtos';
import {
  CreateProjectResponse,
  GetLatestProjectsResponse,
  GetRecentProjectsResponse,
  GetProjectsResponse,
  GetProjectByIdResponse,
  DeleteProjectResponse,
  SoftDeleteProjectResponse,
  EditProjectResponse,
} from './project.response';

export type IProjectService = {
  createProject: (
    project: CreateProjectDto,
    userId: string,
  ) => Promise<CreateProjectResponse>;
  getProjects: (userId: string, q: string) => Promise<GetProjectsResponse>;
  getLatestProjects: (userId: string) => Promise<GetLatestProjectsResponse>;
  getRecentProjects: (userId: string) => Promise<GetRecentProjectsResponse>;
  getProjectById: (
    projectId: string,
    userId: string,
  ) => Promise<GetProjectByIdResponse>;
  deleteProject: (
    projectId: string,
    userId: string,
  ) => Promise<DeleteProjectResponse>;
  softDeleteProject: (
    projectId: string,
    userId: string,
  ) => Promise<SoftDeleteProjectResponse>;
  editProject: (
    projectId: string,
    project: EditProjectDto,
    userId: string,
  ) => Promise<EditProjectResponse>;
};
