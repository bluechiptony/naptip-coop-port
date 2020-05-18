import { Staff, staffMembers } from './staff.model';

export interface Memo {
  id?: any;
  memoCode: string;
  title: string;
  category: string;
  origin: string;
  respondee: string;
  createdDate: Date;
  updatedDate: Date;
  priority?: ItemPriority;
}

export enum ItemPriority {
  VERY_HIGH = 'VERY HIGH',
  HIGH = 'HIGH',
  NORMAL = 'NORMAL',
  LOW = 'LOW',
  VERY_LOW = 'VERY LOW',
}

export interface MemoReply {
  id?: any;
  staff: Staff;
  reply: string;
  urgency?: ItemPriority;
  replyDate: Date;
}

export const memoReplies: MemoReply[] = [
  {
    id: 73434,
    staff: staffMembers[3],
    reply:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore suscipit voluptate, nobis quaerat architecto sed distinctio, ',
    urgency: ItemPriority.LOW,
    replyDate: new Date(),
  },
  {
    id: 7324,
    staff: staffMembers[2],
    reply:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore suscipit voluptate, nobis quaerat architecto sed distinctio, consequatur, nemo unde velit aliquid. Corrupti dolores ea ullam distinctio vero error natus numquam qui enim architecto. Hic nisi aut laudantium odit beatae doloribus ad sint doloremque praesentium sed earum, aliquam possimus dolore.',
    urgency: ItemPriority.HIGH,
    replyDate: new Date(),
  },
  {
    id: 73434,
    staff: staffMembers[0],
    reply: 'lorem ipseu',
    urgency: ItemPriority.VERY_HIGH,
    replyDate: new Date(),
  },
];

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
