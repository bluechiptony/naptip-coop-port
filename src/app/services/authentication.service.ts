import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthenticationState,
  PasswordRequest,
} from '../model/authentication.model';
import { User, users } from '../model/user.model';
import * as jwtDecode from 'jwt-decode';
import { Subscription, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  BASE_URL = environment.baseUrl;
  authSubscription: Subscription;
  constructor(
    private http: HttpClient,
    private store: Store<AuthenticationState>,
    private toast: ToastrService
  ) {}

  /**
   * Decodes JWT token to any (Authenticated user)
   */
  decodeJWTToken = (token: string): any => {
    return jwtDecode(token);
  };

  getUserFromToken = (token: string): User => {
    try {
      let user: User = this.decodeJWTToken(token);
      return user;
    } catch (error) {
      throw new Error('Cannot decode invalid token');
    }
  };

  getLoggedInUserToken = (): string => {
    let token: string;
    let authState: AuthenticationState;
    this.authSubscription = this.store
      .select<any>('authenticationReducer')
      .subscribe((state) => {
        authState = state;
        token = authState.token;
      });

    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    return token;
  };

  makeLoginAttempt = (email: string): User => {
    return users.find((user) => user.emailAddress === email);
  };

  makeRemoteLoginRequest = (loginRequest: any): Observable<string> => {
    return this.http.post<string>(`${this.BASE_URL}/auth/login`, loginRequest);
  };

  makeActivationRequest = (activationRequest: any) => {
    return this.http.post(
      `${this.BASE_URL}/auth/activate-account`,
      activationRequest
    );
  };

  makePasswordRequest = (emailAddress: string) => {
    return this.http.post(`${this.BASE_URL}/auth/forgot-password`, {
      emailAddress: emailAddress,
    });
  };

  resetPassword = (activationRequest: any) => {
    return this.http.post(
      `${this.BASE_URL}/auth/reset-password`,
      activationRequest
    );
  };

  makePasswordResetRequest = (request: any) => {
    return this.http.post<any>(
      `${this.BASE_URL}/auth/forgot-password`,
      request
    );
  };

  setPassword = (request: PasswordRequest, isActivation: boolean) => {
    let url = `${this.BASE_URL}/auth/activate-account`;
    if (isActivation) {
      url = `${this.BASE_URL}/auth/reset-password`;
    }
    return this.http.post<any>(url, request);
  };

  createAuthenticationProfile = (profile: any) => {
    return this.http.post(`${this.BASE_URL}/auth/create/account`, profile);
  };

  getUsersAndAccounts = () => {
    return this.http.get(`${this.BASE_URL}/users/get`);
  };

  createUserAccount = (user: User) => {
    return this.http.post(`${this.BASE_URL}/users/create-user`, user);
  };

  public showError = (message: string) => {
    this.toast.error(message, 'Sorry something went wrong');
  };
  showSuccess = (message: string) => {
    this.toast.success(message, 'Process Successful');
  };
  showWarning = (message: string) => {
    this.toast.warning(message);
  };
}
