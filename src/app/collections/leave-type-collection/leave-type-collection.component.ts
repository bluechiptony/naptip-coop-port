import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  LeaveType,
  LeaveTypeItem,
  leaveTypes,
} from 'src/app/model/leave.model';
import { MatDialog } from '@angular/material/dialog';
import { LeaveTypeModalComponent } from 'src/app/modals/leave-type-modal/leave-type-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-leave-type-collection',
  templateUrl: './leave-type-collection.component.html',
  styleUrls: ['./leave-type-collection.component.scss'],
})
export class LeaveTypeCollectionComponent implements OnInit {
  loading: boolean;
  leaveTypeItems: LeaveTypeItem[] = leaveTypes;
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<LeaveTypeItem>;
  promotions: LeaveTypeItem[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  hasError: boolean;
  errorMessage: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadDataSource(this.leaveTypeItems);
  }
  users: any[] = [];
  private paginator: MatPaginator;

  @ViewChild(MatPaginator, { static: false }) set contentPaginator(
    content: MatPaginator
  ) {
    this.paginator = content;
  }
  displayCollection: Observable<any>;

  pageNumber: any = 1;
  pageSize: any = 20;
  hasData: boolean;

  setUpPaginatorAndSorter() {
    // throw new Error("Method not implemented.");
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  /**
   * Searched through dataSource collection
   * @param filter
   */
  applyFilter(filter: string) {
    if (filter.length >= 0) {
      this.dataSource.filter = filter.trim().toLowerCase();
    }
  }

  loadDataSource = (data: LeaveTypeItem[]) => {
    this.loading = false;
    if (data.length > 0) {
      this.dataSource = new MatTableDataSource(data);
      this.hasData = true;
      this.hasError = false;
      this.displayCollection = this.dataSource.connect();
      this.setUpPaginatorAndSorter();
    } else {
      this.hasData = false;
      this.hasError = false;
    }
  };

  openLeaveModal = (): void => {
    this.dialog.open(LeaveTypeModalComponent, {
      width: '400px',
    });
  };
}
