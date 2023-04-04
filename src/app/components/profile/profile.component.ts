import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { AccountApiService } from 'src/app/services/account-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile?: Account;

  constructor(private service: AccountApiService, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    let token = this.storageService.getToken();
    this.tryToLogInAccount(token);
  }
 
  tryToLogInAccount(token: string | null): void 
  {
    if(token != null)
    {
      this.service.getAccountRequest(token).subscribe({
        next: (data) => {
          console.log(data);
          this.profile = data;
        },
        error: (error) => console.log(error)
      });
    }
  }
}