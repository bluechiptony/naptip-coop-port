import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AuthenticationState,
  AdminContext,
} from '../model/authentication.model';
import * as AdminContextActions from '../state-management/actions/admin-context.action';
import * as AuthActions from '../state-management/actions/authentication.action';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  authSub: Subscription;
  contextSubscription: Subscription;

  user: User;
  constructor(
    private authStore: Store<AuthenticationState>,
    private adminContextState: Store<AdminContext>,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeForStates();
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }

    if (this.contextSubscription) {
      this.contextSubscription.unsubscribe();
    }
  }

  subscribeForStates = (): void => {
    this.authSub = this.authStore
      .select<any>('authenticationReducer')
      .subscribe((state: AuthenticationState) => {
        console.log(state);
        if (state.loggedIn) {
          this.user = state.user;
        }
      });

    this.contextSubscription = this.adminContextState
      .select<any>('adminContextReducer')
      .subscribe((state) => {
        console.log(state);
      });
  };

  openContext = (context: string) => {
    this.adminContextState.dispatch({
      type: AdminContextActions.SET_ADMIN_CONTEXT,
      adminContext: context,
    });
    this.router.navigate(['/dashboard']);
  };

  logOut() {
    this.authStore.dispatch({ type: AuthActions.LOGOUT_USER });
    this.router.navigate(['']);
  }
}
