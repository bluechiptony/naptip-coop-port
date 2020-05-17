import { Staff, staffMembers } from './staff.model';
import { ZonalCommand, zonalCommands } from './zonal-command.model';

export interface Transfer {
  id?: any;
  transferCode: string;
  staff: Staff;
  startCommand: ZonalCommand;
  endCommand: ZonalCommand;
  status: boolean;
  approved: boolean;
  effectiveDate: Date;
  createdDate: Date;
  updatedDate: Date;
}

export const transfers: Transfer[] = [
  {
    id: 7234,
    transferCode: 'TR82323',
    staff: staffMembers[2],
    startCommand: zonalCommands[2],
    endCommand: zonalCommands[1],
    status: false,
    approved: true,
    effectiveDate: new Date(),
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    id: 9239,
    transferCode: 'TR80283',
    staff: staffMembers[1],
    startCommand: zonalCommands[3],
    endCommand: zonalCommands[5],
    status: true,
    approved: true,
    effectiveDate: new Date(),
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];
