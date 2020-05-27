import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Staff } from 'src/app/model/staff.model';
import { StaffService } from 'src/app/services/staff.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss'],
})
export class BiodataComponent implements OnInit {
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
    // console.log(this.activeRoute);

    this.routeSub = this.activeRoute.params.subscribe((params: any) => {
      console.log(params);
      // this.getStaff(params.params.code);
    });
  };

  getStaff = (code: string): void => {
    this.staffService.getStaff(code).subscribe(
      (staff: Staff) => {
        this.staff = staff;
        console.log(this.staff);
      },
      (error: any) => {}
    );
  };
}
