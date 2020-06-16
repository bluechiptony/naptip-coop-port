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
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-select-modal',
  templateUrl: './department-select-modal.component.html',
  styleUrls: ['./department-select-modal.component.scss'],
})
export class DepartmentSelectModalComponent implements OnInit {
  staffMembers: any[] = [];
  staff: any[] = [];
  selectedStaff: any[] = [];
  editorConfig: AngularEditorConfig = editorConfig;

  selected: any;
  departments: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<DepartmentSelectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departmentService: DepartmentService,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  close = (): void => {
    this.dialogRef.close(false);
  };

  onChange = (evt: any): void => {
    this.selected = evt;
  };

  selectItems = (): void => {};

  sendSelectedItemsBack = (): void => {};

  getDepartments = () => {
    this.departmentService.getRemoteDepartments().subscribe((data: any) => {
      this.departments = data;
    });
  };

  setSelected = () => {
    if (this.selected) {
      this.dialogRef.close(this.selected);
    }
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
