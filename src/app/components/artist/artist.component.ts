import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists?: Person[];
  artistSearch?: string;

  constructor(private service: ExternalApiMovieService) { }

  ngOnInit(): void {
    let page: number = 1;
    this.service.getPopularArtists(page).subscribe({
      next: (data) => {
        this.artists = data.results;
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }

  searchArtist() {
    let page = 1;
    this.service.searchArtist(this.artistSearch, page).subscribe({
      next: (data) => { 
        console.log(data);
        this.artists = [];
        this.artists = data.results
      },
      error: (err) => console.log(err),
    });
  }

}
