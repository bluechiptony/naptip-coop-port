import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { DepartmentService } from 'src/app/services/department.service';
import { MatSort } from '@angular/material/sort';
import { Department } from 'src/app/model/department.model';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.scss'],
})
export class DepartmentTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    // 'phoneNumber',
    // 'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Department>;
  departments: Department[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private department: DepartmentService) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchDepartment();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.departments);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches departments from remote
   */
  fetchDepartment = (): void => {
    console.log('loadubgf');

    this.loading = true;
    this.userSubscription = this.department.getRemoteDepartments().subscribe(
      (data: Department[]) => {
        console.log(data);

        this.loading = false;
        this.hasError = false;
        this.addDepartmentToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds departments to datasource
   */
  addDepartmentToDataSource = (departments: Department[]): void => {
    departments.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };
}
