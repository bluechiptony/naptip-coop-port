import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeCollectionComponent } from './notice-collection.component';

describe('NoticeCollectionComponent', () => {
  let component: NoticeCollectionComponent;
  let fixture: ComponentFixture<NoticeCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
