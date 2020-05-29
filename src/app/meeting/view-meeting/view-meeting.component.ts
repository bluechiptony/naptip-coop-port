import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from 'src/app/model/meeting.model';

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.scss'],
})
export class ViewMeetingComponent implements OnInit {
  routeSub: Subscription;
  currentMeet: Meeting;

  constructor(
    private activeRoute: ActivatedRoute,
    private meetingService: MeetingService
  ) {}

  ngOnInit(): void {
    this.createRouteSub();
  }

  createRouteSub = (): void => {
    this.routeSub = this.activeRoute.paramMap.subscribe((params: any) => {
      // console.log(params.params.code);
      this.getMeeting(params.params.code);
    });
  };

  getMeeting = (meetingCode: string): void => {
    this.meetingService.getMeeting(meetingCode).subscribe(
      (meeting: Meeting) => {
        this.currentMeet = meeting;
      },
      (error: any) => {}
    );
  };

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
