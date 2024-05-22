import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@/core/decorators/user.decorator';
import { IAuthPayload } from '../auth/interfaces';
import { InviteUserDto } from './dtos';

@ApiTags('user')
@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async get(@AuthUser() user: IAuthPayload) {
    return await this.userService.getUser(user.cid);
  }

  @Post('invite')
  async invite(@Body() payload: InviteUserDto) {
    return await this.userService.inviteUser(payload);
  }
}
