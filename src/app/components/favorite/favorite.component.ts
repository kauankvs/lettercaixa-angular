import { Component, OnInit } from '@angular/core';
import { Route, Router, withHashLocation } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { Favorite } from 'src/app/interfaces/favorite';
import { Movie } from 'src/app/interfaces/movie';
import { ProfileMovie } from 'src/app/interfaces/profile-movie';
import { AccountApiService } from 'src/app/services/account-api.service';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';
import { FavoritesApiService } from 'src/app/services/favorites-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteMovies: Array<ProfileMovie> = [];
  
  constructor(private service: FavoritesApiService, private storageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    let token = this.storageService.getToken();
    if(token != null) 
      this.subscribeGetProfileMovies(token);
    else {
      window.alert('Please log in to see and add favorite movies');
      this.router.navigateByUrl('/login');
    }
  }

  async subscribeGetProfileMovies(token: string): Promise<void> {
    this.service.getProfileFavoriteMovies(token).subscribe({
      next: (data) => {
        console.log(data);
        this.favoriteMovies = data.movies;
      },
      error: (data) => console.log(data)
    });
  }
  
  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }

  deleteMovieFromFavorite(movie: ProfileMovie): void {
    let token = this.storageService.getToken();
    this.service.deleteMovieFromFavorites(movie, token).subscribe({
      next: (data) => {
        console.log(data);
        this.reloadCurrentPage();
      },
      error: (data) => console.log(data)
    });
  }

  reloadCurrentPage(): void {
    let currentUrl: string = this.router.url;
    this.router.navigateByUrl(currentUrl);
  }
}
