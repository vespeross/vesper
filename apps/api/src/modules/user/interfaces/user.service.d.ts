import { CreateUserDto } from '../dtos';
import { createUserResponse, isNewInstallResponse } from './user.response';

export interface IUserService {
  createUser(payload: CreateUserDto): Promise<createUserResponse>;
  isNewInstall(): Promise<isNewInstallResponse>;
}
