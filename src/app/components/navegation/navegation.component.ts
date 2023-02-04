import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent {
  search?: string; 

  constructor(private router: Router) { }

  searchMovieSubmit(): void {
    this.router.navigateByUrl('/').then(() => {
    this.router.navigate(['/search/' + this.search], { queryParams: { query: this.search } });
    });
  }
}
