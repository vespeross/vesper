import { UserWithoutPassword } from '@/types';

export type createUserResponse = {
  user: UserWithoutPassword;
};

export type isNewInstallResponse = {
  newInstall: boolean;
};

export type getUser = {
  user: UserWithoutPassword;
};
