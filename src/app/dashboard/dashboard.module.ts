import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from '../overview/overview.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OverviewModule,
    MatMenuModule,
  ],
})
export class DashboardModule {}
