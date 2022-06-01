import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// 데코레이트 임 ( 클래스에 함수 기능 추가 )
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
