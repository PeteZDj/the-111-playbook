import { Link } from 'react-router-dom';
import { ArrowRight, Target } from 'lucide-react';
import { phases } from '../data/phases';
import { tasksByPhase } from '../data/tasks';
import { phaseDoneCount, useProgress } from '../lib/progress';

export default function PhasesIndex() {
  useProgress();

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 lg:py-16">
      <header className="max-w-2xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-2">The journey</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">The 11 phases</h1>
        <p className="mt-4 text-lg text-slate-400">
          Each phase groups roughly ten tasks into a milestone. Complete them in order, or jump to the phase that
          matches where you are today.
        </p>
      </header>

      <div className="space-y-6">
        {phases.map((p) => {
          const list = tasksByPhase(p.id);
          const ids = list.map((t) => t.id);
          const pdone = phaseDoneCount(ids);
          const ppct = Math.round((pdone / ids.length) * 100);
          return (
            <Link
              key={p.id}
              to={`/phase/${p.slug}`}
              className="group grid md:grid-cols-[280px_1fr] gap-0 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/25 transition card-glow"
            >
              <div className="relative h-48 md:h-full overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B1020] via-[#0B1020]/20 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.id}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phase {p.id}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-white">{p.title}</h2>
                <p className="mt-2 text-slate-400">{p.summary}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-400">Outcome:</span> {p.outcome}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden max-w-xs">
                    <div className="h-full rounded-full" style={{ width: `${ppct}%`, backgroundColor: p.color }} />
                  </div>
                  <span className="text-xs text-slate-500 tabular-nums">{pdone}/{ids.length} tasks</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-sm text-slate-300 group-hover:text-white">
                    Open <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
