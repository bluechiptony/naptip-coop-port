import { Department, departments } from './department.model';
import { Staff, staffMembers } from './staff.model';

export interface Posting {
  id?: any;
  code: string;
  source: Department;
  staff: Staff;
  destination: Department;
  status: boolean;
  approved: boolean;
  effectiveDate?: Date;
  createdDate?: Date;
}

export const postings: Posting[] = [
  {
    id: 464565,
    code: 'PO73274',
    source: departments[4],
    staff: staffMembers[2],
    destination: departments[0],
    status: false,
    approved: false,
    effectiveDate: new Date(),
    createdDate: new Date(),
  },
  {
    id: 83247,
    code: 'PO9234',
    source: departments[3],
    staff: staffMembers[1],
    destination: departments[5],
    status: false,
    approved: false,
    effectiveDate: new Date(),
    createdDate: new Date(),
  },
  {
    id: 9348,
    code: 'PO8923',
    source: departments[5],
    staff: staffMembers[3],
    destination: departments[1],
    status: false,
    approved: false,
    effectiveDate: new Date(),
    createdDate: new Date(),
  },
  {
    id: 92833,
    code: 'PO02938',
    source: departments[4],
    staff: staffMembers[0],
    destination: departments[2],
    status: false,
    approved: false,
    effectiveDate: new Date(),
    createdDate: new Date(),
  },
];
