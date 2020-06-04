import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsDashboardRoutingModule } from './operations-dashboard-routing.module';
import { OperationsDashboardComponent } from './operations-dashboard.component';


@NgModule({
  declarations: [OperationsDashboardComponent],
  imports: [
    CommonModule,
    OperationsDashboardRoutingModule
  ]
})
export class OperationsDashboardModule { }
