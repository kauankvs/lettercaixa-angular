import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ExternalApiMovieService) { }

  async ngOnInit(): Promise<void> {
    let id: number | undefined;
    this.route.queryParams.subscribe(params => id = params['id']);
    this.service.getMovieById(id).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err),
    });
  }
  
}
