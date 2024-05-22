import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { AuthUser } from '@/core/decorators/user.decorator';
import { IAuthPayload } from '../auth/interfaces';
import { CreateProjectDto } from './dtos';

@ApiTags('project')
@Controller({
  path: 'project',
  version: '1',
})
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('create')
  async createProject(
    @AuthUser() user: IAuthPayload,
    @Body() body: CreateProjectDto,
  ) {
    return this.projectsService.createProject(body, user.cid);
  }

  @Get('latest')
  async getLatestProjects(@AuthUser() user: IAuthPayload) {
    return this.projectsService.getLatestProjects(user.cid);
  }

  @Get('recent')
  async getRecentProjects(@AuthUser() user: IAuthPayload) {
    return this.projectsService.getRecentProjects(user.cid);
  }
}
