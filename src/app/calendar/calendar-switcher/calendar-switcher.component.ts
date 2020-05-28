import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-switcher',
  templateUrl: './calendar-switcher.component.html',
  styleUrls: ['./calendar-switcher.component.scss'],
})
export class CalendarSwitcherComponent implements OnInit {
  @Input() view: CalendarView | 'month' | 'week' | 'day';

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
