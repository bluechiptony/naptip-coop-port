import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionTableComponent } from './promotion-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { RouterModule } from '@angular/router';
import { PromotionRequestModalComponent } from 'src/app/modals/promotion-request-modal/promotion-request-modal.component';

@NgModule({
  declarations: [PromotionTableComponent],
  imports: [CommonModule, MatDependenciesModule, RouterModule],
  exports: [PromotionTableComponent],
  entryComponents: [PromotionRequestModalComponent],
})
export class PromotionTableModule {}
