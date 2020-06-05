import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from '../overview/overview.module';
import { MatMenuModule } from '@angular/material/menu';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OverviewModule,
    MatMenuModule,
    AccordionModule.forRoot(),
  ],
})
export class DashboardModule {}
