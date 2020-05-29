import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingTableComponent } from './meeting-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MeetingTableComponent],
  imports: [CommonModule, MatDependenciesModule, RouterModule],
  exports: [MeetingTableComponent],
})
export class MeetingTableModule {}
