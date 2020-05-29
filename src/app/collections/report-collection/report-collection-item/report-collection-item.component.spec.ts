import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCollectionItemComponent } from './report-collection-item.component';

describe('ReportCollectionItemComponent', () => {
  let component: ReportCollectionItemComponent;
  let fixture: ComponentFixture<ReportCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
