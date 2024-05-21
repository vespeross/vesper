import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '@/common/services/prisma.service';
import { HelperHashService } from '@/common/services/hash.service';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey',
    }),
  ],
  providers: [AuthService, UserService, PrismaService, HelperHashService],
  controllers: [AuthController],
})
export class AuthModule {}
