import { InviteUserDto } from '../dtos';
import {
  isNewInstallResponse,
  inviteUserResponse,
  getUser,
  acceptInviteResponse,
  validateInviteTokenResponse,
} from './user.response';

export interface IUserService {
  isNewInstall(): Promise<isNewInstallResponse>;
  getUser(cid: string): Promise<getUser>;
  inviteUser(payload: InviteUserDto): Promise<inviteUserResponse>;
  validateInviteToken(token: string): Promise<validateInviteTokenResponse>;
  acceptInvite(token: string, password: string): Promise<acceptInviteResponse>;
}
