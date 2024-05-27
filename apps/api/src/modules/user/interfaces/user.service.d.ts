import { InviteUserDto } from '../dtos';
import {
  isNewInstallResponse,
  inviteUserResponse,
  getUser,
  validateInviteTokenResponse,
} from './user.response';

export interface IUserService {
  isNewInstall(): Promise<isNewInstallResponse>;
  getUser(cid: string): Promise<getUser>;
  inviteUser(payload: InviteUserDto): Promise<inviteUserResponse>;
  getInvites(): Promise<{
    invites: Invite[];
  }>;
  validateInviteToken(token: string): Promise<validateInviteTokenResponse>;
}
