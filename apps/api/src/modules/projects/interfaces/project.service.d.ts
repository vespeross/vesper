import { CreateProjectDto } from '../dtos';
import { CreateProjectResponse } from './project.response';

export type IProjectService = {
  createProject: ({
    project,
    userId,
  }: {
    project: CreateProjectDto;
    userId: string;
  }) => Promise<CreateProjectResponse>;
};
