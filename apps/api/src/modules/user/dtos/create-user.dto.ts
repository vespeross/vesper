import { IsEmail, IsIn, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { Strategy } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User email',
    example: 'hi@jabed.dev',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'Password!1234',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    description: 'User strategy',
    example: 'LOCAL',
  })
  @IsIn([Strategy.LOCAL, Strategy.GOOGLE])
  strategy: Strategy;
}
