import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoResponseModalComponent } from './memo-response-modal.component';

describe('MemoResponseModalComponent', () => {
  let component: MemoResponseModalComponent;
  let fixture: ComponentFixture<MemoResponseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoResponseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
