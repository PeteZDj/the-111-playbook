import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12 lg:py-16">
      <header className="max-w-2xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">Proof it works</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Case studies</h1>
        <p className="mt-4 text-lg text-slate-400">
          Real companies, mapped to the playbook. See how famous startups lived these exact phases — from validating an
          idea to growth loops and their raise — and steal the lessons.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {caseStudies.map((c) => (
          <Link
            key={c.slug}
            to={`/case-study/${c.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/25 transition card-glow"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: `${c.color}1f` }}
              >
                {c.emoji}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-xl font-bold text-white">{c.company}</h2>
                  <span className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-slate-400">{c.category}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{c.tagline}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-400 line-clamp-3">{c.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {c.theNumbers.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg border border-white/10 text-slate-300"
                >
                  <TrendingUp className="w-3 h-3" style={{ color: c.color }} />
                  {n}
                </span>
              ))}
            </div>

            <span className="mt-5 inline-flex items-center gap-1 text-sm text-slate-300 group-hover:text-white">
              Read the breakdown <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
