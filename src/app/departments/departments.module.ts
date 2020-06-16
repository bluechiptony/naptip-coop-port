import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentTableModule } from '../tables/department-table/department-table.module';
import { SingleDepartmentComponent } from './single-department/single-department.component';
import { StaffTableModule } from '../tables/staff-table/staff-table.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { PostingTableModule } from '../tables/posting-table/posting-table.module';
import { LeaveRequestTableModule } from '../tables/leave-request-table/leave-request-table.module';
import { NewDepartmentComponent } from './new-department/new-department.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  declarations: [
    DepartmentsComponent,
    SingleDepartmentComponent,
    NewDepartmentComponent,
    SetupComponent,
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    DepartmentTableModule,
    StaffTableModule,
    PostingTableModule,
    LeaveRequestTableModule,
    RouterModule,
    MatDependenciesModule,
    FormDependenciesModule,
  ],
})
export class DepartmentsModule {}
