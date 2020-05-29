import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveService } from 'src/app/services/leave.service';
import { LeaveType } from 'src/app/model/leave.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependencies/form-dependencies.module';

@Component({
  selector: 'app-leave-request-modal',
  templateUrl: './leave-request-modal.component.html',
  styleUrls: ['./leave-request-modal.component.scss'],
})
export class LeaveRequestModalComponent implements OnInit {
  staffMembers: any[] = [];
  staff: any[] = [];
  selectedStaff: any[] = [];
  editorConfig: AngularEditorConfig = editorConfig;

  constructor(
    private dialogRef: MatDialogRef<LeaveRequestModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private leaveService: LeaveService
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
}
