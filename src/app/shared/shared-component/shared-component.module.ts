import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePersonnelComponent } from '../components/single-personnel/single-personnel.component';
import { StaffSelectionModalComponent } from '../../modals/staff-selection-modal/staff-selection-modal.component';
import { FormDependenciesModule } from '../form-dependencies/form-dependencies.module';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [SinglePersonnelComponent, StaffSelectionModalComponent],
  imports: [
    CommonModule,
    FormDependenciesModule,
    NgOptionHighlightModule,
    NgSelectModule,
  ],
  exports: [SinglePersonnelComponent, StaffSelectionModalComponent],
})
export class SharedComponentModule {}
