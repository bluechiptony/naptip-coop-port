import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { NoticeOverviewComponent } from './notice-overview/notice-overview.component';
import { MemoOverviewComponent } from './memo-overview/memo-overview.component';
import { PromotionOverviewComponent } from './promotion-overview/promotion-overview.component';
import { StaffOverviewComponent } from './staff-overview/staff-overview.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { GrandOverviewComponent } from './grand-overview/grand-overview.component';
import { UpcomingTrainingOverviewComponent } from './upcoming-training-overview/upcoming-training-overview.component';
import { LeaveOverviewComponent } from './leave-overview/leave-overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OverviewComponent,
    EventOverviewComponent,
    NoticeOverviewComponent,
    MemoOverviewComponent,
    PromotionOverviewComponent,
    StaffOverviewComponent,
    UserOverviewComponent,
    GrandOverviewComponent,
    UpcomingTrainingOverviewComponent,
    LeaveOverviewComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatDependenciesModule,
    RouterModule,
  ],
})
export class OverviewModule {}
