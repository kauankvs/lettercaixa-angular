import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-see-also-movies',
  templateUrl: './see-also-movies.component.html',
  styleUrls: ['./see-also-movies.component.css']
})
export class SeeAlsoMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private service: ExternalApiMovieService, private router: Router) { }

  ngOnInit(): void {
    
  }

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }
}
