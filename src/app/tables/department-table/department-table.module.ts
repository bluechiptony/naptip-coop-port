import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentTableComponent } from './department-table.component';

@NgModule({
  declarations: [DepartmentTableComponent],
  imports: [CommonModule],
  exports: [DepartmentTableComponent],
})
export class DepartmentTableModule {}
