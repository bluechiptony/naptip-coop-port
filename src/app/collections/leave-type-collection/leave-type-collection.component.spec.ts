import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeCollectionComponent } from './leave-type-collection.component';

describe('LeaveTypeCollectionComponent', () => {
  let component: LeaveTypeCollectionComponent;
  let fixture: ComponentFixture<LeaveTypeCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTypeCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
