import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MemoService } from 'src/app/services/memo.service';
import { MatSort } from '@angular/material/sort';
import { Memo } from 'src/app/model/memo.model';

@Component({
  selector: 'app-memo-table',
  templateUrl: './memo-table.component.html',
  styleUrls: ['./memo-table.component.scss'],
})
export class MemoTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'status',
    'emailAddress',
    'phoneNumber',
    // 'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Memo>;
  zonalCommands: Memo[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private zonalCommand: MemoService) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchMemo();
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
  fetchMemo = (): void => {
    this.loading = true;
    this.userSubscription = this.zonalCommand.getMemos().subscribe(
      (data: Memo[]) => {
        this.loading = false;
        this.hasError = false;
        this.addMemoToDataSource(data);
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
  addMemoToDataSource = (zonalCommands: Memo[]): void => {
    zonalCommands.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };
}
