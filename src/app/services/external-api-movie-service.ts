import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { CollectionMovie } from '../interfaces/collection-movie';
import { Observable } from 'rxjs';
import { CollectionPerson } from '../interfaces/collection-person';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiMovieService {
  TMDB_Url: string = 'https://api.themoviedb.org/3/';

  constructor(private client: HttpClient, private settings: SettingsService) { }

  getCollectionOfMovies(search: string, page: number): Observable<CollectionMovie> {
    let URL = this.TMDB_Url + 'movie/' + search + '?api_key=' + this.settings.key + '&page=' + page;
    return this.client.get<CollectionMovie>(URL);
  }

  getPopularArtists(page: number): Observable<CollectionPerson> {
    let URL = this.TMDB_Url + 'person/popular' + '?api_key=' + this.settings.key + '&page=' + page;
    return this.client.get<CollectionPerson>(URL);
  }

  
  searchForMovie(search: string, page: number) {
    const URL_SEARCH_MOVIE: string = this.TMDB_Url + 'search/movie' + '?api_key=' + this.settings.key + '&query=' + search + '&page=' + page;
    this.client.get(URL_SEARCH_MOVIE).subscribe((data) => console.log(data));
  }
}
