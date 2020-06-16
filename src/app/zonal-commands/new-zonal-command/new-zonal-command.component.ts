import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from 'src/app/shared/form-dependencies/form-dependencies.module';
import { Staff } from 'src/app/model/staff.model';
import { MatDialog } from '@angular/material/dialog';
import { StaffSelectionModalComponent } from 'src/app/modals/staff-selection-modal/staff-selection-modal.component';
import { ZonalCommand } from 'src/app/model/zonal-command.model';
import { ZonalCommandService } from 'src/app/services/zonal-command.service';
import { DepartmentService } from 'src/app/services/department.service';
import { LocaleService } from 'src/app/services/locale.service';
import { Location } from '@angular/common';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-new-zonal-command',
  templateUrl: './new-zonal-command.component.html',
  styleUrls: ['./new-zonal-command.component.scss'],
})
export class NewZonalCommandComponent implements OnInit {
  zonalCommandForm: FormGroup;
  editorConfig: AngularEditorConfig = editorConfig;
  selectUnits: boolean;
  selectHead: boolean;
  loading: boolean;
  selectedStaff: Staff[] = [];
  states: any[] = [];
  lgas: any[] = [];
  departments: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private zonalCommadService: ZonalCommandService,
    private departmentService: DepartmentService,
    private localeService: LocaleService,
    private location: Location,
    private app: AppService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getStates();
    this.getDepartments();
  }

  buildForm = (zonalCommand?: ZonalCommand): void => {
    this.zonalCommandForm = this.fb.group({
      zonalCommandName: [zonalCommand?.zoneName, Validators.required],
      state: [zonalCommand?.state, Validators.required],
      lga: [zonalCommand?.lga, Validators.required],
    });
  };

  submitForm = () => {
    if (this.zonalCommandForm.valid) {
      console.log(this.zonalCommandForm.value);
      this.zonalCommandForm.value.active = true;
      this.createZonalCommand(this.zonalCommandForm.value);
    } else {
    }
  };

  toggleSelectUnits = () => {
    this.selectUnits = !this.selectUnits;
  };
  toggleSelectHead = () => {
    this.selectHead = !this.selectHead;
  };

  getDepartments = () => {
    this.departmentService.getRemoteDepartments().subscribe(
      (data: any) => {
        this.departments = data;
      },
      (error) => {}
    );
  };

  getStates = () => {
    this.localeService.getStates().subscribe(
      (data: any) => {
        console.log(data);
        this.states = data;
      },
      (error) => {}
    );
  };

  getLocalGovernmentsForState = (stateId: number) => {
    this.localeService.getLgasForState(stateId).subscribe(
      (data: any) => {
        console.log(data);
        this.lgas = data;
      },
      (error) => {}
    );
  };

  stateSelected = (evt: any) => {
    this.getLocalGovernmentsForState(evt.stateId);
  };

  createZonalCommand = (command: ZonalCommand) => {
    this.loading = true;
    this.zonalCommadService.createZonalCommandWithDetails(command).subscribe(
      (data: any) => {
        console.log(data);

        this.loading = false;

        if (data.hasOwnProperty('zonalCommandCode')) {
          this.app.showSuccess('Zonal command successfully created');
          this.location.back();
        }
      },
      (error) => {
        this.loading = false;
        this.app.showError('Cannot complete process');
      }
    );
  };

  openStaffSelect = (): void => {
    this.dialog.open(StaffSelectionModalComponent, {
      width: '70%',
    });
  };

  get zonalCommandName() {
    return this.zonalCommandForm.get('zonalCommandName');
  }
  get state() {
    return this.zonalCommandForm.get('state');
  }
  get lga() {
    return this.zonalCommandForm.get('lga');
  }
}
