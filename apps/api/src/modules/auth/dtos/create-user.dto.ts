import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { faker } from '@faker-js/faker';

export class CreateUserDto {
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
