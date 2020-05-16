import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonalCommandsComponent } from './zonal-commands.component';

const routes: Routes = [{ path: '', component: ZonalCommandsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonalCommandsRoutingModule { }
