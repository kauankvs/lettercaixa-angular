import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'popular', component: MovieComponent, data: { search: 'popular' }},
  {path: 'now-playing', component: MovieComponent, data: { search: 'now_playing' }},
  {path: 'upcoming', component: MovieComponent, data: { search: 'upcoming' }},
  {path: 'artists', component: ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
