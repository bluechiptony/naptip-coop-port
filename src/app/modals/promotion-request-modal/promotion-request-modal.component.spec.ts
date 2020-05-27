import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionRequestModalComponent } from './promotion-request-modal.component';

describe('PromotionRequestModalComponent', () => {
  let component: PromotionRequestModalComponent;
  let fixture: ComponentFixture<PromotionRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
