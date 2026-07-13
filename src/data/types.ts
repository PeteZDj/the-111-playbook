export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Resource {
  label: string;
  url: string;
}

/** A single actionable task in the playbook. */
export interface Task {
  id: number;           // 1..111, stable for routing + progress
  phase: number;        // 1..11
  slug: string;         // derived in the aggregator
  title: string;
  goal: string;         // one-line objective
  why: string;          // why it matters (2–3 sentences)
  guide: string[];      // the deep-dive, one string per paragraph
  steps: string[];      // the checklist — the "how"
  tools: string[];      // recommended tools / services
  pitfalls: string[];   // common mistakes to avoid
  resources: Resource[];// links to go deeper
  deliverable: string;  // definition of done
  metric: string;       // the KPI this task moves
  estimate: string;     // rough time
  difficulty: Difficulty;
}

/** A phase groups ~10 related tasks. */
export interface Phase {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  color: string;        // hex accent
  image: string;        // /images/phases/*.webp
  outcome: string;      // what you have at the end of the phase
}
