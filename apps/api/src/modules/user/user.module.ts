import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '@/common/services/prisma.service';
import { HelperHashService } from '@/common/services/hash.service';

@Module({
  providers: [UserService, PrismaService, HelperHashService],
  controllers: [UserController],
})
export class UserModule {}
