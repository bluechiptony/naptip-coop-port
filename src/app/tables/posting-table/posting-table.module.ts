import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingTableComponent } from './posting-table.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';

@NgModule({
  declarations: [PostingTableComponent],
  imports: [CommonModule, MatDependenciesModule],
  exports: [PostingTableComponent],
})
export class PostingTableModule {}
