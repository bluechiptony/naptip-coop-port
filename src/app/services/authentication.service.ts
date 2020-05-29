import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationState } from '../model/authentication.model';
import { User } from '../model/user.model';
import * as jwtDecode from 'jwt-decode';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  BASE_URL = environment.baseUrl;
  authSubscription: Subscription;
  constructor(
    private http: HttpClient,
    private store: Store<AuthenticationState>
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
}
