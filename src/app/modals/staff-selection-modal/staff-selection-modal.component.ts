import { Component, OnInit, Inject } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-staff-selection-modal',
  templateUrl: './staff-selection-modal.component.html',
  styleUrls: ['./staff-selection-modal.component.scss'],
})
export class StaffSelectionModalComponent implements OnInit {
  staffMembers: any[] = [];
  staff: any[] = [];
  selectedStaff: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<StaffSelectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
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

  finishSelection = () => {
    this.dialogRef.close(this.selectedStaff);
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
