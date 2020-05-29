import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRequestModalComponent } from './transfer-request-modal.component';

describe('TransferRequestModalComponent', () => {
  let component: TransferRequestModalComponent;
  let fixture: ComponentFixture<TransferRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
