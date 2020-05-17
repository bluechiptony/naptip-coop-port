export interface ZonalCommand {
  id?: any;
  zoneCode: string;
  zoneName: string;
  state: string;
  lga: string;
}

export const zonalCommands: ZonalCommand[] = [
  {
    id: '213',
    zoneCode: '7364',
    zoneName: 'Uyo commant',
    state: 'Akwa Ibom',
    lga: 'Uyo',
  },
  {
    id: '732',
    zoneCode: '62323',
    zoneName: 'Bennin Command',
    state: 'Edo',
    lga: 'Benin',
  },
  {
    id: '1239',
    zoneCode: '73632474',
    zoneName: 'Enugu Command',
    state: 'Enugu ',
    lga: 'Enugu',
  },
  {
    id: '213',
    zoneCode: '7364',
    zoneName: 'Lagos Command',
    state: 'Lagos',
    lga: 'Ikeja',
  },
  {
    id: '732',
    zoneCode: '62323',
    zoneName: 'Oshogbo Command',
    state: 'Osun',
    lga: 'Osogbo',
  },
  {
    id: '1239',
    zoneCode: '73632474',
    zoneName: 'Makurdi Command',
    state: 'Benue ',
    lga: 'Makurdi',
  },
];
