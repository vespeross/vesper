import { UserWithoutPassword } from '@/types';

export type createUserResponse = {
  user: UserWithoutPassword;
};

export type isNewInstallResponse = {
  isNewInstall: boolean;
};

export type getUser = {
  user: UserWithoutPassword;
};

export type inviteUserResponse = {
  email: string;
  inviteLink: string;
};
