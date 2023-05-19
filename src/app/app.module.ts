import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './components/artist/artist.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { SeeAlsoMoviesComponent } from './components/see-also-movies/see-also-movies.component';
import { CommentaryComponent } from './components/commentary/commentary.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { CommunityComponent } from './components/community/community.component';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { PictureFormComponent } from './components/picture-form/picture-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    LoginComponent,
    RegisterComponent,
    MovieComponent,
    ArtistComponent,
    MovieDetailComponent,
    ProfileComponent,
    FavoriteComponent,
    SearchMovieComponent,
    SeeAlsoMoviesComponent,
    CommentaryComponent,
    HomeComponent,
    ArtistDetailComponent,
    CommunityComponent,
    SearchProfileComponent,
    PictureFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
