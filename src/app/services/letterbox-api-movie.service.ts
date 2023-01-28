import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterboxApiMovieService {
  URL: string = 'https://localhost:7278/api'

  constructor(private client: HttpClient) { }

  registerRequest(data: FormData): Observable<any> {
    const URL_REGISTER: string = URL + 'profile/register';
    return this.client.post(URL_REGISTER, data);
  }

  loginRequest(data: FormData): Observable<any> {
    const URL_LOGIN: string = URL + 'profile/login';
    return this.client.post(URL_LOGIN, data);
  }

  myAccountRequest(token: string): Observable<any> {
    let auth: string = "Bearer " + token;
    const URL_MY_ACCOUNT: string = URL + 'profile/my-account';
    return this.client.get(URL_MY_ACCOUNT, { withCredentials: true, headers: { 'Authorizarion': auth } });
  }
}
