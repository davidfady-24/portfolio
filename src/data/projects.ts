export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured: boolean;
  problem: string;
  context: string;
  solution: string;
  technologies: string[];
  impact: string;
  keyLearnings: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'discord-member-intelligence',
    title: 'Discord Member Intelligence & Automated BI Suite (v2)',
    subtitle: 'End-to-End Revenue Tracking, Cohort Retention & 15-Sheet Excel BI Pipeline',
    category: 'Business Intelligence & Data Engineering',
    year: '2025–2026',
    featured: true,
    problem:
      'Managing 3,500+ community members and hundreds of recurring subscriptions manually created blind spots in revenue attribution, renewal forecasting, and member lifecycle tracking.',
    context:
      'Built for FUT Black Market to replace fragmented spreadsheets with a unified, fault-tolerant Python & BI intelligence pipeline.',
    solution:
      'Architected a modular Python package (discord.py, Pandas, Regex, openpyxl, JSON) featuring incremental Discord snowflake state checkpointing (state_embeds.json), automated data-quality auditing, a 15-sheet openpyxl Executive BI workbook, and an interactive HTML KPI dashboard.',
    technologies: [
      'Python',
      'discord.py',
      'Pandas',
      'Regex',
      'openpyxl',
      'JSON',
      'Power BI',
      'HTML/CSS',
    ],
    impact:
      'Tracked 213,750 EGP in verified revenue across 574 subscriptions (491 paid, 83 free trials), uncovered a 53.54% customer renewal rate and 717 EGP average customer LTV, and drove a +30% uplift in subscription conversions.',
    keyLearnings: [
      'Incremental state checkpointing via Discord snowflake IDs reduced API extraction runtime by over 85% while preventing rate-limit bottlenecks.',
      'Automated data-quality validation rules are critical when parsing unstructured bilingual (Arabic/English) payment embeds at scale.',
      'Executive stakeholders act fastest when complex cohort and LTV models are surfaced directly inside a 15-sheet structured BI workbook and single-page HTML dashboard.',
    ],
    metrics: [
      { value: '213.7K EGP', label: 'Revenue Tracked' },
      { value: '574', label: 'Subscriptions' },
      { value: '53.54%', label: 'Renewal Rate' },
      { value: '717 EGP', label: 'Customer LTV' },
      { value: '+30%', label: 'Conversion Uplift' },
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/davidfady-24/discord-member-intelligence-system',
      },
    ],
    tags: [
      'Python',
      'Pandas',
      'openpyxl',
      'Discord API',
      'BI Automation',
      'Cohort & LTV Analytics',
    ],
  },
  {
    id: 'ea-fc-market-scanner',
    title: 'EA FC Quantitative Market Scanner & Signal Engine (FUTBIN & FUT.GG)',
    subtitle: 'Real-Time Market Curve Scraping, Quantitative Indicators & Webhook Alert Engine',
    category: 'Quantitative Analytics & Full-Stack Automation',
    year: '2026',
    featured: false,
    problem:
      'High-frequency virtual transfer markets fluctuate rapidly; manual price checking across thousands of items caused traders to miss profitable support bounces and miscalculate EA’s 5% transaction tax.',
    context:
      'Engineered an automated quantitative market scanner and real-time trade signal engine for FUT Black Market traders, combining asynchronous web scraping with technical indicator modeling.',
    solution:
      'Built a full-stack Python (FastAPI, Playwright, curl_cffi, SQLite) and Chart.js pricing pipeline that scrapes live market curves, computes P15/P85 support/resistance bands, SMA-6h/24h crossovers, RSI-14 momentum, Bollinger volatility, and 5% tax-adjusted net ROI — backed by 21+ pytest unit tests and 24/7 Discord webhook alerts.',
    technologies: [
      'Python',
      'FastAPI',
      'Playwright',
      'curl_cffi',
      'SQLite',
      'Chart.js',
      'pytest',
    ],
    impact:
      'Automated 24/7 market surveillance with sub-second tax-adjusted ROI calculations, eliminating unprofitable trades and delivering high-conviction buy/sell signals to 3,500+ community members.',
    keyLearnings: [
      'Combining percentile bands (P15/P85) with RSI-14 and SMA-6h/24h crossovers filters out false breakouts in illiquid market segments.',
      'TLS fingerprint impersonation (curl_cffi) and Playwright fallback strategies ensure 99%+ scraping uptime against anti-bot protections.',
      'Comprehensive pytest coverage (21+ unit tests) guarantees mathematical accuracy across edge-case pricing tiers and tax brackets.',
    ],
    metrics: [
      { value: 'P15 / P85', label: 'Quant Bands' },
      { value: '21+ Tests', label: 'Pytest Suite' },
      { value: '24/7 Live', label: 'Webhook Signals' },
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/davidfady-24',
      },
    ],
    tags: [
      'FastAPI',
      'Playwright',
      'curl_cffi',
      'SQLite',
      'Quantitative Signals',
      'pytest',
    ],
  },
  {
    id: 'uk-train-rides-analysis',
    title: 'UK Train Rides Analysis, Star Schema & Demand Forecasting',
    subtitle: 'Dimensional Data Modeling, 1,185-Line T-SQL Suite & SARIMAX/Prophet Forecasting',
    category: 'Data Warehousing & Predictive Analytics',
    year: '2025',
    featured: false,
    problem:
      'UK rail operators needed to identify revenue leakage from journey delays/refunds, understand peak route bottlenecks, and forecast future passenger demand across 65 national rail routes.',
    context:
      'Analyzed 31,653 UK railway ticket records (£742K total revenue) as the flagship capstone project for the MCIT / DEPI Data Analyst Specialist track.',
    solution:
      'Engineered a 7-table Star Schema (Fact_TrainRides + 6 dimension tables), authored 1,185 lines of analytical T-SQL (window functions, delay refund attribution, route profitability), built SARIMAX and Prophet time-series demand forecasting models in Python, and designed interactive Tableau dashboards.',
    technologies: [
      'T-SQL',
      'Python',
      'Tableau',
      'Excel',
      'SARIMAX',
      'Prophet',
      'Star Schema',
    ],
    impact:
      'Pinpointed high-risk delay corridors responsible for the majority of refund claims and delivered actionable capacity-planning forecasts across 65 UK rail routes.',
    keyLearnings: [
      'Modeling raw flat-file records into a 7-table Star Schema simplified complex multi-dimensional T-SQL aggregations and accelerated Tableau rendering.',
      'Combining statistical SARIMAX models with Prophet captured both weekly commuter seasonality and holiday demand spikes.',
      'Translating delay duration distributions into financial refund exposure bridged operational metrics with executive revenue impact.',
    ],
    metrics: [
      { value: '31,653', label: 'Records Modeled' },
      { value: '£742K', label: 'Revenue Analyzed' },
      { value: '1,185 Lines', label: 'Analytical T-SQL' },
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/davidfady-24/uk-train-rides-analysis',
      },
    ],
    tags: [
      'T-SQL',
      'Star Schema',
      'Python',
      'SARIMAX / Prophet',
      'Tableau',
      'Demand Forecasting',
    ],
  },
  {
    id: 'fbm-renewal-bot',
    title: 'FBM Automated Transaction & Renewal Bot Suite',
    subtitle: 'Event-Driven Seller Ledger & Subscription Churn Prevention System',
    category: 'Operations Automation',
    year: '2025–2026',
    featured: false,
    problem:
      'Manual tracking of seller transactions and subscription expiration dates led to ledger discrepancies, delayed payouts, and preventable involuntary member churn.',
    context:
      'FUT Black Market required an always-on operational automation layer to log real-time marketplace transactions and proactively notify subscribers before their access expired.',
    solution:
      'Developed event-driven Python bots (discord.py, Regex, openpyxl, JSON) that parse live transaction embeds into structured Excel ledgers and run scheduled lifecycle scans to dispatch personalized renewal reminders.',
    technologies: ['Python', 'discord.py', 'Regex', 'openpyxl', 'JSON'],
    impact:
      'Eliminated 100% of manual ledger entry overhead and contributed to a +30% improvement in subscription renewal conversion through automated expiry alerts.',
    keyLearnings: [
      'Event-driven webhook and bot listeners eliminate human data-entry errors at the source.',
      'Automated, well-timed renewal notifications significantly reduce involuntary churn without requiring manual follow-up.',
    ],
    metrics: [
      { value: '+30%', label: 'Renewal Uplift' },
      { value: '100%', label: 'Automated Ledger' },
      { value: 'Zero', label: 'Manual Tracking' },
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/davidfady-24/discord-member-intelligence-system',
      },
    ],
    tags: [
      'Python',
      'discord.py',
      'Regex',
      'openpyxl',
      'Churn Reduction',
      'Process Automation',
    ],
  },
  {
    id: 'sql-mastery',
    title: 'SQL Mastery & Analytical Data Modeling',
    subtitle: 'Production SQL Library: Cohort Retention, RFM Segmentation & Window Functions',
    category: 'Analytical SQL & Data Modeling',
    year: '2026',
    featured: false,
    problem:
      'Standard CRUD queries fail to answer complex executive questions around multi-month cohort retention, customer lifetime value tiers, and rolling operational KPIs.',
    context:
      'Created a comprehensive, production-grade SQL script library demonstrating advanced analytical query patterns for business intelligence and data engineering.',
    solution:
      'Authored modular SQL scripts covering multi-CTE cohort retention matrices, RFM customer segmentation (NTILE, PERCENT_RANK), rolling window functions (LAG, LEAD, moving averages), Star Schema operational KPIs, and deduplication/data-cleaning patterns.',
    technologies: ['SQL', 'T-SQL', 'PostgreSQL', 'Window Functions', 'CTEs'],
    impact:
      'Established a reusable library of production SQL templates for customer segmentation, churn analysis, and dimensional warehouse reporting.',
    keyLearnings: [
      'Multi-stage CTE pipelines dramatically improve readability, debugging, and maintainability over deeply nested subqueries.',
      'Window functions (NTILE, LAG/LEAD, SUM OVER) unlock behavioral cohort and RFM insights directly inside the database engine.',
    ],
    metrics: [
      { value: 'RFM & CTEs', label: 'Cohort Models' },
      { value: 'Window', label: 'Functions' },
      { value: 'Star Schema', label: 'KPI Queries' },
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/davidfady-24/sql-mastery',
      },
    ],
    tags: [
      'SQL',
      'T-SQL',
      'Window Functions',
      'Cohort Retention',
      'RFM Segmentation',
    ],
  },
];
