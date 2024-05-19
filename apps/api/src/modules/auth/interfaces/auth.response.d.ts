import { UserWithoutPassword } from '@/types';

export type UserLoginResponse = {
  user: UserWithoutPassword;
  accessToken: string;
  refreshToken: string;
};
