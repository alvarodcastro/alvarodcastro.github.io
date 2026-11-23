import type { AcademicUpdate } from '@/data/updates';

export function sortUpdates(updates: AcademicUpdate[]): AcademicUpdate[] {
  return [...updates].sort(
    (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title)
  );
}

export function hasExactUpdateDate(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

export function formatUpdateDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, (month ?? 1) - 1, day ?? 1));
  const options: Intl.DateTimeFormatOptions = day
    ? { day: 'numeric', month: 'short', year: 'numeric' }
    : month
      ? { month: 'short', year: 'numeric' }
      : { year: 'numeric' };

  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export function getInitialCalendarMonth(updates: AcademicUpdate[]): string {
  const latestWithMonth = sortUpdates(updates).find((update) => /^\d{4}-\d{2}/.test(update.date));
  return latestWithMonth?.date.slice(0, 7) ?? new Date().toISOString().slice(0, 7);
}
