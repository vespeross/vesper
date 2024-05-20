import { UserService } from '@/modules/user/user.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheckService } from '@nestjs/terminus';
import { PrismaService } from '@services/prisma.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  @Get('/health')
  public async getHealth() {
    return this.healthCheckService.check([
      () => this.prismaService.isHealthy(),
    ]);
  }

  @Get('/init')
  public async init() {
    return this.userService.isNewInstall();
  }
}
