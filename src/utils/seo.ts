export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const defaultSEO = {
  siteName: 'Álvaro Researcher',
  titleTemplate: '%s | Álvaro Researcher',
  description:
    'Academic portfolio of a cybersecurity researcher and PhD student at the University of Málaga. Research in automotive security, IoT, V2X networks, and critical infrastructure.',
};

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return defaultSEO.siteName;
  return defaultSEO.titleTemplate.replace('%s', pageTitle);
}
