import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer, transfers } from '../model/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor() {}
  getTransfers = (): Observable<Transfer[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(transfers);
    });

    return ogs;
  };
}
