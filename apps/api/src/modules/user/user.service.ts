import { ConflictException, Injectable } from '@nestjs/common';
import { IUserService } from './interfaces/user.service';
import { CreateUserDto } from './dtos';
import { createUserResponse } from './interfaces/user.response';
import { PrismaService } from '@/common/services/prisma.service';
import { HelperHashService } from '@/common/services/hash.service';

@Injectable()
export class UserService implements IUserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashService: HelperHashService,
  ) {}
  async createUser(payload: CreateUserDto): Promise<createUserResponse> {
    const { email, password, strategy } = payload;
    try {
      const user = await this.prismaService.user.create({
        data: {
          email,
          password_hash: this.hashService.createHash(password),
          strategy,
        },
        select: {
          cid: true,
          email: true,
          strategy: true,
        },
      });
      return {
        user,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw new Error('Something went wrong');
    }
  }
}
