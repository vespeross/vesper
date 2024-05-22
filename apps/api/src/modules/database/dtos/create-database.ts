import { IsNotEmpty, IsIn, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { faker } from '@faker-js/faker';
import { DatabaseType } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({
    description: 'database name',
    example: faker.commerce.productName(),
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  name: string;

  @ApiProperty({
    description: 'database type',
    example: DatabaseType.POSTGRES,
  })
  @IsNotEmpty()
  @IsIn([DatabaseType.POSTGRES, DatabaseType.MYSQL, DatabaseType.MONGODB])
  type: DatabaseType;
}
