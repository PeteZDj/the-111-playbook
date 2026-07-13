// Generates PLAYBOOK.md (and README.md intro) from the TypeScript task data.
// Uses esbuild (a Vite dependency) to bundle the TS data so we can import it in Node.
import { build } from 'esbuild';
import { writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';

const tmp = join(process.cwd(), '_playbook_data.mjs');

await build({
  stdin: {
    contents: `
      export { tasks, totalTasks } from './src/data/tasks';
      export { phases } from './src/data/phases';
      export { caseStudies } from './src/data/caseStudies';
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

const { tasks, totalTasks, phases, caseStudies } = await import(pathToFileURL(tmp).href);

const SITE = 'https://111.pete.ke';
const REPO = 'https://github.com/PeteZDj/the-111-playbook';

function taskMd(t) {
  const phase = phases.find((p) => p.id === t.phase);
  const lines = [];
  lines.push(`### ${t.id}. ${t.title}`);
  lines.push('');
  lines.push(`> **Goal:** ${t.goal}`);
  lines.push(`>`);
  lines.push(
    `> **Phase:** ${phase.id} — ${phase.title} · **Difficulty:** ${t.difficulty} · **Estimate:** ${t.estimate} · **Metric:** ${t.metric}`,
  );
  lines.push('');
  lines.push(`**Why this matters.** ${t.why}`);
  lines.push('');
  if (t.eli5) {
    lines.push(`**Explain it like I'm 5.** ${t.eli5}`);
    lines.push('');
  }
  for (const para of t.guide) lines.push(para, '');
  if (t.examples?.length) {
    lines.push('**What this looks like in practice**');
    lines.push('');
    for (const ex of t.examples) lines.push(`- ${ex}`);
    lines.push('');
  }
  lines.push('**Checklist**');
  lines.push('');
  for (const s of t.steps) lines.push(`- [ ] ${s}`);
  lines.push('');
  lines.push('**Tools & services**');
  lines.push('');
  for (const tool of t.tools) lines.push(`- ${tool}`);
  lines.push('');
  lines.push('**Common pitfalls**');
  lines.push('');
  for (const p of t.pitfalls) lines.push(`- ${p}`);
  lines.push('');
  if (t.resources?.length) {
    lines.push('**Go deeper**');
    lines.push('');
    for (const r of t.resources) lines.push(`- [${r.label}](${r.url})`);
    lines.push('');
  }
  lines.push(`**Definition of done:** ${t.deliverable}`);
  lines.push('');
  lines.push(`[↑ Back to contents](#contents) · [Open on the web ↗](${SITE}/task/${t.slug})`);
  lines.push('');
  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

const out = [];
out.push('# The 111 Playbook');
out.push('');
out.push('**From a raw idea to 10,000 users, 10,000 followers, 10,000 transactions — and your first VC cheque.**');
out.push('');
out.push(
  `${totalTasks} concrete, opinionated tasks that take a developer from validating an idea all the way to a fundable startup. Every task has a deep-dive guide, an actionable checklist, recommended tools, common pitfalls, the KPI it moves and a clear definition of done.`,
);
out.push('');
out.push(`🌐 **Live site:** ${SITE}  ·  📦 **Repo:** ${REPO}`);
out.push('');
out.push('## The three numbers that unlock funding');
out.push('');
out.push('- **10,000 users** — a working MVP with real, retained people using it.');
out.push('- **10,000 followers** — an owned, engaged audience across your channels.');
out.push('- **10,000 transactions** — orders, payments, or email/lead volume that proves demand.');
out.push('');
out.push('## The 11 phases');
out.push('');
out.push('| # | Phase | What you walk away with |');
out.push('| - | ----- | ----------------------- |');
for (const p of phases) out.push(`| ${p.id} | **${p.title}** | ${p.outcome} |`);
out.push('');

// Contents
out.push('## Contents');
out.push('');
for (const p of phases) {
  out.push(`### Phase ${p.id} — ${p.title}`);
  out.push('');
  const list = tasks.filter((t) => t.phase === p.id);
  for (const t of list) {
    const anchor = `${t.id}-${t.title.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`;
    out.push(`- [${t.id}. ${t.title}](#${anchor})`);
  }
  out.push('');
}

// Body
for (const p of phases) {
  out.push(`## Phase ${p.id}: ${p.title}`);
  out.push('');
  out.push(`_${p.summary}_`);
  out.push('');
  out.push(`**Outcome:** ${p.outcome}`);
  out.push('');
  const list = tasks.filter((t) => t.phase === p.id);
  for (const t of list) out.push(taskMd(t));
}

// Case studies
out.push('## Case studies — the playbook in the wild');
out.push('');
out.push('Real companies, mapped to the playbook. Illustrative summaries drawn from widely reported public accounts.');
out.push('');
for (const c of caseStudies) {
  out.push(`### ${c.emoji} ${c.company} — ${c.tagline}`);
  out.push('');
  out.push(`_${c.category}_ · ${c.theNumbers.join(' · ')}`);
  out.push('');
  out.push(c.summary);
  out.push('');
  for (const p of c.phases) out.push(`- **Phase ${p.phase} — ${p.title}:** ${p.story}`);
  out.push('');
  out.push('**Lessons you can steal**');
  out.push('');
  for (const l of c.lessons) out.push(`- ${l}`);
  out.push('');
  const rel = c.relatedTasks
    .map((id) => tasks.find((t) => t.id === id))
    .filter(Boolean)
    .map((t) => `#${t.id} ${t.title}`);
  if (rel.length) out.push(`_Illustrates tasks: ${rel.join('; ')}._`, '');
  out.push('---');
  out.push('');
}

out.push('## License');
out.push('');
out.push('Released as an open playbook — use it, fork it, ship your startup. See `LICENSE`.');
out.push('');

await writeFile('PLAYBOOK.md', out.join('\n'), 'utf8');

// A concise README that points at the site + the full playbook.
const wordCount = tasks.reduce(
  (acc, t) => acc + (t.why + ' ' + t.guide.join(' ') + ' ' + t.steps.join(' ')).split(/\s+/).length,
  0,
);

const readme = `# The 111 Playbook

**From a raw idea to 10,000 users, 10,000 followers, 10,000 transactions — and your first VC cheque.**

${totalTasks} concrete tasks across 11 phases, each with a deep-dive guide, checklist, tools, pitfalls, the KPI it moves and a definition of done. Roughly ${wordCount.toLocaleString('en-US')} words of guidance in total.

- 🌐 **Live site:** ${SITE}
- 📖 **Read the full playbook:** [PLAYBOOK.md](./PLAYBOOK.md)

## The three numbers that unlock funding

| Target | Meaning |
| ------ | ------- |
| **10,000 users** | A working MVP with real, retained users |
| **10,000 followers** | An owned, engaged audience |
| **10,000 transactions** | Orders, payments or email/lead volume |

## The 11 phases

${phases.map((p) => `${p.id}. **${p.title}** — ${p.tagline}`).join('\n')}

## Run the site locally

\`\`\`bash
npm install
npm run dev        # start the dev server
npm run build      # production build to dist/
npm run playbook   # regenerate PLAYBOOK.md + README.md from the task data
\`\`\`

## Tech

Vite + React + TypeScript + Tailwind CSS. Content lives as typed data in \`src/data/\`, so the website and the Markdown playbook are always generated from a single source of truth.

## License

MIT — use it, fork it, ship your startup.
`;

await writeFile('README.md', readme, 'utf8');

await rm(tmp, { force: true });
console.log(`Wrote PLAYBOOK.md and README.md from ${totalTasks} tasks (~${wordCount.toLocaleString('en-US')} words).`);
