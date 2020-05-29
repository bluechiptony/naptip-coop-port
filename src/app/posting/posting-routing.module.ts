import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostingComponent } from './posting.component';
import { SinglePostingComponent } from './single-posting/single-posting.component';

const routes: Routes = [
  { path: '', component: PostingComponent },
  { path: 'view/:code', component: SinglePostingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostingRoutingModule {}
