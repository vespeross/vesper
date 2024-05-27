import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CreateDatabaseDto } from './dtos';
import { ApiQuery } from '@nestjs/swagger';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @ApiQuery({
    name: 'cid',
    required: false,
    type: String,
  })
  @Get(':cid')
  async getDatabases(@Query('cid') cid: string) {
    return this.databaseService.getDatabase(cid);
  }

  @Post()
  async createDatabase(@Body() body: CreateDatabaseDto) {
    return this.databaseService.createDatabase(body);
  }
}
