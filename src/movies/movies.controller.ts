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

// entry point 
@Controller('movies') // 기본적인 url -> ' localhost:3000/movies ' 이렇게 라우트 설정
export class MoviesController {
  @Get()
  getAll() {
    return 'This is movie';
  }

  // get보다 아래에 있으면 nest는 search를 id로 판단함 ( :id ) 보다 위에 있기
  // query 쓰는 방법
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `search ${searchingYear}`;
  }

  // 이런식으로 params 전달해줌
  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This is one movie with id: ${movieId}`;
  }

  // 이런식으로 body 데이터 받아오면 됨 ( req.body랑 같다고 보기 )
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
    //return 'this will create a movie';
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: string) {
    return `delete movie with id: ${movieId}`;
  }

  // put은 모든 리소스 업데이트 따라서 우리는 patch ( 일부분만 업데이트 할때 ) 때에 맞춰 쓰기
  // 이렇게 2개 이상 데이터도 받아올 수 있음
  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    // return `update movie with id: ${movieId}`;
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
