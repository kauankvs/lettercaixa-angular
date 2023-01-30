import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from 'src/app/interfaces/favorite';
import { LetterboxApiMovieService } from 'src/app/services/letterbox-api-movie.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorite?: Favorite;

  constructor(private service: LetterboxApiMovieService, private storageService: LocalStorageService, private router: Router) { }

  async ngOnInit(): Promise<void | Error> {
    let token: string | null = this.storageService.getToken();
    if(token != null)
    {
      this.service.getAccountRequest(token).subscribe({
        next: (data) => {
          console.log(data.favorite);
          this.favorite = data.favorite;
        },
        error: (err) => console.error(err)
      });
      await this.storageService.removeTokenAfterExpirationAsync();
      return;
    }
    window.alert('User not logged in!');
    this.router.navigateByUrl('/login');
  }
}
