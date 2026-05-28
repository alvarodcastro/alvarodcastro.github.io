export function sortByDateDesc<T extends { data: { date?: Date; year?: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const aVal = a.data.date?.getTime() ?? (a.data.year ?? 0) * 1000;
    const bVal = b.data.date?.getTime() ?? (b.data.year ?? 0) * 1000;
    return bVal - aVal;
  });
}

export function groupByYear<T extends { data: { year: number } }>(items: T[]): Map<number, T[]> {
  const grouped = new Map<number, T[]>();
  for (const item of items) {
    const year = item.data.year;
    if (!grouped.has(year)) grouped.set(year, []);
    grouped.get(year)!.push(item);
  }
  // Sort keys descending
  return new Map([...grouped.entries()].sort((a, b) => b[0] - a[0]));
}
