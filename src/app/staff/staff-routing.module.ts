import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffComponent } from './staff.component';
import { SingleStaffComponent } from './single-staff/single-staff.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: StaffComponent },
  {
    path: 'view/:code',
    loadChildren: () =>
      import('./single-staff/single-staff.module').then(
        (m) => m.SingleStaffModule
      ),
  },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
