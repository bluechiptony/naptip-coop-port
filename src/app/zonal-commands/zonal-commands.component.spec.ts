import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonalCommandsComponent } from './zonal-commands.component';

describe('ZonalCommandsComponent', () => {
  let component: ZonalCommandsComponent;
  let fixture: ComponentFixture<ZonalCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonalCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonalCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
