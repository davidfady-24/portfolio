export interface Certification {
  id: string;
  title: string;
  provider: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
  categories: string[];
}

export const certifications: Certification[] = [
  {
    id: 'microsoft-pl-300-power-bi',
    title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    provider: 'Microsoft Certified · Cert #83B668-7BF96D',
    issuer: 'Microsoft',
    date: 'Oct 2026 – Oct 2027',
    credentialId: 'AF02F790E1DB3A20',
    verifyUrl:
      'https://learn.microsoft.com/en-us/users/me/credentials',
    skills: [
      'Power BI',
      'DAX & Data Modeling',
      'Star Schema',
      'Executive Dashboards',
    ],
    categories: ['Power BI', 'Data Analytics'],
  },
  {
    id: 'depi-data-analyst-specialist',
    title: 'MCIT / DEPI — Data Analytics: Data Analyst Specialist',
    provider: 'Ministry of Communications & IT - DEPI',
    issuer: 'DEPI',
    date: 'Jun – Dec 2025',
    skills: [
      'SQL & Star Schema',
      'Power BI & Tableau',
      'Python & Forecasting',
      'Excel BI',
    ],
    categories: ['Data Analytics', 'SQL', 'Excel', 'Power BI'],
  },
  {
    id: 'coursera-python-pandas-numpy',
    title: 'Python for Data Analysis: Pandas & NumPy',
    provider: 'Coursera Project Network',
    issuer: 'Coursera',
    date: 'Aug 2026',
    credentialId: 'DTNPUJI311AA',
    verifyUrl: 'https://coursera.org/verify/DTNPUJI311AA',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Wrangling'],
    categories: ['Programming', 'Data Analytics'],
  },
  {
    id: 'google-prepare-data',
    title: 'Prepare Data for Exploration',
    provider: 'Coursera',
    issuer: 'Google',
    date: 'Jun 2026',
    credentialId: 'H8O90CEZVAVD',
    verifyUrl: 'https://coursera.org/verify/H8O90CEZVAVD',
    skills: ['Data Collection', 'SQL', 'Metadata', 'Data Ethics'],
    categories: ['Data Analytics', 'SQL', 'Excel'],
  },
  {
    id: 'google-ask-questions',
    title: 'Ask Questions to Make Data-Driven Decisions',
    provider: 'Coursera',
    issuer: 'Google',
    date: 'Jun 2026',
    credentialId: 'CW0GRVR5BUQJ',
    verifyUrl: 'https://coursera.org/verify/CW0GRVR5BUQJ',
    skills: ['Stakeholder Management', 'KPIs', 'Problem Solving', 'Spreadsheets'],
    categories: ['Data Analytics', 'Excel'],
  },
  {
    id: 'google-data-foundations',
    title: 'Foundations: Data, Data, Everywhere',
    provider: 'Coursera',
    issuer: 'Google',
    date: 'May 2026',
    credentialId: 'B6XY7T73YXGK',
    verifyUrl: 'https://coursera.org/verify/B6XY7T73YXGK',
    skills: ['Data Ecosystems', 'SQL', 'Data Analytics', 'Spreadsheets'],
    categories: ['Data Analytics', 'SQL'],
  },
  {
    id: 'hackerrank-sql-basic',
    title: 'SQL (Basic) Certificate of Accomplishment',
    provider: 'HackerRank',
    issuer: 'HackerRank',
    date: 'May 2026',
    credentialId: 'D81D81B8371F',
    verifyUrl: 'https://www.hackerrank.com/certificates/d81d81b8371f',
    skills: ['SQL', 'Joins & Aggregations', 'Relational Queries'],
    categories: ['SQL', 'Programming'],
  },
];
