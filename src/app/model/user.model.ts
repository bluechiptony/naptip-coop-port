export interface User {
  id?: any;
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

export const users: User[] = [
  {
    id: 723467,
    firstName: 'Julie',
    lastName: 'Okah-Donli',
    emailAddress: 'admin@admin.com',
    accountType: AccountTypes.ADMINISTRATOR,
  },
  {
    id: 837438,
    firstName: 'James',
    lastName: 'Ogebe',
    emailAddress: 'supervisor@admin.com',
    accountType: AccountTypes.SUPERVISOR,
  },
  {
    id: 82347,
    firstName: 'Rita',
    lastName: 'Okon',
    emailAddress: 'staff@admin.com',
    accountType: AccountTypes.STAFF,
  },
];
