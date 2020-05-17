import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PromotionTableModule } from '../tables/promotion-table/promotion-table.module';

@NgModule({
  declarations: [PromotionComponent],
  imports: [CommonModule, PromotionRoutingModule, PromotionTableModule],
})
export class PromotionModule {}
