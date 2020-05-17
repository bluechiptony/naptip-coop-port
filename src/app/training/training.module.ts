import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingTableModule } from '../tables/training-table/training-table.module';

@NgModule({
  declarations: [TrainingComponent],
  imports: [CommonModule, TrainingRoutingModule, TrainingTableModule],
})
export class TrainingModule {}
