import { Component, OnInit, Input } from '@angular/core';
import { MemoReply } from 'src/app/model/memo.model';

@Component({
  selector: 'app-memo-reply-item',
  templateUrl: './memo-reply-item.component.html',
  styleUrls: ['./memo-reply-item.component.scss'],
})
export class MemoReplyItemComponent implements OnInit {
  @Input('reply') reply: MemoReply;

  constructor() {}

  ngOnInit(): void {
    console.log(this.reply);
  }
}
