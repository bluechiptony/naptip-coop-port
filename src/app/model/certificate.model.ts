export interface Certificate {
  id?: any;
  title: string;
  description: string;
  imageUrl: string;
  date: Date;
  category?: string;
  createdDate: Date;
  updatedDate: Date;
}

export const certificates: Certificate[] = [
  {
    title: 'West African  Senior school certificate',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'EDUCATIONAL',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    title: 'Master of Science',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'EDUCATIONAL',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    title: 'CISCO certified Network Associate',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'PROFESIONAL',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    title: 'National youth service certificate',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'PROFESSIONAL',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    title: 'ORACLE certified database engineer',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'PROFESIONAL',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];
