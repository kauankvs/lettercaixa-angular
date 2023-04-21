import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/account';
import { AccountApiService } from 'src/app/services/account-api.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  profiles: Account[] | null = null;

  constructor(private service: AccountApiService) {}

  ngOnInit(): void {
    this.getUsersOrderedByPostsQuantity();
  }

  getUsersOrderedByPostsQuantity() {
    this.service.getAllAccounts().subscribe({
      next: (data) => {
        this.profiles = data.sort(p => p.posts?.length as number);
        console.log(this.profiles);
      },
      error: (err) => console.log(err),
    })
  }
  
}
