import { Action } from '@ngrx/store';

export const SET_ADMIN_CONTEXT = '[SET_ADMIN_CONTEXT] set_admin_context';
export const CLEAR_ADMIN_CONTEXT = '[CLEAR_ADMIN_CONTEXT] clear_admin_context';

export class SetAdminContext implements Action {
  readonly type = SET_ADMIN_CONTEXT;

  constructor(public adminContext: string) {}
}

export class ClearAdminContext implements Action {
  readonly type = CLEAR_ADMIN_CONTEXT;

  constructor() {}
}

export type Actions = SetAdminContext | ClearAdminContext;
