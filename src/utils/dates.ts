export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

export function formatYear(date: Date): number {
  return date.getFullYear();
}

export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' });
}
