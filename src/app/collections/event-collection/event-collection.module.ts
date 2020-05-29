import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCollectionComponent } from './event-collection.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { EventCollectionItemComponent } from './event-collection-item/event-collection-item.component';

@NgModule({
  declarations: [EventCollectionComponent, EventCollectionItemComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [EventCollectionComponent, EventCollectionItemComponent],
})
export class EventCollectionModule {}
