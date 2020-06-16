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
import { NewZonalCommandComponent } from './new-zonal-command/new-zonal-command.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  declarations: [
    ZonalCommandsComponent,
    SingleZonalCommandComponent,
    NewZonalCommandComponent,
    SetupComponent,
  ],
  imports: [
    CommonModule,
    ZonalCommandsRoutingModule,
    ZonalCommandTableModule,
    StaffTableModule,
    TransferTableModule,
    LeaveRequestTableModule,
    MatDependenciesModule,
    FormDependenciesModule,
    RouterModule,
  ],
})
export class ZonalCommandsModule {}
