import { Injectable, NotFoundException } from '@nestjs/common';
import {
  IUserService,
  acceptInviteResponse,
  getUser,
  inviteUserResponse,
  isNewInstallResponse,
  validateInviteTokenResponse,
} from './interfaces';
import { InviteUserDto } from './dtos';
import { PrismaService } from '@/common/services/prisma.service';
import { HelperHashService } from '@/common/services/hash.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService implements IUserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashService: HelperHashService,
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
      throw new NotFoundException('User not found');
    }
  }

  public async inviteUser(payload: InviteUserDto): Promise<inviteUserResponse> {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const code = await this.jwtService.signAsync(
      {
        email: payload.email,
        otp,
      },
      {
        expiresIn: '7d',
        algorithm: 'HS256',
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

  public async acceptInvite(
    token: string,
    password: string,
  ): Promise<acceptInviteResponse> {
    const { email } = await this.jwtService.verifyAsync(token);
    const password_hash = await this.hashService.createHash(password);
    const user = await this.prismaService.user.create({
      data: {
        email,
        password_hash,
        role: 'MEMBER',
      },
    });
    delete user.password_hash;
    return {
      user,
    };
  }
}
