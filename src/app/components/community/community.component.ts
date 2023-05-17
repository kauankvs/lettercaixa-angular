import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  searched = false;

  constructor(private service: AccountApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.profiles = this.service.getAllAccounts();
  }

  searchProfiles(searchForm: NgForm) {
    let search = this.profileSearch;
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['profiles/'], { queryParams: { query: search } });
    });
    setTimeout(() => searchForm.resetForm(), 350);
  }
  
}
