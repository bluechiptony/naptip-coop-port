import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { zonalCommands, ZonalCommand } from '../model/zonal-command.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZonalCommandService {
  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getRemoteZonalCommands = () => {
    return this.http.get(`${this.BASE_URL}/zonal-commands/zonal-commands`);
  };

  createZonalCommand = (zonalCommandName: string) => {
    return this.http.post(`${this.BASE_URL}/zonal-commands/create`, {
      zonalCommandName: zonalCommandName,
    });
  };

  createZonalCommandWithDetails = (zonalCommand: ZonalCommand) => {
    return this.http.post(
      `${this.BASE_URL}/zonal-commands/create/full`,
      zonalCommand
    );
  };

  getZonalCommand = (zonalCommandCode: string) => {
    return this.http.get(
      `${this.BASE_URL}/zonal-commands/get/${zonalCommandCode}`
    );
  };

  getZonalCommandHead = (zonalCommandCode: string) => {
    return this.http.get(
      `${this.BASE_URL}/zonal-commands/get/head/${zonalCommandCode}`
    );
  };

  setZonalCommandHead = (userCode: string, zonalCommandCode: string) => {
    return this.http.post(`${this.BASE_URL}/zonal-commands/set/head`, {
      userCode: userCode,
      zonalCommandCode: zonalCommandCode,
    });
  };

  createUnitForZonalCommand = (
    zonalCommandCode: string,
    departmentCode: string
  ) => {
    return this.http.post(`${this.BASE_URL}/zonal-commands/unit/create`, {
      zonalCommandCode: zonalCommandCode,
      departmentCode: departmentCode,
    });
  };

  getUnitsForZonalCommand = (commandCode: string) => {
    return this.http.get(
      `${this.BASE_URL}/zonal-commands/units/get/${commandCode}`
    );
  };

  getZonalCommands = (): Observable<ZonalCommand[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(zonalCommands);
    });

    return ogs;
  };
}
