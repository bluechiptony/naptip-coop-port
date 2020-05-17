import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestTableComponent } from './leave-request-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [LeaveRequestTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [LeaveRequestTableComponent],
})
export class LeaveRequestTableModule {}
