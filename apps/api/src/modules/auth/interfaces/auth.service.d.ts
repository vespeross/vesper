import { UserLoginDto } from '../dtos';
import { UserLoginResponse } from './auth.response';

export type IAuthService = {
  login: (payload: UserLoginDto) => Promise<UserLoginResponse>;
};
