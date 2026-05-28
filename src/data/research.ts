export interface ResearchArea {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
}

export const researchAreas: ResearchArea[] = [
  {
    slug: 'automotive-cybersecurity',
    title: 'Automotive Cybersecurity',
    description:
      'Security analysis of connected vehicles, diagnostic protocols, in-vehicle networks, and infotainment ecosystems. Work includes CAN bus security, UDS protocol vulnerabilities, ECU firmware analysis, and automotive attack surface mapping.',
    keywords: ['UDS', 'CAN', 'OBD-II', 'ECU', 'CarPlay', 'OTA updates', 'reverse engineering', 'fuzzing'],
  },
  {
    slug: 'iot-infrastructure',
    title: 'IoT and Critical Infrastructure Security',
    description:
      'Risk analysis and security architectures for IoT systems deployed in energy, transport, and industrial environments. Focus on threat modelling, network monitoring, and securing resource-constrained devices in safety-critical contexts.',
    keywords: ['IoT', 'critical infrastructure', 'ICS', 'SCADA', 'risk management', 'threat modelling', 'network monitoring'],
  },
  {
    slug: 'vehicular-networks',
    title: 'Vehicular Networks and V2X Security',
    description:
      'Trust, reputation, and misbehavior detection mechanisms for VANETs and cooperative intelligent transport systems. Research on Sybil attacks, position falsification, and distributed trust management in V2X environments.',
    keywords: ['VANET', 'V2X', 'C-ITS', 'trust management', 'reputation systems', 'misbehavior detection', 'Sybil attacks'],
  },
  {
    slug: 'risk-management',
    title: 'Cybersecurity Risk Management',
    description:
      'Methodologies for systematic risk assessment and security governance in complex, multi-stakeholder environments. Application of STRIDE, TARA, and FAIR frameworks in automotive and industrial settings.',
    keywords: ['TARA', 'ISO/SAE 21434', 'STRIDE', 'FAIR', 'threat assessment', 'security governance'],
  },
  {
    slug: 'malware-ml',
    title: 'Malware Analysis and Machine Learning',
    description:
      'Application of machine learning techniques to intrusion detection, malware classification, and anomaly detection in embedded and network environments. Emphasis on interpretability and robustness of detection models.',
    keywords: ['malware analysis', 'IDS', 'anomaly detection', 'ML security', 'CAN intrusion detection', 'feature engineering'],
  },
  {
    slug: 'applied-cryptography',
    title: 'Applied Cryptography and Secure Systems',
    description:
      'Design and analysis of cryptographic protocols for constrained environments, including secure key management, authenticated communication in vehicular contexts, and PKI for V2X systems.',
    keywords: ['PKI', 'V2X certificates', 'pseudonymity', 'key management', 'TLS', 'HSM', 'secure boot'],
  },
];
