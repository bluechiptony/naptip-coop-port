import { Department, departments } from './department.model';
import { ZonalCommand, zonalCommands } from './zonal-command.model';

export interface Staff {
  id?: any;
  staffCode?: string;
  fullName?: string;
  staffNumber: string;
  firstName: string;
  middleName?: string;
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

export interface StaffDetails {
  id?: any;
  userCode?: string;
  staffCode?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dob: Date;
  gender: string;
  nationality: string;
  stateOfOrigin: number;
  lgaOfOrigin: number;
  phoneNumber?: string;
  emailAddress: string;
}

export interface StaffEmploymentDetails {
  userCode?: string;
  staffCode?: string;
  staffNumber?: string;
  zonalCommand: string;
  department: string;
  designation: string;
  gradeLevel: string;
  step: string;
  unit?: string;
  employedDate: Date;
  serviceRetirementDate?: Date;
  statutoryRetirementDate?: Date;
}

export interface AccountAssignment {
  userCode: string;
  zonalCommandCode: string;
  departmentCode: string;
}

export interface StaffState {
  staff?: Staff;
}

export const staffMembers: Staff[] = [
  {
    id: '723467',
    staffCode: 'HSHA2347789',
    staffNumber: 'HSD02939',
    firstName: 'Imaan',
    middleName: 'Sulaiman',
    lastName: 'Ibrahim',
    dob: new Date(),
    stateOfOrigin: 'Delta',
    lgaOfOrigin: 'Asaba',
    dateEnrolled: new Date(),
    department: departments[5],
    gender: 'FEMALE',
    currentZone: zonalCommands[3],
    profileUrl:
      'https://media3.s-nbcnews.com/i/newscms/2017_27/2062091/profile_picture_682959292d573956be3612eee54559bf.png',
    gradeLevel: '12',
    step: '7',
    designation: 'Administrative Office',
  },
  {
    id: '23467',
    staffCode: 'HSHA234789',
    staffNumber: 'HSD0239',
    firstName: 'James',
    middleName: 'Gandolfi',
    lastName: 'Gandolfi',
    dob: new Date(),
    stateOfOrigin: 'Delta',
    lgaOfOrigin: 'Asaba',
    dateEnrolled: new Date(),
    department: departments[5],
    gender: 'MALE',
    currentZone: zonalCommands[3],
    profileUrl:
      'https://media3.s-nbcnews.com/i/newscms/2017_27/2062091/profile_picture_682959292d573956be3612eee54559bf.png',
    gradeLevel: '12',
    step: '7',
    designation: 'Principal Office',
  },
  {
    id: '83967',
    staffCode: 'HSHA03483',
    staffNumber: 'HS09237',
    firstName: 'Sandra',
    middleName: 'Mulan',
    lastName: 'Mohave',
    dob: new Date(),
    stateOfOrigin: 'Anambara',
    lgaOfOrigin: 'Akwa',
    dateEnrolled: new Date(),
    department: departments[4],
    gender: 'FEMALE',
    currentZone: zonalCommands[2],
    profileUrl:
      'https://media3.s-nbcnews.com/i/newscms/2017_27/2062091/profile_picture_682959292d573956be3612eee54559bf.png',
    gradeLevel: '8',
    step: '4',
    designation: 'Supervisor',
  },
  {
    id: '93474',
    staffCode: 'HSHRT5346',
    staffNumber: 'HS00394',
    firstName: 'Mucharl',
    middleName: 'Mulan',
    lastName: 'Dapson',
    dob: new Date(),
    stateOfOrigin: 'Rivers',
    lgaOfOrigin: 'Ikwere',
    dateEnrolled: new Date(),
    department: departments[6],
    gender: 'MALE',
    currentZone: zonalCommands[5],
    profileUrl:
      'https://media3.s-nbcnews.com/i/newscms/2017_27/2062091/profile_picture_682959292d573956be3612eee54559bf.png',
    gradeLevel: '11',
    step: '4',
    designation: 'Administrator',
  },
  {
    id: '63747',
    staffCode: 'HSH03483',
    staffNumber: 'HS25327',
    firstName: 'Bimpe',
    middleName: 'Mulan',
    lastName: 'Olaona',
    dob: new Date(),
    stateOfOrigin: 'Osun',
    lgaOfOrigin: 'Osogbo',
    dateEnrolled: new Date(),
    department: departments[7],
    gender: 'FEMALE',
    currentZone: zonalCommands[1],
    profileUrl:
      'https://media3.s-nbcnews.com/i/newscms/2017_27/2062091/profile_picture_682959292d573956be3612eee54559bf.png',
    gradeLevel: '13',
    step: '12',
    designation: 'Assistant Director',
  },
];
