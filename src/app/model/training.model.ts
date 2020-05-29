export interface Training {
  id?: any;
  trainingCode: string;
  trainingTitle: string;
  category: string;
  startDate: Date;
  endDate: Date;
  description: string;
  createdDate: Date;
  updatedDate: Date;
}

export const trainings: Training[] = [
  {
    id: 246734,
    trainingCode: 'TC2374',
    trainingTitle: 'Capacity Human Building',
    category: 'Skills and competencies',
    startDate: new Date(),
    endDate: new Date(),
    description: 'Text',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    id: 3844,
    trainingCode: 'TC89908',
    trainingTitle: 'Fraudilent activity recognition',
    category: 'Forensics and support',
    startDate: new Date(),
    endDate: new Date(),
    description: 'Description of proggramme',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];
