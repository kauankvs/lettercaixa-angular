import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Person | undefined;
  
  constructor(private service: ExternalApiMovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let artistId: number | undefined;
    this.route.queryParams.subscribe(params => artistId = params['artistId']);
    this.subscribeToGetArtistDetail(artistId as number);  
  }

  subscribeToGetArtistDetail(artistId: number): void {
    this.service.seeArtistDetail(artistId).subscribe({
      next: (data) => {
        console.log(data);
        this.artist = data;
      },
      error: (err) => console.log(err),
    })
  }

}
