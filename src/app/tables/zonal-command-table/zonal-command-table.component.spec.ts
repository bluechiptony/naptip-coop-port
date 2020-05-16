import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonalCommandTableComponent } from './zonal-command-table.component';

describe('ZonalCommandTableComponent', () => {
  let component: ZonalCommandTableComponent;
  let fixture: ComponentFixture<ZonalCommandTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonalCommandTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonalCommandTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
