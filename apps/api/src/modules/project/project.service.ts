import {
  ConflictException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateProjectResponse,
  GetLatestProjectsResponse,
  GetProjectByIdResponse,
  GetRecentProjectsResponse,
  GetProjectByNameResponse,
  IProjectService,
  DeleteProjectResponse,
  SoftDeleteProjectResponse,
  GenericProjectResponse,
} from './interfaces';
import { CreateProjectDto, EditProjectDto } from './dtos';
import { PrismaService } from '@/common/services/prisma.service';

@Injectable()
export class ProjectService implements IProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createProject(
    project: CreateProjectDto,
    userId: string,
  ): Promise<CreateProjectResponse> {
    try {
      const existingProject = await this.prismaService.project.findFirst({
        where: {
          key: project.key,
        },
      });
      if (existingProject) {
        throw new ConflictException('Project already exists');
      }
      const createdProject = await this.prismaService.project.create({
        data: {
          key: project.key,
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

  public async getAllProjects(userId: string) {
    const projects = await this.prismaService.project.findMany({
      where: {
        ownerId: userId,
      },
    });
    return {
      projects,
    };
  }

  public async getProjectById(
    projectId: string,
    userId: string,
  ): Promise<GetProjectByIdResponse> {
    const project = await this.prismaService.project.findFirst({
      where: {
        cid: projectId,
        ownerId: userId,
      },
    });
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    return {
      project,
    };
  }

  public async getProjectByNames(
    query: string,
    userId: string,
  ): Promise<GetProjectByNameResponse> {
    const projects = await this.prismaService.project.findMany({
      where: {
        name: {
          contains: query,
        },
        ownerId: userId,
      },
    });
    return {
      projects,
    };
  }

  public async getLatestProjects(
    userId: string,
  ): Promise<GetLatestProjectsResponse> {
    const projects = await this.prismaService.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        ownerId: userId,
      },
      take: 10,
    });
    return {
      projects,
    };
  }

  public async getRecentProjects(
    userId: string,
  ): Promise<GetRecentProjectsResponse> {
    const projects = await this.prismaService.project.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
      where: {
        ownerId: userId,
      },
      take: 5,
    });
    return {
      projects,
    };
  }

  public async editProject(
    projectId: string,
    project: EditProjectDto,
    userId: string,
  ): Promise<GenericProjectResponse> {
    const existingProject = await this.prismaService.project.findFirst({
      where: {
        cid: projectId,
        ownerId: userId,
      },
    });
    if (!existingProject) {
      throw new NotFoundException('Project not found');
    }
    const updatedProject = await this.prismaService.project.update({
      where: {
        cid: projectId,
      },
      data: {
        name: project.name,
        description: project.description,
      },
    });
    return {
      project: updatedProject,
    };
  }

  public async deleteProject(
    projectId: string,
    userId: string,
  ): Promise<DeleteProjectResponse> {
    const project = await this.prismaService.project.findFirst({
      where: {
        cid: projectId,
        ownerId: userId,
      },
    });
    if (!project) {
      throw new HttpException('Project not found', 404);
    }
    await this.prismaService.project.delete({
      where: {
        cid: projectId,
      },
    });
    return {
      project,
    };
  }

  public async softDeleteProject(
    projectId: string,
    userId: string,
  ): Promise<SoftDeleteProjectResponse> {
    const project = await this.prismaService.project.findFirst({
      where: {
        cid: projectId,
        ownerId: userId,
      },
    });
    if (!project) {
      throw new HttpException('Project not found', 404);
    }
    await this.prismaService.project.update({
      where: {
        cid: projectId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
    return {
      project,
    };
  }
}
