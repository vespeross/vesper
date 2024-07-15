import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
// import { PrismaService } from '@/database/database.service';

@ApiTags('app')
@Controller({
  path: '/',
  version: VERSION_NEUTRAL,
})
export class AppController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    // private readonly prismaService: PrismaService,
  ) {}

  // @HealthCheck()
  // @Get('/health')
  // public async getHealth() {
  //   return this.healthCheckService.check([
  //     () => this.prismaService.isHealthy(),
  //   ]);
  // }
}
