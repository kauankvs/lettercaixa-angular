import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent {
  searchForm: FormGroup = this.formBuilder.group(
    {
      search: '',
    }
  )

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  searchMovieSubmit(): void {
    this.router.navigate(['/search'], { queryParams: { query: this.searchForm.value['search']} });
  }
}
