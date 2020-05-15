import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm = () => {
    this.loginForm = this.fb.group({});
  };

  submitLogin = () => {};

  get emailAddress() {
    return this.loginForm.get('emailAddress');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
