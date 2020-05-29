import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportTableModule } from '../tables/report-table/report-table.module';
import { ReportCollectionComponent } from '../collections/report-collection/report-collection.component';
import { ReportCollectionItemComponent } from '../collections/report-collection/report-collection-item/report-collection-item.component';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { ReportCollectionModule } from '../collections/report-collection/report-collection.module';
import { NewReportComponent } from './new-report/new-report.component';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [ReportComponent, NewReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ReportTableModule,
    MatDependenciesModule,
    FormDependenciesModule,
    ReportCollectionModule,
    SharedComponentModule,
  ],
})
export class ReportModule {}
