import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { staffMembers } from '../model/staff.model';

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
}
