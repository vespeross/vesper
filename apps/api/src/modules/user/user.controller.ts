import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@/core/decorators/user.decorator';
import { IAuthPayload } from '../auth/interfaces';
import { InviteUserDto } from './dtos';
import { Public } from '@/core/decorators/public.decorator';

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

  @ApiQuery({
    name: 'token',
    required: true,
    type: String,
  })
  @Public()
  @Get('verify-invite')
  async verifyInvite(@Query('token') token: string) {
    return await this.userService.validateInviteToken(token);
  }
}
