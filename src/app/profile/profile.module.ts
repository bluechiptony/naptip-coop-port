import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BiodataComponent } from './biodata/biodata.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';
import { EmploymentProfileComponent } from './employment-profile/employment-profile.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [
    ProfileComponent,
    BiodataComponent,
    CertificationsComponent,
    EmploymentProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedComponentModule,
    FormDependenciesModule,
    MatDependenciesModule,
  ],
})
export class ProfileModule {}
