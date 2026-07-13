// Builds a magi shot list (one entry per task) for the 111 educational infographics.
// Each prompt is derived from the task's title, goal and key steps so the images
// actually explain the task. Run with: node scripts/generate-infographic-shotlist.mjs
import { build } from 'esbuild';
import { writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';

const tmp = join(process.cwd(), '_shotlist_data.mjs');

await build({
  stdin: {
    contents: `
      export { tasks } from './src/data/tasks';
      export { phases } from './src/data/phases';
    `,
    resolveDir: process.cwd(),
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmp,
  logLevel: 'silent',
});

const { tasks, phases } = await import(pathToFileURL(tmp).href);

const STOP_TAIL = new Set(['the', 'a', 'an', 'of', 'to', 'on', 'and', 'by', 'for', 'in', 'with', 'your', 'you', 'it', 'each', 'that', 'this', 'from', 'as', 'or']);

// Turn a full step sentence into a clean 2-3 word icon label.
function shortLabel(step) {
  let cleaned = step
    .replace(/\(.*?\)/g, ' ')
    .replace(/[—–-].*$/, '')
    .replace(/[.;:,].*$/, '')
    .replace(/[^a-zA-Z0-9 &/']/g, ' ')
    .replace(/\b\d+\b/g, ' ')
    .trim();
  let words = cleaned.split(/\s+/).filter(Boolean).slice(0, 3);
  while (words.length > 1 && STOP_TAIL.has(words[words.length - 1].toLowerCase())) words.pop();
  // Title-case first word for a tidy label.
  if (words[0]) words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(' ');
}

// Compress a long metric sentence into a short badge phrase.
function shortMetric(metric) {
  let m = metric.replace(/\.$/, '').split(/[:(]/)[0].trim();
  const words = m.split(/\s+/);
  if (words.length > 8) m = words.slice(0, 8).join(' ') + '…';
  return m;
}

const shots = tasks.map((t) => {
  const phase = phases.find((p) => p.id === t.phase);
  const nodes = [...new Set(t.steps.map(shortLabel).filter((n) => n && n.length > 2))].slice(0, 4);
  const nodeList = nodes.map((n) => `"${n}"`).join(', ');
  const num = String(t.id).padStart(2, '0');
  const prompt = [
    `Educational infographic that teaches one startup task. Title text at the top: "${t.title}".`,
    `Central idea to communicate visually: ${t.goal}`,
    `Design it as a clean, self-explanatory diagram with ${Math.max(nodes.length, 3)} labelled icon nodes connected by numbered steps or arrows showing the flow. The icon nodes are labelled: ${nodeList}.`,
    `Add one small tag/badge with the goal metric: "${shortMetric(t.metric)}".`,
    `Small bottom-corner phase label: "Phase ${phase.id}: ${phase.title}". Keep it minimal, balanced, uncluttered and instantly readable.`,
  ].join(' ');
  return { name: `task-${num}`, prompt };
});

await writeFile('scripts/magi-shotlist-tasks.json', JSON.stringify(shots, null, 2), 'utf8');
await rm(tmp, { force: true });
console.log(`Wrote scripts/magi-shotlist-tasks.json with ${shots.length} shots.`);
