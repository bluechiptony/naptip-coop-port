import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffTableComponent } from './staff-table.component';

@NgModule({
  declarations: [StaffTableComponent],
  imports: [CommonModule],
  exports: [StaffTableComponent],
})
export class StaffTableModule {}
