import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-single-staff',
  templateUrl: './single-staff.component.html',
  styleUrls: ['./single-staff.component.scss'],
})
export class SingleStaffComponent implements OnInit {
  routeSub: Subscription;
  staff: Staff;

  constructor(
    private activeRoute: ActivatedRoute,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.createRouteSub();
  }

  createRouteSub = (): void => {
    this.routeSub = this.activeRoute.paramMap.subscribe((params: any) => {
      // console.log(params.params.code);

      this.getStaff(params.params.code);
    });
  };

  getStaff = (code: string): void => {
    this.staffService.getStaff(code).subscribe(
      (staff: Staff) => {
        this.staff = staff;
      },
      (error: any) => {}
    );
  };
}
