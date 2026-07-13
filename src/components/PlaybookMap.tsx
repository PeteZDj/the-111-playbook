import { Link } from 'react-router-dom';
import { Map, ListChecks, ArrowUpRight } from 'lucide-react';
import { phases } from '../data/phases';
import { tasksByPhase, totalTasks } from '../data/tasks';
import { phaseDoneCount, useProgress } from '../lib/progress';

const diffDot: Record<string, string> = {
  Easy: 'bg-emerald-500',
  Medium: 'bg-amber-500',
  Hard: 'bg-rose-500',
};

/**
 * The entire playbook on one page: all 11 phases and 111 tasks, grouped and
 * scannable, with a jump-to legend, per-phase progress and difficulty markers.
 */
export default function PlaybookMap() {
  useProgress();

  return (
    <section className="max-w-6xl mx-auto px-5 py-16 border-t border-line">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface2 text-xs text-muted mb-4">
          <Map className="w-3.5 h-3.5 text-cyan-500" /> The whole map
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">The entire playbook, one page</h2>
        <p className="mt-3 text-muted">
          All <span className="font-semibold text-ink">{totalTasks} tasks</span> across the{' '}
          <span className="font-semibold text-ink">11 phases</span> — skim the whole journey, then dive into any task.
        </p>
      </div>

      {/* Jump-to legend */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {phases.map((p) => (
          <a
            key={p.id}
            href={`#map-phase-${p.id}`}
            className="group inline-flex items-center gap-1.5 pl-1.5 pr-3 py-1.5 rounded-full border border-line bg-surface text-xs text-muted hover:text-ink hover:border-line-strong transition pressable"
          >
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ backgroundColor: p.color }}
            >
              {p.id}
            </span>
            <span className="hidden sm:inline">{p.title}</span>
            <span className="sm:hidden">P{p.id}</span>
          </a>
        ))}
      </div>

      {/* Phase blocks */}
      <div className="space-y-6">
        {phases.map((p) => {
          const list = tasksByPhase(p.id);
          const ids = list.map((t) => t.id);
          const pdone = phaseDoneCount(ids);
          const ppct = Math.round((pdone / ids.length) * 100);
          return (
            <div
              key={p.id}
              id={`map-phase-${p.id}`}
              data-reveal
              className="scroll-mt-24 rounded-3xl border border-line bg-surface overflow-hidden card-glow"
            >
              {/* Phase header */}
              <div
                className="relative p-5 sm:p-6 border-b border-line"
                style={{ background: `linear-gradient(90deg, ${p.color}1f, transparent 70%)` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-base font-bold text-white shrink-0 shadow-sm"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <Link
                      to={`/phase/${p.slug}`}
                      className="font-display text-lg font-bold text-ink hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-violet-500 transition-colors"
                    >
                      {p.title}
                    </Link>
                    <p className="text-xs text-muted truncate">{p.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-subtle tabular-nums">
                      {pdone}/{ids.length} done
                    </div>
                    <div className="mt-1 w-20 h-1.5 rounded-full bg-track overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${Math.max(ppct, 2)}%`, backgroundColor: p.color }}
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted flex items-start gap-1.5">
                  <ListChecks className="w-4 h-4 mt-0.5 shrink-0" style={{ color: p.color }} />
                  <span>
                    <span className="text-subtle">By the end:</span> {p.outcome}
                  </span>
                </p>
              </div>

              {/* Tasks */}
              <div className="p-3 sm:p-4 grid sm:grid-cols-2 gap-0.5">
                {list.map((t) => (
                  <Link
                    key={t.id}
                    to={`/task/${t.slug}`}
                    className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 hover:bg-surface2 transition"
                  >
                    <span
                      className="text-[11px] font-bold tabular-nums w-7 h-6 flex items-center justify-center rounded shrink-0"
                      style={{ color: p.color, backgroundColor: `${p.color}1a` }}
                    >
                      {t.id}
                    </span>
                    <span className="text-sm text-muted group-hover:text-ink truncate flex-1">{t.title}</span>
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${diffDot[t.difficulty]}`}
                      title={t.difficulty}
                    />
                    <span className="text-[10px] text-subtle tabular-nums hidden sm:block w-14 text-right">
                      {t.estimate}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-subtle opacity-0 group-hover:opacity-100 group-hover:text-ink transition shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Difficulty legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-subtle">
        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Easy</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Medium</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500" /> Hard</span>
      </div>
    </section>
  );
}
