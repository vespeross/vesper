import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { Transform } from 'class-transformer';
import { faker } from '@faker-js/faker';

export class UserLoginDto {
  @ApiProperty({
    description: 'User email',
    example: faker.internet.email(),
  })
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @ApiProperty({
    description: 'User password',
    example: faker.internet.password({
      prefix: 'Aa1@',
    }),
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
