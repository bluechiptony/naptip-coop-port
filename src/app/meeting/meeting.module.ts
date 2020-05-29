import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingComponent } from './meeting.component';
import { RouterModule } from '@angular/router';
import { MeetingTableModule } from '../tables/meeting-table/meeting-table.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { NewMeetingReportComponent } from './new-meeting-report/new-meeting-report.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';
import { StaffSelectionModalComponent } from '../modals/staff-selection-modal/staff-selection-modal.component';

@NgModule({
  declarations: [
    MeetingComponent,
    NewMeetingComponent,
    ViewMeetingComponent,
    NewMeetingReportComponent,
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule,
    MeetingTableModule,
    HttpClientModule,
    RouterModule,
    FormDependenciesModule,
    MatDependenciesModule,
    SharedComponentModule,
  ],
  entryComponents: [StaffSelectionModalComponent],
})
export class MeetingModule {}
