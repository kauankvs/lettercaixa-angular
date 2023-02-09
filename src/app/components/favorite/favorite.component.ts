import { Component, OnInit } from '@angular/core';
import { Route, Router, withHashLocation } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { AccountApiService } from 'src/app/services/account-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  account?: Account;
  
  constructor(private service: AccountApiService, private storageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    let token = this.storageService.getToken();
    this.tryToLogInAccount(token);
    this.storageService.removeTokenAfterExpirationAsync();
  }

  async tryToLogInAccount(token: string | null): Promise<void> {
    if(token != null)
    {
      this.service.getAccountRequest(token).subscribe({
        next: (data) => {
          console.log(data);
          this.account = data;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  seeMoviesDetails(): void {
    this.router.navigate(['/movie/' + null], { queryParams: { query: null } });
  }
}
