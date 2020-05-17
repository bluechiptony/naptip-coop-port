import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { TransferTableModule } from '../tables/transfer-table/transfer-table.module';

@NgModule({
  declarations: [TransferComponent],
  imports: [CommonModule, TransferRoutingModule, TransferTableModule],
})
export class TransferModule {}
