import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionMovie } from 'src/app/interfaces/collection-movie';
import { Movie } from 'src/app/interfaces/movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  query?: string | undefined;
  page: number = 1;
  movies?: Observable<CollectionMovie>;

  constructor(private route: ActivatedRoute, private router: Router, private service: ExternalApiMovieService) { }

  ngOnInit(): void {
    this.getMoviesByPage(this.page);
  } 

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }

  getMoviesByPage(page: number): void {
    this.route.queryParams.subscribe(params => this.query = params['query']);
    this.movies = this.service.searchForMovie(this.query, page);
    this.page = page;
  }
  
}
