import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaService } from '@/common/services/prisma.service';

@Module({
  providers: [ProjectsService, PrismaService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
