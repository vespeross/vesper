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

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly hashService: HelperHashService,
  ) {}
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
    console.log({
      password,
      hash: user.password_hash,
    });
    console.log(this.hashService.match(password, user.password_hash));
    if (this.hashService.match(password, user.password_hash)) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const accessToken = this.jwtService.sign({ email });
    const refreshToken = this.jwtService.sign({ email }, { expiresIn: '7d' });
    delete user.password_hash;
    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  generateTokens(user: IAuthPayload): Promise<ITokenResponse> {
    throw new Error('Method not implemented.');
  }
  verifyToken(accessToken: string): Promise<IAuthPayload> {
    throw new Error('Method not implemented.');
  }
}
