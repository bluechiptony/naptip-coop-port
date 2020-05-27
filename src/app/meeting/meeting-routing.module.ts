import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingComponent } from './meeting.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { NewMeetingReportComponent } from './new-meeting-report/new-meeting-report.component';

const routes: Routes = [
  { path: '', component: MeetingComponent },
  { path: 'create', component: NewMeetingComponent },
  { path: 'report/create/:code', component: NewMeetingReportComponent },
  { path: 'view/:code', component: ViewMeetingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetingRoutingModule {}
