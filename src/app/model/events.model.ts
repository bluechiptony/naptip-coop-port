export interface OfficeEvent {
  eventId?: number;
  eventCode: string;
  eventTitle: string;
  startDate: Date;
  endDate: Date;
  venue: string;
  eventType: string;
}

export const officeEvents: OfficeEvent[] = [
  {
    eventCode: 'EVT32467',
    eventTitle: 'Special cases auti',
    startDate: new Date(),
    endDate: new Date(),
    venue: 'Selected venue',
    eventType: 'Meeting',
  },
  {
    eventCode: 'EVT30967',
    eventTitle: 'Forward day event',
    startDate: new Date(1590747804000),
    endDate: new Date(1590747804000),
    venue: 'Selected venue',
    eventType: 'Training',
  },
  {
    eventCode: 'EVT32394',
    eventTitle: 'Previous day event',
    startDate: new Date(1590056604000),
    endDate: new Date(1590315804000),
    venue: 'Selected venue',
    eventType: 'Excursion',
  },
];
