import { UserWithoutPassword } from '@/types';

export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokenResponse {
  user: UserWithoutPassword;
}

export interface IAuthPayload {
  cid: string;
}
