import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@/core/decorators/user.decorator';
import { IAuthPayload } from '../auth/interfaces';

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
}
