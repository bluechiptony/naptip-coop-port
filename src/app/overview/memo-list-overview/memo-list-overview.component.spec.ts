import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoListOverviewComponent } from './memo-list-overview.component';

describe('MemoListOverviewComponent', () => {
  let component: MemoListOverviewComponent;
  let fixture: ComponentFixture<MemoListOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoListOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
