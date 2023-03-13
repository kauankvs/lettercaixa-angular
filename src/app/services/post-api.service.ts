import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInput } from '../interfaces/post-input';
import { PostReturn } from '../interfaces/post-return';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  URL: string = 'https://localhost:7278/api/post'

  constructor(private client: HttpClient) { }
  
  addAvaliationToMovie(post: PostInput, token: string | null): Observable<PostInput> { 
    let auth: string = "Bearer " + token;
    const URL_ADD = this.URL + 'add';
    return this.client.post<PostInput>(URL_ADD, post, { withCredentials: true, headers: { 'Authorization': auth } });
  }

  deleteAvaliationOfMovie(token: string, movieId: number | undefined): Observable<any> {
    let auth: string = "Bearer " + token;
    const URL_DELETE = this.URL + movieId;
    return this.client.delete(URL_DELETE, {body: movieId, withCredentials: true, headers: { 'Authorization': auth } });
  }

  getAllAvaliationsOfMovie(movieId: number | undefined): Observable<PostReturn[]> {
    const URL_ALL_COMMENTS = this.URL + movieId;
    return this.client.get<PostReturn[]>(URL_ALL_COMMENTS);
  }
}
