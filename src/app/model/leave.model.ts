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
  COMPASSIONATE = 'COMPASSIONATE',
}

export interface LeaveTypeItem {
  leaveTypeCode: string;
  leaveTypeName: string;
  leaveType: LeaveType;
  annualAllocation: true;
  annualAccount?: number;
}

export const leaveTypes: LeaveTypeItem[] = [
  {
    leaveTypeCode: '63247',
    leaveTypeName: 'Sick Leave',
    leaveType: LeaveType.SICK,
    annualAllocation: true,
    annualAccount: 23,
  },
  {
    leaveTypeCode: '9384',
    leaveTypeName: 'Casual Leave',
    leaveType: LeaveType.CAUSUAL,
    annualAllocation: true,
    annualAccount: 15,
  },
  {
    leaveTypeCode: '8384',
    leaveTypeName: 'Maternity Leave',
    leaveType: LeaveType.MATERNITY,
    annualAllocation: true,
    annualAccount: 90,
  },
  {
    leaveTypeCode: '9340',
    leaveTypeName: 'Compassionate Leave',
    leaveType: LeaveType.COMPASSIONATE,
    annualAllocation: true,
    annualAccount: 15,
  },
];

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
  {
    id: 2932,
    leaveCode: 'LC7234',
    leaveType: LeaveType.MATERNITY,
    staff: staffMembers[2],
    startDate: new Date(),
    endDate: new Date(),
    status: true,
    approved: true,
    description: 'Talk about leave',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];
