import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { memos, Memo } from '../model/memo.model';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
  constructor() {}

  getMemos = (): Observable<Memo[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(memos);
    });

    return ogs;
  };
}
