import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  IAuthPayload,
  IAuthResponse,
  ITokenResponse,
  IAuthService,
} from './interfaces';
import { AcceptInviteDto, UserLoginDto } from './dtos';
import { HelperHashService, PrismaService } from '@/common/services';
import { CreateUserDto } from './dtos/create-user.dto';
import { TokenType } from '@/app/app.constants';

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

  public async login(userLoginDto: UserLoginDto): Promise<IAuthResponse> {
    const { email, password } = userLoginDto;
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    const match = await this.hashService.match(user.password_hash, password);
    if (!match) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    const { accessToken, refreshToken } = await this.generateTokens(user);
    delete user.password_hash;
    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  public async generateTokens(user: IAuthPayload): Promise<ITokenResponse> {
    console.log(user);
    console.log({
      accessTokenSecret: this.accessTokenSecret,
      refreshTokenSecret: this.refreshTokenSecret,
    });
    const accessToken = this.jwtService.sign(
      {
        cid: user.cid,
      },
      {
        expiresIn: this.accessTokenExp,
        secret: this.accessTokenSecret,
      },
    );
    const refreshToken = this.jwtService.sign(
      {
        cid: user.cid,
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

  public async verifyToken(
    token: string,
    type: TokenType,
  ): Promise<IAuthPayload> {
    try {
      const { payload } = this.jwtService.verify(token, {
        secret:
          type === TokenType.ACCESS
            ? this.accessTokenSecret
            : this.refreshTokenSecret,
      });
      return Promise.resolve(payload);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  public async signup(data: CreateUserDto): Promise<IAuthResponse> {
    const password_hash = await this.hashService.createHash(data.password);
    const userCount = await this.prismaService.user.count();
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: data.email,
          password_hash,
          role: userCount === 0 ? 'OWNER' : 'MEMBER',
        },
      });
      delete user.password_hash;
      const { accessToken, refreshToken } = await this.generateTokens(user);
      return {
        accessToken,
        refreshToken,
        user,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw new Error('Something went wrong');
    }
  }

  public async acceptInvite(data: AcceptInviteDto): Promise<IAuthResponse> {
    const { email } = await this.jwtService.verifyAsync(data.token, {
      secret: 'secret',
    });
    const invite = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!invite) {
      throw new UnauthorizedException('Invalid token');
    }
    if (invite.email !== data.email) {
      throw new UnauthorizedException('Invalid token');
    }
    return await this.signup(data);
  }
}
