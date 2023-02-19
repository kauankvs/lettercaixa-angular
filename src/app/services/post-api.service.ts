import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  URL: string = 'https://localhost:7278/api/post'

  constructor(private client: HttpClient) { }
  
  addAvaliationToMovie(post: FormData, token: string): Observable<any> { 
    let auth: string = "Bearer " + token;
    const URL_ADD = this.URL + 'add';
    return this.client.post(URL_ADD, post, { withCredentials: true, headers: { 'Authorization': auth } });
  }

  deleteAvaliationOfMovie(token: string, movieId: number): Observable<any> {
    let auth: string = "Bearer " + token;
    const URL_DELETE = this.URL + movieId;
    return this.client.delete(URL_DELETE, {body: movieId, withCredentials: true, headers: { 'Authorization': auth } });
  }
}
