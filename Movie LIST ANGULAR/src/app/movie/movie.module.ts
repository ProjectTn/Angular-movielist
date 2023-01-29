import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieGenrePipe } from './movie-genre.pipe';
import { MovieDirective } from './movie.directive';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { MovieService } from './movie.service';
import { FormsModule } from '@angular/forms';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';


const routes: Routes = [
  {path:'movie/edit/:id', component:EditMovieComponent},
  {path:'movielist', component:MovieListComponent},
  {path:'movie/:id', component:MovieDetailComponent}
];

@NgModule({
  declarations: [MovieListComponent,
                MovieDetailComponent,
                MovieFormComponent,
                MovieGenrePipe,
                MovieDirective,
                EditMovieComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [MovieService]
})
export class MovieModule { }
