import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCollectionItemComponent } from './certificate-collection-item.component';

describe('CertificateCollectionItemComponent', () => {
  let component: CertificateCollectionItemComponent;
  let fixture: ComponentFixture<CertificateCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
