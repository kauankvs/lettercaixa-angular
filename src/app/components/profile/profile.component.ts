import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from 'src/app/interfaces/account';
import { AccountApiService } from 'src/app/services/account-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  account?: Observable<Account>;

  constructor(private service: AccountApiService, private storageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    let token = this.storageService.getToken();
    if(token != null) 
      this.account = this.service.getAccountRequest(token);
    else {
      window.alert('Please log in to see your account!');
      this.router.navigateByUrl('/login');
    }
  }
 
}