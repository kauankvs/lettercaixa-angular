import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { AccountApiService } from 'src/app/services/account-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegister: FormGroup = this.formBuilder.group<Account>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birth: "",
  });;

  constructor(private formBuilder: FormBuilder, private service: AccountApiService, private router: Router) { }

  transformInFormData(form: FormGroup): FormData {
    let formData: FormData = new FormData();
    formData.append('firstName', form.get('firstName')?.value);
    formData.append('lastName', form.get('lastName')?.value);
    formData.append('username', form.get('username')?.value);
    formData.append('email', form.get('email')?.value);
    formData.append('password', form.get('password')?.value);
    formData.append('birth', form.get('birth')?.value);
    return formData;
  }

  onSubmitRegister(): void {
    let data: FormData = this.transformInFormData(this.formRegister);
    this.service.registerRequest(data).subscribe({
      next: (data) => { 
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      error: (data) => console.log(data),
    });
    this.formRegister.reset()
  }

}
