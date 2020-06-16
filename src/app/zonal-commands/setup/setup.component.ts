import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StaffSelectionModalComponent } from 'src/app/modals/staff-selection-modal/staff-selection-modal.component';
import { DepartmentSelectModalComponent } from 'src/app/modals/department-select-modal/department-select-modal.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ZonalCommandService } from 'src/app/services/zonal-command.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-zonal-command-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  @Input('zonalCommand') zonalCommand: any;
  routeSubscription: Subscription;
  zonalCommandHead: any;
  zonalCommandCode: string;
  units: any[] = [];
  constructor(
    private dialog: MatDialog,
    private zonalCommandService: ZonalCommandService,
    private app: AppService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.makeRouteSubscription();
  }

  makeRouteSubscription = () => {
    this.routeSubscription = this.activeRoute.params.subscribe((data) => {
      this.getUnits(data.code);
      this.getZonalCommandHead(data.code);
      this.zonalCommandCode = data.code;
    });
  };

  getUnits = (zonalCommandCode: string) => {
    this.zonalCommandService
      .getUnitsForZonalCommand(zonalCommandCode)
      .subscribe(
        (data: any) => {
          this.units = data;
        },
        (error) => {
          this.app.processError(error);
        }
      );
  };

  getUnitHead = (zonalCommandCode: string) => {
    this.zonalCommandService.getZonalCommand(zonalCommandCode).subscribe(
      (data: any) => {},
      (error) => {
        this.app.processError(error);
      }
    );
  };

  openDepartmentSelect() {
    this.dialog
      .open(DepartmentSelectModalComponent, {
        width: '400px',
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
        this.createUnitInCommand(this.zonalCommandCode, data.departmentCode);
      });
  }

  openStaffSelect() {
    this.dialog
      .open(StaffSelectionModalComponent, {
        width: '800px',
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
  }

  getZonalCommandHead = (zonalCommadCode: string) => {
    this.zonalCommandService.getZonalCommand(zonalCommadCode).subscribe(
      (data: any) => {},
      (error) => {}
    );
  };

  createUnitInCommand = (zonalCommand: string, departmentCode: string) => {
    this.zonalCommandService
      .createUnitForZonalCommand(zonalCommand, departmentCode)
      .subscribe(
        (data: any) => {
          this.app.showSuccess(data.message);
        },
        (error) => {
          this.app.processError(error);
        }
      );
  };
}
