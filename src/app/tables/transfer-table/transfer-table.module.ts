import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferTableComponent } from './transfer-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { RouterModule } from '@angular/router';
import { TransferRequestModalComponent } from 'src/app/modals/transfer-request-modal/transfer-request-modal.component';

@NgModule({
  declarations: [TransferTableComponent],
  imports: [CommonModule, MatDependenciesModule, RouterModule],
  exports: [TransferTableComponent],
  entryComponents: [TransferRequestModalComponent],
})
export class TransferTableModule {}
