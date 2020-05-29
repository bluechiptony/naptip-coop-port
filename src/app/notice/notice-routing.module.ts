import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeComponent } from './notice.component';
import { NewNoticeComponent } from './new-notice/new-notice.component';
import { SingleNoticeComponent } from './single-notice/single-notice.component';

const routes: Routes = [
  { path: '', component: NoticeComponent },
  { path: 'create', component: NewNoticeComponent },
  { path: 'view/:code', component: SingleNoticeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeRoutingModule {}
