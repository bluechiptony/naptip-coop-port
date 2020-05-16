import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityComponent } from './activity.component';
import { NoticesComponent } from './notices/notices.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '', component: ActivityComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
