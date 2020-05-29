import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCollectionComponent } from './certificate-collection.component';

describe('CertificateCollectionComponent', () => {
  let component: CertificateCollectionComponent;
  let fixture: ComponentFixture<CertificateCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
