import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../interfaces/favorite';
import { ProfileMovie } from '../interfaces/profile-movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService {

  URL: string = 'https://localhost:7278/api/favorites';

  constructor(private client: HttpClient) { }

  addMovieToFavorites(movie: ProfileMovie, token: string | null) {
    let auth: string = "Bearer " + token;
    const URL_ADD = this.URL + '/add';
    return this.client.post(URL_ADD, movie,{ withCredentials: true, headers: { 'Authorization': auth } });
  }

  deleteMovieFromFavorites(movie: ProfileMovie, token: string | null) {
    let auth: string = "Bearer " + token; 
    const URL_DELETE = this.URL + '/delete';
    return this.client.delete(URL_DELETE, {body: movie, withCredentials: true, headers: { 'Authorization': auth } });
  }

  getProfileFavoriteMovies(token: string | null): Observable<Favorite> {
    let auth: string = "Bearer " + token; 
    const URL_PROFILE_FAV_MOVIES = this.URL + '/profile';
    return this.client.get<Favorite>(URL_PROFILE_FAV_MOVIES, { withCredentials: true, headers: { 'Authorization': auth } });
  }
  
}
