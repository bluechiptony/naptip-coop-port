import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { NoticesComponent } from './notices/notices.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [ActivityComponent, NoticesComponent, CalendarComponent, EventsComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
