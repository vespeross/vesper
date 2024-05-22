import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
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

  @Get()
  async getProjects(@AuthUser() user: IAuthPayload) {
    return this.projectsService.getAllProjects(user.cid);
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

  @ApiParam({
    name: 'query',
    required: true,
    type: String,
  })
  @Get('query/:query')
  async getProjectByName(@AuthUser() user: IAuthPayload, query: string) {
    return this.projectsService.getProjectByNames(query, user.cid);
  }

  @Get('latest')
  async getLatestProjects(@AuthUser() user: IAuthPayload) {
    return this.projectsService.getLatestProjects(user.cid);
  }

  @Get('recent')
  async getRecentProjects(@AuthUser() user: IAuthPayload) {
    return this.projectsService.getRecentProjects(user.cid);
  }

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
  @Delete('permanent-delete/:id')
  async deleteProject(@AuthUser() user: IAuthPayload, id: string) {
    return this.projectsService.deleteProject(id, user.cid);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @Delete('delete/:id')
  async softDeleteProject(@AuthUser() user: IAuthPayload, id: string) {
    return this.projectsService.softDeleteProject(id, user.cid);
  }
}
