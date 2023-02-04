import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie?: Movie;

  constructor(private route: ActivatedRoute, private service: ExternalApiMovieService) { }

  async ngOnInit(): Promise<void> {
    let id: number | undefined;
    this.route.queryParams.subscribe(params => id = params['id']);
    this.service.getMovieById(id).subscribe({
      next: (data: Movie) => { 
        console.log(data);
        this.movie = data;
      },
      error: (err) => console.error(err),
    });
  }
  
}
