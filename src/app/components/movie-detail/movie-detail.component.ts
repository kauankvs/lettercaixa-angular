import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id?: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
=    this.route.queryParams.subscribe(params => this.id = params['id']);
    
  }
  
}
