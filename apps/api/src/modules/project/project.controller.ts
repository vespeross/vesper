import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { AuthUser } from '@/core/decorators/user.decorator';
import { IAuthPayload } from '../auth/interfaces';
import { CreateProjectDto, EditProjectDto } from './dtos';

@ApiTags('project')
@Controller({
  path: 'project',
  version: '1',
})
export class ProjectController {
  constructor(private readonly projectsService: ProjectService) {}

  @Post('create')
  async createProject(
    @AuthUser() user: IAuthPayload,
    @Body() body: CreateProjectDto,
  ) {
    return this.projectsService.createProject(body, user.cid);
  }

  @ApiQuery({
    name: 'q',
    required: false,
    type: String,
  })
  @Get()
  async getProjects(@AuthUser() user: IAuthPayload, q: string) {
    return this.projectsService.getProjects(user.cid, q);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @Get(':id')
  async getProjectById(@AuthUser() user: IAuthPayload, id: string) {
    return this.projectsService.getProjectById(id, user.cid);
  }

  @Get('latest')
  async getLatestProjects(@AuthUser() user: IAuthPayload) {
    return this.projectsService.getLatestProjects(user.cid);
  }

  @Get('recent')
  async getRecentProjects(@AuthUser() user: IAuthPayload) {
    return this.projectsService.getRecentProjects(user.cid);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @Patch('edit/:id')
  async editProject(
    @AuthUser() user: IAuthPayload,
    @Body() body: EditProjectDto,
    id: string,
  ) {
    return this.projectsService.editProject(id, body, user.cid);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @Delete('permanent-delete/:cid')
  async deleteProject(@Param('cid') cid: string) {
    return this.projectsService.deleteProject(cid);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @Delete(':cid')
  async softDeleteProject(@Param('cid') cid: string) {
    return this.projectsService.softDeleteProject(cid);
  }
}
