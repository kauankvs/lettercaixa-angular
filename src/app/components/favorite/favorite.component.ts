import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';
import { FavoritesApiService } from 'src/app/services/favorites-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteMovies: Array<Movie> = [];
  moviesId: number[] = []

  constructor(private service: FavoritesApiService, private movieService: ExternalApiMovieService, private storageService: LocalStorageService, private router: Router) { }

  async ngOnInit(): Promise<any> {
    let token = this.storageService.getToken();
    if(token == null) {
      window.alert('Please log in to see and add favorite movies');
      this.router.navigateByUrl('/login');
      return;
    }
    this.subscribeToGetIdsAndQueryIntoMovie(token);
  }

  async subscribeToGetIdsAndQueryIntoMovie(token: string) {
    return this.service.getProfileFavoriteMovies(token).subscribe({
      next: (data) => this.getMoviesById(data),
      error: (error) => console.log(error)
    });
  }

  getMoviesById(moviesId: number[]) {
    for(let id of moviesId) {
      this.movieService.getMovieById(id).subscribe(movie => this.favoriteMovies.push(movie));
    }
  }
  
  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }

  deleteMovieFromFavorite(movieId: number): void {
    let token = this.storageService.getToken();
    this.service.deleteMovieFromFavorites(movieId, token).subscribe({
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
