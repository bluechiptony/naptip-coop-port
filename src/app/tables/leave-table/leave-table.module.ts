import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveTableComponent } from './leave-table.component';

@NgModule({
  declarations: [LeaveTableComponent],
  imports: [CommonModule],
  exports: [LeaveTableComponent],
})
export class LeaveTableModule {}
