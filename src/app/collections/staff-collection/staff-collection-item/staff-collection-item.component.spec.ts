import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCollectionItemComponent } from './staff-collection-item.component';

describe('StaffCollectionItemComponent', () => {
  let component: StaffCollectionItemComponent;
  let fixture: ComponentFixture<StaffCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
