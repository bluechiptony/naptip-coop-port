import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventCollectionModule } from '../collections/event-collection/event-collection.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { EventModalComponent } from '../modals/event-modal/event-modal.component';

@NgModule({
  declarations: [EventComponent, EventModalComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    MatDependenciesModule,
    EventCollectionModule,
  ],
  entryComponents: [EventModalComponent],
})
export class EventModule {}
