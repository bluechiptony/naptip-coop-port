import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrDashboardRoutingModule } from './hr-dashboard-routing.module';
import { HrDashboardComponent } from './hr-dashboard.component';


@NgModule({
  declarations: [HrDashboardComponent],
  imports: [
    CommonModule,
    HrDashboardRoutingModule
  ]
})
export class HrDashboardModule { }
