import { CreateUserDto } from '../dtos';
import { createUserResponse } from './user.response';

export interface IUserService {
  createUser(payload: CreateUserDto): Promise<createUserResponse>;
}
