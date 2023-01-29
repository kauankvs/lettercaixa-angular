import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { LetterboxApiMovieService } from 'src/app/services/letterbox-api-movie.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile?: Account;

  constructor(private service: LetterboxApiMovieService, private storageService: LocalStorageService, private router: Router) { }

  async ngOnInit(): Promise<void | Error> {
    let token: string | null = this.storageService.getToken();

    if(token != null)
    {
      this.service.getAccountRequest(token).subscribe({
        next: (data) => {
          console.log(data);
          this.profile = data;
        },
        error: (err) => console.error(err)
      });
      await this.storageService.removeTokenAfterExpirationAsync();
    }
    
    if(this.profile == null) {
      window.alert('User not logged in!');
      this.router.navigateByUrl('/login');
    }
  }

}
