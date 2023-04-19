import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { CollectionMovie } from '../interfaces/collection-movie';
import { Observable } from 'rxjs';
import { CollectionPerson } from '../interfaces/collection-person';
import { Movie } from '../interfaces/movie';

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
  
  searchForMovie(search: string | undefined, page: number): Observable<CollectionMovie> {
    const URL_SEARCH_MOVIE: string = this.TMDB_Url + 'search/movie' + '?api_key=' + this.settings.key + '&query=' + search + '&page=' + page;
    return this.client.get<CollectionMovie>(URL_SEARCH_MOVIE);
  }

  getMovieById(id: number | undefined): Observable<Movie> {
    const URL_MOVIE_DETAILS: string = this.TMDB_Url + 'movie/' + id + '?api_key=' + this.settings.key;
    return this.client.get<Movie>(URL_MOVIE_DETAILS);
  } 

  searchArtist(artistSearch: string | undefined, page: number): Observable<CollectionPerson> {
    const URL_SEARCH_ARTIST: string = this.TMDB_Url + 'search/person' + '?api_key=' + this.settings.key + '&query=' + artistSearch + '&page=' + page;
    return this.client.get<CollectionPerson>(URL_SEARCH_ARTIST);
  }

  seeSimilarMovies(movieId: number | undefined) {
    const URL_SIMILAR_MOVIES: string = this.TMDB_Url + 'movie/' + movieId + '/recommendations' +  '?api_key=' + this.settings.key;
    return this.client.get<CollectionMovie>(URL_SIMILAR_MOVIES);
  }

}
