import { Injectable } from '@angular/core';
import { movieList } from './mock-movie-list';
import { movie } from './models/movie';
import { MovieDirective } from './movie.directive';

@Injectable()
export class MovieService {

  getListMovie():movie[]{
    return movieList
  }

  getMovieById(id: number):movie|undefined{
    return movieList.find(movie=>movie.Id===id)
  }

  getMovieGenreList():string[] {
    return ["Action", "Adventure", "Fantasy","Horror", "Comedy", "Thriller", "Drama", "History", "Biography"]
  }
}
