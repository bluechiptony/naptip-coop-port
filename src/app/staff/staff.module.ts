import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { StaffTableModule } from '../tables/staff-table/staff-table.module';

import { SettingsComponent } from './settings/settings.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { PromotionTableModule } from '../tables/promotion-table/promotion-table.module';
import { TrainingTableModule } from '../tables/training-table/training-table.module';
import { PostingTableModule } from '../tables/posting-table/posting-table.module';
import { LeaveRequestTableModule } from '../tables/leave-request-table/leave-request-table.module';
import { TransferTableModule } from '../tables/transfer-table/transfer-table.module';

@NgModule({
  declarations: [StaffComponent, SettingsComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    StaffTableModule,
    PromotionTableModule,
    TrainingTableModule,
    PostingTableModule,
    LeaveRequestTableModule,
    TransferTableModule,
    MatDependenciesModule,
  ],
})
export class StaffModule {}
