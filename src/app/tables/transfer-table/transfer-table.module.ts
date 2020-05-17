import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferTableComponent } from './transfer-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [TransferTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [TransferTableComponent],
})
export class TransferTableModule {}
