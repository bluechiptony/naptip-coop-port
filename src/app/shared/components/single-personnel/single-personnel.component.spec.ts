import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePersonnelComponent } from './single-personnel.component';

describe('SinglePersonnelComponent', () => {
  let component: SinglePersonnelComponent;
  let fixture: ComponentFixture<SinglePersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
