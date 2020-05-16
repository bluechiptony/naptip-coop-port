import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionOverviewComponent } from './promotion-overview.component';

describe('PromotionOverviewComponent', () => {
  let component: PromotionOverviewComponent;
  let fixture: ComponentFixture<PromotionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
