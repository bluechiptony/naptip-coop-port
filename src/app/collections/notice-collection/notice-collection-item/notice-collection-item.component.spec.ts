import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeCollectionItemComponent } from './notice-collection-item.component';

describe('NoticeCollectionItemComponent', () => {
  let component: NoticeCollectionItemComponent;
  let fixture: ComponentFixture<NoticeCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
