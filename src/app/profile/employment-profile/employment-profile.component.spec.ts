import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentProfileComponent } from './employment-profile.component';

describe('EmploymentProfileComponent', () => {
  let component: EmploymentProfileComponent;
  let fixture: ComponentFixture<EmploymentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
