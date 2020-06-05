import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCollectionComponent } from './staff-collection.component';

describe('StaffCollectionComponent', () => {
  let component: StaffCollectionComponent;
  let fixture: ComponentFixture<StaffCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
