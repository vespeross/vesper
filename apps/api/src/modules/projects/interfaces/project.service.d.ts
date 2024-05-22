import { CreateProjectDto } from '../dtos';
import { CreateProjectResponse } from './project.response';

export type IProjectService = {
  createProject: (
    project: CreateProjectDto,
    userId: string,
  ) => Promise<CreateProjectResponse>;
};
