import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoTableComponent } from './memo-table.component';

@NgModule({
  declarations: [MemoTableComponent],
  imports: [CommonModule],
  exports: [MemoTableComponent],
})
export class MemoTableModule {}
