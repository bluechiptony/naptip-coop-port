import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonalCommandsRoutingModule } from './zonal-commands-routing.module';
import { ZonalCommandsComponent } from './zonal-commands.component';


@NgModule({
  declarations: [ZonalCommandsComponent],
  imports: [
    CommonModule,
    ZonalCommandsRoutingModule
  ]
})
export class ZonalCommandsModule { }
