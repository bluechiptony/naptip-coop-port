import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfficeEvent, officeEvents } from '../model/events.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  getEvents = (): Observable<OfficeEvent> => {
    var ogs = Observable.create((observer) => {
      observer.next(officeEvents);
    });

    return ogs;
  };
}
