import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionMovie } from 'src/app/interfaces/collection-movie';
import { Movie } from 'src/app/interfaces/movie';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  filmes?: Movie[];

  constructor(private service: ExternalApiMovieService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let page: number = 1;
    let search: string = this.route.snapshot.data['search'];
    this.service.getCollectionOfMovies(search, page).subscribe({
      next: (data) => {
         this.filmes = data.results
         console.log(data);
      },
      error: (data) => console.error(data)
    });
  }

  seeMoviesDetails(id: number): void {
    this.router.navigate(['/movie/' + id], { queryParams: { id: id } });
  }
}
