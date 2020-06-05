import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { FormDependenciesModule } from 'src/app/shared/form-dependencies/form-dependencies.module';

@NgModule({
  declarations: [UserTableComponent],
  imports: [CommonModule, MatDependenciesModule, FormDependenciesModule],
  exports: [UserTableComponent],
})
export class UserTableModule {}
