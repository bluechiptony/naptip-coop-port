import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationSettingsComponent } from './organization-settings/organization-settings.component';
import { DepartmentSettingsComponent } from './department-settings/department-settings.component';
import { PositionSettingsComponent } from './position-settings/position-settings.component';
import { StaffSettingsComponent } from './staff-settings/staff-settings.component';


@NgModule({
  declarations: [SettingsComponent, OrganizationComponent, OrganizationSettingsComponent, DepartmentSettingsComponent, PositionSettingsComponent, StaffSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
