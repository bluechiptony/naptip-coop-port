import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentTableComponent } from './department-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [DepartmentTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [DepartmentTableComponent],
})
export class DepartmentTableModule {}
