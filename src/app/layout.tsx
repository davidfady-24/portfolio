import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-ten-sepia-36.vercel.app'),
  title:
    'David Fady Farag — Data & BI Analyst | Python Automation · SQL · Power BI',
  description:
    'Portfolio of David Fady Farag, a Microsoft Certified Power BI Data Analyst Associate (PL-300) and Python Automation Engineer based in Egypt. Tracked 213,750+ EGP revenue across 574 subscriptions for a 3,500+ member marketplace.',
  keywords: [
    'David Fady Farag',
    'Data Analyst',
    'BI Analyst',
    'Microsoft Certified Power BI Data Analyst Associate',
    'PL-300',
    'Python Automation Engineer',
    'SQL Portfolio',
    'Power BI',
    'Tableau',
    'Business Intelligence',
    'Data Engineering',
    'Data Analyst Egypt',
    'Mansoura University',
  ],
  authors: [{ name: 'David Fady Farag' }],
  creator: 'David Fady Farag',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-ten-sepia-36.vercel.app',
    siteName: 'David Fady Farag — Data & BI Analyst',
    title:
      'David Fady Farag — Data & BI Analyst | Python Automation · SQL · Power BI',
    description:
      'Microsoft Certified Power BI Data Analyst (PL-300) & Python Automation Builder. 3,500+ platform users, 213.7K EGP revenue tracked, 31.6K+ records modeled.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'David Fady Farag — Data & BI Analyst Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Fady Farag — Data & BI Analyst',
    description:
      'Microsoft Certified Power BI Data Analyst (PL-300) & Python Automation Builder.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'David Fady Farag',
  jobTitle: 'Data & BI Analyst',
  url: 'https://portfolio-ten-sepia-36.vercel.app',
  email: 'David.Fady24@gmail.com',
  sameAs: [
    'https://github.com/davidfady-24',
    'https://www.linkedin.com/in/david-fady24',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'El Mansoura',
    addressCountry: 'EG',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Mansoura University',
  },
  knowsAbout: [
    'SQL',
    'T-SQL',
    'Python',
    'Power BI',
    'Tableau',
    'Excel BI',
    'ETL Pipelines',
    'Data Analysis',
    'Business Intelligence',
    'Operations Analytics',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans">
        {children}
      </body>
    </html>
  );
}
