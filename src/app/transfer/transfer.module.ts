import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { TransferTableModule } from '../tables/transfer-table/transfer-table.module';
import { TransferRequestModalComponent } from '../modals/transfer-request-modal/transfer-request-modal.component';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [TransferComponent],
  imports: [
    CommonModule,
    TransferRoutingModule,
    TransferTableModule,
    SharedComponentModule,
  ],
  entryComponents: [TransferRequestModalComponent],
})
export class TransferModule {}
