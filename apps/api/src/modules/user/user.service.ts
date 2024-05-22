import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  IUserService,
  createUserResponse,
  getUser,
  inviteUserResponse,
  isNewInstallResponse,
} from './interfaces';
import { CreateUserDto, InviteUserDto } from './dtos';
import { PrismaService } from '@/common/services/prisma.service';
import { HelperHashService } from '@/common/services/hash.service';

@Injectable()
export class UserService implements IUserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashService: HelperHashService,
  ) {}
  async createUser(payload: CreateUserDto): Promise<createUserResponse> {
    const { email, password } = payload;
    const password_hash = await this.hashService.createHash(password);
    const userCount = await this.prismaService.user.count();
    try {
      const user = await this.prismaService.user.create({
        data: {
          email,
          password_hash,
          role: userCount === 0 ? 'OWNER' : 'MEMBER',
        },
      });
      delete user.password_hash;
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
      isNewInstall: users.length === 0,
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
  acceptInvite(token: string, password: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  validateInviteToken(token: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  validateToken(token: string, email: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  public async inviteUser(payload: InviteUserDto): Promise<inviteUserResponse> {
    const otp = Math.random().toString(36).substring(2, 12);
    const hashedCode = await this.hashService.createHash(
      `${otp}+${payload.email}`,
    );
    await this.prismaService.invite.create({
      data: {
        email: payload.email,
        code: hashedCode,
      },
    });
    const inviteLink = `http://localhost:3000/invite?code=${hashedCode}`;
    return {
      email: payload.email,
      inviteLink,
    };
  }
}
