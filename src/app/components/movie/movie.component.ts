import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionMovie } from 'src/app/interfaces/collection-movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  page: number = 1;
  totalPages: number = 0;
  movies?: Observable<CollectionMovie>;

  constructor(private service: ExternalApiMovieService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getMoviesByPage(this.page);
  }

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }

  getMoviesByPage(page: number): void {
    let search: string = this.route.snapshot.data['search'];
    this.movies = this.service.getCollectionOfMovies(search, page);
    this.page = page;
  }
}
