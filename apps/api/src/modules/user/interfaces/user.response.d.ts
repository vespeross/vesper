import { UserWithoutPassword } from '@/types';

export type createUserResponse = {
  user: UserWithoutPassword;
};

export type getAllUsersResponse = {
  length: number;
  users: UserWithoutPassword[];
};
