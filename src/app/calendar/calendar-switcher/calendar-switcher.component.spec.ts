import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSwitcherComponent } from './calendar-switcher.component';

describe('CalendarSwitcherComponent', () => {
  let component: CalendarSwitcherComponent;
  let fixture: ComponentFixture<CalendarSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
