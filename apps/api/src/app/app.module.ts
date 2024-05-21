import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configs from '@/config';
import { CommonModule } from '@/common/common.module';
import { PrismaService } from '@services/prisma.service';
import { TerminusModule } from '@nestjs/terminus';
import { CoreModule } from '@/core/core.module';
import { UserModule } from '@/modules/user/user.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { UserService } from '@/modules/user/user.service';

@Module({
  imports: [
    CommonModule,
    UserModule,
    AuthModule,
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
  providers: [PrismaService, UserService],
})
export class AppModule {}
