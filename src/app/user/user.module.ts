import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserTableModule } from '../tables/user-table/user-table.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, UserTableModule],
})
export class UserModule {}
