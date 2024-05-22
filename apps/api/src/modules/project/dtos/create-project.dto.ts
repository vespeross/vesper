import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { faker } from '@faker-js/faker';

export class CreateProjectDto {
  @ApiProperty({
    description: 'project id',
    example: faker.word.noun(),
  })
  @IsNotEmpty()
  @IsString()
  key: string;

  @ApiProperty({
    description: 'project name',
    example: faker.company.name(),
  })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  name: string;

  @ApiProperty({
    description: 'project description',
    example: faker.lorem.sentence(),
  })
  description: string;
}
