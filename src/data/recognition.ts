export interface RecognitionItem {
  period: string;
  mark: string;
  type: string;
  title: string;
  programme: string;
  description: string;
  facts: string[];
  href?: string;
}

export const recognition: RecognitionItem[] = [
  {
    period: '2026',
    mark: 'Finalist',
    type: 'Academic recognition',
    title: 'TFG–TFM MONDRAGON Sariak Awards',
    programme: 'MONDRAGON Corporation · 2026 edition',
    description:
      'Selected as a finalist for the MSc thesis “Development of Security Auditing Solutions for Automotive In-Vehicle Networks,” focused on security-auditing methods for CAN bus and UDS environments.',
    facts: [
      'MSc thesis',
      'University of Málaga',
      'Automotive cybersecurity',
    ],
    href: 'https://shakinghub.com/premios-tfg-tfm-mondragon-sariak-2026/?lang=en',
  },
  {
    period: '2026 — present',
    mark: 'MSCA',
    type: 'European research fellowship',
    title: 'Marie Skłodowska-Curie Doctoral Fellow',
    programme: 'SecReSy4You · Horizon Europe MSCA Doctoral Network',
    description:
      'Doctoral research at the University of Padua on context-based intrusion and anomaly detection for collaborative-perception systems, within a European network focused on cyber-physical systems security and resilience.',
    facts: [
      'Grant agreement 101227389',
      '10 doctoral researchers',
      '8 European countries',
    ],
    href: 'https://secresy4you.eu/',
  },
];
