import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePersonnelComponent } from '../components/single-personnel/single-personnel.component';
import { StaffSelectionModalComponent } from '../../modals/staff-selection-modal/staff-selection-modal.component';
import { FormDependenciesModule } from '../form-dependencies/form-dependencies.module';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { PostingRequestModalComponent } from 'src/app/modals/posting-request-modal/posting-request-modal.component';
import { TransferRequestModalComponent } from 'src/app/modals/transfer-request-modal/transfer-request-modal.component';
import { PromotionRequestModalComponent } from 'src/app/modals/promotion-request-modal/promotion-request-modal.component';
import { MatDependenciesModule } from '../mat-dependencies/mat-dependencies.module';
import { LeaveTypeCollectionComponent } from '../../collections/leave-type-collection/leave-type-collection.component';
import { LeaveTypeItemComponent } from '../../collections/leave-type-collection/leave-type-item/leave-type-item.component';

@NgModule({
  declarations: [
    SinglePersonnelComponent,
    StaffSelectionModalComponent,
    PostingRequestModalComponent,
    TransferRequestModalComponent,
    PromotionRequestModalComponent,
    LeaveTypeCollectionComponent,
    LeaveTypeItemComponent,
  ],
  imports: [
    CommonModule,
    FormDependenciesModule,
    MatDependenciesModule,
    NgOptionHighlightModule,
    NgSelectModule,
  ],
  exports: [
    SinglePersonnelComponent,
    StaffSelectionModalComponent,
    PostingRequestModalComponent,
    TransferRequestModalComponent,
    PromotionRequestModalComponent,
    LeaveTypeCollectionComponent,
    LeaveTypeItemComponent,
  ],
})
export class SharedComponentModule {}
