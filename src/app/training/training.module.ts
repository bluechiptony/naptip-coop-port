import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingTableModule } from '../tables/training-table/training-table.module';
import { NewTrainingComponent } from './new-training/new-training.component';
import { SingleTrainingComponent } from './single-training/single-training.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [
    TrainingComponent,
    NewTrainingComponent,
    SingleTrainingComponent,
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    TrainingTableModule,
    HttpClientModule,
    RouterModule,
    FormDependenciesModule,
    MatDependenciesModule,
    SharedComponentModule,
  ],
})
export class TrainingModule {}
