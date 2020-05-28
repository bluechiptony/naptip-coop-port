export interface Certificate {
  id?: any;
  title: string;
  description: string;
  imageUrl: string;
  date: Date;
  category?: string;
}

export const certificates: Certificate[] = [
  {
    title: 'West African  Senior school certificate',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'EDUCATIONAL',
  },
  {
    title: 'Master of Science',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'EDUCATIONAL',
  },
  {
    title: 'CISCO certified Network Associate',
    description: 'Certificate of life',
    imageUrl: 'https://',
    date: new Date(),
    category: 'PROFESIONAL',
  },
];
