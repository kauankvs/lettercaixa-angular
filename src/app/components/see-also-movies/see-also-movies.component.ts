import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionMovie } from 'src/app/interfaces/collection-movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-see-also-movies',
  templateUrl: './see-also-movies.component.html',
  styleUrls: ['./see-also-movies.component.css']
})
export class SeeAlsoMoviesComponent implements OnInit {
  movies?: Observable<CollectionMovie>;

  constructor(private service: ExternalApiMovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number | undefined;
    this.route.queryParams.subscribe(params => id = params['id']);
    this.movies = this.service.seeSimilarMovies(id);
  }

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }
}
