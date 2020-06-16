import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { StaffService } from 'src/app/services/staff.service';
import { MatSort } from '@angular/material/sort';
import { Staff } from 'src/app/model/staff.model';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
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
  staffMembers: Staff[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(
    private staff: StaffService,
    private dialog: MatDialog,
    private authenticationServie: AuthenticationService
  ) {}

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
    this.userSubscription = this.authenticationServie
      .getUsersAndAccounts()
      .subscribe(
        (data: Staff[]) => {
          console.log(data);

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

  openUserModal = (): void => {
    this.dialog.open(UserModalComponent, {
      width: '500px',
    });
  };
}
