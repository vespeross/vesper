import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { AuthUser } from '@/core/decorators/user.decorator';
import { IAuthPayload } from '../auth/interfaces';
import { CreateProjectDto } from './dtos';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async createProject(
    @AuthUser() user: IAuthPayload,
    @Body() body: CreateProjectDto,
  ) {
    return this.projectsService.createProject({
      project: body,
      userId: user.cid,
    });
  }
}
