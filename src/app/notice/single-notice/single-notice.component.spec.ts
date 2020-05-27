import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNoticeComponent } from './single-notice.component';

describe('SingleNoticeComponent', () => {
  let component: SingleNoticeComponent;
  let fixture: ComponentFixture<SingleNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
