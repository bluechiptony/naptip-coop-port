import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ZonalCommandService } from 'src/app/services/zonal-command.service';

@Component({
  selector: 'app-single-zonal-command',
  templateUrl: './single-zonal-command.component.html',
  styleUrls: ['./single-zonal-command.component.scss'],
})
export class SingleZonalCommandComponent implements OnInit, OnDestroy {
  zonalCommand: any;
  routeSubscription: Subscription;
  constructor(
    private activeRoute: ActivatedRoute,
    private zonalCommandService: ZonalCommandService
  ) {}
  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.makeRouteSubscription();
  }

  makeRouteSubscription = () => {
    this.routeSubscription = this.activeRoute.params.subscribe((data) => {
      console.log(data);
      this.getZonalCommand(data.code);
    });
  };

  getZonalCommand = (zonalCommandCode: string) => {
    this.zonalCommandService.getZonalCommand(zonalCommandCode).subscribe(
      (data: any) => {
        this.zonalCommand = data;
        console.log(this.zonalCommand);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
