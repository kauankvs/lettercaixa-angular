import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {
  search?: string; 
  userLogged = false;

  constructor(private router: Router, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    var token: string | null = this.localStorage.getToken();
    if(token != null) 
      this.userLogged = true;
  }

  searchMovieSubmit(searchForm: any): void {
    let movieSearch = this.search;
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/search/' + movieSearch], { queryParams: { query: movieSearch } });
    });
    setTimeout(() => searchForm.resetForm(), 350);
  }

  logoutFromAccount(): void { 
    this.localStorage.removeToken();
    this.userLogged = false;
    this.router.navigateByUrl('/');
  }
}
