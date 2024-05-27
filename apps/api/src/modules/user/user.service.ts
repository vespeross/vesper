import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {
  IUserService,
  getUser,
  inviteUserResponse,
  isNewInstallResponse,
  validateInviteTokenResponse,
} from './interfaces';
import { InviteUserDto } from './dtos';
import { PrismaService } from '@/common/services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Invite } from '@prisma/client';

@Injectable()
export class UserService implements IUserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

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
      throw new UnauthorizedException('User not found');
    }
  }

  public async inviteUser(payload: InviteUserDto): Promise<inviteUserResponse> {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (userExists) {
      throw new ConflictException('User already exists');
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    const code = await this.jwtService.signAsync(
      {
        email: payload.email,
        otp,
      },
      {
        expiresIn: '7d',
        algorithm: 'HS256',
        secret: 'secret',
      },
    );
    await this.prismaService.invite.create({
      data: {
        email: payload.email,
        code,
      },
    });
    const inviteLink = `http://localhost:3000/invite?code=${code}`;
    return {
      email: payload.email,
      inviteLink,
    };
  }

  public async getInvites(): Promise<{
    invites: Invite[];
  }> {
    return {
      invites: await this.prismaService.invite.findMany(),
    };
  }

  public async validateInviteToken(
    token: string,
  ): Promise<validateInviteTokenResponse> {
    try {
      await this.jwtService.verifyAsync(token);
      return {
        isValid: true,
      };
    } catch (error) {
      return {
        isValid: false,
      };
    }
  }
}
