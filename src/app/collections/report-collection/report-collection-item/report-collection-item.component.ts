import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/model/report.model';

@Component({
  selector: 'app-report-collection-item',
  templateUrl: './report-collection-item.component.html',
  styleUrls: ['./report-collection-item.component.scss'],
})
export class ReportCollectionItemComponent implements OnInit {
  @Input('report') report: Report;

  constructor() {}

  ngOnInit(): void {}
}
