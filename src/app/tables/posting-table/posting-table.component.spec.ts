import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingTableComponent } from './posting-table.component';

describe('PostingTableComponent', () => {
  let component: PostingTableComponent;
  let fixture: ComponentFixture<PostingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
