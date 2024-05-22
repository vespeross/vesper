import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dtos';
import { Public } from '@/core/decorators/public.decorator';
import { AuthJwtRefreshGuard } from './guards/jwt.refresh.guard';
import { AuthUser } from '@/core/decorators/user.decorator';
import { IAuthPayload } from './interfaces';

@ApiTags('auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Post('login')
  public login(@Body() payload: UserLoginDto) {
    return this.authService.login(payload);
  }

  @Public()
  @Post('signup')
  public signup(@Body() payload: CreateUserDto) {
    return this.userService.createUser(payload);
  }

  @Public()
  @UseGuards(AuthJwtRefreshGuard)
  @Get('refresh')
  public refresh(@AuthUser() user: IAuthPayload) {
    return this.authService.generateTokens({
      cid: user.cid,
    });
  }
}
