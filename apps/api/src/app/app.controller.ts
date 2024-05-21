import { Public } from '@/core/decorators/public.decorator';
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

  @Public()
  @Get('/health')
  public async getHealth() {
    return this.healthCheckService.check([
      () => this.prismaService.isHealthy(),
    ]);
  }

  @Public()
  @Get('/init')
  public async init() {
    return this.userService.isNewInstall();
  }
}
