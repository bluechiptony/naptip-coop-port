import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { SingleTrainingComponent } from './single-training/single-training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'create', component: NewTrainingComponent },
  { path: 'view/:code', component: SingleTrainingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
