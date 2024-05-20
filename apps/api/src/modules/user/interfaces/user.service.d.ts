import { CreateUserDto } from '../dtos';
import { createUserResponse, getAllUsersResponse } from './user.response';

export interface IUserService {
  createUser(payload: CreateUserDto): Promise<createUserResponse>;
  getAllUsers(): Promise<getAllUsersResponse>;
}
