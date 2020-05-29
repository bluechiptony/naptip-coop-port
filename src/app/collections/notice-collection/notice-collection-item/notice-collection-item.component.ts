import { Component, OnInit, Input } from '@angular/core';
import { Notice } from 'src/app/model/notice.model';

@Component({
  selector: 'app-notice-collection-item',
  templateUrl: './notice-collection-item.component.html',
  styleUrls: ['./notice-collection-item.component.scss'],
})
export class NoticeCollectionItemComponent implements OnInit {
  @Input('notice') notice: Notice;
  constructor() {}

  ngOnInit(): void {}
}
