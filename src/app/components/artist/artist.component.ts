import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionPerson } from 'src/app/interfaces/collection-person';
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
  artists?: Observable<CollectionPerson>;
  artistSearch?: string;
  searchIsUsed?: boolean;

  constructor(private service: ExternalApiMovieService, private router: Router) { }

  ngOnInit(): void {
    this.searchIsUsed = false;
    this.getPopularArtist();
  }

  searchArtist(searchForm: any, page: number): void {
    this.searchIsUsed = true;
    this.artists = this.service.searchArtist(this.artistSearch, page);
    this.page = page;
  }

  showArtistDetails(artistId: number | undefined): void {
    this.router.navigate(['/artist/detail'], { queryParams: { artistId: artistId } });
  } 

  getPopularArtist(): void {
    let page = 1;
    this.artists = this.service.getPopularArtists(page);
  }
}


