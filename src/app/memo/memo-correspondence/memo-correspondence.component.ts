import { Component, OnInit } from '@angular/core';
import { MemoService } from 'src/app/services/memo.service';
import { MemoReply, memoReplies } from 'src/app/model/memo.model';
import { MemoResponseModalComponent } from 'src/app/modals/memo-response-modal/memo-response-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-memo-correspondence',
  templateUrl: './memo-correspondence.component.html',
  styleUrls: ['./memo-correspondence.component.scss'],
})
export class MemoCorrespondenceComponent implements OnInit {
  replies: MemoReply[] = [];

  constructor(private memoService: MemoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.replies = memoReplies;
  }

  openResponseModal = (): void => {
    this.dialog.open(MemoResponseModalComponent, {
      width: '500px',
    });
  };
}
