import { Department, departments } from './department.model';
import { ZonalCommand, zonalCommands } from './zonal-command.model';

export interface Staff {
  id?: any;
  staffCode?: string;
  staffNumber: string;
  firstName: string;
  middlename?: string;
  lastName: string;
  dob: Date;
  stateOfOrigin: string;
  lgaOfOrigin: string;
  dateEnrolled: Date;
  department?: Department;
  gender: string;
  currentZone?: ZonalCommand;
  profileUrl?: string;
  gradeLevel: string;
  step: string;
  designation: string;
}

export const staffMembers: Staff[] = [
  {
    id: '23467',
    staffCode: 'HSHA234789',
    staffNumber: 'HSD0239',
    firstName: 'James',
    middlename: 'Gandolfi',
    lastName: 'Gandolfi',
    dob: new Date(),
    stateOfOrigin: 'Delta',
    lgaOfOrigin: 'Asaba',
    dateEnrolled: new Date(),
    department: departments[5],
    gender: 'MALE',
    currentZone: zonalCommands[3],
    profileUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    gradeLevel: '12',
    step: '7',
    designation: 'Principal Office',
  },
];
