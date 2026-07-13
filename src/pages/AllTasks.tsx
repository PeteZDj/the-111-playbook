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
          <h1 className="font-display text-4xl font-bold text-ink">All 111 tasks</h1>
          <p className="mt-2 text-muted">{done} of {totalTasks} complete — keep going.</p>
        </div>
        <button
          onClick={onOpenSearch}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-line bg-surface2 text-muted hover:text-ink hover:border-line-strong transition self-start"
        >
          <Search className="w-4 h-4" /> Search tasks
        </button>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs text-subtle mr-1">
          <Filter className="w-3.5 h-3.5" /> Filter
        </span>
        <button
          onClick={() => setPhaseFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs border transition ${
            phaseFilter === 'all' ? 'bg-ink text-canvas border-ink' : 'border-line text-muted hover:border-line-strong'
          }`}
        >
          All phases
        </button>
        {phases.map((p) => (
          <button
            key={p.id}
            onClick={() => setPhaseFilter(p.id)}
            className={`px-3 py-1.5 rounded-full text-xs border transition ${
              phaseFilter === p.id ? 'text-white border-transparent' : 'border-line text-muted hover:border-line-strong'
            }`}
            style={phaseFilter === p.id ? { backgroundColor: p.color } : undefined}
          >
            {p.id}. {p.title.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}

        <div className="w-px h-5 bg-track mx-1" />
        {(['all', 'todo', 'done'] as Show[]).map((s) => (
          <button
            key={s}
            onClick={() => setShow(s)}
            className={`px-3 py-1.5 rounded-full text-xs border capitalize transition ${
              show === s ? 'bg-track text-ink border-line-strong' : 'border-line text-muted hover:border-line-strong'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="text-xs text-subtle mb-4">{filtered.length} task{filtered.length === 1 ? '' : 's'}</p>
      <div className="grid gap-4">
        {filtered.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-line bg-surface p-10 text-center text-subtle">
            No tasks match these filters.
          </div>
        )}
      </div>
    </div>
  );
}
