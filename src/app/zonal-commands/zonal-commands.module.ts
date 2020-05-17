import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonalCommandsRoutingModule } from './zonal-commands-routing.module';
import { ZonalCommandsComponent } from './zonal-commands.component';
import { ZonalCommandTableModule } from '../tables/zonal-command-table/zonal-command-table.module';

@NgModule({
  declarations: [ZonalCommandsComponent],
  imports: [CommonModule, ZonalCommandsRoutingModule, ZonalCommandTableModule],
})
export class ZonalCommandsModule {}
