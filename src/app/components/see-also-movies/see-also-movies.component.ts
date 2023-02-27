import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-see-also-movies',
  templateUrl: './see-also-movies.component.html',
  styleUrls: ['./see-also-movies.component.css']
})
export class SeeAlsoMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private service: ExternalApiMovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number | undefined;
    this.route.queryParams.subscribe(params => id = params['id']);
    this.service.seeSimilarMovies(id).subscribe({
      next: (data) => { 
        this.movies = data.results;
        console.log(data); 
      },
      error: (err) => console.error(err),
    })
  }

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }
}
