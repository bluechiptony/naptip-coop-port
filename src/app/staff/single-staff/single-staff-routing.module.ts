import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleStaffComponent } from './single-staff.component';
import { BiodataComponent } from '../biodata/biodata.component';
import { PostingTableModule } from 'src/app/tables/posting-table/posting-table.module';
import { PostingTableComponent } from 'src/app/tables/posting-table/posting-table.component';
import { PromotionTableComponent } from 'src/app/tables/promotion-table/promotion-table.component';
import { LeaveRequestTableComponent } from 'src/app/tables/leave-request-table/leave-request-table.component';
import { TransferTableComponent } from 'src/app/tables/transfer-table/transfer-table.component';
import { TrainingTableComponent } from 'src/app/tables/training-table/training-table.component';

const routes: Routes = [
  {
    path: '',
    component: SingleStaffComponent,

    children: [
      { path: 'biodata', component: BiodataComponent },
      { path: 'certificates', component: PostingTableComponent },
      { path: 'postings', component: PostingTableComponent },
      { path: 'trainings', component: TrainingTableComponent },
      { path: 'transfers', component: TransferTableComponent },
      { path: 'leaves', component: LeaveRequestTableComponent },
      { path: 'promotions', component: PromotionTableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleStaffRoutingModule {}
