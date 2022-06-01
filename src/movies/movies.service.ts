import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { updateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id); // +id === parseInt(id)
    if (!movie) {
      // 줘NotFoundException = id 값을 잘못 줬을떄 에러 메세지 표시
      throw new NotFoundException(`Movie With Id ${id} not found `);
    }
    return movie;
  }

  deleteOne(id: number) {
    // getOne이 에러가 없으니까 괜찮음, 해당 데이터가 없음을 알 수 있으므로
    this.getOne(id);
    this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: updateMovieDTO) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
