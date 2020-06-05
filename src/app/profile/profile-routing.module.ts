import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { BiodataComponent } from './biodata/biodata.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EmploymentProfileComponent } from './employment-profile/employment-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', component: BiodataComponent },
      { path: 'biodata', component: BiodataComponent },
      { path: 'certificates', component: CertificationsComponent },
      { path: 'employment', component: EmploymentProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
