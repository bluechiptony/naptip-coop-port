import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

import { RouterModule } from '@angular/router';
import { ReportCollectionComponent } from './report-collection.component';
import { ReportCollectionItemComponent } from './report-collection-item/report-collection-item.component';

@NgModule({
  declarations: [ReportCollectionComponent, ReportCollectionItemComponent],
  imports: [CommonModule, MatDependenciesModule, RouterModule],
  exports: [ReportCollectionComponent, ReportCollectionItemComponent],
})
export class ReportCollectionModule {}
