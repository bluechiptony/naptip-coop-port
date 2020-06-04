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
import { departments } from 'src/app/model/department.model';
import { AccountTypes } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  staffMembers: any[] = [];
  staff: any[] = [];
  commands: any[] = zonalCommands;
  departments: any[] = departments;
  accountTypes: any[] = Object.keys(AccountTypes);
  selectedStaff: any[] = [];
  editorConfig: AngularEditorConfig = editorConfig;
  constructor(
    private dialogRef: MatDialogRef<UserModalComponent>,
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
