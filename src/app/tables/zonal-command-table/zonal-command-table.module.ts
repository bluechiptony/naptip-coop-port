import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonalCommandTableComponent } from './zonal-command-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ZonalCommandTableComponent],
  imports: [CommonModule, MatDependenciesModule, RouterModule],
  exports: [ZonalCommandTableComponent],
})
export class ZonalCommandTableModule {}
