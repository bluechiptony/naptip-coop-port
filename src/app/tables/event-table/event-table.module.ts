import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTableComponent } from './event-table.component';

@NgModule({
  declarations: [EventTableComponent],
  imports: [CommonModule],
  exports: [EventTableComponent],
})
export class EventTableModule {}
