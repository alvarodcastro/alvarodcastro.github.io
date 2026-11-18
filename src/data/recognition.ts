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
    href: 'https://cordis.europa.eu/project/id/101227389',
  },
];
