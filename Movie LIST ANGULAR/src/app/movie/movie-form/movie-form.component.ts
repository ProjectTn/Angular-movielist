import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { movieList } from '../mock-movie-list';
import { movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input() movie:movie|undefined 
  currentMovie : movie|undefined
  Genres : string[]|undefined
  id?: number|null
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _movieService: MovieService) { }

  ngOnInit(): void {
    this.Genres=this._movieService.getMovieGenreList()
    // const id: string|null=this._route.snapshot.paramMap.get('id')
    // if(id)
    //   this.currentMovie = this._movieService.getMovieById(+id)
  }

  hasGenre(genre: string):boolean|undefined{
      return this.movie?.Genre?.includes(genre)
  }

  selectGenre($event: Event, genre:string){
    const isCheked = ($event.target as HTMLInputElement).checked
    if(isCheked)
      this.movie?.Genre?.push(genre)
    else{
      const index=this.movie?.Genre?.indexOf(genre)
      if (index) 
        this.movie?.Genre?.splice(index,1)
      else
        this.movie?.Genre?.splice(0,1)
    }

  }
  onSubmit(){
    console.log('form  successfully submitted')
      this._router.navigate([`/movie/${this.movie?.Id}`])
  }

}

  


