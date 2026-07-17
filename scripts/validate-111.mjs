// Validates every site's /111 answers.js + tasks.js in a sandbox.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const sites = ['afrosoftware.com','afrosports','animationdictionary.xyz','dj24.com','dj24.net','docall.app','foodlog.xyz','godriving.xyz','kuza.ke','petezdj.com','pinsend.com','robotrex.ca','zawadihub.com'];
let fail = 0;
for (const s of sites) {
  const base = `C:/inetpub/repos/${s}/public/111`;
  const ctx = { window: {}, location: { host: s } };
  vm.createContext(ctx);
  try {
    vm.runInContext(readFileSync(`${base}/tasks.js`, 'utf8'), ctx);
    vm.runInContext(readFileSync(`${base}/answers.js`, 'utf8'), ctx);
  } catch (e) {
    console.log(`FAIL ${s}: ${e.message}`); fail++; continue;
  }
  const T = ctx.window.PLAYBOOK_TASKS || [];
  const A = ctx.window.ANSWERS || {};
  const S = ctx.window.SITE || {};
  const missing = [];
  const badStatus = [];
  for (let n = 1; n <= 111; n++) {
    const a = A[n];
    if (!a || !a.text) missing.push(n);
    else if (!['done','doing','todo'].includes(a.status)) badStatus.push(n);
  }
  const counts = { done:0, doing:0, todo:0 };
  for (let n = 1; n <= 111; n++) if (A[n]) counts[A[n].status] = (counts[A[n].status]||0)+1;
  const themeOk = !!(S.theme && (S.theme.primary || S.design));
  const ok = T.length === 111 && missing.length === 0 && badStatus.length === 0 && themeOk;
  if (!ok) fail++;
  console.log(`${ok?'OK  ':'FAIL'} ${s.padEnd(24)} tasks=${T.length} ans=${Object.keys(A).length} theme=${themeOk} done/doing/todo=${counts.done}/${counts.doing}/${counts.todo}` + (missing.length?` MISSING=${missing.join(',')}`:'') + (badStatus.length?` BADSTATUS=${badStatus.join(',')}`:''));
}
console.log(fail ? `\n${fail} site(s) FAILED` : '\nAll sites valid.');
process.exit(fail ? 1 : 0);
