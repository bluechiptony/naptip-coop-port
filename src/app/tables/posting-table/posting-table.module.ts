import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingTableComponent } from './posting-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { RouterModule } from '@angular/router';
import { PostingRequestModalComponent } from 'src/app/modals/posting-request-modal/posting-request-modal.component';
import { FormDependenciesModule } from 'src/app/shared/form-dependencies/form-dependencies.module';

@NgModule({
  declarations: [PostingTableComponent],
  imports: [
    CommonModule,
    MatDependenciesModule,
    RouterModule,
    FormDependenciesModule,
  ],
  exports: [PostingTableComponent],
  entryComponents: [PostingRequestModalComponent],
})
export class PostingTableModule {}
