import { PrismaService } from '@/common/services';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GetDatabasesResponse, IDatabaseService } from './interfaces';
import { CreateDatabaseDto } from './dtos';

@Injectable()
export class DatabaseService implements IDatabaseService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createDatabase(
    input: CreateDatabaseDto,
  ): Promise<CreateDatabaseDto> {
    const database = await this.prismaService.database.create({
      data: {
        name: input.name,
        type: input.type,
        project: {
          connect: {
            cid: input.projectId,
          },
        },
      },
    });
    return database;
  }

  public async getDatabase(cid: string): Promise<GetDatabasesResponse> {
    if (!cid) {
      return {
        databases: await this.prismaService.database.findMany(),
      };
    }
    const database = await this.prismaService.database.findFirst({
      where: {
        cid,
      },
    });
    if (!database) {
      throw new NotFoundException('Database not found');
    }
    return {
      databases: database,
    };
  }
}
