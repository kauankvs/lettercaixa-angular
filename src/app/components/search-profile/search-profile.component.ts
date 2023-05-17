import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from 'src/app/interfaces/account';
import { AccountApiService } from 'src/app/services/account-api.service';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  profiles?: Observable<Account[]>;
  profileSearch?: string;
  query?: string;
  @Input() nameSearch?: string;

  constructor(private service: AccountApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.query = params['query']);
    this.searchUser(this.query as string);
  }

  searchProfiles(searchForm: NgForm) {
    let search = this.profileSearch;
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/profiles'], { queryParams: { query: search } });
    });
    setTimeout(() => searchForm.resetForm(), 350);
  }

  searchUser(name: string): void {
    this.profiles = this.service.getAccountsByName(name);
  }

}
