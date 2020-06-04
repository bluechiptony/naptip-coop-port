import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AuthenticationState,
  AdminContext,
} from '../model/authentication.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  authSubScription: Subscription;
  contextSubScription: Subscription;
  adminContext: string;
  loggedInUser: User;

  constructor(
    private authStore: Store<AuthenticationState>,
    private adminContextStore: Store<AdminContext>
  ) {}

  ngOnInit(): void {
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

  createSubscriptions = (): void => {
    this.authSubScription = this.authStore
      .select<any>('authenticationReducer')
      .subscribe((data: AuthenticationState) => {
        console.log(data);
        if (data == undefined) {
        } else {
          this.loggedInUser = data.user;
        }
      });

    this.contextSubScription = this.adminContextStore
      .select<any>('adminContextReducer')
      .subscribe((data: AdminContext) => {
        console.log(data);
        this.adminContext = data.context;
      });
  };
}
