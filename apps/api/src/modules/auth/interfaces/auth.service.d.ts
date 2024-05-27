import { TokenType } from '@/app/app.constants';
import { UserLoginDto, AcceptInviteDto, CreateUserDto } from '../dtos';
import { IAuthPayload, IAuthResponse, ITokenResponse } from './auth.response';

export type IAuthService = {
  verifyToken(token: string, type: TokenType): Promise<IAuthPayload>;
  generateTokens(user: IAuthPayload): Promise<ITokenResponse>;
  login(data: UserLoginDto): Promise<IAuthResponse>;
  signup(data: CreateUserDto): Promise<IAuthResponse>;
  acceptInvite(data: AcceptInviteDto): Promise<IAuthResponse>;
};
