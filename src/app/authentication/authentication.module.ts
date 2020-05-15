import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule, FormDependenciesModule],
})
export class AuthenticationModule {}
