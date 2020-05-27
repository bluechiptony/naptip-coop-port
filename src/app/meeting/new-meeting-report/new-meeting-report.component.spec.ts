import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetingReportComponent } from './new-meeting-report.component';

describe('NewMeetingReportComponent', () => {
  let component: NewMeetingReportComponent;
  let fixture: ComponentFixture<NewMeetingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMeetingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMeetingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
