import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { movieList } from '../mock-movie-list';
import { movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies:undefined|movie[];
  
  constructor(private router: Router, private _movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this._movieService.getListMovie()
  }
  gotoMovieDetail(currentMovie: movie){

      this.router.navigate([`/movie/${currentMovie.Id}`])
  }

}
