import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionTableComponent } from './promotion-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [PromotionTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [PromotionTableComponent],
})
export class PromotionTableModule {}
