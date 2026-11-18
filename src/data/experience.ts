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
  year: number;
  description?: string;
}

export interface ServiceItem {
  role: string;
  venue: string;
  year?: string;
  href?: string;
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
    degree: 'MSc in Computer Scienceand Engineering (90 ECTS)',
    institution: 'University of Málaga',
    location: 'Málaga, Spain',
    period: '2024 – 2026',
    description: 'Specialization in cybersecurity, with a focus on IT/OT environments and industrial systems.',
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
    description: 'Specialized training in digital forensics techniques, tools, and methodologies for investigating cyber incidents.',
  },
  {
    degree: 'BSc in Cybersecurity (60 ECTS)',
    institution: 'University of Vilnius',
    location: 'Kaunas, Lithuania',
    period: '2022 – 2023',
    description: 'Exchange studies as part of the Erasmus+ program. Specialized training in digital forensics techniques, tools, and methodologies for investigating cyber incidents.',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Marie Skłodowska-Curie Fellow',
    organisation: 'MSCA DN SecReSy4You',
    location: 'Padova, Italy',
    period: 'Oct 2026 – current',
    description:
      '',
  },
  {
    role: 'PhD Cybersecurity Researcher',
    organisation: 'SPRITZ - Security and Privacy Research Group',
    location: 'Padova, Italy',
    period: 'Oct 2026 – current',
    description:
      '',
  },
  {
    role: 'Cybersecurity Researcher',
    organisation: 'University of Málaga',
    location: 'Málaga, Spain',
    period: 'Jul 2024 – Oct 2026',
    description:
      'Contributed to automotive and industrial cybersecurity research projects.',
  },
  {
    role: 'Research Assistant',
    organisation: 'University of Jaén',
    location: 'Jaén, Spain',
    period: 'Jan 2023 – Jun 2023',
    description:
      'Implemented deep learning framework in real life environmentsfor traditional human tasks.',
  },
];

export const awards: AwardItem[] = [
  {
    title: 'Finalist, Digital Transformation & Most Innovative Project',
    issuer: 'TFG–TFM MONDRAGON Sariak Awards · Danobatgroup / IKERLAN',
    year: 2026,
    description:
      'Selected in the Danobatgroup thematic category and the transversal IKERLAN award for the MSc thesis “Development of Security Auditing Solutions for Automotive In-Vehicle Networks.”',
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

export const skills = {
  research: [
    'Vulnerability Assessment',
    'Threat Modelling (TARA, STRIDE)',
    'Reverse Engineering',
    'Protocol Analysis',
    'Penetration Testing',
    'Responsible Disclosure',
  ],
  technical: [
    'Python', 'C/C++', 'Linux',
    'CAN', 'UDS', 'Wireshark', 'Scapy',
    'Git', 'Docker',
  ],
  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'Professional working proficiency (C1)' },
    { language: 'Italian', level: 'Entry Level (A1)' }
    { language: 'German', level: 'Entry Level (A1)' }
  ],
};
