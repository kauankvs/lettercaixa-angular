import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class LetterboxApiMovieService {
  URL: string = 'https://localhost:7278/api/'

  constructor(private client: HttpClient) { }

  registerRequest(data: FormData): Observable<Account> {
    const URL_REGISTER: string = this.URL + 'profile/register';
    return this.client.post<Account>(URL_REGISTER, data);
  }

  loginRequest(data: FormData): Observable<string> {
    const URL_LOGIN: string = this.URL + 'profile/login';
    return this.client.post<string>(URL_LOGIN, data, { responseType: 'text' as 'json' });
  }

  myAccountRequest(token: string): Observable<Account> {
    let auth: string = "Bearer " + token;
    const URL_MY_ACCOUNT: string = URL + 'profile/my-account';
    return this.client.get<Account>(URL_MY_ACCOUNT, { withCredentials: true, headers: { 'Authorizarion': auth } });
  }
}
