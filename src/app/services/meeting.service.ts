import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting, meetings } from '../model/meeting.model';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  getMeetings = (): Observable<Meeting[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(meetings);
    });

    return ogs;
  };

  getMeeting = (meetingCode: string): Observable<Meeting> => {
    var ogs = Observable.create((observer) => {
      observer.next(
        meetings.find((meeting) => meeting.meetingCode === meetingCode)
      );
    });

    return ogs;
  };
}
