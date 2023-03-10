import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';
import { Movie } from 'src/app/interfaces/movie';
import { ProfileMovie } from 'src/app/interfaces/profile-movie';
import { FavoritesApiService } from 'src/app/services/favorites-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  profileMovie: ProfileMovie | null = null;
  movie?: Movie;

  constructor(private router: Router, private route: ActivatedRoute, private externalService: ExternalApiMovieService, private favoriteService: FavoritesApiService, private storageService: LocalStorageService) { }

  async ngOnInit(): Promise<void> {
    let id: number | undefined;
    this.route.queryParams.subscribe(params => id = params['id']);
    this.externalService.getMovieById(id).subscribe({
      next: (movie: Movie) => { 
        console.log(movie);
        this.movie = movie;
        this.profileMovie = { 
          movieId: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
        };
      },
      error: (err) => console.error(err),
    });

  };

  addMovieToProfileFavorites(movie: ProfileMovie | null): void {
    let token = this.storageService.getToken();
    this.favoriteService.addMovieToFavorites(movie, token).subscribe({
      next: (data) => console.log(data),
      error: (err) => { 
        console.error(err);
        if(err.status === 401)
          window.alert("User not logged in! Please log to add it to your favorites!");
      }
    });
  }

  seeSimilarMovies(id: number | undefined): void {
    this.router.navigate(['/see-also'], { queryParams: { id: id } });
  }

  

}
