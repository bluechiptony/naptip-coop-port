import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { StaffTableModule } from '../tables/staff-table/staff-table.module';

@NgModule({
  declarations: [StaffComponent],
  imports: [CommonModule, StaffRoutingModule, StaffTableModule],
})
export class StaffModule {}
