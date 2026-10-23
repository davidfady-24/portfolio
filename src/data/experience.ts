export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  date: string;
  type: 'work' | 'education';
  featured?: boolean;
  badge?: string;
  bullets: string[];
}

const experience: ExperienceItem[] = [
  {
    id: 'depi-data-engineering',
    title: 'Data Engineering Trainee',
    organization: 'Digital Egypt Pioneers Initiative (DEPI) — MCIT',
    location: 'Egypt (Hybrid)',
    date: '08/2026 – Present',
    type: 'work',
    featured: true,
    badge: 'MCIT Trainee · Microsoft PL-300',
    bullets: [
      'Selected for the Ministry of Communications and Information Technology (MCIT) Data Engineering track, focusing on programmatic data ingestion, relational warehousing, and automated ETL pipeline architecture.',
      'Earned the Microsoft Certified: Power BI Data Analyst Associate (PL-300) credential (Oct 2026, Credential ID: AF02F790E1DB3A20) validating enterprise DAX, dimensional Star Schema modeling, and BI governance.',
      'Engineering modular Python (Pandas, NumPy, SQLite) ETL workflows incorporating schema validation, automated data quality auditing, deduplication, and structured database loading.',
      'Applying software engineering best practices, modular package design, and automated testing (pytest) to production analytical data pipelines.',
    ],
  },
  {
    id: 'fbm',
    title: 'Founder & Lead Data Analyst',
    organization: 'FUT Black Market',
    location: 'Remote (Discord-Based Commercial Platform)',
    date: '2023 – Present',
    type: 'work',
    featured: true,
    badge: 'Founder & Technical Lead',
    bullets: [
      'Founded and scaled a commercial subscription and digital-trading ecosystem to 3,500+ active members.',
      'Engineered automated Python & Excel BI pipelines tracking 213,750 EGP in verified revenue across 574 subscriptions (491 paid, 83 free trials).',
      'Modeled customer retention and cohort lifecycle KPIs, achieving a 53.54% customer renewal rate and 717 EGP average customer LTV.',
      'Drove a +25% increase in community engagement and a +30% uplift in subscription conversion through data-backed pricing and automated expiry workflows.',
      'Built full-stack quantitative pricing and real-time market signal engines (FastAPI, Playwright, SQLite, Discord webhooks) for 24/7 automated trade alerts.',
    ],
  },
  {
    id: 'depi-data-analyst',
    title: 'Data Analyst Specialist Trainee',
    organization: 'Digital Egypt Pioneers Initiative (DEPI) — MCIT',
    location: 'Egypt (Hybrid)',
    date: '06/2025 – 12/2025',
    type: 'work',
    badge: 'MCIT Scholarship · Freelance Contract',
    bullets: [
      'Graduated from the intensive 6-month Ministry of Communications and Information Technology (MCIT) Data Analytics Specialist scholarship track.',
      'Designed a 7-table Star Schema (Fact_TrainRides + 6 dimensions) and authored a 1,185-line T-SQL analytical script analyzing 31,653 UK railway ticket records (£742K revenue across 65 routes).',
      'Built time-series demand forecasting models (SARIMAX & Prophet) and interactive Tableau & Power BI executive dashboards for route and delay optimization.',
      'Delivered a verified 15,050 EGP ($315 USD) commercial data automation contract, deploying an automated Discord-to-Excel subscription intelligence pipeline.',
    ],
  },
  {
    id: 'university',
    title: 'B.Sc. in Computer Science',
    organization: 'Mansoura University — Faculty of Computer & Information Sciences',
    location: 'Mansoura, Egypt',
    date: '09/2024 – Expected 2028',
    type: 'education',
    badge: 'Academic Degree',
    bullets: [
      'Core Coursework: Database Systems, Data Structures & Algorithms, Statistics & Probability, Object-Oriented Programming (OOP), and Software Engineering.',
      'Combining academic computer science foundations with real-world business intelligence, data modeling, and production Python automation.',
    ],
  },
];

export default experience;
