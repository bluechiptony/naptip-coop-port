import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { ZonalCommandService } from 'src/app/services/zonal-command.service';
import { MatSort } from '@angular/material/sort';

import { ZonalCommand } from 'src/app/model/zonal-command.model';

@Component({
  selector: 'app-zonal-command-table',
  templateUrl: './zonal-command-table.component.html',
  styleUrls: ['./zonal-command-table.component.scss'],
})
export class ZonalCommandTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    // 'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<ZonalCommand>;
  zonalCommands: ZonalCommand[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private zonalCommand: ZonalCommandService) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchZonalCommand();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.zonalCommands);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches zonalCommands from remote
   */
  fetchZonalCommand = (): void => {
    this.loading = true;
    this.userSubscription = this.zonalCommand
      .getRemoteZonalCommands()
      .subscribe(
        (data: any[]) => {
          console.log(data);

          this.loading = false;
          this.hasError = false;
          this.addZonalCommandToDataSource(data);
        },

        (error) => {
          console.log(error);

          this.hasError = true;
          this.loading = false;
        }
      );
  };

  /**
   * Adds zonalCommands to datasource
   */
  addZonalCommandToDataSource = (zonalCommands: ZonalCommand[]): void => {
    zonalCommands.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };
}
