import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserTableModule } from '../tables/user-table/user-table.module';
import { UserModalComponent } from '../modals/user-modal/user-modal.component';
import { FormDependenciesModule } from '../shared/form-dependencies/form-dependencies.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [UserComponent, UserModalComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserTableModule,
    FormDependenciesModule,
    SharedComponentModule,
  ],
  entryComponents: [UserModalComponent],
})
export class UserModule {}
