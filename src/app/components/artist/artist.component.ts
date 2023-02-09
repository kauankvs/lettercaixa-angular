import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { ExternalApiMovieService } from 'src/app/services/external-api-movie-service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  page: number = 1;
  totalPages: number = 1;
  artists: Person[] = [];
  artistSearch?: string;
  searchIsUsed?: boolean;

  constructor(private service: ExternalApiMovieService) { }

  ngOnInit(): void {
    this.searchIsUsed = false;
    this.getPopularArtist();
  }

  searchArtist(searchForm: any, page: number): void {
    this.searchIsUsed = true;
    this.service.searchArtist(this.artistSearch, page).subscribe({
      next: (data) => { 
        console.log(data);
        this.artists = data.results;
        this.page = page;
        this.totalPages = data.total_pages;
      },
      error: (err) => console.log(err),
    });
  }

  getPopularArtist(): void {
    let page = 1;
    this.service.getPopularArtists(page).subscribe({
      next: (data) => {
        this.artists = data.results;
        this.page = page;
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }
}


