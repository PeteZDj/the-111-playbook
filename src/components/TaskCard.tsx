import { Link } from 'react-router-dom';
import { Check, Clock, ArrowUpRight } from 'lucide-react';
import type { Task } from '../data/types';
import { phaseById } from '../data/phases';
import { isTaskDone, toggleTask, useProgress } from '../lib/progress';

const diffColor: Record<string, string> = {
  Easy: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  Medium: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  Hard: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
};

export default function TaskCard({ task }: { task: Task }) {
  useProgress();
  const done = isTaskDone(task.id);
  const phase = phaseById(task.phase)!;

  return (
    <div
      className={`group relative rounded-2xl border p-5 transition-all card-glow ${
        done ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={() => toggleTask(task.id)}
          className={`shrink-0 mt-0.5 w-7 h-7 rounded-lg border flex items-center justify-center transition ${
            done
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'border-white/20 text-transparent hover:border-white/40'
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
            <span className="text-[11px] text-slate-500 truncate">{phase.title}</span>
          </div>

          <Link to={`/task/${task.slug}`} className="block">
            <h3 className={`font-display font-semibold text-white leading-snug ${done ? 'line-through opacity-60' : ''}`}>
              {task.title}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-slate-400 line-clamp-2">{task.goal}</p>

          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className={`text-[11px] px-2 py-0.5 rounded-full border ${diffColor[task.difficulty]}`}>
              {task.difficulty}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {task.estimate}
            </span>
            <Link
              to={`/task/${task.slug}`}
              className="ml-auto text-[11px] text-slate-400 hover:text-white flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition"
            >
              Open <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
