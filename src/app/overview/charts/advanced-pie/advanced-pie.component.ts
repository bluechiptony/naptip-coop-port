import { Component, OnInit, Input } from '@angular/core';
import { PieValue } from '../../staff-overview/staff-overview.component';

@Component({
  selector: 'app-advanced-pie',
  templateUrl: './advanced-pie.component.html',
  styleUrls: ['./advanced-pie.component.scss'],
})
export class AdvancedPieComponent implements OnInit {
  @Input('dataPass') dataPass: PieValue;

  single: any[] = [
    {
      name: 'Female',
      value: 8940000,
    },
    {
      name: 'Male',
      value: 5000000,
    },
  ];
  view: any[] = [100, 100];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    // this.single = this.data
    console.log(this.dataPass);

    Object.assign(this, this.single);
  }

  ngOnInit(): void {}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
