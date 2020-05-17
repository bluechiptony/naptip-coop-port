import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveComponent } from './leave.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { CurrentLeavesComponent } from './current-leaves/current-leaves.component';

const routes: Routes = [
  { path: '', component: LeaveComponent },
  { path: 'requests', component: LeaveRequestsComponent },
  { path: 'types', component: LeaveTypesComponent },
  { path: 'current', component: CurrentLeavesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRoutingModule {}
