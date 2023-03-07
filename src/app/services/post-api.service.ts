import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  URL: string = 'https://localhost:7278/api/post'

  constructor(private client: HttpClient) { }
  
  addAvaliationToMovie(post: Post, token: string | null): Observable<any> { 
    let auth: string = "Bearer " + token;
    const URL_ADD = this.URL + 'add';
    return this.client.post<Post>(URL_ADD, post, { withCredentials: true, headers: { 'Authorization': auth } });
  }

  deleteAvaliationOfMovie(token: string, movieId: number | undefined): Observable<any> {
    let auth: string = "Bearer " + token;
    const URL_DELETE = this.URL + movieId;
    return this.client.delete(URL_DELETE, {body: movieId, withCredentials: true, headers: { 'Authorization': auth } });
  }
}
