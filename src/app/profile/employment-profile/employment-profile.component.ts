import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff.model';
import { AuthenticationState } from 'src/app/model/authentication.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { StaffService } from 'src/app/services/staff.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ZonalCommandService } from 'src/app/services/zonal-command.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-employment-profile',
  templateUrl: './employment-profile.component.html',
  styleUrls: ['./employment-profile.component.scss'],
})
export class EmploymentProfileComponent implements OnInit {
  staff: Staff;
  authSubscription: Subscription;
  empForm: FormGroup;
  zonalCommands: any[] = [];
  units: any[] = [];
  departments: any[] = [];
  loading: boolean;
  user: User;
  selectedDepartment: string;

  constructor(
    private authStore: Store<AuthenticationState>,
    private staffService: StaffService,
    private app: AppService,
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private zonalCommandService: ZonalCommandService
  ) {}
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.createSubscription();
    this.buildForm();
    this.getZonalCommands();
  }

  buildForm = (details?: any) => {
    this.empForm = this.fb.group({
      staffCode: [details?.staffCode],
      zonalCommandCode: [details?.zonalCommandCode],
      unitCode: [details?.unitCode],
      designation: [details?.designation],
      gradeLevel: [details?.gradeLevel],
      step: [details?.step],
      employedDate: [details?.dateOfEmployment],
    });
  };

  createSubscription(): void {
    this.authSubscription = this.authStore
      .select<any>('authenticationReducer')
      .subscribe((data: AuthenticationState) => {
        if (data.loggedIn) {
          this.user = data.user;
          this.getStaffEmploymentDetails(data.user.userCode);
        }
      });
  }

  submitForm = () => {
    if (this.empForm.valid) {
      this.saveUserInformation(this.empForm.value);
    } else {
    }
  };

  saveUserInformation = (info: any) => {
    // info.userCode = this.user.userCode;
    // info.staffCode = this.user.userCode;
    info.departmentCode = this.selectedDepartment;

    this.loading = true;
    this.staffService.createStaffEmploymentDetails(info).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;

        this.app.showSuccess(data.message);
      },
      (error) => {
        this.app.processError(error);
        this.loading = false;
      }
    );
  };

  unitChanged(evt: any) {
    this.selectedDepartment = evt.departmentCode;
  }
  getZonalCommands = () => {
    this.zonalCommandService.getRemoteZonalCommands().subscribe(
      (data: any) => {
        this.zonalCommands = data;
      },
      (error) => {}
    );
  };

  getDepartments = () => {
    this.departmentService.getRemoteDepartments().subscribe(
      (data: any) => {
        this.departments = data;
      },
      (error) => {}
    );
  };

  getUnits = (zonalCommandCode: string) => {
    this.zonalCommandService
      .getUnitsForZonalCommand(zonalCommandCode)
      .subscribe(
        (data: any) => {
          this.units = data;
        },
        (error) => {
          this.app.processError(error);
        }
      );
  };

  getStaffEmploymentDetails = (staffCode: string) => {
    this.staffService.getStaffEmploymentDetails(staffCode).subscribe(
      (data: any) => {
        // console.log(data);
        this.buildForm(data);
        this.selectedDepartment = data.departmentCode;
        this.getUnits(data.zonalCommandCode);
      },
      (error) => {
        this.app.processError(error);
      }
    );
  };

  getStaffDetails = (id: string) => {
    this.staffService.getStaffWithId(id).subscribe((staff: Staff) => {
      this.staff = staff;
      console.log(this.staff);
    });
  };
}
