import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTableComponent } from './event-table.component';
import { EventModalComponent } from 'src/app/modals/event-modal/event-modal.component';

@NgModule({
  declarations: [EventTableComponent],
  imports: [CommonModule],
  exports: [EventTableComponent],
  entryComponents: [EventModalComponent],
})
export class EventTableModule {}
