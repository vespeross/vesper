import { CreateUserDto, InviteUserDto } from '../dtos';
import {
  createUserResponse,
  isNewInstallResponse,
  inviteUserResponse,
  getUser,
} from './user.response';

export interface IUserService {
  createUser(payload: CreateUserDto): Promise<createUserResponse>;
  isNewInstall(): Promise<isNewInstallResponse>;
  getUser(cid: string): Promise<getUser>;
  inviteUser(payload: InviteUserDto): Promise<inviteUserResponse>;
  validateToken(token: string, email: string): Promise<boolean>;
  validateInviteToken(token: string): Promise<boolean>;
  acceptInvite(token: string, password: string): Promise<void>;
}
