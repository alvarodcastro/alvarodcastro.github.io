export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Publications', href: '/publications' },
  { label: 'Updates', href: '/updates/' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv' },
];
