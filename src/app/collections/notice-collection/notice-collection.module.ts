import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeCollectionComponent } from './notice-collection.component';
import { MatDependenciesModule } from 'src/app/shared/mat-dependencies/mat-dependencies.module';
import { NoticeCollectionItemComponent } from './notice-collection-item/notice-collection-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NoticeCollectionComponent, NoticeCollectionItemComponent],
  imports: [CommonModule, MatDependenciesModule, RouterModule],
  exports: [NoticeCollectionComponent, NoticeCollectionItemComponent],
})
export class NoticeCollectionModule {}
