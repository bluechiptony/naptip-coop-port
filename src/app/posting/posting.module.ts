import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { PostingTableModule } from '../tables/posting-table/posting-table.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { SinglePostingComponent } from './single-posting/single-posting.component';
import { PostingRequestModalComponent } from '../modals/posting-request-modal/posting-request-modal.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [PostingComponent, SinglePostingComponent],
  imports: [
    CommonModule,
    PostingRoutingModule,
    PostingTableModule,
    MatDependenciesModule,
    FormDependenciesModule,
    SharedComponentModule,
  ],
  entryComponents: [PostingRequestModalComponent],
})
export class PostingModule {}
