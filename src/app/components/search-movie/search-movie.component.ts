import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  query?: string | undefined;
  movies: Movie[] = []

  constructor(private route: ActivatedRoute, private router: Router, private service: ExternalApiMovieService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.query = params['query']);
    this.service.searchForMovie(this.query, 1).subscribe({
      next: (data) => {
        console.log(data);
        this.movies = data.results;
      },
      error: (err) => console.error(err),
    });
  } 

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie/' + id], { queryParams: { id: id } });
  }
  
}
