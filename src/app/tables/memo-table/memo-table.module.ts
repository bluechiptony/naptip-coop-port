import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoTableComponent } from './memo-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [MemoTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [MemoTableComponent],
})
export class MemoTableModule {}
