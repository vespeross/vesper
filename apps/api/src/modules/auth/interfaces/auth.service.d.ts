import { UserLoginDto } from '../dtos';
import { IAuthPayload, IAuthResponse, ITokenResponse } from './auth.response';

export type IAuthService = {
  verifyToken(accessToken: string): Promise<IAuthPayload>;
  generateTokens(user: IAuthPayload): Promise<ITokenResponse>;
  login(data: UserLoginDto): Promise<IAuthResponse>;
  signup(data: UserLoginDto): Promise<IAuthResponse>;
};
