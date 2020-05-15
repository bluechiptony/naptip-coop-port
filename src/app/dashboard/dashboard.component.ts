import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { AuthState, User } from "../model/authentication.model";
import { Subscription } from 'rxjs';
// import * as AuthActions from "../state-manager/actions/auth.actions";
import { Router } from '@angular/router';
// import { BnshiaService } from "../services/bnshia.service";

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
  loggedInUser: User = {
    firstName: 'Julie',
    lastName: 'Okah-Donli',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  toggleDrawer = (): void => {
    this.drawerOpen = !this.drawerOpen;
  };

  changeOpenstate(evt: any) {
    console.log(evt.target);
  }

  logOut() {
    // this.store.dispatch({ type: AuthActions.LOGOUT_USER });
    this.router.navigate(['']);
  }
}

export interface User {
  firstName: string;
  lastName: string;
}
