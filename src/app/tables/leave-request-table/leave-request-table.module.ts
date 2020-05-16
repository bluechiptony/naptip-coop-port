import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestTableComponent } from './leave-request-table.component';

@NgModule({
  declarations: [LeaveRequestTableComponent],
  imports: [CommonModule],
  exports: [LeaveRequestTableComponent],
})
export class LeaveRequestTableModule {}
