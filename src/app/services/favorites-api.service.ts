import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService {

  URL: string = 'https://localhost:7278/api/favorites';

  constructor(private client: HttpClient) { }

  addMovieToFavorites(movieId: number, token: string) {
    let auth: string = "Bearer " + token;
    const URL_ADD = this.URL + '/add';
    this.client.put(URL_ADD, movieId,{ withCredentials: true, headers: { 'Authorization': auth } });
  }

  deleteMovieFromFavorites(movieId: number, token: string) {
    let auth: string = "Bearer " + token; 
    const URL_DELETE = this.URL + '/delete';
    this.client.delete(URL_DELETE, {body: movieId, withCredentials: true, headers: { 'Authorization': auth } });
  }
  
}
