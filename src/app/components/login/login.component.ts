import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  transformInFormData(form: FormGroup): FormData {
    let formData: FormData = new FormData();
    formData.append('email', form.get('email')?.value);
    formData.append('password', form.get('password')?.value);
    return formData;
  }

  onSubmitLogin(): void {
    let form: FormData = this.transformInFormData(this.formLogin);
    //http request
    //this.formLogin.reset()
  }
}
