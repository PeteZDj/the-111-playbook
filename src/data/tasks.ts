import type { Task } from './types';
import { phase01 } from './tasks/phase01';
import { phase02 } from './tasks/phase02';
import { phase03 } from './tasks/phase03';
import { phase04 } from './tasks/phase04';
import { phase05 } from './tasks/phase05';
import { phase06 } from './tasks/phase06';
import { phase07 } from './tasks/phase07';
import { phase08 } from './tasks/phase08';
import { phase09 } from './tasks/phase09';
import { phase10 } from './tasks/phase10';
import { phase11 } from './tasks/phase11';

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const raw: Task[] = [
  ...phase01,
  ...phase02,
  ...phase03,
  ...phase04,
  ...phase05,
  ...phase06,
  ...phase07,
  ...phase08,
  ...phase09,
  ...phase10,
  ...phase11,
];

// Compute a stable slug for each task from its id + title.
export const tasks: Task[] = raw.map((t) => ({
  ...t,
  slug: `${t.id}-${slugify(t.title)}`,
}));

export const totalTasks = tasks.length;

export const taskById = (id: number) => tasks.find((t) => t.id === id);
export const taskBySlug = (slug: string) => tasks.find((t) => t.slug === slug);
export const tasksByPhase = (phase: number) => tasks.filter((t) => t.phase === phase);

/** Lightweight full-text search across the most relevant fields. */
export function searchTasks(query: string): Task[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return tasks
    .map((t) => {
      const hay = [
        t.title,
        t.goal,
        t.why,
        t.deliverable,
        t.metric,
        ...t.steps,
        ...t.tools,
        ...t.guide,
      ]
        .join(' ')
        .toLowerCase();
      const score = terms.reduce((acc, term) => acc + (hay.includes(term) ? 1 : 0), 0);
      return { t, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.t);
}
