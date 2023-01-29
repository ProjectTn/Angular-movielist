import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  currentMovie: movie|undefined

  constructor(private router: Router, 
    private route:ActivatedRoute,
    private _movieService: MovieService) { }

  ngOnInit(): void {
    const id:string|null=this.route.snapshot.paramMap.get('id')
    if(id) 
      this.currentMovie=this._movieService.getMovieById(+id)
  } 
  gotoBack(){
    this.router.navigate([`/movielist`])
  }
  editMovie(id:number|undefined){
    this.router.navigate([`/movie/edit/${id}`])
  }
}
