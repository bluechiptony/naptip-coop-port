import { Component, OnInit } from '@angular/core';
import { Notice, notices } from 'src/app/model/notice.model';

@Component({
  selector: 'app-notice-overview',
  templateUrl: './notice-overview.component.html',
  styleUrls: ['./notice-overview.component.scss'],
})
export class NoticeOverviewComponent implements OnInit {
  notices: Notice[] = notices;

  constructor() {}

  ngOnInit(): void {}
}
