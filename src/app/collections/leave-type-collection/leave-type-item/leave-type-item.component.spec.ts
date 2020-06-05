import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeItemComponent } from './leave-type-item.component';

describe('LeaveTypeItemComponent', () => {
  let component: LeaveTypeItemComponent;
  let fixture: ComponentFixture<LeaveTypeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTypeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
