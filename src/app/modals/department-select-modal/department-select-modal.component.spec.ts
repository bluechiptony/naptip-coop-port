import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSelectModalComponent } from './department-select-modal.component';

describe('DepartmentSelectModalComponent', () => {
  let component: DepartmentSelectModalComponent;
  let fixture: ComponentFixture<DepartmentSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
