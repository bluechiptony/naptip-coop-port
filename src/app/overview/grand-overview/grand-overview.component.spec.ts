import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandOverviewComponent } from './grand-overview.component';

describe('GrandOverviewComponent', () => {
  let component: GrandOverviewComponent;
  let fixture: ComponentFixture<GrandOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
