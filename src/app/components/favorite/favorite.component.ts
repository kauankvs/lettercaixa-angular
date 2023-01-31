import { Component, OnInit } from '@angular/core';
import { Router, withHashLocation } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { LetterboxApiMovieService } from 'src/app/services/letterbox-api-movie.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  account?: Account;
  
  constructor(private service: LetterboxApiMovieService, private storageService: LocalStorageService) { }

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
}
