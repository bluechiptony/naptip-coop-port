import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { memos, Memo, MemoReply } from '../model/memo.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getMemos = (): Observable<Memo[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(memos);
    });

    return ogs;
  };

  getRemoteMemos = (pageSize?: number, pageNumber?: number) => {
    return this.http.get(`${this.BASE_URL}/memos/get`);
  };

  getSingleMemo = (memoCode: string) => {
    return this.http.get(`${this.BASE_URL}/memos/get/${memoCode}`);
  };

  createMemo = (memo: Memo) => {
    return this.http.post(`${this.BASE_URL}/memos/create`, memo);
  };

  createMemoAssignmentForStaff = (memoCode: string, staffCodes: string[]) => {
    return this.http.post(`${this.BASE_URL}/memos/assign/${memoCode}`, {
      staff: staffCodes,
    });
  };

  createMemoAssignmentForZonalCommand = (
    memoCode: string,
    zonalCommandCode: string
  ) => {
    return this.http.post(`${this.BASE_URL}/memos/assign/zonal-command`, {
      zonalCommandCode: zonalCommandCode,
      memo: memoCode,
    });
  };
  createMemoAssignmentForUnit = (memoCode: string, unitCode: string) => {
    return this.http.post(`${this.BASE_URL}/memos/assign/unit`, {
      unitCode: unitCode,
      memo: memoCode,
    });
  };

  getResponsesForMemo = (memoCode: string) => {
    return this.http.get(`${this.BASE_URL}/memos/responses/${memoCode}`);
  };

  getMemoSForStaff = (staffCode: string) => {
    return this.http.get(`${this.BASE_URL}/memos/staff/${staffCode}`);
  };

  createMemoResponse = (memoResponse: MemoReply) => {
    return this.http.post(
      `${this.BASE_URL}/memos/responses/create`,
      memoResponse
    );
  };
}
