// updateData, movieData에 타입을 부여하기 위해 DTO가 필요함

import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
