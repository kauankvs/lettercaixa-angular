import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiMovieService {
  TMDB_Url: string = 'https://api.themoviedb.org/3/movie/';

  constructor(private client: HttpClient, private settings: SettingsService) { }

  getCollectionOfMovies(search: string, page: number) {
    let URL = this.TMDB_Url + search + '?api_key=' + this.settings.key + '&page=' + page;

    this.client.get(URL).subscribe({
      next: (data: any) => console.log(data),
      error: (data: any) => console.log(data),
    });
  }
}
