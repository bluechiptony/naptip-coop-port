import { Staff, staffMembers } from './staff.model';

export interface Meeting {
  id?: any;
  meetingCode: string;
  title: string;
  venue: string;
  scheduledDate: Date;
  participants: Staff[];
}

export const meetings: Meeting[] = [
  {
    id: 37434,
    meetingCode: '734747',
    title: 'Acknowledgement Meeting',
    venue: 'Board Room',
    scheduledDate: new Date(),
    participants: staffMembers,
  },
  {
    id: 23467836,
    meetingCode: '28347',
    title: 'End of year Meeting',
    venue: 'Board Room 3',
    scheduledDate: new Date(),
    participants: staffMembers,
  },
  {
    id: 37434,
    meetingCode: '7347723447',
    title: 'Department review Meeting',
    venue: 'Department officem',
    scheduledDate: new Date(),
    participants: [staffMembers[0], staffMembers[1]],
  },
];
