export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const defaultSEO = {
  siteName: 'Alvaro de Castro',
  homeTitle: 'Alvaro de Castro — PhD Student & Cybersecurity Researcher',
  titleTemplate: '%s | Alvaro de Castro',
  description:
    'Academic website of Alvaro de Castro, an MSCA Fellow and PhD student at the University of Padua researching automotive and cyber-physical systems security.',
};

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return defaultSEO.homeTitle;
  return defaultSEO.titleTemplate.replace('%s', pageTitle);
}
