export interface SocialLink {
  label: string;
  href: string;
  icon: string; // inline SVG path or identifier
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/alvarodcastro',
    icon: 'github',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=YOURPROFILE',
    icon: 'scholar',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0002-9079-7051',
    icon: 'orcid',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/alvaro-de-castro-escribano',
    icon: 'linkedin',
  },
];
