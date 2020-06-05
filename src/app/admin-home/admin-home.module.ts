import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminHomeComponent } from './admin-home.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule, AdminHomeRoutingModule, RouterModule, MatMenuModule],
})
export class AdminHomeModule {}
