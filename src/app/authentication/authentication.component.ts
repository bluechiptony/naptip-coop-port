import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class AuthenticationComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  authSub: Subscription;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private authStore: Store<AuthenticationState>,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

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
      this.makeLoginRequest(this.loginForm.value);
    } else {
      this.authService.showError('Please check your details');
    }
  };

  makeLoginRequest = (request: any) => {
    this.loading = true;
    let usr = this.authService.makeRemoteLoginRequest(request);

    usr.subscribe(
      (data: string) => {
        this.loading = false;
        let user: User = this.authService.decodeJWTToken(data);

        this.saveAuthUser(user, data);
      },
      (error) => {
        this.authService.showError('Invalid username / password');
        this.loading = false;
      }
    );

    // if (usr != undefined) {
    //   if (usr.accountType != undefined) this.saveAuthUser(usr);
    // } else {
    //   this.authService.showError('Invalid username / password');
    // }
  };

  saveAuthUser = (user: User, token?: string) => {
    this.authStore.dispatch({
      type: AuthActions.LOGIN_USER,
      user: user,
      token: token,
    });
    this.navigateToDashboard(user);
  };

  makeAuthSubscription = () => {
    this.authSub = this.authStore.select<any>('').subscribe((data) => {
      // console.log(data);
    });
  };

  get emailAddress() {
    return this.loginForm.get('emailAddress');
  }

  get password() {
    return this.loginForm.get('password');
  }

  navigateToDashboard = (user: User) => {
    this.authService.showSuccess(
      'Login successful. Preparring your environment'
    );
    if (user.accountType !== AccountTypes.STAFF) {
      this.router.navigate(['/admin-home']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  };
}
