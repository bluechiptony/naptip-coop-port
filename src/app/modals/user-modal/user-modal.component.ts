import { Component, OnInit, Inject } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependencies/form-dependencies.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveRequestModalComponent } from '../leave-request-modal/leave-request-modal.component';
import { LeaveService } from 'src/app/services/leave.service';
import { LeaveType } from 'src/app/model/leave.model';
import { zonalCommands } from 'src/app/model/zonal-command.model';
import { StaffService } from 'src/app/services/staff.service';
import { Staff, AccountAssignment } from 'src/app/model/staff.model';
import { departments } from 'src/app/model/department.model';
import { AccountTypes, User } from 'src/app/model/user.model';
import { ZonalCommandService } from 'src/app/services/zonal-command.service';
import { DepartmentService } from 'src/app/services/department.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthenticationProfile } from 'src/app/model/authentication.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  staffMembers: any[] = [];
  staff: any[] = [];
  commands: any[] = zonalCommands;
  userForm: FormGroup;
  loading: boolean;
  accountTypes: any[] = Object.keys(AccountTypes);
  selectedStaff: any[] = [];
  zonalCommands: any[] = [];
  departments: any[] = [];
  selectedUnit: any;
  editorConfig: AngularEditorConfig = editorConfig;
  constructor(
    private dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private leaveService: LeaveService,
    private staffService: StaffService,
    private app: AppService,
    private zonalCommandService: ZonalCommandService,
    private departmentService: DepartmentService,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();

    this.getDepartments();
    this.getZonalCommands();
  }

  buildForm = (user?: any) => {
    this.userForm = this.fb.group({
      firstName: [],
      lastName: [],
      emailAddress: [],
      zonalCommandCode: [],
      departmentCode: [],
      accountType: [],
    });
  };

  close = (): void => {
    this.dialogRef.close(false);
  };

  onChange = (evt: any): void => {
    console.log(evt);

    this.getUnits(evt.zonalCommandCode);
  };
  onUnitChange = (evt: any) => {
    this.selectedUnit = evt;
  };

  submitForm = () => {
    if (this.userForm.valid) {
      let user = this.userForm.value;
      this.createUser(user);
    } else {
    }
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
          this.departments = data;
        },
        (error) => {
          this.app.processError(error);
        }
      );
  };

  createUser = (user: User) => {
    this.loading = true;
    this.authenticationService.createUserAccount(user).subscribe(
      (data: any) => {
        console.log(data);

        this.loading = false;
        this.authenticationService.showSuccess(data.message);
        if (data.hasOwnProperty('userCode')) {
          let profile: AuthenticationProfile = {
            emailAddress: user.emailAddress,
            accountType: user.accountType,
            userCode: data.userCode,
          };
          this.createAuthenticationProfile(profile);
        }
      },
      (error) => {
        this.loading = false;
        this.app.processError(error);
      }
    );
  };

  createAuthenticationProfile = (profile: AuthenticationProfile) => {
    this.loading = true;
    this.authenticationService.createAuthenticationProfile(profile).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
        this.authenticationService.showSuccess(data.message);
        if (data.hasOwnProperty('userCode')) {
          let assignment: AccountAssignment = {
            userCode: data.userCode,
            departmentCode: this.userForm.value.departmentCode,
            zonalCommandCode: this.userForm.value.zonalCommandCode,
          };
          this.assignToUnit(assignment);
        }
      },
      (error) => {
        this.loading = false;
        this.app.processError(error);
      }
    );
  };

  assignToUnit = (assignment: AccountAssignment) => {
    this.staffService.assignStaffAccount(assignment).subscribe(
      (data: any) => {
        this.loading = false;
        this.authenticationService.showSuccess(data.message);
      },
      (error) => {
        this.loading = false;
        this.app.processError(error);
      }
    );
  };

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get emailAddress() {
    return this.userForm.get('emailAddress');
  }
  get departmentCode() {
    return this.userForm.get('departmentCode');
  }
  get zonalCommandCode() {
    return this.userForm.get('zonalCommandCode');
  }
  get accountType() {
    return this.userForm.get('accountType');
  }
}
