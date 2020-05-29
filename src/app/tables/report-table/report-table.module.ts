import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportTableComponent } from './report-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [ReportTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [ReportTableComponent],
})
export class ReportTableModule {}
