import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingTableModule } from '../tables/training-table/training-table.module';
import { TrainingTableComponent } from '../tables/training-table/training-table.component';

@NgModule({
  declarations: [TrainingComponent],
  imports: [CommonModule, TrainingRoutingModule, TrainingTableModule],
  entryComponents: [],
})
export class TrainingModule {}
