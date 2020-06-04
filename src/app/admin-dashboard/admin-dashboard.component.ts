import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { AuthState, User } from "../model/authentication.model";
import { Subscription } from 'rxjs';
// import * as AuthActions from "../state-manager/actions/auth.actions";
import { Router } from '@angular/router';
import { User } from '../model/user.model';
// import { BnshiaService } from "../services/bnshia.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  drawerOpen: boolean = true;
  authState: any = {
    loggedIn: true,
  };
  authSubScription: Subscription;
  loggedInUser: User;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  toggleDrawer = (): void => {
    this.drawerOpen = !this.drawerOpen;
  };

  changeOpenstate(evt: any) {}

  logOut() {
    // this.store.dispatch({ type: AuthActions.LOGOUT_USER });
    this.router.navigate(['']);
  }
}
