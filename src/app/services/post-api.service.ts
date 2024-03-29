import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  URL: string = Settings.apiAdress + '/api/post/'

  constructor(private client: HttpClient) { }
  
  addAvaliationToMovie(post: Post, token: string | null): Observable<Post> { 
    let auth: string = "Bearer " + token;
    const URL_ADD = this.URL + 'add';
    return this.client.post<Post>(URL_ADD, post, { withCredentials: true, headers: { 'Authorization': auth } });
  }

  deleteAvaliationOfMovie(token: string, movieId: number | undefined): Observable<any> {
    let auth: string = "Bearer " + token;
    const URL_DELETE = this.URL + movieId;
    return this.client.delete(URL_DELETE, {body: movieId, withCredentials: true, headers: { 'Authorization': auth } });
  }

  getAllAvaliationsOfMovie(movieId: number | undefined): Observable<Post[]> {
    const URL_ALL_COMMENTS = this.URL + movieId;
    return this.client.get<Post[]>(URL_ALL_COMMENTS);
  }
}
