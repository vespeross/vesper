import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { faker } from '@faker-js/faker';

export class CreateProjectDto {
  @ApiProperty({
    description: 'project name',
    example: faker.company.name(),
  })
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  name: string;

  @ApiProperty({
    description: 'project description',
    example: faker.lorem.sentence(),
  })
  description: string;
}
