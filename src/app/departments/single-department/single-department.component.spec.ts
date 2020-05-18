import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDepartmentComponent } from './single-department.component';

describe('SingleDepartmentComponent', () => {
  let component: SingleDepartmentComponent;
  let fixture: ComponentFixture<SingleDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
