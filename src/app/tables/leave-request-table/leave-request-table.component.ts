import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { LeaveService } from 'src/app/services/leave.service';
import { MatSort } from '@angular/material/sort';
import { Leave } from 'src/app/model/leave.model';
import { MatDialog } from '@angular/material/dialog';
import { LeaveRequestModalComponent } from 'src/app/modals/leave-request-modal/leave-request-modal.component';

@Component({
  selector: 'app-leave-request-table',
  templateUrl: './leave-request-table.component.html',
  styleUrls: ['./leave-request-table.component.scss'],
})
export class LeaveRequestTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'leaveStatus',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Leave>;
  leaves: Leave[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private leave: LeaveService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchLeave();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.leaves);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches leaves from remote
   */
  fetchLeave = (): void => {
    this.loading = true;
    this.userSubscription = this.leave.getLeaves().subscribe(
      (data: Leave[]) => {
        this.loading = false;
        this.hasError = false;
        this.addLeaveToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds leaves to datasource
   */
  addLeaveToDataSource = (leaves: Leave[]): void => {
    leaves.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };

  openLeaveRequest = () => {
    this.dialog.open(LeaveRequestModalComponent, {
      width: '500px',
    });
  };
}
