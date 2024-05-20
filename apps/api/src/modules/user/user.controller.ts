import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  public login(@Body() payload: CreateUserDto) {
    return this.userService.createUser(payload);
  }

  @Get()
  public getAllUsers() {
    return this.userService.getAllUsers();
  }
}
