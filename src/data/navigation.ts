export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Publications', href: '/publications' },
  { label: 'Notes', href: '/blog' },
  { label: 'CV', href: '/cv' },
];
