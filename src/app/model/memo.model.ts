export interface Memo {
  id?: any;
  memoCode: string;
  title: string;
  category: string;
  origin: string;
  respondee: string;
  createdDate: Date;
  updatedDate: Date;
}

export const memos: Memo[] = [
  {
    id: 76546,
    memoCode: 'ME7865',
    title: 'Notice of adjustment',
    category: 'General Memo',
    origin: 'Michael Ofi',
    respondee: 'Max McGee',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];
