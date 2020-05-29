import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { NewReportComponent } from './new-report/new-report.component';

const routes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'create', component: NewReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
