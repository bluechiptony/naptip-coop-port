import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { CurrentLeavesComponent } from './current-leaves/current-leaves.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { LeaveTableModule } from '../tables/leave-table/leave-table.module';
import { LeaveRequestTableModule } from '../tables/leave-request-table/leave-request-table.module';
import { NewRequestComponent } from './new-request/new-request.component';
import { LeaveRequestModalComponent } from '../modals/leave-request-modal/leave-request-modal.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [
    LeaveComponent,
    LeaveRequestsComponent,
    CurrentLeavesComponent,
    LeaveTypesComponent,
    NewRequestComponent,
    LeaveRequestModalComponent,
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    LeaveRequestTableModule,
    FormDependenciesModule,
    MatDependenciesModule,
    SharedComponentModule,
  ],
  entryComponents: [LeaveRequestModalComponent],
})
export class LeaveModule {}
