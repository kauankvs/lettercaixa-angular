import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/interfaces/account';
import { AccountApiService } from 'src/app/services/account-api.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  profiles?: Observable<Account[]>;
  profileSearch?: string;

  constructor(private service: AccountApiService) {}

  ngOnInit(): void {
    this.getUsersOrderedByPostsQuantity();
  }

  getUsersOrderedByPostsQuantity() {
    this.profiles = this.service.getAllAccounts();
  }
  
}
