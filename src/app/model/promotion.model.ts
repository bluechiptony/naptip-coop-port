export interface Promotion {
  id?: any;
  code: string;
  staffCode: string;
  staffName: string;
  startDesignation: string;
  endDesignation: string;
  requestDate: Date;
  approvalDate?: Date;
  nextDueDate?: Date;
  status: boolean;
  approved: boolean;
  createdDate: Date;
}

export interface PromotionRequest {}
export const promotions: Promotion[] = [
  {
    id: 123,
    code: 'PR82348',
    staffCode: 'TY9324832',
    staffName: 'James Gandolfi',
    startDesignation: 'Principal Officer II',
    endDesignation: 'Principal Officer I',
    requestDate: new Date(),
    approvalDate: null,
    nextDueDate: null,
    status: false,
    approved: false,
    createdDate: new Date(),
  },
  {
    id: 123,
    code: 'PR82348',
    staffCode: 'TY9324832',
    staffName: 'Max McGee',
    startDesignation: 'Rector',
    endDesignation: 'Supritendent',
    requestDate: new Date(),
    approvalDate: new Date(),
    nextDueDate: new Date(),
    status: true,
    approved: true,
    createdDate: new Date(),
  },
];
