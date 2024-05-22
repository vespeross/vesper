import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configs from '@/config';
import { TerminusModule } from '@nestjs/terminus';
import { CoreModule } from '@/core/core.module';
import { CommonModule } from '@/common/common.module';
import { AuthModule, ProjectModule, UserModule } from '@/modules';
import { PrismaService } from '@services/prisma.service';
import { UserService } from '@/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    CommonModule,
    UserModule,
    AuthModule,
    ProjectModule,
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
  providers: [PrismaService, UserService, JwtService],
})
export class AppModule {}
