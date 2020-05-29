import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoCorrespondenceComponent } from './memo-correspondence.component';

describe('MemoCorrespondenceComponent', () => {
  let component: MemoCorrespondenceComponent;
  let fixture: ComponentFixture<MemoCorrespondenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoCorrespondenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoCorrespondenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
