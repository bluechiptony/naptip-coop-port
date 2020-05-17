import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { CurrentLeavesComponent } from './current-leaves/current-leaves.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { LeaveTableModule } from '../tables/leave-table/leave-table.module';
import { LeaveRequestTableModule } from '../tables/leave-request-table/leave-request-table.module';

@NgModule({
  declarations: [
    LeaveComponent,
    LeaveRequestsComponent,
    CurrentLeavesComponent,
    LeaveTypesComponent,
  ],
  imports: [CommonModule, LeaveRoutingModule, LeaveRequestTableModule],
})
export class LeaveModule {}
