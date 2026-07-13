import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target } from 'lucide-react';
import { phaseBySlug, phases } from '../data/phases';
import { tasksByPhase } from '../data/tasks';
import { phaseDoneCount, useProgress } from '../lib/progress';
import TaskCard from '../components/TaskCard';

export default function PhasePage() {
  const { slug } = useParams();
  useProgress();
  const phase = slug ? phaseBySlug(slug) : undefined;

  if (!phase) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-white">Phase not found</h1>
        <Link to="/phases" className="mt-4 inline-block text-orange-400 hover:text-orange-300">← Back to all phases</Link>
      </div>
    );
  }

  const list = tasksByPhase(phase.id);
  const ids = list.map((t) => t.id);
  const pdone = phaseDoneCount(ids);
  const ppct = Math.round((pdone / ids.length) * 100);
  const prev = phases.find((p) => p.id === phase.id - 1);
  const next = phases.find((p) => p.id === phase.id + 1);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-80 overflow-hidden">
          <img src={phase.image} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/40 via-[#0B1020]/80 to-[#0B1020]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 pt-10 pb-6">
          <Link to="/phases" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" /> All phases
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg font-bold text-white"
              style={{ backgroundColor: phase.color }}
            >
              {phase.id}
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Phase {phase.id} of 11</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white max-w-3xl">{phase.title}</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{phase.summary}</p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm">
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-400">By the end:</span>
            <span className="text-white">{phase.outcome}</span>
          </div>

          <div className="mt-6 flex items-center gap-4 max-w-md">
            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${ppct}%`, backgroundColor: phase.color }} />
            </div>
            <span className="text-sm text-slate-400 tabular-nums">{pdone}/{ids.length} done</span>
          </div>
        </div>
      </section>

      {/* Tasks */}
      <section className="max-w-5xl mx-auto px-5 py-8">
        <div className="grid gap-4">
          {list.map((t) => (
            <TaskCard key={t.id} task={t} />
          ))}
        </div>

        {/* Phase nav */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link to={`/phase/${prev.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/25 transition">
              <span className="text-xs text-slate-500 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous phase</span>
              <span className="mt-1 block font-display font-semibold text-white group-hover:text-white">{prev.title}</span>
            </Link>
          ) : <div />}
          {next && (
            <Link to={`/phase/${next.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/25 transition text-right">
              <span className="text-xs text-slate-500 flex items-center gap-1 justify-end">Next phase <ArrowRight className="w-3 h-3" /></span>
              <span className="mt-1 block font-display font-semibold text-white">{next.title}</span>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
