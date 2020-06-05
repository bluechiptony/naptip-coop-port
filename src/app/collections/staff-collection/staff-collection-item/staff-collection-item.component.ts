import { Component, OnInit, Input } from '@angular/core';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-staff-collection-item',
  templateUrl: './staff-collection-item.component.html',
  styleUrls: ['./staff-collection-item.component.scss'],
})
export class StaffCollectionItemComponent implements OnInit {
  @Input('staff') staff: Staff;

  constructor() {}

  ngOnInit(): void {}
}
