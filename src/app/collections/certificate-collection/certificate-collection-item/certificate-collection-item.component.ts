import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from 'src/app/model/certificate.model';

@Component({
  selector: 'app-certificate-collection-item',
  templateUrl: './certificate-collection-item.component.html',
  styleUrls: ['./certificate-collection-item.component.scss'],
})
export class CertificateCollectionItemComponent implements OnInit {
  @Input('certificate') certificate: Certificate;
  constructor() {}

  ngOnInit(): void {}
}
