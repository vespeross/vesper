import { CreateUserDto } from '../dtos';
import {
  createUserResponse,
  isNewInstallResponse,
  getUser,
} from './user.response';

export interface IUserService {
  createUser(payload: CreateUserDto): Promise<createUserResponse>;
  isNewInstall(): Promise<isNewInstallResponse>;
  getUser(cid: string): Promise<getUser>;
}
