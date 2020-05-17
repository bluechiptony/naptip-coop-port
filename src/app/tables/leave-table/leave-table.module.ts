import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveTableComponent } from './leave-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [LeaveTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [LeaveTableComponent],
})
export class LeaveTableModule {}
