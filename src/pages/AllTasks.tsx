import { useMemo, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { tasks, totalTasks } from '../data/tasks';
import { phases } from '../data/phases';
import { doneCount, isTaskDone, useProgress } from '../lib/progress';
import TaskCard from '../components/TaskCard';

type Show = 'all' | 'todo' | 'done';

export default function AllTasks({ onOpenSearch }: { onOpenSearch: () => void }) {
  useProgress();
  const [phaseFilter, setPhaseFilter] = useState<number | 'all'>('all');
  const [show, setShow] = useState<Show>('all');
  const done = doneCount();

  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      if (phaseFilter !== 'all' && t.phase !== phaseFilter) return false;
      const d = isTaskDone(t.id);
      if (show === 'todo' && d) return false;
      if (show === 'done' && !d) return false;
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phaseFilter, show, done]);

  return (
    <div className="max-w-5xl mx-auto px-5 py-12 lg:py-16">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-4xl font-bold text-white">All 111 tasks</h1>
          <p className="mt-2 text-slate-400">{done} of {totalTasks} complete — keep going.</p>
        </div>
        <button
          onClick={onOpenSearch}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20 transition self-start"
        >
          <Search className="w-4 h-4" /> Search tasks
        </button>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 mr-1">
          <Filter className="w-3.5 h-3.5" /> Filter
        </span>
        <button
          onClick={() => setPhaseFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs border transition ${
            phaseFilter === 'all' ? 'bg-white text-[#0B1020] border-white' : 'border-white/10 text-slate-300 hover:border-white/25'
          }`}
        >
          All phases
        </button>
        {phases.map((p) => (
          <button
            key={p.id}
            onClick={() => setPhaseFilter(p.id)}
            className={`px-3 py-1.5 rounded-full text-xs border transition ${
              phaseFilter === p.id ? 'text-white border-transparent' : 'border-white/10 text-slate-300 hover:border-white/25'
            }`}
            style={phaseFilter === p.id ? { backgroundColor: p.color } : undefined}
          >
            {p.id}. {p.title.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}

        <div className="w-px h-5 bg-white/10 mx-1" />
        {(['all', 'todo', 'done'] as Show[]).map((s) => (
          <button
            key={s}
            onClick={() => setShow(s)}
            className={`px-3 py-1.5 rounded-full text-xs border capitalize transition ${
              show === s ? 'bg-white/10 text-white border-white/25' : 'border-white/10 text-slate-400 hover:border-white/25'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-500 mb-4">{filtered.length} task{filtered.length === 1 ? '' : 's'}</p>
      <div className="grid gap-4">
        {filtered.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-slate-500">
            No tasks match these filters.
          </div>
        )}
      </div>
    </div>
  );
}
