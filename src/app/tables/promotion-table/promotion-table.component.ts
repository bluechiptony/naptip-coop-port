import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { PromotionService } from 'src/app/services/promotion.service';
import { MatSort } from '@angular/material/sort';
import { Promotion } from 'src/app/model/promotion.model';
import { PostingRequestModalComponent } from 'src/app/modals/posting-request-modal/posting-request-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { PromotionRequestModalComponent } from 'src/app/modals/promotion-request-modal/promotion-request-modal.component';

@Component({
  selector: 'app-promotion-table',
  templateUrl: './promotion-table.component.html',
  styleUrls: ['./promotion-table.component.scss'],
})
export class PromotionTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Promotion>;
  promotions: Promotion[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private promotion: PromotionService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchPromotion();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.promotions);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches promotions from remote
   */
  fetchPromotion = (): void => {
    this.loading = true;
    this.userSubscription = this.promotion.getPromotions().subscribe(
      (data: Promotion[]) => {
        console.log(data);

        this.loading = false;
        this.hasError = false;
        this.addPromotionToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds promotions to datasource
   */
  addPromotionToDataSource = (promotions: Promotion[]): void => {
    promotions.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };

  openTransferModal = (): void => {
    this.dialog.open(PromotionRequestModalComponent, {
      width: '500px',
    });
  };
}
