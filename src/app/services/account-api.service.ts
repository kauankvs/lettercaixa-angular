import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  URL: string = Settings.apiAdress + '/api/profile/'

  constructor(private client: HttpClient) { }

  registerRequest(data: FormData): Observable<Account> {
    const URL_REGISTER: string = this.URL + 'register';
    return this.client.post<Account>(URL_REGISTER, data);
  }

  loginRequest(data: FormData): Observable<string> {
    const URL_LOGIN: string = this.URL + 'login';
    return this.client.post<string>(URL_LOGIN, data, { responseType: 'text' as 'json' });
  }

  getAccountRequest(token: string): Observable<Account> {
    let auth: string = "Bearer " + token;
    const URL_MY_ACCOUNT: string = this.URL + 'my-account';
    return this.client.get<Account>(URL_MY_ACCOUNT, { withCredentials: true, headers: { 'Authorization': auth } });
  }

  getAllAccounts(): Observable<Account[]> {
    const URL_ALL_ACCOUNTS: string = this.URL + 'all';
    return this.client.get<Account[]>(URL_ALL_ACCOUNTS);
  }

  getAccountsByName(name: string): Observable<Account[]> {
    const URL_GET_ACCOUNTS_BY_NAME: string = this.URL + 'profiles/' + name;
    return this.client.get<Account[]>(URL_GET_ACCOUNTS_BY_NAME);
  }

  addOrUpdatePicture(pictureUrl: string, token: string): Observable<Account> {
    let auth: string = "Bearer " + token;
    const URL_ADD_OR_UPDATE_PICTURE: string = this.URL + 'profile-picture'
    const body = JSON.stringify(pictureUrl);
    return this.client.put<Account>(URL_ADD_OR_UPDATE_PICTURE, body, { withCredentials: true, headers: { 'Authorization': auth, 'Content-Type': 'application/json' } });
  }
}
