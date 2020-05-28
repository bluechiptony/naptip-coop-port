import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import { Staff, StaffState } from 'src/app/model/staff.model';
import * as StaffActions from '../../state-management/actions/staff-in-view.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-single-staff',
  templateUrl: './single-staff.component.html',
  styleUrls: ['./single-staff.component.scss'],
})
export class SingleStaffComponent implements OnInit {
  routeSub: Subscription;
  staffSub: Subscription;
  staffState: StaffState;
  staff: Staff;

  constructor(
    private activeRoute: ActivatedRoute,
    private staffService: StaffService,
    private store: Store<StaffState>
  ) {
    this.staffSub = this.store
      .select<any>('currentStaffReducer')
      .subscribe((state) => {
        this.staffState = state;

        console.log(state);
      });
  }

  ngOnInit(): void {
    this.createRouteSub();
  }

  createRouteSub = (): void => {
    this.routeSub = this.activeRoute.paramMap.subscribe((params: any) => {
      // console.log(params.params.code);

      this.getStaff(params.params.code);
    });
  };

  getStaff = (code: string): void => {
    this.staffService.getStaff(code).subscribe(
      (staff: Staff) => {
        this.staff = staff;
        console.log('dispatching');

        this.store.dispatch({
          type: StaffActions.SET_STAFF,
          staff: staff,
        });
      },
      (error: any) => {}
    );
  };
}
