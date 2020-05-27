import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingRequestModalComponent } from './posting-request-modal.component';

describe('PostingRequestModalComponent', () => {
  let component: PostingRequestModalComponent;
  let fixture: ComponentFixture<PostingRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
