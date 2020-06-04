import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Staff, staffMembers } from 'src/app/model/staff.model';

@Component({
  selector: 'app-staff-collection',
  templateUrl: './staff-collection.component.html',
  styleUrls: ['./staff-collection.component.scss'],
})
export class StaffCollectionComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Staff>;
  promotions: Staff[] = [];
  @Input('staff') staff: Staff[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor() {}

  ngOnInit(): void {
    this.loadDataSource(staffMembers);
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

  loadDataSource = (data: Staff[]) => {
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
}
