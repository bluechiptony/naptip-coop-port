import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingTableComponent } from './posting-table.component';

@NgModule({
  declarations: [PostingTableComponent],
  imports: [CommonModule],
  exports: [PostingTableComponent],
})
export class PostingTableModule {}
