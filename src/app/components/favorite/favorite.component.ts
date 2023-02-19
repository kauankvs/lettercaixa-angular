import { Component, OnInit } from '@angular/core';
import { Route, Router, withHashLocation } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { Favorite } from 'src/app/interfaces/favorite';
import { Movie } from 'src/app/interfaces/movie';
import { AccountApiService } from 'src/app/services/account-api.service';
import { FavoritesApiService } from 'src/app/services/favorites-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteMovies?: Movie[];
  
  constructor(private service: FavoritesApiService, private storageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    let token = this.storageService.getToken();
    
  }

  

  seeMoviesDetails(): void {
    this.router.navigate(['/movie/' + null], { queryParams: { query: null } });
  }
}
