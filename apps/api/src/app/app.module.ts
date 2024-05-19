import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configs from '@/config';
import { CommonModule } from '@/common/common.module';
import { PrismaService } from '@services/prisma.service';
import { TerminusModule } from '@nestjs/terminus';
import { CoreModule } from '@/core/core.module';

@Module({
  imports: [
    CommonModule,
    CoreModule,
    TerminusModule,
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '.env.local'],
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
