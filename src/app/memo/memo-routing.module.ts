import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoComponent } from './memo.component';
import { NewMemoComponent } from './new-memo/new-memo.component';
import { SingleMemoComponent } from './single-memo/single-memo.component';

const routes: Routes = [
  { path: '', component: MemoComponent },
  { path: 'new-memo', component: NewMemoComponent },
  { path: 'view/:code', component: SingleMemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoRoutingModule {}
