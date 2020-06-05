import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrainingService } from 'src/app/services/training.service';
import { Training } from 'src/app/model/training.model';

@Component({
  selector: 'app-single-training',
  templateUrl: './single-training.component.html',
  styleUrls: ['./single-training.component.scss'],
})
export class SingleTrainingComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  training: Training;

  constructor(
    private activeRoute: ActivatedRoute,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.createSubscription();
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  createSubscription = (): void => {
    this.routeSubscription = this.activeRoute.params.subscribe((data: any) => {
      console.log(data.code);
      this.getTraining(data.code);
    });
  };

  getTraining = (trainingCode: string): void => {
    this.trainingService
      .getTraining(trainingCode)
      .subscribe((data: Training) => {
        if (data != null || data != undefined) this.training = data;
      });
  };
}
