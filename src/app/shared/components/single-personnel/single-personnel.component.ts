import { Component, OnInit, Input } from '@angular/core';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-single-personnel',
  templateUrl: './single-personnel.component.html',
  styleUrls: ['./single-personnel.component.scss'],
})
export class SinglePersonnelComponent implements OnInit {
  @Input('person') person: Staff;

  constructor() {}

  ngOnInit(): void {}
}
