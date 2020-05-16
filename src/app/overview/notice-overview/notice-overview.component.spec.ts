import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeOverviewComponent } from './notice-overview.component';

describe('NoticeOverviewComponent', () => {
  let component: NoticeOverviewComponent;
  let fixture: ComponentFixture<NoticeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
