import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMemoComponent } from './single-memo.component';

describe('SingleMemoComponent', () => {
  let component: SingleMemoComponent;
  let fixture: ComponentFixture<SingleMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
