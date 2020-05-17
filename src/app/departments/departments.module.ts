import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentTableModule } from '../tables/department-table/department-table.module';

@NgModule({
  declarations: [DepartmentsComponent],
  imports: [CommonModule, DepartmentsRoutingModule, DepartmentTableModule],
})
export class DepartmentsModule {}
