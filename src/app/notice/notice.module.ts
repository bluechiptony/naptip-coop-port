import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { NoticeCollectionModule } from '../collections/notice-collection/notice-collection.module';
import { NewNoticeComponent } from './new-notice/new-notice.component';
import { SingleNoticeComponent } from './single-notice/single-notice.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [NoticeComponent, NewNoticeComponent, SingleNoticeComponent],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    NoticeCollectionModule,
    HttpClientModule,
    RouterModule,
    FormDependenciesModule,
    MatDependenciesModule,
    SharedComponentModule,
  ],
})
export class NoticeModule {}
