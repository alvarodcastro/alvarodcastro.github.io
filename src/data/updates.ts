export type UpdateCategory =
  | 'Research'
  | 'Publication'
  | 'Award'
  | 'Fellowship'
  | 'Talk'
  | 'Conference'
  | 'Event'
  | 'Academic Service';

export interface UpdateLink {
  label: string;
  href: string;
}

export interface AcademicUpdate {
  /** Stable fragment used by /updates/#slug. Do not change after publishing. */
  slug: string;
  /** ISO date with only the precision that is verified: YYYY, YYYY-MM, or YYYY-MM-DD. */
  date: string;
  category: UpdateCategory;
  title: string;
  description: string;
  location?: string;
  links?: UpdateLink[];
}

export interface UpdateCategoryMeta {
  label: string;
  filterLabel: string;
  color: string;
  darkColor: string;
}

/**
 * Muted colors derived from the site's navy, terracotta, and natural-paper palette.
 * Category labels remain visible alongside color markers so meaning never depends on color alone.
 */
export const updateCategoryMeta: Record<UpdateCategory, UpdateCategoryMeta> = {
  Publication: {
    label: 'Publication',
    filterLabel: 'Publications',
    color: '#1E3A8A',
    darkColor: '#91AAFF',
  },
  Research: {
    label: 'Research',
    filterLabel: 'Research',
    color: '#315C57',
    darkColor: '#7CE3D1',
  },
  Fellowship: {
    label: 'Fellowship',
    filterLabel: 'Fellowships',
    color: '#6C4B78',
    darkColor: '#D3A6E0',
  },
  Award: {
    label: 'Award',
    filterLabel: 'Awards',
    color: '#9A3F2C',
    darkColor: '#FF9A80',
  },
  Talk: {
    label: 'Talk',
    filterLabel: 'Talks',
    color: '#75501E',
    darkColor: '#E4B76B',
  },
  Conference: {
    label: 'Conference',
    filterLabel: 'Conferences',
    color: '#3F5C7A',
    darkColor: '#9FBAD6',
  },
  Event: {
    label: 'Event',
    filterLabel: 'Events',
    color: '#6B5935',
    darkColor: '#CBB47D',
  },
  'Academic Service': {
    label: 'Academic Service',
    filterLabel: 'Academic service',
    color: '#4F5D3A',
    darkColor: '#B6C890',
  },
};

export const academicUpdates: AcademicUpdate[] = [
  {
    slug: 'msca-fellowship',
    date: '2026-11-01',
    category: 'Fellowship',
    title: 'Began the Marie Skłodowska-Curie doctoral fellowship',
    description:
      'Joined the SecReSy4You Doctoral Network at the University of Padua to research security and resilience in cyber-physical systems.',
    links: [{ label: 'SecReSy4You', href: 'https://secresy4you.eu/' }],
  },
  {
    slug: 'phd-start',
    date: '2026-11-01',
    category: 'Research',
    title: 'Started the PhD at the University of Padua',
    description:
      'Began the PhD in Brain, Mind, and Computer Science, with a research focus on cybersecurity.',
    links: [{ label: 'UniPD', href: 'https://www.unipd.it/' }],
  },
  {
    slug: 'mondragon-finalist',
    date: '2026-10-22',
    category: 'Award',
    title: 'Selected as a finalist in two MONDRAGON Sariak categories',
    description:
      'Recognised as a finalist in the Danobatgroup Award for Digital Transformation and the IKERLAN Award for the Most Innovative Project.',
    links: [
      {
        label: 'Awards programme',
        href: 'https://shakinghub.com/premios-tfg-tfm-mondragon-sariak-2026/?lang=en',
      },
    ],
  },
  {
    slug: 'smart-parking-paper-presented-sat-cps-2026',
    date: '2026-06-25',
    category: 'Conference',
    title: 'Work presented at SaT-CPS 2026',
    description:
      'One of the authors presented “Attack Modelling and Intrusion Detection in a CAN-Based Smart Parking Cyber-Physical System” at the 6th ACM Workshop on Secure and Trustworthy Cyber-Physical Systems, co-located with ACM CODASPY 2026.',
    location: 'Frankfurt am Main, Germany',
    links: [
      {
        label: 'Paper',
        href: 'https://doi.org/10.1145/3806008.3811701',
      },
      {
        label: 'SaT-CPS 2026',
        href: 'https://sites.google.com/view/sat-cps2026/',
      },
    ],
  },
  {
    slug: 'smart-parking-paper-accepted-sat-cps-2026',
    date: '2026-04-18',
    category: 'Publication',
    title: 'Smart-parking CPS security paper accepted at SaT-CPS 2026',
    description:
      'The paper “Attack Modelling and Intrusion Detection in a CAN-Based Smart Parking Cyber-Physical System” was accepted for presentation at the 6th ACM Workshop on Secure and Trustworthy Cyber-Physical Systems.',
    links: [
      {
        label: 'Paper',
        href: 'https://doi.org/10.1145/3806008.3811701',
      },
      {
        label: 'SaT-CPS 2026',
        href: 'https://sites.google.com/view/sat-cps2026/',
      },
    ],
  },
];
