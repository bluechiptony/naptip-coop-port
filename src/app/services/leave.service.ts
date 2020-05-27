import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave, leaves, LeaveType } from '../model/leave.model';

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
  getLeaveTypes = (): Observable<LeaveType[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(Object.keys(LeaveType));
    });

    return ogs;
  };
}
