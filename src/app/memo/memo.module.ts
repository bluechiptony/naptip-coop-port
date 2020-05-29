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
import { HttpClientModule } from '@angular/common/http';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';
import { MemoResponseModalComponent } from '../modals/memo-response-modal/memo-response-modal.component';
import { MemoResolutionModalComponent } from '../modals/memo-resolution-modal/memo-resolution-modal.component';

@NgModule({
  declarations: [
    MemoComponent,
    NewMemoComponent,
    SingleMemoComponent,
    MemoCorrespondenceComponent,
    MemoDetailsComponent,
    MemoReplyItemComponent,
    MemoResponseModalComponent,
    MemoResolutionModalComponent,
  ],
  imports: [
    CommonModule,
    MemoRoutingModule,
    MemoTableModule,
    HttpClientModule,
    RouterModule,
    FormDependenciesModule,
    MatDependenciesModule,
    SharedComponentModule,
  ],
  entryComponents: [MemoResolutionModalComponent, MemoResponseModalComponent],
})
export class MemoModule {}
