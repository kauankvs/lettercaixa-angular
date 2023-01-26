import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/app/interfaces/account';

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

  constructor(private formBuilder: FormBuilder) { }

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
    let form: FormData = this.transformInFormData(this.formRegister);
  }

}
