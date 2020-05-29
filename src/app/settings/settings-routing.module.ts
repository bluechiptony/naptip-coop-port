import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { DepartmentSettingsComponent } from './department-settings/department-settings.component';
import { StaffSettingsComponent } from './staff-settings/staff-settings.component';
import { PositionSettingsComponent } from './position-settings/position-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'organization', component: OrganizationSettingsComponent },
      { path: 'departments', component: DepartmentSettingsComponent },
      { path: 'staff', component: StaffSettingsComponent },
      { path: 'directives', component: PositionSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
