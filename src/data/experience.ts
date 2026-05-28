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
}

export const education: EducationItem[] = [
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
    role: 'Cybersecurity Researcher',
    organisation: 'University of Málaga',
    location: 'Málaga, Spain',
    period: '2024 – current',
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
  // {
  //   title: 'Best Paper Award',
  //   issuer: 'IEEE VTC – Security Track',
  //   year: 2024,
  //   description: 'Awarded for research on misbehavior detection in vehicular networks.',
  // },
];

export const service: ServiceItem[] = [
  // { role: 'Reviewer', venue: 'IEEE Transactions on Intelligent Transportation Systems', year: '2024–present' },
  // { role: 'Reviewer', venue: 'IEEE Vehicular Technology Conference (VTC)', year: '2023–present' },
  // { role: 'Reviewer', venue: 'ACNS Workshop on Automotive and Industrial Cyber Security (AutoSec)', year: '2024' },
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
    { language: 'German', level: 'Entry Level (A1)' }
  ],
};
