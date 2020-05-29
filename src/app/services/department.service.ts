import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { departments, Department } from '../model/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}

  getDepartments = (): Observable<Department[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(departments);
    });

    return ogs;
  };
}
