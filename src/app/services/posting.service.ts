import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posting, postings } from '../model/posting.model';

@Injectable({
  providedIn: 'root',
})
export class PostingService {
  constructor() {}

  getPostings = (): Observable<Posting[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(postings);
    });

    return ogs;
  };
}
