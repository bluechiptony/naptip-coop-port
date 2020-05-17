import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoRoutingModule } from './memo-routing.module';
import { MemoComponent } from './memo.component';
import { MemoTableModule } from '../tables/memo-table/memo-table.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { NewMemoComponent } from './new-memo/new-memo.component';
import { SingleMemoComponent } from './single-memo/single-memo.component';

@NgModule({
  declarations: [MemoComponent, NewMemoComponent, SingleMemoComponent],
  imports: [
    CommonModule,
    MemoRoutingModule,
    MemoTableModule,
    MatDependenciesModule,
  ],
})
export class MemoModule {}
