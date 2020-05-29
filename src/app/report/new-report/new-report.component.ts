import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependencies/form-dependencies.module';
import { Staff } from 'src/app/model/staff.model';
import { MatDialog } from '@angular/material/dialog';
import { StaffSelectionModalComponent } from 'src/app/modals/staff-selection-modal/staff-selection-modal.component';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss'],
})
export class NewReportComponent implements OnInit {
  meetingForm: FormGroup;
  editorConfig: AngularEditorConfig = editorConfig;
  selectedStaff: Staff[] = [];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm = (): void => {
    this.meetingForm = this.fb.group({
      noticeMessage: [],
    });
  };

  openStaffSelect = (): void => {
    this.dialog
      .open(StaffSelectionModalComponent, {
        width: '70%',
      })
      .afterClosed()
      .subscribe((data) => {
        if (data != null || data != undefined) {
          console.log(data);
          this.selectedStaff = [...this.selectedStaff, ...data];
        }
      });
  };

  get noticeMessage() {
    return this.meetingForm.get('noticeMessage');
  }
}
