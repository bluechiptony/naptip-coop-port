import { Action } from '@ngrx/store';
import { Staff } from 'src/app/model/staff.model';

export const SET_STAFF = '[SETSTAFF] Setstaff';
export const CLEAR_STAFF = '[CLEARSTAFF] Slearstaff';

export class SetCurrentStaff implements Action {
  readonly type = SET_STAFF;

  constructor(public staff: Staff) {}
}

export class ClearCurrentStaff implements Action {
  readonly type = CLEAR_STAFF;
  constructor() {}
}

export type Actions = SetCurrentStaff | ClearCurrentStaff;
