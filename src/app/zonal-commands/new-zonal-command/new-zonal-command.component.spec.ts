import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewZonalCommandComponent } from './new-zonal-command.component';

describe('NewZonalCommandComponent', () => {
  let component: NewZonalCommandComponent;
  let fixture: ComponentFixture<NewZonalCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewZonalCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewZonalCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
