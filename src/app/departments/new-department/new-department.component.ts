import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependencies/form-dependencies.module';
import { Staff } from 'src/app/model/staff.model';
import { MatDialog } from '@angular/material/dialog';
import { StaffSelectionModalComponent } from 'src/app/modals/staff-selection-modal/staff-selection-modal.component';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.scss'],
})
export class NewDepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  loading: boolean;
  editorConfig: AngularEditorConfig = editorConfig;
  selectedStaff: Staff[] = [];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private departmentService: DepartmentService,
    private app: AppService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm = (department?: Department): void => {
    this.departmentForm = this.fb.group({
      departmentName: [department?.departmentName, Validators.required],
    });
  };

  submitForm = () => {
    if (this.departmentForm.valid) {
      console.log(this.departmentForm.value);
      this.createNewDepartment(this.departmentForm.value.departmentName);
    } else {
    }
  };

  createNewDepartment = (departmentName: string) => {
    this.loading = true;
    this.departmentService.createDepartment(departmentName).subscribe(
      (data: any) => {
        this.loading = false;

        if (data.hasOwnProperty('departmentCode')) {
          this.app.showSuccess('Department successfully created');
          this.location.back();
        }
      },
      (error) => {
        this.loading = false;
        this.app.showError('Cannot complete process');
      }
    );
  };

  openStaffSelect = (): void => {
    this.dialog.open(StaffSelectionModalComponent, {
      width: '70%',
    });
  };

  get departmentName() {
    return this.departmentForm.get('departmentName');
  }
}
