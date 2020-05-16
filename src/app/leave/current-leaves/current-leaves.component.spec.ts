import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLeavesComponent } from './current-leaves.component';

describe('CurrentLeavesComponent', () => {
  let component: CurrentLeavesComponent;
  let fixture: ComponentFixture<CurrentLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
