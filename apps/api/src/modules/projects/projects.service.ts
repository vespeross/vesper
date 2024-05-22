import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { CreateProjectResponse, IProjectService } from './interfaces';
import { CreateProjectDto } from './dtos';
import { PrismaService } from '@/common/services/prisma.service';

@Injectable()
export class ProjectsService implements IProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProject(
    project: CreateProjectDto,
    userId: string,
  ): Promise<CreateProjectResponse> {
    try {
      const existingProject = await this.prismaService.project.findFirst({
        where: {
          name: project.name,
        },
      });
      if (existingProject) {
        throw new ConflictException('Project already exists');
      }
      const createdProject = await this.prismaService.project.create({
        data: {
          name: project.name,
          description: project.description,
          owner: {
            connect: {
              cid: userId,
            },
          },
        },
      });
      return {
        project: createdProject,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
