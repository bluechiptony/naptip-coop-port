import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoRoutingModule } from './memo-routing.module';
import { MemoComponent } from './memo.component';
import { MemoTableModule } from '../tables/memo-table/memo-table.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { NewMemoComponent } from './new-memo/new-memo.component';
import { SingleMemoComponent } from './single-memo/single-memo.component';
import { MemoCorrespondenceComponent } from './memo-correspondence/memo-correspondence.component';
import { RouterModule } from '@angular/router';
import { MemoDetailsComponent } from './memo-details/memo-details.component';
import { MemoReplyItemComponent } from './memo-reply-item/memo-reply-item.component';

@NgModule({
  declarations: [
    MemoComponent,
    NewMemoComponent,
    SingleMemoComponent,
    MemoCorrespondenceComponent,
    MemoDetailsComponent,
    MemoReplyItemComponent,
  ],
  imports: [
    CommonModule,
    MemoRoutingModule,
    MemoTableModule,
    MatDependenciesModule,
    RouterModule,
  ],
})
export class MemoModule {}
