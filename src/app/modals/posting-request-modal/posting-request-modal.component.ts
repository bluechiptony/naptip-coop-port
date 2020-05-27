import { Component, OnInit, Inject } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependencies/form-dependencies.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveRequestModalComponent } from '../leave-request-modal/leave-request-modal.component';
import { LeaveService } from 'src/app/services/leave.service';
import { LeaveType } from 'src/app/model/leave.model';
import { departments } from 'src/app/model/department.model';
import { StaffService } from 'src/app/services/staff.service';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-posting-request-modal',
  templateUrl: './posting-request-modal.component.html',
  styleUrls: ['./posting-request-modal.component.scss'],
})
export class PostingRequestModalComponent implements OnInit {
  staffMembers: any[] = [];
  staff: any[] = [];
  selectedStaff: any[] = [];
  editorConfig: AngularEditorConfig = editorConfig;

  departments: any[] = departments;

  constructor(
    private dialogRef: MatDialogRef<LeaveRequestModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private leaveService: LeaveService,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.getLeaveTypes();
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
