import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocaleService } from 'src/app/services/locale.service';
import { Subscription } from 'rxjs';
import { AuthenticationState } from 'src/app/model/authentication.model';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { StaffService } from 'src/app/services/staff.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss'],
})
export class BiodataComponent implements OnInit {
  bioDataForm: FormGroup;

  loading: boolean;
  user: User;
  authSubscription: Subscription;

  genders: any[] = ['FEMALE', 'MALE'];
  states: any[] = [];
  nationalities: any[] = [];
  lgas: any[] = [];
  departments: any[] = [];

  constructor(
    private fb: FormBuilder,
    private localeService: LocaleService,
    private staffService: StaffService,
    private app: AppService,
    private authStore: Store<AuthenticationState>
  ) {}

  ngOnInit(): void {
    this.createSubscription();
    this.buildForm();
    this.getStates();
    this.getCountries();
  }

  buildForm = (profile?: any) => {
    this.bioDataForm = this.fb.group({
      firstName: [this.user?.firstName, Validators.required],
      middleName: [profile?.middleName],
      lastName: [this.user?.lastName, Validators.required],
      nationality: [profile?.nationality, Validators.required],
      stateOfOrigin: [profile?.stateOfOrigin, Validators.required],
      lgaOfOrigin: [profile?.lgaOfOrigin, Validators.required],
      gender: [profile?.gender, Validators.required],
      dob: [profile?.dateOfBirth, Validators.required],
    });
  };

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  createSubscription(): void {
    this.authSubscription = this.authStore
      .select<any>('authenticationReducer')
      .subscribe((data: AuthenticationState) => {
        console.log(data);

        if (data.loggedIn) {
          this.user = data.user;
          // this.getStaffDetails(data.user.id);
          this.getStaffInformation(this.user.userCode);
        }
      });
  }

  submitProfile = () => {
    if (this.bioDataForm.valid) {
      // console.log(this.bioDataForm.value);

      this.saveUserInformation(this.bioDataForm.value);
    } else {
    }
  };

  saveUserInformation = (info: any) => {
    info.userCode = this.user.userCode;
    info.staffCode = this.user.userCode;
    console.log(info);

    this.loading = true;
    this.staffService.createStaff(info).subscribe(
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

  getCountries = () => {
    this.localeService.getNationalities().subscribe(
      (data: any) => {
        this.nationalities = data;
      },
      (error) => {}
    );
  };
  getStates = () => {
    this.localeService.getStates().subscribe(
      (data: any) => {
        this.states = data;
      },
      (error) => {}
    );
  };

  getLocalGovernmentsForState = (stateId: number) => {
    this.localeService.getLgasForState(stateId).subscribe(
      (data: any) => {
        this.lgas = data;
      },
      (error) => {}
    );
  };

  stateSelected = (evt: any) => {
    console.log(evt);

    this.getLocalGovernmentsForState(evt.stateId);
  };

  getStaffInformation = (userCode: string) => {
    this.staffService.getStaffDetailsWithUsercode(userCode).subscribe(
      (data: any) => {
        console.log(data);
        this.buildForm(data);
      },
      (error) => {
        this.app.processError(error);
      }
    );
  };

  get firstName() {
    return this.bioDataForm.get('firstName');
  }
  get middleName() {
    return this.bioDataForm.get('middleName');
  }
  get lastName() {
    return this.bioDataForm.get('lastName');
  }
  get nationality() {
    return this.bioDataForm.get('nationality');
  }
  get stateOfOrigin() {
    return this.bioDataForm.get('stateOfOrigin');
  }
  get lgaOfOrigin() {
    return this.bioDataForm.get('lgaOfOrigin');
  }
  get gender() {
    return this.bioDataForm.get('gender');
  }
  get dob() {
    return this.bioDataForm.get('dob');
  }
}
