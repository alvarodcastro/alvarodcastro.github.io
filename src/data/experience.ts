export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface ExperienceItem {
  role: string;
  organisation: string;
  location: string;
  period: string;
  description: string;
}

export interface AwardItem {
  title: string;
  issuer: string;
  period: string;
  description?: string;
  href?: string;
}

export interface FellowshipGrantItem {
  title: string;
  programme: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  href?: string;
}

export interface ServiceItem {
  role: string;
  venue: string;
  year?: string;
  href?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export const education: EducationItem[] = [
  {
    degree: 'PhD in Brain, Mind, and Computer Science',
    institution: 'Università degli Studi di Padova',
    location: 'Padova, Italy',
    period: '2026 – 2029',
    description: 'Specialization in cybersecurity',
  },
  {
    degree: 'MSc in Computer Science and Engineering (90 ECTS)',
    institution: 'University of Málaga',
    location: 'Málaga, Spain',
    period: '2024 – 2026',
    description:
      'Specialization in cybersecurity, with a focus on IT/OT environments and industrial systems.',
  },
  {
    degree: 'BSc in Computer Science (240 ECTS)',
    institution: 'University of Jaén',
    location: 'Jaén, Spain',
    period: '2020 – 2024',
    description: 'Foundation in algorithms, systems, networks, and software engineering.',
  },
  {
    degree: 'Expert Certificate in Digital Forensics (30 ECTS)',
    institution: 'Catholic University of Murcia (UCAM)',
    location: 'Online',
    period: '2023 – 2024',
    description:
      'Specialized training in digital forensics techniques, tools, and methodologies for investigating cyber incidents.',
  },
  {
    degree: 'BSc in Cybersecurity (60 ECTS)',
    institution: 'University of Vilnius',
    location: 'Kaunas, Lithuania',
    period: '2022 – 2023',
    description:
      'Exchange studies as part of the Erasmus+ program. Specialized training in digital forensics techniques, tools, and methodologies for investigating cyber incidents.',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Marie Skłodowska-Curie Fellow',
    organisation: 'MSCA DN SecReSy4You',
    location: 'Padova, Italy',
    period: 'Oct 2026 – current',
    description: '',
  },
  {
    role: 'PhD Cybersecurity Researcher',
    organisation: 'SPRITZ - Security and Privacy Research Group',
    location: 'Padova, Italy',
    period: 'Oct 2026 – current',
    description: '',
  },
  {
    role: 'Cybersecurity Researcher',
    organisation: 'University of Málaga',
    location: 'Málaga, Spain',
    period: 'Jul 2024 – Oct 2026',
    description: 'Contributed to automotive and industrial cybersecurity research projects.',
  },
  {
    role: 'Research Assistant',
    organisation: 'University of Jaén',
    location: 'Jaén, Spain',
    period: 'Jan 2023 – Jun 2023',
    description:
      'Implemented a deep-learning framework in real-life environments for traditional human tasks.',
  },
];

export const fellowshipsAndGrants: FellowshipGrantItem[] = [
  {
    title: 'Marie Skłodowska-Curie Doctoral Fellowship',
    programme: 'SecReSy4You Doctoral Network · Horizon Europe MSCA',
    institution: 'Università degli Studi di Padova',
    location: 'Padova, Italy',
    period: 'Oct 2026 – present',
    description:
      'Doctoral fellowship for research on context-based intrusion and anomaly detection in collaborative-perception systems.',
    href: 'https://secresy4you.eu/',
  },
];

export const awards: AwardItem[] = [
  {
    title: 'Finalist, Digital Transformation & Most Innovative Project',
    issuer: 'TFG–TFM MONDRAGON Sariak Awards · Danobatgroup / IKERLAN',
    period: '2026',
    description:
      'Finalist in the Danobatgroup Award for Digital Transformation and the transversal IKERLAN Award for the Most Innovative Project for the MSc thesis “Development of Security Auditing Solutions for Automotive In-Vehicle Networks.”',
    href: 'https://shakinghub.com/premios-tfg-tfm-mondragon-sariak-2026/?lang=en',
  },
];

export const service: ServiceItem[] = [
  {
    role: 'Staff member',
    venue: 'Hackén Cybersecurity Congress, Jaén',
    year: 'Present',
    href: 'https://hacken.es/',
  },
];

export const languages: LanguageItem[] = [
  { language: 'Spanish', level: 'Native' },
  { language: 'English', level: 'Professional working proficiency (C1)' },
  { language: 'Italian', level: 'Entry level (A1)' },
  { language: 'German', level: 'Entry level (A1)' },
];
