export interface User {
  firstName: string;
  lastName: string;
  emailAddress: string;
  accountType: AccountTypes;
}

export enum AccountTypes {
  SUPER_ADMINISTRATOR = 'SUPER ADMINISTRATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
  SUPERVISOR = 'SUPERVISOR',
  STAFF = 'STAFF',
}
