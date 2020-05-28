import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Staff, StaffState } from 'src/app/model/staff.model';
import { StaffService } from 'src/app/services/staff.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss'],
})
export class BiodataComponent implements OnInit {
  staffSub: Subscription;
  staffState: StaffState;
  staff: Staff;

  constructor(
    private staffService: StaffService,
    private store: Store<StaffState>
  ) {
    this.staffSub = this.store
      .select<any>('currentStaffReducer')
      .subscribe((state) => {
        this.staffState = state;
        if (this.staffState != null || this.staffState != undefined) {
          this.staff = this.staffState.staff;
        }
      });
  }

  ngOnInit(): void {}

  getStaff = (code: string): void => {
    this.staffService.getStaff(code).subscribe(
      (staff: Staff) => {
        this.staff = staff;
      },
      (error: any) => {}
    );
  };
}
