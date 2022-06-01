import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { updateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// entry point 
@Controller('movies') // 기본적인 url -> ' localhost:3000/movies ' 이렇게 라우트 설정
export class MoviesController {
  // 서비스에 접근하는 방법 (요청해야함)
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // get보다 아래에 있으면 nest는 search를 id로 판단함 ( :id ) 보다 위에 있기
  // query 쓰는 방법
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `search ${searchingYear}`;
  }

  // 이런식으로 params 전달해줌
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  // 이런식으로 body 데이터 받아오면 됨 ( req.body랑 같다고 보기 )
  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  // put은 모든 리소스 업데이트 따라서 우리는 patch ( 일부분만 업데이트 할때 ) 때에 맞춰 쓰기
  // 이렇게 2개 이상 데이터도 받아올 수 있음
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: updateMovieDTO) {
    // return `update movie with id: ${movieId}`;
    return this.moviesService.update(movieId, updateData);
  }
}
