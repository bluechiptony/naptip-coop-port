import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { NoticeOverviewComponent } from './notice-overview/notice-overview.component';
import { MemoOverviewComponent } from './memo-overview/memo-overview.component';
import { PromotionOverviewComponent } from './promotion-overview/promotion-overview.component';
import { StaffOverviewComponent } from './staff-overview/staff-overview.component';


@NgModule({
  declarations: [OverviewComponent, EventOverviewComponent, NoticeOverviewComponent, MemoOverviewComponent, PromotionOverviewComponent, StaffOverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
