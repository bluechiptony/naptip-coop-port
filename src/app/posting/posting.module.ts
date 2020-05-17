import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { PostingTableModule } from '../tables/posting-table/posting-table.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [PostingComponent],
  imports: [
    CommonModule,
    PostingRoutingModule,
    PostingTableModule,
    MatDependenciesModule,
  ],
})
export class PostingModule {}
