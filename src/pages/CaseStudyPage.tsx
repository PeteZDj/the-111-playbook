import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';
import { caseStudyBySlug } from '../data/caseStudies';
import { taskById } from '../data/tasks';
import { phaseById } from '../data/phases';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = slug ? caseStudyBySlug(slug) : undefined;

  if (!cs) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-white">Case study not found</h1>
        <Link to="/case-studies" className="mt-4 inline-block text-cyan-400 hover:text-cyan-300">← All case studies</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-10 lg:py-14">
      <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white mb-8">
        <ArrowLeft className="w-4 h-4" /> All case studies
      </Link>

      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-3xl flex items-center justify-center text-3xl shrink-0"
          style={{ backgroundColor: `${cs.color}1f` }}
        >
          {cs.emoji}
        </div>
        <div>
          <span className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-slate-400">{cs.category}</span>
          <h1 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white">{cs.company}</h1>
        </div>
      </div>

      <p className="mt-4 text-lg text-slate-300">{cs.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {cs.theNumbers.map((n) => (
          <span
            key={n}
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-slate-200"
          >
            <TrendingUp className="w-3.5 h-3.5" style={{ color: cs.color }} />
            {n}
          </span>
        ))}
      </div>

      <p className="mt-8 text-slate-300 leading-relaxed">{cs.summary}</p>

      {/* Phase-by-phase */}
      <h2 className="mt-10 font-display text-xl font-bold text-white mb-4">How they lived the playbook</h2>
      <div className="space-y-4">
        {cs.phases.map((p) => {
          const phase = phaseById(p.phase);
          return (
            <div key={p.phase} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: phase?.color ?? cs.color }}
                >
                  {p.phase}
                </span>
                {phase ? (
                  <Link to={`/phase/${phase.slug}`} className="text-sm font-semibold text-white hover:underline">
                    {p.title}
                  </Link>
                ) : (
                  <span className="text-sm font-semibold text-white">{p.title}</span>
                )}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{p.story}</p>
            </div>
          );
        })}
      </div>

      {/* Lessons */}
      <div className="mt-8 rounded-2xl border p-6" style={{ borderColor: `${cs.color}40`, backgroundColor: `${cs.color}0d` }}>
        <h2 className="flex items-center gap-2 font-display font-semibold text-white mb-3">
          <Lightbulb className="w-4 h-4" style={{ color: cs.color }} /> Lessons you can steal
        </h2>
        <ul className="space-y-2">
          {cs.lessons.map((l) => (
            <li key={l} className="text-sm text-slate-200 flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: cs.color }} />
              {l}
            </li>
          ))}
        </ul>
      </div>

      {/* Related tasks */}
      {cs.relatedTasks.length > 0 && (
        <section className="mt-8">
          <h2 className="font-display font-semibold text-white mb-3">Playbook tasks this illustrates</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {cs.relatedTasks.map((id) => {
              const t = taskById(id);
              if (!t) return null;
              return (
                <Link
                  key={id}
                  to={`/task/${t.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-white/25 transition"
                >
                  <span className="min-w-0">
                    <span className="text-[11px] text-slate-500">Task #{t.id}</span>
                    <span className="block text-sm text-slate-200 group-hover:text-white truncate">{t.title}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white shrink-0" />
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
