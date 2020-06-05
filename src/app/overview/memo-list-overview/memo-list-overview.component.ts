import { Component, OnInit } from '@angular/core';
import { Memo, memos } from 'src/app/model/memo.model';

@Component({
  selector: 'app-memo-list-overview',
  templateUrl: './memo-list-overview.component.html',
  styleUrls: ['./memo-list-overview.component.scss'],
})
export class MemoListOverviewComponent implements OnInit {
  memos: Memo[] = memos;
  constructor() {}

  ngOnInit(): void {}
}
