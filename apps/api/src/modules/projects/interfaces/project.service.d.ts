import { CreateProjectDto } from '../dtos';
import {
  CreateProjectResponse,
  GetLatestProjectsResponse,
  GetRecentProjectsResponse,
} from './project.response';

export type IProjectService = {
  createProject: (
    project: CreateProjectDto,
    userId: string,
  ) => Promise<CreateProjectResponse>;
  getLatestProjects: (userId: string) => Promise<GetLatestProjectsResponse>;
  getRecentProjects: (userId: string) => Promise<GetRecentProjectsResponse>;
};
