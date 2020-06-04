import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleStaffComponent } from './single-staff.component';
import { SingleStaffRoutingModule } from './single-staff-routing.module';
import { BiodataComponent } from '../biodata/biodata.component';
import { PostingTableModule } from 'src/app/tables/posting-table/posting-table.module';
import { LeaveRequestTableComponent } from 'src/app/tables/leave-request-table/leave-request-table.component';
import { PromotionTableModule } from 'src/app/tables/promotion-table/promotion-table.module';
import { LeaveRequestTableModule } from 'src/app/tables/leave-request-table/leave-request-table.module';
import { TrainingTableModule } from 'src/app/tables/training-table/training-table.module';

@NgModule({
  declarations: [SingleStaffComponent, BiodataComponent],
  imports: [
    CommonModule,
    SingleStaffRoutingModule,
    PostingTableModule,
    LeaveRequestTableModule,
    PromotionTableModule,
    TrainingTableModule,
  ],
})
export class SingleStaffModule {}
