import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  key: string = 'Token';

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.key, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  async removeTokenAfterExpirationAsync(): Promise<void> {
    setTimeout(() => { localStorage.removeItem(this.key); }, 8);
  }

  removeToken(): void {
    localStorage.removeItem(this.key);
  }
}
