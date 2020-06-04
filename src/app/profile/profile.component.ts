import { Component, OnInit } from '@angular/core';
import { Staff } from '../model/staff.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  staff: Staff;
  constructor() {}

  ngOnInit(): void {}
}
