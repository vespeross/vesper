import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto, AcceptInviteDto, CreateUserDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';
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
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  public login(@Body() payload: UserLoginDto) {
    return this.authService.login(payload);
  }

  @Public()
  @Post('signup')
  public signup(@Body() payload: CreateUserDto) {
    return this.authService.signup(payload);
  }

  @Public()
  @UseGuards(AuthJwtRefreshGuard)
  @Get('refresh')
  public refresh(@AuthUser() user: IAuthPayload) {
    return this.authService.generateTokens(user);
  }

  @Public()
  @Post('accept-invite')
  public acceptInvite(@Body() payload: AcceptInviteDto) {
    return this.authService.acceptInvite(payload);
  }
}
