import { Component, OnInit } from '@angular/core';
import { Training, trainings } from 'src/app/model/training.model';

@Component({
  selector: 'app-upcoming-training-overview',
  templateUrl: './upcoming-training-overview.component.html',
  styleUrls: ['./upcoming-training-overview.component.scss'],
})
export class UpcomingTrainingOverviewComponent implements OnInit {
  trainings: Training[] = trainings;
  constructor() {}

  ngOnInit(): void {}
}
