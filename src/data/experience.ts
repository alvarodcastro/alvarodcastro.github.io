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
    degree: 'PhD in Computer Science (Cybersecurity)',
    institution: 'University of Málaga',
    location: 'Málaga, Spain',
    period: '2023 – present',
    description: 'Doctoral research on automotive cybersecurity and vehicular network trust management.',
  },
  {
    degree: 'MSc in Cybersecurity Engineering',
    institution: 'University of Málaga',
    location: 'Málaga, Spain',
    period: '2021 – 2023',
    description: 'Specialisation in applied security, network security, and embedded systems security.',
  },
  {
    degree: 'BSc in Computer Science',
    institution: 'University of Málaga',
    location: 'Málaga, Spain',
    period: '2017 – 2021',
    description: 'Foundation in algorithms, systems, networks, and software engineering.',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'PhD Researcher',
    organisation: 'Network and Information Security Group, University of Málaga',
    location: 'Málaga, Spain',
    period: '2023 – present',
    description:
      'Conducting doctoral research on automotive cybersecurity. Working on in-vehicle network security, V2X trust mechanisms, and misbehavior detection in cooperative ITS.',
  },
  {
    role: 'Research Assistant',
    organisation: 'University of Málaga',
    location: 'Málaga, Spain',
    period: '2022 – 2023',
    description:
      'Contributed to IoT security and critical infrastructure research projects. Developed security assessment frameworks and evaluation tooling.',
  },
];

export const awards: AwardItem[] = [
  {
    title: 'Best Paper Award',
    issuer: 'IEEE VTC – Security Track',
    year: 2024,
    description: 'Awarded for research on misbehavior detection in vehicular networks.',
  },
];

export const service: ServiceItem[] = [
  { role: 'Reviewer', venue: 'IEEE Transactions on Intelligent Transportation Systems', year: '2024–present' },
  { role: 'Reviewer', venue: 'IEEE Vehicular Technology Conference (VTC)', year: '2023–present' },
  { role: 'Reviewer', venue: 'ACNS Workshop on Automotive and Industrial Cyber Security (AutoSec)', year: '2024' },
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
    'Python', 'C/C++', 'Linux', 'Rust',
    'CAN / OBD-II', 'UDS', 'Wireshark', 'Scapy',
    'Git', 'Docker', 'QEMU', 'GDB',
  ],
  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'Professional working proficiency' },
  ],
};
