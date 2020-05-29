import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingTableComponent } from './training-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TrainingTableComponent],
  imports: [CommonModule, MatDependenciesModule, RouterModule],
  exports: [TrainingTableComponent],
})
export class TrainingTableModule {}
