import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { TransferService } from 'src/app/services/transfer.service';
import { MatSort } from '@angular/material/sort';
import { Transfer } from 'src/app/model/transfer.model';

@Component({
  selector: 'app-transfer-table',
  templateUrl: './transfer-table.component.html',
  styleUrls: ['./transfer-table.component.scss'],
})
export class TransferTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Transfer>;
  transfers: Transfer[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private promotion: TransferService) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchTransfer();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.transfers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches transfers from remote
   */
  fetchTransfer = (): void => {
    this.loading = true;
    this.userSubscription = this.promotion.getTransfers().subscribe(
      (data: Transfer[]) => {
        console.log(data);

        this.loading = false;
        this.hasError = false;
        this.addTransferToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds transfers to datasource
   */
  addTransferToDataSource = (transfers: Transfer[]): void => {
    transfers.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };
}
