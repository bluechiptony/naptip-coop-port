import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PromotionTableModule } from '../tables/promotion-table/promotion-table.module';
import { PromotionRequestModalComponent } from '../modals/promotion-request-modal/promotion-request-modal.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [PromotionComponent],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    PromotionTableModule,
    MatDependenciesModule,
    FormDependenciesModule,
    SharedComponentModule,
  ],
  entryComponents: [PromotionRequestModalComponent],
})
export class PromotionModule {}
