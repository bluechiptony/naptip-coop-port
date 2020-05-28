import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoResolutionModalComponent } from './memo-resolution-modal.component';

describe('MemoResolutionModalComponent', () => {
  let component: MemoResolutionModalComponent;
  let fixture: ComponentFixture<MemoResolutionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoResolutionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoResolutionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
