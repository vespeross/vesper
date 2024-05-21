import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  IUserService,
  createUserResponse,
  getUser,
  isNewInstallResponse,
} from './interfaces';
import { CreateUserDto } from './dtos';
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

  async isNewInstall(): Promise<isNewInstallResponse> {
    const users = await this.prismaService.user.findMany();
    return {
      newInstall: users.length === 0,
    };
  }

  async getUser(cid: string): Promise<getUser> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          cid,
        },
      });
      delete user.password_hash;
      return {
        user,
      };
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
