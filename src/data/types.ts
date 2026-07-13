export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Resource {
  label: string;
  url: string;
}

/** Plain-language extras merged onto each task from extras.ts. */
export interface TaskExtras {
  eli5: string;         // "explain like I'm 5" — one short, jargon-free paragraph
  examples: string[];   // concrete, real-world examples of the task in practice
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
  // The following are populated by the aggregator (authored phase files omit them):
  eli5?: string;        // merged from extras.ts
  examples?: string[];  // merged from extras.ts
  infographic?: string; // /images/tasks/task-XX.webp
}

/** A real-world story that maps a company to the playbook. */
export interface CaseStudy {
  slug: string;
  company: string;
  tagline: string;        // one-line who/what
  emoji: string;          // simple visual marker
  color: string;          // hex accent
  category: string;       // e.g. "Marketplace", "SaaS", "Consumer"
  summary: string;        // 2–3 sentence overview
  theNumbers: string[];   // headline traction stats
  phases: {               // how they lived a few key phases
    phase: number;
    title: string;
    story: string;
  }[];
  relatedTasks: number[]; // task ids this story best illustrates
  lessons: string[];      // takeaways a founder can copy
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
