import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { NewReportComponent } from './new-report/new-report.component';
import { SingleReportComponent } from './single-report/single-report.component';

const routes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'create', component: NewReportComponent },
  { path: 'view/:code', component: SingleReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
