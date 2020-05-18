import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleZonalCommandComponent } from './single-zonal-command.component';

describe('SingleZonalCommandComponent', () => {
  let component: SingleZonalCommandComponent;
  let fixture: ComponentFixture<SingleZonalCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleZonalCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleZonalCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
