import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestTableComponent } from './leave-request-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { LeaveRequestModalComponent } from 'src/app/modals/leave-request-modal/leave-request-modal.component';
import { FormDependenciesModule } from 'src/app/shared/form-dependencies/form-dependencies.module';

@NgModule({
  declarations: [LeaveRequestTableComponent],
  imports: [CommonModule, MatDependenciesModule, FormDependenciesModule],
  exports: [LeaveRequestTableComponent],
  entryComponents: [LeaveRequestModalComponent],
})
export class LeaveRequestTableModule {}
