import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

// export class updateMovieDTO {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

// 이러면 위랑 같은 코드 ( 필수적이지 않다는 opteional mark 까지 )
export class updateMovieDTO extends PartialType(CreateMovieDTO) {}
