import { Link } from 'react-router-dom';

const REPO_URL = 'https://github.com/PeteZDj/the-111-playbook';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-display font-bold text-xl text-white">
            <span className="text-gradient">111</span>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-xs">
            The founder&apos;s build log: 111 tasks from a raw idea to 10,000 users and your first VC cheque.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/phases" className="text-slate-400 hover:text-white">The 11 phases</Link></li>
            <li><Link to="/tasks" className="text-slate-400 hover:text-white">All 111 tasks</Link></li>
            <li><Link to="/case-studies" className="text-slate-400 hover:text-white">Case studies</Link></li>
            <li><Link to="/progress" className="text-slate-400 hover:text-white">Track your progress</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">The 3 goals</div>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>10,000 users</li>
            <li>10,000 followers</li>
            <li>10,000 transactions</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Open source</div>
          <ul className="space-y-2 text-sm">
            <li><a href={REPO_URL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">GitHub repo</a></li>
            <li><a href={`${REPO_URL}/blob/main/PLAYBOOK.md`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">The full playbook (.md)</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>Built as an open playbook. Use it, fork it, ship your startup.</p>
          <p>111.pete.ke</p>
        </div>
      </div>
    </footer>
  );
}
