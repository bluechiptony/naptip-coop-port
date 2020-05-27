import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCollectionItemComponent } from './event-collection-item.component';

describe('EventCollectionItemComponent', () => {
  let component: EventCollectionItemComponent;
  let fixture: ComponentFixture<EventCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
