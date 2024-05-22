import { UserWithoutPassword } from '@/types';

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

export type validateInviteTokenResponse = {
  isValid: boolean;
};
