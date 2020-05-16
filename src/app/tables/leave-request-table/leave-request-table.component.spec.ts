import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestTableComponent } from './leave-request-table.component';

describe('LeaveRequestTableComponent', () => {
  let component: LeaveRequestTableComponent;
  let fixture: ComponentFixture<LeaveRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveRequestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
