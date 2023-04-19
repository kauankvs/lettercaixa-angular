import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService {

  URL: string = 'https://localhost:7278/api/favorites';

  constructor(private client: HttpClient) { }

  addMovieToFavorites(movieId: number | null, token: string | null) {
    let auth: string = "Bearer " + token;
    const URL_ADD = this.URL + '/add';
    return this.client.post(URL_ADD, movieId,{ withCredentials: true, headers: { 'Authorization': auth } });
  }

  deleteMovieFromFavorites(movieId: number, token: string | null): Observable<any> {
    let auth: string = "Bearer " + token; 
    const URL_DELETE = this.URL + '/delete';
    return this.client.delete(URL_DELETE, {body: movieId, withCredentials: true, headers: { 'Authorization': auth } });
  }

  getProfileFavoriteMovies(token: string | null): Observable<number[]> {
    let auth: string = "Bearer " + token; 
    const URL_PROFILE_FAV_MOVIES = this.URL + '/profile';
    return this.client.get<number[]>(URL_PROFILE_FAV_MOVIES, { withCredentials: true, headers: { 'Authorization': auth } });
  }
  
}
