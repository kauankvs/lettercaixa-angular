import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollectionMovie } from '../interfaces/collection-movie';
import { Observable } from 'rxjs';
import { CollectionPerson } from '../interfaces/collection-person';
import { Movie } from '../interfaces/movie';
import { Person } from '../interfaces/person';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiMovieService {
  TMDB_Url: string = 'https://api.themoviedb.org/3/';

  constructor(private client: HttpClient) { }

  getCollectionOfMovies(search: string, page: number): Observable<CollectionMovie> {
    let URL = this.TMDB_Url + 'movie/' + search + '?api_key=' + Settings.key + '&page=' + page;
    return this.client.get<CollectionMovie>(URL);
  }

  getPopularArtists(page: number): Observable<CollectionPerson> {
    let URL = this.TMDB_Url + 'person/popular' + '?api_key=' + Settings.key + '&page=' + page;
    return this.client.get<CollectionPerson>(URL);
  }
  
  searchForMovie(search: string | undefined, page: number): Observable<CollectionMovie> {
    const URL_SEARCH_MOVIE: string = this.TMDB_Url + 'search/movie' + '?api_key=' + Settings.key + '&query=' + search + '&page=' + page;
    return this.client.get<CollectionMovie>(URL_SEARCH_MOVIE);
  }

  getMovieById(id: number | undefined): Observable<Movie> {
    const URL_MOVIE_DETAILS: string = this.TMDB_Url + 'movie/' + id + '?api_key=' + Settings.key;
    return this.client.get<Movie>(URL_MOVIE_DETAILS);
  } 

  searchArtist(artistSearch: string | undefined, page: number): Observable<CollectionPerson> {
    const URL_SEARCH_ARTIST: string = this.TMDB_Url + 'search/person' + '?api_key=' + Settings.key + '&query=' + artistSearch + '&page=' + page;
    return this.client.get<CollectionPerson>(URL_SEARCH_ARTIST);
  }

  seeSimilarMovies(movieId: number | undefined) {
    const URL_SIMILAR_MOVIES: string = this.TMDB_Url + 'movie/' + movieId + '/recommendations' +  '?api_key=' + Settings.key;
    return this.client.get<CollectionMovie>(URL_SIMILAR_MOVIES);
  }

  seeArtistDetail(artistId: number): Observable<Person> {
    const URL_SEARCH_ARTIST: string = this.TMDB_Url + 'person/' + artistId + '?api_key=' + Settings.key;
    return this.client.get<Person>(URL_SEARCH_ARTIST);
  }

}
