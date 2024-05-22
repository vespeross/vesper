import { CreateProjectDto } from '../dtos';
import {
  CreateProjectResponse,
  GetLatestProjectsResponse,
  GetRecentProjectsResponse,
  GetProjectsResponse,
} from './project.response';

export type IProjectService = {
  createProject: (
    project: CreateProjectDto,
    userId: string,
  ) => Promise<CreateProjectResponse>;
  getAllProjects: (userId: string) => Promise<GetProjectsResponse>;
  getLatestProjects: (userId: string) => Promise<GetLatestProjectsResponse>;
  getRecentProjects: (userId: string) => Promise<GetRecentProjectsResponse>;
};
