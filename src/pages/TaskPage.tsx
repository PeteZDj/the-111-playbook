import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Target,
  Wrench,
  AlertTriangle,
  BookOpen,
  Trophy,
  Gauge,
  ListChecks,
  ExternalLink,
  Baby,
  Lightbulb,
  Building2,
} from 'lucide-react';
import { taskBySlug, taskById, totalTasks } from '../data/tasks';
import { phaseById } from '../data/phases';
import { caseStudiesForTask } from '../data/caseStudies';
import { isTaskDone, toggleTask, isStepDone, toggleStep, useProgress } from '../lib/progress';

const diffColor: Record<string, string> = {
  Easy: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  Medium: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/20',
  Hard: 'text-rose-700 dark:text-rose-300 bg-rose-500/10 border-rose-500/20',
};

export default function TaskPage() {
  const { slug } = useParams();
  useProgress();
  const task = slug ? taskBySlug(slug) : undefined;

  if (!task) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">Task not found</h1>
        <Link to="/tasks" className="mt-4 inline-block text-orange-600 dark:text-orange-400 hover:text-orange-500">← Back to all tasks</Link>
      </div>
    );
  }

  const phase = phaseById(task.phase)!;
  const done = isTaskDone(task.id);
  const prev = taskById(task.id - 1);
  const next = taskById(task.id + 1);
  const stepsDone = task.steps.filter((_, i) => isStepDone(task.id, i)).length;
  const examples = task.examples ?? [];
  const relatedCases = caseStudiesForTask(task.id, task.phase);

  return (
    <div className="max-w-3xl mx-auto px-5 py-10 lg:py-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-subtle mb-6 flex-wrap">
        <Link to="/tasks" className="hover:text-ink inline-flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> All tasks
        </Link>
        <span>/</span>
        <Link to={`/phase/${phase.slug}`} className="hover:text-ink" style={{ color: phase.color }}>
          {phase.title}
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-start gap-3 mb-2">
        <span
          className="text-sm font-bold tabular-nums px-2 py-1 rounded-lg"
          style={{ color: phase.color, backgroundColor: `${phase.color}1a` }}
        >
          #{task.id}
        </span>
        <span className="text-xs text-subtle mt-1.5">Task {task.id} of {totalTasks}</span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">{task.title}</h1>
      <p className="mt-3 text-lg text-muted">{task.goal}</p>

      {/* Meta chips */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className={`text-xs px-2.5 py-1 rounded-full border ${diffColor[task.difficulty]}`}>{task.difficulty}</span>
        <span className="text-xs px-2.5 py-1 rounded-full border border-line text-muted flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" /> {task.estimate}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full border border-line text-muted flex items-center gap-1.5">
          <Gauge className="w-3.5 h-3.5 text-cyan-400" /> {task.metric}
        </span>
      </div>

      {/* Mark complete */}
      <button
        data-nosound
        onClick={() => toggleTask(task.id)}
        className={`mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition pressable ${
          done
            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
            : 'bg-gradient-to-r from-orange-500 to-violet-500 text-white hover:shadow-lg hover:shadow-orange-500/25'
        }`}
      >
        <span className={`w-5 h-5 rounded flex items-center justify-center ${done ? 'bg-emerald-500 text-white' : 'bg-track'}`}>
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
        </span>
        {done ? 'Completed — nice work' : 'Mark task complete'}
      </button>

      {/* Infographic */}
      {task.infographic && (
        <figure data-reveal className="group mt-8 rounded-2xl overflow-hidden border border-line bg-surface card-glow hover-lift">
          <img
            src={task.infographic}
            alt={`Infographic explaining: ${task.title}`}
            loading="lazy"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
            onError={(e) => {
              (e.currentTarget.closest('figure') as HTMLElement).style.display = 'none';
            }}
          />
        </figure>
      )}

      {/* ELI5 */}
      {task.eli5 && (
        <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-6">
          <h2 className="flex items-center gap-2 font-display font-semibold text-ink mb-2">
            <Baby className="w-4 h-4 text-cyan-400" /> Explain it like I&apos;m 5
          </h2>
          <p className="text-muted leading-relaxed">{task.eli5}</p>
        </section>
      )}

      {/* Why it matters */}
      <section className="mt-10 rounded-2xl border border-line bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display font-semibold text-ink mb-2">
          <Target className="w-4 h-4 text-orange-400" /> Why this matters
        </h2>
        <p className="text-muted leading-relaxed">{task.why}</p>
      </section>

      {/* Guide */}
      <section className="mt-8">
        <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink mb-4">
          <BookOpen className="w-5 h-5 text-violet-400" /> The deep dive
        </h2>
        <div className="space-y-4 text-muted leading-relaxed">
          {task.guide.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Examples */}
      {examples.length > 0 && (
        <section className="mt-10">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink mb-4">
            <Lightbulb className="w-5 h-5 text-amber-400" /> What this looks like in practice
          </h2>
          <div className="grid gap-3">
            {examples.map((ex, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
              >
                <span className="shrink-0 w-6 h-6 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-muted leading-relaxed">{ex}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Steps checklist */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <ListChecks className="w-5 h-5 text-emerald-400" /> The checklist
          </h2>
          <span className="text-xs text-subtle tabular-nums">{stepsDone}/{task.steps.length}</span>
        </div>
        <div className="space-y-2">
          {task.steps.map((step, i) => {
            const sd = isStepDone(task.id, i);
            return (
              <button
                key={i}
                data-nosound
                onClick={() => toggleStep(task.id, i)}
                className={`w-full text-left flex items-start gap-3 rounded-xl border p-3.5 transition ${
                  sd ? 'border-emerald-500/25 bg-emerald-500/5' : 'border-line bg-surface hover:border-line-strong'
                }`}
              >
                <span
                  className={`shrink-0 mt-0.5 w-5 h-5 rounded border flex items-center justify-center ${
                    sd ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-line-strong text-transparent'
                  }`}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className={`text-sm ${sd ? 'text-muted line-through' : 'text-muted'}`}>{step}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Tools + Pitfalls */}
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display font-semibold text-ink mb-3">
            <Wrench className="w-4 h-4 text-cyan-400" /> Tools &amp; services
          </h2>
          <ul className="space-y-2">
            {task.tools.map((tool) => (
              <li key={tool} className="text-sm text-muted flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                {tool}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display font-semibold text-ink mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-400" /> Common pitfalls
          </h2>
          <ul className="space-y-2">
            {task.pitfalls.map((p) => (
              <li key={p} className="text-sm text-muted flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Deliverable */}
      <section className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-6">
        <h2 className="flex items-center gap-2 font-display font-semibold text-ink mb-2">
          <Trophy className="w-4 h-4 text-emerald-400" /> Definition of done
        </h2>
        <p className="text-muted">{task.deliverable}</p>
      </section>

      {/* Related case studies — always populated, with a phase-specific story */}
      {relatedCases.length > 0 && (
        <section className="mt-8">
          <h2 className="flex items-center gap-2 font-display font-semibold text-ink mb-1">
            <Building2 className="w-4 h-4 text-violet-400" /> See it in a real company
          </h2>
          <p className="text-sm text-subtle mb-3">How famous startups handled {phase.title.toLowerCase()}.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedCases.map((c) => {
              const story = c.phases.find((p) => p.phase === task.phase)?.story;
              return (
                <Link
                  key={c.slug}
                  to={`/case-study/${c.slug}`}
                  className="group rounded-xl border border-line bg-surface p-4 hover:border-line-strong hover-lift"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform"
                      style={{ backgroundColor: `${c.color}1f` }}
                    >
                      {c.emoji}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink">{c.company}</span>
                      <span className="block text-[11px] text-subtle truncate">{c.category}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-subtle group-hover:text-ink group-hover:translate-x-0.5 transition ml-auto shrink-0" />
                  </div>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">{story ?? c.tagline}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Resources */}
      {task.resources.length > 0 && (
        <section className="mt-8">
          <h2 className="font-display font-semibold text-ink mb-3">Go deeper</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {task.resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3 hover:border-line-strong transition"
              >
                <span className="text-sm text-muted group-hover:text-ink">{r.label}</span>
                <ExternalLink className="w-4 h-4 text-subtle group-hover:text-ink" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <nav className="mt-14 grid sm:grid-cols-2 gap-4">
        {prev ? (
          <Link to={`/task/${prev.slug}`} className="group rounded-2xl border border-line bg-surface p-5 hover:border-line-strong hover-lift">
            <span className="text-xs text-subtle flex items-center gap-1"><ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition" /> Task #{prev.id}</span>
            <span className="mt-1 block font-display font-semibold text-ink line-clamp-1">{prev.title}</span>
          </Link>
        ) : <div />}
        {next && (
          <Link to={`/task/${next.slug}`} className="group rounded-2xl border border-line bg-surface p-5 hover:border-line-strong hover-lift text-right">
            <span className="text-xs text-subtle flex items-center gap-1 justify-end">Task #{next.id} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" /></span>
            <span className="mt-1 block font-display font-semibold text-ink line-clamp-1">{next.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
