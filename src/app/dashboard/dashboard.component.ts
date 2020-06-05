import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import * as AuthActions from '../state-management/actions/authentication.action';
import * as AdminContextActions from '../state-management/actions/admin-context.action';
import { Router } from '@angular/router';
import {
  AuthenticationState,
  AdminContext,
} from '../model/authentication.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  drawerOpen: boolean = true;
  authState: any = {
    loggedIn: true,
  };
  authSubScription: Subscription;
  contextSubScription: Subscription;
  loggedInUser: User;
  adminContext: string;

  constructor(
    private router: Router,
    private authStore: Store<AuthenticationState>,
    private adminContextStore: Store<AdminContext>
  ) {}

  ngOnInit() {
    this.createSubscriptions();
  }

  ngOnDestroy() {
    if (this.authSubScription) {
      this.authSubScription.unsubscribe();
    }
    if (this.contextSubScription) {
      this.authSubScription.unsubscribe();
    }
  }

  toggleDrawer = (): void => {
    this.drawerOpen = !this.drawerOpen;
  };

  changeOpenstate(evt: any) {}

  logOut() {
    this.authStore.dispatch({ type: AuthActions.LOGOUT_USER });
    this.router.navigate(['']);
  }

  createSubscriptions = (): void => {
    this.authSubScription = this.authStore
      .select<any>('authenticationReducer')
      .subscribe((data: AuthenticationState) => {
        if (data == undefined) {
          this.router.navigate(['']);
        } else {
          this.loggedInUser = data.user;
          this.authState = data;
        }
      });

    this.contextSubScription = this.adminContextStore
      .select<any>('adminContextReducer')
      .subscribe((data: AdminContext) => {
        this.adminContext = data.context;
      });
  };

  changeContext = (context: string) => {
    this.adminContextStore.dispatch({
      type: AdminContextActions.SET_ADMIN_CONTEXT,
      adminContext: context,
    });
  };
}
