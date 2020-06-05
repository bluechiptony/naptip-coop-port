import { Component, OnInit } from '@angular/core';
import { OfficeEvent, officeEvents } from 'src/app/model/events.model';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss'],
})
export class EventOverviewComponent implements OnInit {
  events: OfficeEvent[] = officeEvents;

  constructor() {}

  ngOnInit(): void {}
}
