import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { AccountApiService } from 'src/app/services/account-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginSub?: Subscription;
  email: string = "";
  password: string = "";
  
  constructor(private router: Router, private formBuilder: FormBuilder, private service: AccountApiService, private storageService: LocalStorageService) { }

  onSubmitLogin(loginForm: NgForm): void {
    this.loginSub = this.service.loginRequest(this.email, this.password).subscribe((token) => {
      localStorage.setItem('Token', token);
      this.router.navigate(['/']);
    });
    setTimeout(() => loginForm.resetForm(), 350);
  }

  ngOnDestroy(): void {
    this.loginSub?.unsubscribe();
  }

}