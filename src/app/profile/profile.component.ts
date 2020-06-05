import { Component, OnInit, OnDestroy } from '@angular/core';
import { Staff } from '../model/staff.model';
import { Store } from '@ngrx/store';
import { AuthenticationState } from '../model/authentication.model';
import { StaffService } from '../services/staff.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  staff: Staff;
  authSubscription: Subscription;
  constructor(
    private authStore: Store<AuthenticationState>,
    private staffService: StaffService
  ) {}
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.createSubscription();
  }

  createSubscription(): void {
    this.authSubscription = this.authStore
      .select<any>('authenticationReducer')
      .subscribe((data: AuthenticationState) => {
        console.log(data);

        if (data.loggedIn) {
          this.getStaffDetails(data.user.id);
        }
      });
  }

  getStaffDetails = (id: string) => {
    this.staffService.getStaffWithId(id).subscribe((staff: Staff) => {
      this.staff = staff;
      console.log(this.staff);
    });
  };
}
