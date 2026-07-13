// Writes scripts/magi-shotlist-missing.json containing only the tasks that do
// NOT yet have a WebP in public/images/tasks/. Use this to finish generating the
// infographics after raising the AI Studio spend cap, without paying to redo the
// ones that already succeeded.
//
//   node scripts/generate-infographic-shotlist.mjs   # (re)build the full shotlist
//   node scripts/generate-missing-shotlist.mjs       # then build the missing subset
//   & $env:USERPROFILE\.claude\skills\magi\scripts\magi.ps1 -Model gemini-3-pro-image `
//       -Shotlist .\scripts\magi-shotlist-missing.json -OutDir .\_infographic_tmp `
//       -StyleFile .\scripts\magi.style.infographic.txt
//   npm run infographics                             # convert + refresh the manifest
import { readFile, writeFile, readdir } from 'node:fs/promises';

const full = JSON.parse(await readFile('scripts/magi-shotlist-tasks.json', 'utf8'));

let have = new Set();
try {
  have = new Set(
    (await readdir('public/images/tasks'))
      .map((f) => (f.match(/task-0*(\d+)\.webp$/) || [])[1])
      .filter(Boolean)
      .map(Number),
  );
} catch {
  /* dir may not exist yet */
}

const missing = full.filter((shot) => {
  const id = Number((shot.name.match(/task-0*(\d+)/) || [])[1]);
  return id && !have.has(id);
});

await writeFile('scripts/magi-shotlist-missing.json', JSON.stringify(missing, null, 2), 'utf8');
console.log(`Missing infographics: ${missing.length} -> scripts/magi-shotlist-missing.json`);
if (missing.length) console.log('Tasks:', missing.map((s) => s.name).join(', '));
