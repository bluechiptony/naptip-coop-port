import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSelectionModalComponent } from './staff-selection-modal.component';

describe('StaffSelectionModalComponent', () => {
  let component: StaffSelectionModalComponent;
  let fixture: ComponentFixture<StaffSelectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffSelectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
