import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave, leaves } from '../model/leave.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  constructor() {}
  getLeaves = (): Observable<Leave[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(leaves);
    });

    return ogs;
  };
}
