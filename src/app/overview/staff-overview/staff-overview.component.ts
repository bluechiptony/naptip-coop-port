import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-overview',
  templateUrl: './staff-overview.component.html',
  styleUrls: ['./staff-overview.component.scss'],
})
export class StaffOverviewComponent implements OnInit {
  pieData: PieValue = {
    data: [
      {
        name: 'Female',
        value: 8940000,
      },
      {
        name: 'Male',
        value: 5000000,
      },
    ],
  };

  constructor() {
    console.log(this.pieData);
  }

  ngOnInit(): void {}
}

export interface PieValue {
  data: any[];
}
