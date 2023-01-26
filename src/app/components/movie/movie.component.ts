import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private service: ExternalApiMovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let page: number = 1;
    let search: string = this.route.snapshot.data['search'];
    this.service.getCollectionOfMovies(search, page)
  }
}
