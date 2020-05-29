import { Component, OnInit, Inject } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependencies/form-dependencies.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveRequestModalComponent } from '../leave-request-modal/leave-request-modal.component';
import { LeaveService } from 'src/app/services/leave.service';
import { LeaveType } from 'src/app/model/leave.model';
import { zonalCommands } from 'src/app/model/zonal-command.model';
import { StaffService } from 'src/app/services/staff.service';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-promotion-request-modal',
  templateUrl: './promotion-request-modal.component.html',
  styleUrls: ['./promotion-request-modal.component.scss'],
})
export class PromotionRequestModalComponent implements OnInit {
  staffMembers: any[] = [];
  staff: any[] = [];
  departments: any[] = zonalCommands;
  selectedStaff: any[] = [];
  editorConfig: AngularEditorConfig = editorConfig;
  constructor(
    private dialogRef: MatDialogRef<LeaveRequestModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private leaveService: LeaveService,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.getLeaveTypes();
    this.getStaffMembers();
  }

  close = (): void => {
    this.dialogRef.close(false);
  };

  onChange = (evt: any): void => {
    console.log(evt);
    this.selectedStaff = evt;
  };

  selectItems = (): void => {};

  sendSelectedItemsBack = (): void => {};

  getLeaveTypes = (): void => {
    this.leaveService
      .getLeaveTypes()
      .pipe()
      .subscribe((staff: LeaveType[]) => {
        this.staffMembers = staff;

        this.staff = [...this.staffMembers];

        console.log(this.staff);
      });
  };

  getStaffMembers = (): void => {
    this.staffService
      .getStaffMembers()
      .pipe()
      .subscribe((staff: Staff[]) => {
        staff.forEach((st) => (st.fullName = `${st.firstName} ${st.lastName}`));
        console.log(staff);

        this.staffMembers = staff;
        this.staff = [...this.staffMembers];
      });
  };
}
