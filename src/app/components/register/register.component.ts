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


}
