import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '@/common/services/prisma.service';
import { HelperHashService } from '@/common/services/hash.service';
import { UserService } from '../user/user.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthJwtAccessGuard } from './guards/jwt.access.guard';
import { PassportModule } from '@nestjs/passport';
import { AuthJwtAccessStrategy } from './strategies/jwt.access.stratagy';
import { AuthJwtRefreshStrategy } from './strategies/jwt.refresh.strategy';

@Module({
  imports: [
    PassportModule.register({
      session: false,
    }),
    JwtModule.register({}),
  ],
  providers: [
    AuthService,
    UserService,
    PrismaService,
    HelperHashService,
    AuthJwtAccessStrategy,
    AuthJwtRefreshStrategy,
    {
      provide: APP_GUARD,
      useClass: AuthJwtAccessGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
