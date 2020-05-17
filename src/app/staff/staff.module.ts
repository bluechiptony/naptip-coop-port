import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { StaffTableModule } from '../tables/staff-table/staff-table.module';
import { SingleStaffComponent } from './single-staff/single-staff.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [StaffComponent, SingleStaffComponent, SettingsComponent],
  imports: [CommonModule, StaffRoutingModule, StaffTableModule],
})
export class StaffModule {}
