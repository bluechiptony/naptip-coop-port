import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { PostingService } from 'src/app/services/posting.service';
import { MatSort } from '@angular/material/sort';
import { Posting } from 'src/app/model/posting.model';
import { MatDialog } from '@angular/material/dialog';
import { PostingRequestModalComponent } from 'src/app/modals/posting-request-modal/posting-request-modal.component';

@Component({
  selector: 'app-posting-table',
  templateUrl: './posting-table.component.html',
  styleUrls: ['./posting-table.component.scss'],
})
export class PostingTableComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Posting>;
  postings: Posting[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor(private promotion: PostingService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.prepTableResources();
    this.fetchPosting();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Prepares table resources
   */
  prepTableResources = (): void => {
    this.dataSource = new MatTableDataSource(this.postings);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  /**
   * Fetches postings from remote
   */
  fetchPosting = (): void => {
    this.loading = true;
    this.userSubscription = this.promotion.getPostings().subscribe(
      (data: Posting[]) => {
        console.log(data);

        this.loading = false;
        this.hasError = false;
        this.addPostingToDataSource(data);
      },

      (error) => {
        console.log(error);

        this.hasError = true;
        this.loading = false;
      }
    );
  };

  /**
   * Adds postings to datasource
   */
  addPostingToDataSource = (postings: Posting[]): void => {
    postings.map((user) => {
      this.dataSource.data.push(user);
    });
    this.dataSource.paginator = this.paginator;
  };

  openPostingModal = (): void => {
    this.dialog.open(PostingRequestModalComponent, {
      width: '500px',
    });
  };
}
