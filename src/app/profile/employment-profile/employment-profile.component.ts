import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff.model';
import { AuthenticationState } from 'src/app/model/authentication.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-employment-profile',
  templateUrl: './employment-profile.component.html',
  styleUrls: ['./employment-profile.component.scss'],
})
export class EmploymentProfileComponent implements OnInit {
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
