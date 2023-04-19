import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AppComponent } from './app.component';
import { SeeAlsoMoviesComponent } from './components/see-also-movies/see-also-movies.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'popular', component: MovieComponent, data: { search: 'popular' }},
  {path: 'now-playing', component: MovieComponent, data: { search: 'now_playing' }},
  {path: 'upcoming', component: MovieComponent, data: { search: 'upcoming' }},
  {path: 'movie', component: MovieDetailComponent},
  {path: 'artists', component: ArtistComponent},
  {path: 'my-account', component: ProfileComponent},
  {path: 'favorites', component: FavoriteComponent},
  {path: 'search/:search', component: SearchMovieComponent},
  {path: 'see-also', component: SeeAlsoMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
