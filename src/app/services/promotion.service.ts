import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promotions, Promotion } from '../model/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  getPromotions = (): Observable<Promotion[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(promotions);
    });

    return ogs;
  };
}
