import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  staffMembers,
  Staff,
  StaffDetails,
  StaffEmploymentDetails,
  AccountAssignment,
} from '../model/staff.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getRemoteStaffForDepartment = () => {};

  getStaffForUnit = () => {};

  getStaffForZonalCommand = () => {};

  addStaffToDepartment = () => {};

  addStaffToUnit = () => {};

  createStaff = (staff: StaffDetails) => {
    return this.http.post(`${this.BASE_URL}/staff/create`, staff);
  };

  createStaffEmploymentDetails = (
    employmentDetails: StaffEmploymentDetails
  ) => {
    return this.http.post(
      `${this.BASE_URL}/staff/employment/create`,
      employmentDetails
    );
  };

  getStaffEmploymentDetails = (staffCode: string) => {
    return this.http.get(`${this.BASE_URL}/staff/employment/${staffCode}`);
  };

  updateStaff = (staff: StaffDetails) => {
    return this.http.put(`${this.BASE_URL}/staff/create`, staff);
  };

  updateStaffEmploymentDetails = (
    employmentDetails: StaffEmploymentDetails
  ) => {
    return this.http.put(
      `${this.BASE_URL}/staff/employment/create`,
      employmentDetails
    );
  };

  getStaffDetailsWithUsercode = (userCode: string) => {
    return this.http.get(`${this.BASE_URL}/staff/details/${userCode}`);
  };

  assignStaffAccount = (accountRequest: AccountAssignment) => {
    return this.http.post(
      `${this.BASE_URL}/staff/account/assign`,
      accountRequest
    );
  };

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
  getStaffWithId = (id: string): Observable<Staff> => {
    var ogs = Observable.create((observer) => {
      observer.next(staffMembers.find((staff) => staff.id === id));
    });
    return ogs;
  };
}
