export interface Report {
  id?: any;
  reportCode: string;
  reportType: ReportType;
  title: string;
  reportBody: string;
  createdDate: Date;
}

export enum ReportType {
  MUNITES = 'MINUTES',
  INCEDENT = 'INCIDENT',
  OPERATIONAL = 'OPERATIONAL',
  GENERAL = 'GENERAL',
}

export const reports: Report[] = [
  {
    id: 12323,
    reportCode: 'RP7324',
    reportType: ReportType.MUNITES,
    title: 'Report on meeting',
    reportBody:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo asperiores alias? Enim commodi mollitia earum rem facilis laboriosam modi fuga dolore magni magnam corrupti perspiciatis assumenda culpa asperiores eius voluptatem quibusdam, animi soluta cupiditate sint fugit. Nisi, ipsum non consequuntur totam voluptates excepturi aliquid reiciendis earum dolorum cumque reprehenderit. Adipisci voluptatum consequatur doloremque quo commodi, iste eveniet illum sint sunt ipsam ex, natus enim hic dolor! Perferendis optio expedita qui nesciunt quis autem minima, illo molestiae. Quibusdam, vitae temporibus? Earum repudiandae eligendi esse illum unde, obcaecati dolore repellat officiis dignissimos sed porro ut mollitia distinctio exercitationem minima. Velit, odio.',
    createdDate: new Date(),
  },
  {
    id: 23848,
    reportCode: 'RP203',
    reportType: ReportType.GENERAL,
    title: 'General report',
    reportBody:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo asperiores alias? Enim commodi mollitia earum rem facilis laboriosam modi fuga dolore magni magnam corrupti perspiciatis assumenda culpa asperiores eius voluptatem quibusdam, animi soluta cupiditate sint fugit. Nisi, ipsum non consequuntur totam voluptates excepturi aliquid reiciendis earum dolorum cumque reprehenderit. Adipisci voluptatum consequatur doloremque quo commodi, iste eveniet illum sint sunt ipsam ex, natus enim hic dolor! Perferendis optio expedita qui nesciunt quis autem minima, illo molestiae. Quibusdam, vitae temporibus? Earum repudiandae eligendi esse illum unde, obcaecati dolore repellat officiis dignissimos sed porro ut mollitia distinctio exercitationem minima. Velit, odio.',
    createdDate: new Date(),
  },
  {
    id: 33437,
    reportCode: 'RP947',
    reportType: ReportType.OPERATIONAL,
    title: 'Report meeting operation',
    reportBody:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo asperiores alias? Enim commodi mollitia earum rem facilis laboriosam modi fuga dolore magni magnam corrupti perspiciatis assumenda culpa asperiores eius voluptatem quibusdam, animi soluta cupiditate sint fugit. Nisi, ipsum non consequuntur totam voluptates excepturi aliquid reiciendis earum dolorum cumque reprehenderit. Adipisci voluptatum consequatur doloremque quo commodi, iste eveniet illum sint sunt ipsam ex, natus enim hic dolor! Perferendis optio expedita qui nesciunt quis autem minima, illo molestiae. Quibusdam, vitae temporibus? Earum repudiandae eligendi esse illum unde, obcaecati dolore repellat officiis dignissimos sed porro ut mollitia distinctio exercitationem minima. Velit, odio.',
    createdDate: new Date(),
  },
];
