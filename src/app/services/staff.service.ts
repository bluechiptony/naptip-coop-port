import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { staffMembers, Staff } from '../model/staff.model';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor() {}

  getStaffMembers = (): Observable<any[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(staffMembers);
    });

    return ogs;
  };

  getStaff = (code: string): Observable<Staff> => {
    var ogs = Observable.create((observer) => {
      observer.next(staffMembers.find((staff) => staff.staffNumber === code));
    });
    return ogs;
  };
}
