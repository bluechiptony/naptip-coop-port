import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentsComponent } from './departments.component';
import { SingleDepartmentComponent } from './single-department/single-department.component';

const routes: Routes = [
  { path: '', component: DepartmentsComponent },
  { path: 'view/:code', component: SingleDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
