import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoTableComponent } from './memo-table.component';

describe('MemoTableComponent', () => {
  let component: MemoTableComponent;
  let fixture: ComponentFixture<MemoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
