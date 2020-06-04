import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BiodataComponent } from './biodata/biodata.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';

@NgModule({
  declarations: [ProfileComponent, BiodataComponent, CertificationsComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedComponentModule],
})
export class ProfileModule {}
