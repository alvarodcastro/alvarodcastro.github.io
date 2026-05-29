import type { CollectionEntry } from 'astro:content';

export type Publication = CollectionEntry<'publications'>;

export function highlightOwnerName(authors: string[], ownerName: string): string {
  return authors
    .map((a) => (a.trim() === ownerName.trim() ? `<strong>${a}</strong>` : a))
    .join(', ');
}

export const pubTypeLabels: Record<string, string> = {
  journal: 'Journal',
  conference: 'Conference',
  workshop: 'Workshop',
  preprint: 'Preprint',
  'book-chapter': 'Book Chapter',
  poster: 'Poster',
  demo: 'Demo',
  thesis: 'Thesis',
  'technical-report': 'Technical Report',
};

export const pubStatusLabels: Record<string, string> = {
  published: 'Published',
  accepted: 'Accepted',
  'under-review': 'Under Review',
  preprint: 'Preprint',
  'in-preparation': 'In Preparation',
};

export const pubTypeColors: Record<string, string> = {
  journal: 'bg-blue-50 text-blue-800 border-blue-200',
  conference: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  workshop: 'bg-violet-50 text-violet-800 border-violet-200',
  preprint: 'bg-amber-50 text-amber-800 border-amber-200',
  'book-chapter': 'bg-emerald-50 text-emerald-800 border-emerald-200',
  poster: 'bg-pink-50 text-pink-800 border-pink-200',
  demo: 'bg-teal-50 text-teal-800 border-teal-200',
  thesis: 'bg-gray-50 text-gray-800 border-gray-200',
  'technical-report': 'bg-yellow-50 text-yellow-800 border-yellow-200',
};
