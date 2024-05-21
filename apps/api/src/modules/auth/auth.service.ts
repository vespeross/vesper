import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  IAuthPayload,
  IAuthResponse,
  ITokenResponse,
  IAuthService,
} from './interfaces';
import { PrismaService } from '@/common/services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { HelperHashService } from '@/common/services/hash.service';
import { UserLoginDto } from './dtos';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService implements IAuthService {
  private readonly accessTokenSecret: string;
  private readonly refreshTokenSecret: string;
  private readonly accessTokenExp: string;
  private readonly refreshTokenExp: string;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly hashService: HelperHashService,
    private readonly configService: ConfigService,
  ) {
    this.accessTokenSecret = this.configService.get<string>(
      'auth.accessToken.secret',
    );
    this.refreshTokenSecret = this.configService.get<string>(
      'auth.refreshToken.secret',
    );
    this.accessTokenExp = this.configService.get<string>(
      'auth.accessToken.expirationTime',
    );
    this.refreshTokenExp = this.configService.get<string>(
      'auth.refreshToken.expirationTime',
    );
  }

  async login(userLoginDto: UserLoginDto): Promise<IAuthResponse> {
    const { email, password } = userLoginDto;
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (this.hashService.match(password, user.password_hash)) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { accessToken, refreshToken } = await this.generateTokens({
      cid: user.cid,
    });
    delete user.password_hash;
    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  generateTokens(user: IAuthPayload): Promise<ITokenResponse> {
    const accessToken = this.jwtService.sign(
      {
        payload: user.cid,
      },
      {
        expiresIn: this.accessTokenExp,
        secret: this.accessTokenSecret,
      },
    );
    const refreshToken = this.jwtService.sign(
      {
        payload: user.cid,
      },
      {
        expiresIn: this.refreshTokenExp,
        secret: this.refreshTokenSecret,
      },
    );
    return Promise.resolve({
      accessToken,
      refreshToken,
    });
  }
  verifyToken(accessToken: string): Promise<IAuthPayload> {
    return this.jwtService.verify(accessToken);
  }
}
