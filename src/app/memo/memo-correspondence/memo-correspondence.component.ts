import { Component, OnInit } from '@angular/core';
import { MemoService } from 'src/app/services/memo.service';
import { MemoReply, memoReplies } from 'src/app/model/memo.model';

@Component({
  selector: 'app-memo-correspondence',
  templateUrl: './memo-correspondence.component.html',
  styleUrls: ['./memo-correspondence.component.scss'],
})
export class MemoCorrespondenceComponent implements OnInit {
  replies: MemoReply[] = [];

  constructor(private memoService: MemoService) {}

  ngOnInit(): void {
    this.replies = memoReplies;
  }
}
