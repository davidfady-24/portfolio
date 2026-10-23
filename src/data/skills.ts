export interface Skill {
  name: string;
  level: number;
}

export interface SoftSkill {
  name: string;
}

export interface Skills {
  analytics: Skill[];
  technical: Skill[];
  business: Skill[];
  soft: SoftSkill[];
}

export const skills: Skills = {
  analytics: [
    { name: 'SQL / T-SQL (CTEs, Window Functions, Star Schema)', level: 92 },
    { name: 'Power BI (Microsoft PL-300 Certified, DAX)', level: 92 },
    { name: 'Excel BI (Power Query, openpyxl, 15-Sheet Models)', level: 90 },
    { name: 'Tableau (Interactive Dashboards)', level: 82 },
    { name: 'Time-Series Forecasting (SARIMAX, Prophet)', level: 80 },
    { name: 'Exploratory Data Analysis (EDA)', level: 88 },
    { name: 'KPI & Cohort Retention Modeling', level: 90 },
    { name: 'Executive Data Storytelling', level: 88 },
  ],
  technical: [
    { name: 'Python (Pandas, NumPy, openpyxl)', level: 90 },
    { name: 'ETL Pipelines & SQLite Warehousing', level: 86 },
    { name: 'Automation & Scraping (Playwright, discord.py, curl_cffi)', level: 90 },
    { name: 'FastAPI & REST/Webhook Integrations', level: 82 },
    { name: 'Data Quality Auditing & Pytest Suite', level: 85 },
    { name: 'Git / GitHub & Modular Package Design', level: 82 },
  ],
  business: [
    { name: 'Revenue, LTV & Churn Analytics', level: 92 },
    { name: 'Business Intelligence Architecture', level: 88 },
    { name: 'Marketplace & Operations Analytics', level: 90 },
    { name: 'Quantitative Pricing & Signal Modeling', level: 85 },
    { name: 'Process Automation & Workflow Optimization', level: 90 },
  ],
  soft: [
    { name: 'Communication' },
    { name: 'Leadership' },
    { name: 'Problem Solving' },
    { name: 'Critical Thinking' },
    { name: 'Adaptability' },
    { name: 'Teamwork' },
    { name: 'Initiative' },
    { name: 'Time Management' },
  ],
};
