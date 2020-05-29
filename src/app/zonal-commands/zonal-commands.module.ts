import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ZonalCommandsRoutingModule } from './zonal-commands-routing.module';
import { ZonalCommandsComponent } from './zonal-commands.component';
import { ZonalCommandTableModule } from '../tables/zonal-command-table/zonal-command-table.module';
import { SingleZonalCommandComponent } from './single-zonal-command/single-zonal-command.component';
import { StaffTableModule } from '../tables/staff-table/staff-table.module';
import { TransferTableModule } from '../tables/transfer-table/transfer-table.module';
import { MatDependenciesModule } from '../shared/mat-dependencies/mat-dependencies.module';
import { LeaveRequestTableModule } from '../tables/leave-request-table/leave-request-table.module';

@NgModule({
  declarations: [ZonalCommandsComponent, SingleZonalCommandComponent],
  imports: [
    CommonModule,
    ZonalCommandsRoutingModule,
    ZonalCommandTableModule,
    StaffTableModule,
    TransferTableModule,
    LeaveRequestTableModule,
    MatDependenciesModule,
    RouterModule,
  ],
})
export class ZonalCommandsModule {}
