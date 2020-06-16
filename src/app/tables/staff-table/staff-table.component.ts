import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { StaffService } from 'src/app/services/staff.service';
import { MatSort } from '@angular/material/sort';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.scss'],
})
export class StaffTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'designation',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Staff>;
  staffMembers: Staff[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private staff: StaffService) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchStaff();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.staffMembers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches staffMembers from remote
   */
  fetchStaff = (): void => {
    this.loading = true;
    this.userSubscription = this.staff.getStaffMembers().subscribe(
      (data: Staff[]) => {
        this.loading = false;
        this.hasError = false;
        this.addStaffToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds staffMembers to datasource
   */
  addStaffToDataSource = (staffMembers: Staff[]): void => {
    staffMembers.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };
}
