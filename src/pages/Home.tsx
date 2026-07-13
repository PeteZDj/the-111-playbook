import { Link } from 'react-router-dom';
import { ArrowRight, Users, Megaphone, Receipt, CheckCircle2, Sparkles, Rocket } from 'lucide-react';
import { phases } from '../data/phases';
import { totalTasks, tasksByPhase } from '../data/tasks';
import { caseStudies } from '../data/caseStudies';
import { doneCount, phaseDoneCount, useProgress } from '../lib/progress';

const goals = [
  { icon: Users, label: '10,000 users', desc: 'A working MVP with real, retained users.', color: '#f97316' },
  { icon: Megaphone, label: '10,000 followers', desc: 'An owned, engaged audience across channels.', color: '#ec4899' },
  { icon: Receipt, label: '10,000 transactions', desc: 'Orders, payments or email/lead volume.', color: '#06b6d4' },
];

export default function Home() {
  useProgress();
  const done = doneCount();
  const pct = Math.round((done / totalTasks) * 100);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 lg:pt-24 lg:pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 mb-8 animate-fadeUp">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            The founder&apos;s build log — idea → 10,000 → VC
          </div>

          <h1 className="font-display font-bold tracking-tight text-white leading-[0.95] animate-fadeUp">
            <span className="block text-[22vw] sm:text-[16rem] leading-none text-gradient animate-shimmer">111</span>
            <span className="block mt-2 text-3xl sm:text-5xl">tasks to a fundable startup</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 animate-fadeUp">
            Every concrete step from validating an idea to a working MVP, your first 10,000 users, and a signed term
            sheet — with deep guides, checklists, tools and the metrics that actually matter.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fadeUp">
            <Link
              to="/task/1-write-down-the-idea-and-the-problem-it-solves"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition"
            >
              Start at task #1
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
            <Link
              to="/phases"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-medium hover:border-white/30 transition"
            >
              Explore the 11 phases
            </Link>
          </div>

          {/* Progress strip */}
          <div className="mt-12 max-w-md mx-auto animate-fadeUp">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Your progress</span>
              <span className="tabular-nums">{done}/{totalTasks} done · {pct}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-400 transition-all" style={{ width: `${Math.max(pct, 2)}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* The three 10K goals */}
      <section className="max-w-6xl mx-auto px-5 py-6">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">The 3 numbers investors ask for</h2>
          <p className="mt-2 text-slate-400">The playbook is engineered to get you to all three.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {goals.map((g) => (
            <div key={g.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 card-glow">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${g.color}1f`, color: g.color }}
              >
                <g.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-xl font-bold text-white">{g.label}</div>
              <p className="mt-1.5 text-sm text-slate-400">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phases grid */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">11 phases, 111 tasks</h2>
            <p className="mt-2 text-slate-400">From the first spark of an idea to deploying VC capital.</p>
          </div>
          <Link to="/phases" className="hidden sm:inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white">
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((p, i) => {
            const ids = tasksByPhase(p.id).map((t) => t.id);
            const pdone = phaseDoneCount(ids);
            const ppct = Math.round((pdone / ids.length) * 100);
            return (
              <Link
                key={p.id}
                to={`/phase/${p.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/25 transition card-glow"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading={i > 2 ? 'lazy' : 'eager'}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.id}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-white group-hover:text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400 line-clamp-2">{p.tagline}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${ppct}%`, backgroundColor: p.color }} />
                    </div>
                    <span className="text-[11px] text-slate-500 tabular-nums">{pdone}/{ids.length}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-5 py-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 card-glow">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { icon: CheckCircle2, title: 'Work it like a checklist', body: 'Tick off tasks and steps as you go. Your progress is saved in your browser — no account needed.' },
              { icon: Sparkles, title: 'Go deep on each task', body: 'Every one of the 111 tasks has a full guide, an actionable checklist, recommended tools, common pitfalls and the KPI it moves.' },
              { icon: Rocket, title: 'Aim at the 3 goals', body: 'The whole path is built to reach 10,000 users, 10,000 followers and 10,000 transactions — the traction that unlocks funding.' },
            ].map((f) => (
              <div key={f.title}>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-slate-300">
              <span className="font-display font-bold text-white">{totalTasks} tasks.</span> One clear path.
            </p>
            <Link
              to="/tasks"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0B1020] font-semibold hover:bg-slate-200 transition"
            >
              Browse all 111 tasks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Proof it works</h2>
            <p className="mt-2 text-slate-400">Famous startups, mapped to the same 111 tasks.</p>
          </div>
          <Link to="/case-studies" className="hidden sm:inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white">
            All case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              to={`/case-study/${c.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/25 transition card-glow"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ backgroundColor: `${c.color}1f` }}
              >
                {c.emoji}
              </div>
              <div className="font-display font-semibold text-white">{c.company}</div>
              <p className="mt-1 text-xs text-slate-400 line-clamp-2">{c.tagline}</p>
              <div className="mt-3 text-[11px] text-slate-500">{c.theNumbers[0]}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
