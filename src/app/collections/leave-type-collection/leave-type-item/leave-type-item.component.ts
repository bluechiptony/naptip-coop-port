import { Component, OnInit, Input } from '@angular/core';
import { LeaveType, LeaveTypeItem } from 'src/app/model/leave.model';

@Component({
  selector: 'app-leave-type-item',
  templateUrl: './leave-type-item.component.html',
  styleUrls: ['./leave-type-item.component.scss'],
})
export class LeaveTypeItemComponent implements OnInit {
  @Input('leaveTypeItem') leaveTypeItem: LeaveTypeItem;

  constructor() {}

  ngOnInit(): void {}
}
