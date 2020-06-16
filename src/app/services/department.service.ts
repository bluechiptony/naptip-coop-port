import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { departments, Department } from '../model/department.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getRemoteDepartments = () => {
    return this.http.get(`${this.BASE_URL}/departments/get`);
  };

  createDepartment = (departmentName: string) => {
    return this.http.post(`${this.BASE_URL}/departments/create`, {
      departmentName: departmentName,
    });
  };

  getDepartments = (): Observable<Department[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(departments);
    });

    return ogs;
  };
}
