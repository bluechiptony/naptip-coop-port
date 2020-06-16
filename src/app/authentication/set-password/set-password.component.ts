import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PasswordRequest } from 'src/app/model/authentication.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  appForm: FormGroup;
  isSubmitted: boolean;
  loading: boolean;
  action: string = 'Activate Account';
  isActivation: boolean;
  code: string;
  routeSubscription: Subscription;
  errorMessage: string;
  hasError: boolean;
  constructor(
    private fb: FormBuilder,
    private actioveRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private app: AppService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.checkRoute();
    this.buildForm();
  }

  checkRoute = () => {
    this.routeSubscription = this.actioveRoute.url.subscribe((params) => {
      this.code = params[1].path;
      if (params[0].path == 'reset-password') {
        this.action = 'Set Password';
      } else {
        this.action = 'Activate Account';
        this.isActivation = true;
      }
    });
  };

  buildForm = () => {
    this.appForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  };

  submitForm = () => {
    this.hasError = false;
    this.isSubmitted = true;
    if (this.appForm.valid) {
      if (
        this.checkPasswordStrings(
          this.appForm.value.password,
          this.appForm.value.confirmPassword
        )
      ) {
        this.makeSetPasswordRequest(
          {
            token: this.code,
            password: this.appForm.value.password,
          },
          this.isActivation
        );
      } else {
        this.appForm
          .get('confirmPassword')
          .setErrors({ unEqualPassword: 'Your passwords do not match' });
      }
    }
  };

  checkPasswordStrings = (pass: string, confirmPass: string): boolean => {
    return pass === confirmPass;
  };

  makeRecoveryRequest = (request: any) => {};

  makeSetPasswordRequest = (
    request: PasswordRequest,
    isActivation: boolean
  ) => {
    this.loading = true;
    this.authService.setPassword(request, isActivation).subscribe(
      (data: any) => {
        this.loading = false;
        this.app.showSuccess(data.message);
        this.router.navigate(['/']);
      },
      (error) => {
        this.loading = false;

        this.errorMessage = this.app.processError(error);
        this.hasError = true;
      }
    );
  };

  get password() {
    return this.appForm.get('password');
  }
  get confirmPassword() {
    return this.appForm.get('confirmPassword');
  }
}
