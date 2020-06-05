import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationsDashboardComponent } from './operations-dashboard.component';

const routes: Routes = [{ path: '', component: OperationsDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsDashboardRoutingModule { }
