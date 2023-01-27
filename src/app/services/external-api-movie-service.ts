import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { CollectionMovies } from '../interfaces/collection-movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiMovieService {
  TMDB_Url: string = 'https://api.themoviedb.org/3/movie/';

  constructor(private client: HttpClient, private settings: SettingsService) { }

  getCollectionOfMovies(search: string, page: number): Observable<CollectionMovies> {
    let URL = this.TMDB_Url + search + '?api_key=' + this.settings.key + '&page=' + page;
    return this.client.get<CollectionMovies>(URL);
    
    /*.subscribe({
      next: (data) => {
        data.results.forEach((data) => {
          console.log(data.poster_path);
        })
      },
      error: (data: any) => console.log(data),
    });*/
  }
}
