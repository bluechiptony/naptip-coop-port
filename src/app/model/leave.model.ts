import { Staff, staffMembers } from './staff.model';

export interface Leave {
  id?: any;
  leaveCode: string;
  leaveType: LeaveType;
  staff: Staff;
  startDate: Date;
  endDate: Date;
  status: boolean;
  approved: boolean;
  description: string;
  createdDate: Date;
  updatedDate: Date;
}

export enum LeaveType {
  ANNUAL = 'ANNUAL',
  CAUSUAL = 'CAUSUAL',
  SICK = 'SICK',
  MATERNITY = 'MATERNITY',
}

export const leaves: Leave[] = [
  {
    id: 732674,
    leaveCode: 'LC2346',
    leaveType: LeaveType.CAUSUAL,
    staff: staffMembers[0],
    startDate: new Date(),
    endDate: new Date(),
    status: false,
    approved: false,
    description: 'reason for leave',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    id: 73262,
    leaveCode: 'LC9348',
    leaveType: LeaveType.MATERNITY,
    staff: staffMembers[3],
    startDate: new Date(),
    endDate: new Date(),
    status: false,
    approved: false,
    description: 'real reason for leave',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];
