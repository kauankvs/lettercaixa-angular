import { Component, OnInit } from '@angular/core';
import { Route, Router, withHashLocation } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { Favorite } from 'src/app/interfaces/favorite';
import { Movie } from 'src/app/interfaces/movie';
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
  isLogged: boolean = false;
  moviesId: number[] = [];
  favoriteMovies: Movie[] = [];
  
  constructor(private service: FavoritesApiService, private extenalService: ExternalApiMovieService, private storageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    let token = this.storageService.getToken();
    this.subscribeGetProfileMovies(token).then(() => this.getMoviesByMovieId(this.moviesId))
  }

  async subscribeGetProfileMovies(token: string | null): Promise<void> {
    this.service.getProfileFavoriteMovies(token).subscribe({
      next: (data) => {
        console.log(data);
        this.isLogged = true;
        this.moviesId = data.movies;
      },
      error: (data) => console.log(data)
    });
  }
  
  getMoviesByMovieId(movies: number[]): void {
    movies.forEach(id => this.extenalService.getMovieById(id).subscribe(movie => this.favoriteMovies.push(movie)));
  }

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie/' + id], { queryParams: { id: id } });
  }
}
