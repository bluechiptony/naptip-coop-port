import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonalCommandsComponent } from './zonal-commands.component';
import { SingleZonalCommandComponent } from './single-zonal-command/single-zonal-command.component';
import { NewZonalCommandComponent } from './new-zonal-command/new-zonal-command.component';

const routes: Routes = [
  { path: '', component: ZonalCommandsComponent },
  { path: 'view/:code', component: SingleZonalCommandComponent },
  { path: 'new', component: NewZonalCommandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonalCommandsRoutingModule {}
