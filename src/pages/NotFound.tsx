import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-32 text-center">
      <div className="font-display text-8xl font-bold text-gradient">404</div>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">This page isn&apos;t in the playbook</h1>
      <p className="mt-3 text-muted">The task or phase you&apos;re looking for doesn&apos;t exist.</p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link to="/" className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-violet-500 text-white font-semibold pressable hover-sheen">
          Back home
        </Link>
        <Link to="/tasks" className="px-5 py-3 rounded-xl border border-line-strong bg-surface2 text-ink font-medium">
          All 111 tasks
        </Link>
      </div>
    </div>
  );
}
