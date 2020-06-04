import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Store } from '@ngrx/store';
import { AuthenticationState } from '../model/authentication.model';
import { AccountTypes, User } from '../model/user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as AuthActions from '../state-management/actions/authentication.action';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;
  authSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private authStore: Store<AuthenticationState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.makeAuthSubscription();
  }

  buildForm = () => {
    this.loginForm = this.fb.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
    });
  };

  submitLogin = () => {
    if (this.loginForm.valid) {
      this.makeLoginRequest(this.loginForm.value.emailAddress);
    } else {
      this.authService.showError('Please check your details');
    }
  };

  makeLoginRequest = (emailAddress: string) => {
    let usr = this.authService.makeLoginAttempt(emailAddress);

    if (usr != undefined) {
      if (usr.accountType != undefined) this.saveAuthUser(usr);
    } else {
      this.authService.showError('Invalid username / password');
    }
  };

  saveAuthUser = (user: User) => {
    this.authStore.dispatch({ type: AuthActions.LOGIN_USER, user: user });
    this.navigateToDashboard(user);
  };

  makeAuthSubscription = () => {
    this.authSub = this.authStore.select<any>('').subscribe((data) => {
      console.log(data);
    });
  };

  get emailAddress() {
    return this.loginForm.get('emailAddress');
  }

  get password() {
    return this.loginForm.get('password');
  }

  navigateToDashboard = (user: User) => {
    if (user.accountType !== AccountTypes.STAFF) {
      this.router.navigate(['/admin-home']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  };
}
