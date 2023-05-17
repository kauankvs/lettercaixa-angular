import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  URL: string = 'https://localhost:7278/api/profile/'

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
    const URL_ALL_ACCOUNTS: string = this.URL;
    return this.client.get<Account[]>(URL_ALL_ACCOUNTS);
  }

  getAccountsByName(name: string): Observable<Account[]> {
    const URL_GET_ACCOUNTS_BY_NAME: string = this.URL + 'profiles/' + name;
    return this.client.get<Account[]>(URL_GET_ACCOUNTS_BY_NAME);
  }
}
