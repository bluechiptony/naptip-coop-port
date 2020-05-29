import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { zonalCommands, ZonalCommand } from '../model/zonal-command.model';

@Injectable({
  providedIn: 'root',
})
export class ZonalCommandService {
  constructor() {}

  getZonalCommands = (): Observable<ZonalCommand[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(zonalCommands);
    });

    return ogs;
  };
}
