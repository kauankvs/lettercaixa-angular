import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApiService } from 'src/app/services/account-api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup = this.formBuilder.group({
    email: "",
    password: "",
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private service: AccountApiService, private storageService: LocalStorageService) { }

  transformInFormData(form: FormGroup): FormData {
    let formData: FormData = new FormData();
    formData.append('email', form.get('email')?.value);
    formData.append('password', form.get('password')?.value);
    return formData;
  }

  onSubmitLogin(): void {
    let data: FormData = this.transformInFormData(this.formLogin);
    this.service.loginRequest(data).subscribe({
      next: (token) => 
      {
        localStorage.setItem('Token', token);
        this.formLogin.reset();
        location.href = "/"
      },
      error: (data) => console.log(data),
    });
  }
}