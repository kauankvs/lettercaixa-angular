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
  favoriteMovies?: Movie[] | null;
  
  constructor(private service: FavoritesApiService, private extenalService: ExternalApiMovieService, private storageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    let token = this.storageService.getToken();
    let favMovies = this.subscribeGetProfileMovies(token);
    if(favMovies != null)
      this.favoriteMovies = this.getMoviesByMovieId(favMovies);
  }

  subscribeGetProfileMovies(token: string | null): number[] | null {
    let favMovies: number[] | null = null;
    this.service.getProfileFavoriteMovies(token).subscribe({
      next: (data) => {
        console.log(data);
        favMovies = data.movies;
      },
      error: (data) => console.log(data)
    });
    return favMovies;
  }
  
  getMoviesByMovieId(moviesId: number[]): Movie[] | null {
    let movies: Movie[] = [];
    moviesId.forEach(id => {
      this.extenalService.getMovieById(id).subscribe(movie => movies.push(movie));
    })
    
    if(movies.length === 0)
      return null;

    return movies;
  }

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie/' + id], { queryParams: { id: id } });
  }
}
