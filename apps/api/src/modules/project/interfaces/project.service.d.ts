import { CreateProjectDto, EditProjectDto } from '../dtos';
import {
  CreateProjectResponse,
  GetLatestProjectsResponse,
  GetRecentProjectsResponse,
  GetProjectsResponse,
  GetProjectByIdResponse,
  GetProjectByNameResponse,
  DeleteProjectResponse,
  SoftDeleteProjectResponse,
  EditProjectResponse,
} from './project.response';

export type IProjectService = {
  createProject: (
    project: CreateProjectDto,
    userId: string,
  ) => Promise<CreateProjectResponse>;
  getAllProjects: (userId: string) => Promise<GetProjectsResponse>;
  getLatestProjects: (userId: string) => Promise<GetLatestProjectsResponse>;
  getRecentProjects: (userId: string) => Promise<GetRecentProjectsResponse>;
  getProjectById: (
    projectId: string,
    userId: string,
  ) => Promise<GetProjectByIdResponse>;
  getProjectByNames: (
    query: string,
    userId: string,
  ) => Promise<GetProjectByNameResponse>;
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
