import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffTableComponent } from './staff-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [StaffTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [StaffTableComponent],
})
export class StaffTableModule {}
