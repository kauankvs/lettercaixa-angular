import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';
import { LetterboxApiMovieService } from 'src/app/services/letterbox-api-movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  query?: string | undefined;

  constructor(private route: ActivatedRoute, private service: ExternalApiMovieService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.query = params['query']);
    this.service.searchForMovie(this.query, 1);
  } 

  
}
