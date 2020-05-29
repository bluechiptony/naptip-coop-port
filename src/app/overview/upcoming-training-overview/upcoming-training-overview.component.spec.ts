import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTrainingOverviewComponent } from './upcoming-training-overview.component';

describe('UpcomingTrainingOverviewComponent', () => {
  let component: UpcomingTrainingOverviewComponent;
  let fixture: ComponentFixture<UpcomingTrainingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTrainingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTrainingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
