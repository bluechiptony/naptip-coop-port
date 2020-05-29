import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoReplyItemComponent } from './memo-reply-item.component';

describe('MemoReplyItemComponent', () => {
  let component: MemoReplyItemComponent;
  let fixture: ComponentFixture<MemoReplyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoReplyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoReplyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
