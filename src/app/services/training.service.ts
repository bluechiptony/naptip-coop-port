import { Injectable } from '@angular/core';
import { Training, trainings } from '../model/training.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor() {}

  getTrainings = (): Observable<Training[]> => {
    var ogs = Observable.create((observer) => {
      observer.next(trainings);
    });

    return ogs;
  };

  getTraining = (code: string): Observable<Training> => {
    var ogs = Observable.create((observer) => {
      observer.next(
        trainings.find((training) => training.trainingCode === code)
      );
    });
    return ogs;
  };
}
