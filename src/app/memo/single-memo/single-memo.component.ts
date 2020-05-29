import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemoResolutionModalComponent } from 'src/app/modals/memo-resolution-modal/memo-resolution-modal.component';

@Component({
  selector: 'app-single-memo',
  templateUrl: './single-memo.component.html',
  styleUrls: ['./single-memo.component.scss'],
})
export class SingleMemoComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openResponseModal = (): void => {
    this.dialog.open(MemoResolutionModalComponent, {
      width: '400px',
    });
  };
}
