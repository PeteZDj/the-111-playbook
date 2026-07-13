import { Link } from 'react-router-dom';
import { RotateCcw, Trophy, Flame } from 'lucide-react';
import { phases } from '../data/phases';
import { tasks, totalTasks, tasksByPhase } from '../data/tasks';
import { doneCount, phaseDoneCount, resetAll, useProgress } from '../lib/progress';

export default function ProgressPage() {
  useProgress();
  const done = doneCount();
  const pct = Math.round((done / totalTasks) * 100);
  const remaining = totalTasks - done;

  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="max-w-4xl mx-auto px-5 py-12 lg:py-16">
      <header className="mb-10">
        <h1 className="font-display text-4xl font-bold text-ink">Your progress</h1>
        <p className="mt-2 text-muted">Saved locally in this browser. Keep the streak alive.</p>
      </header>

      {/* Overview */}
      <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-center rounded-3xl border border-line bg-surface p-8 card-glow">
        <div className="relative w-40 h-40 mx-auto">
          <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-700"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f97316" />
                <stop offset="0.5" stopColor="#ec4899" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-3xl font-bold text-ink tabular-nums">{pct}%</span>
            <span className="text-xs text-subtle">complete</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center sm:text-left">
          <div className="rounded-2xl border border-line bg-surface p-4">
            <Trophy className="w-5 h-5 text-emerald-400 mb-2 mx-auto sm:mx-0" />
            <div className="font-display text-2xl font-bold text-ink tabular-nums">{done}</div>
            <div className="text-xs text-subtle">Tasks done</div>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <Flame className="w-5 h-5 text-orange-400 mb-2 mx-auto sm:mx-0" />
            <div className="font-display text-2xl font-bold text-ink tabular-nums">{remaining}</div>
            <div className="text-xs text-subtle">To go</div>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4">
            <div className="w-5 h-5 mb-2" />
            <div className="font-display text-2xl font-bold text-ink tabular-nums">{totalTasks}</div>
            <div className="text-xs text-subtle">Total tasks</div>
          </div>
        </div>
      </div>

      {/* Per-phase */}
      <h2 className="font-display text-xl font-bold text-ink mt-12 mb-4">By phase</h2>
      <div className="space-y-3">
        {phases.map((p, i) => {
          const ids = tasksByPhase(p.id).map((t) => t.id);
          const pdone = phaseDoneCount(ids);
          const ppct = Math.round((pdone / ids.length) * 100);
          return (
            <Link
              key={p.id}
              to={`/phase/${p.slug}`}
              data-reveal
              data-reveal-delay={(i % 4) + 1}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 hover:border-line-strong hover-lift"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: p.color }}
              >
                {p.id}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-ink truncate">{p.title}</span>
                  <span className="text-xs text-subtle tabular-nums shrink-0">{pdone}/{ids.length}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-track overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${ppct}%`, backgroundColor: p.color }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Reset */}
      <div className="mt-12 flex items-center justify-between rounded-2xl border border-line bg-surface p-5">
        <div>
          <div className="font-medium text-ink">Reset all progress</div>
          <div className="text-sm text-subtle">Clears every completed task and step from this browser.</div>
        </div>
        <button
          onClick={() => {
            if (confirm('Reset all progress? This cannot be undone.')) resetAll();
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300 hover:bg-rose-500/20 transition text-sm pressable"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
    </div>
  );
}
