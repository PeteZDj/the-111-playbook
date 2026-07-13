import { Link } from 'react-router-dom';
import { Check, Clock, ArrowUpRight, Gauge } from 'lucide-react';
import type { Task } from '../data/types';
import { phaseById } from '../data/phases';
import { isTaskDone, toggleTask, useProgress } from '../lib/progress';

const diffColor: Record<string, string> = {
  Easy: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  Medium: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/20',
  Hard: 'text-rose-700 dark:text-rose-300 bg-rose-500/10 border-rose-500/20',
};

export default function TaskCard({ task }: { task: Task }) {
  useProgress();
  const done = isTaskDone(task.id);
  const phase = phaseById(task.phase)!;

  return (
    <div
      data-reveal
      className={`group relative rounded-2xl border p-5 card-glow hover-lift ${
        done ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-line bg-surface hover:border-line-strong hover:bg-surface2'
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          data-nosound
          onClick={() => toggleTask(task.id)}
          className={`shrink-0 mt-0.5 w-7 h-7 rounded-lg border flex items-center justify-center transition pressable ${
            done
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'border-line-strong text-transparent hover:border-emerald-500/60 hover:scale-110'
          }`}
          aria-label={done ? 'Mark incomplete' : 'Mark complete'}
        >
          <Check className="w-4 h-4" strokeWidth={3} />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-[11px] font-bold tabular-nums px-1.5 py-0.5 rounded"
              style={{ color: phase.color, backgroundColor: `${phase.color}1a` }}
            >
              #{task.id}
            </span>
            <span className="text-[11px] text-subtle truncate">{phase.title}</span>
          </div>

          <Link to={`/task/${task.id}`} className="block">
            <h3
              className={`font-display font-semibold text-ink leading-snug transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-violet-500 ${
                done ? 'line-through opacity-60' : ''
              }`}
            >
              {task.title}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-muted line-clamp-2">{task.goal}</p>

          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className={`text-[11px] px-2 py-0.5 rounded-full border ${diffColor[task.difficulty]}`}>
              {task.difficulty}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full border border-line text-muted flex items-center gap-1">
              <Clock className="w-3 h-3" /> {task.estimate}
            </span>
            <Link
              to={`/task/${task.id}`}
              className="ml-auto text-[11px] text-muted hover:text-ink flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition"
            >
              Open <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Rich hover preview — appears below the card on hover (desktop only) */}
      <div className="hidden lg:block absolute left-0 right-0 top-full z-30 pt-3 opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
        <div className="rounded-2xl border border-line-strong bg-canvas/95 backdrop-blur-xl p-4 shadow-2xl animate-pop">
          {task.infographic && (
            <div className="mb-3 rounded-xl overflow-hidden border border-line">
              <img
                src={task.infographic}
                alt=""
                loading="lazy"
                className="w-full h-28 object-cover"
                onError={(e) => {
                  (e.currentTarget.closest('div') as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          {task.eli5 && (
            <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-3">
              <span className="font-semibold text-ink">In plain words: </span>
              {task.eli5}
            </p>
          )}

          <div className="space-y-1.5 mb-3">
            {task.steps.slice(0, 3).map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-muted">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-violet-500 shrink-0" />
                <span className="line-clamp-1">{s}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 pt-3 border-t border-line">
            <span className="text-[11px] text-subtle flex items-center gap-1 min-w-0">
              <Gauge className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              <span className="truncate">{task.metric}</span>
            </span>
            <Link
              to={`/task/${task.id}`}
              className="text-[11px] font-semibold text-orange-600 dark:text-orange-400 shrink-0 flex items-center gap-0.5 hover:gap-1.5 transition-all"
            >
              Full task <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
