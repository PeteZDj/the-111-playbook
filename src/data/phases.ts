import type { Phase } from './types';

export const phases: Phase[] = [
  {
    id: 1,
    slug: 'idea-validation',
    title: 'Idea & Validation',
    tagline: 'Prove the problem is real before you write code.',
    summary:
      'Turn a hunch into a validated problem worth solving. Talk to real people, size the market, study competitors and decide — with evidence — whether to build.',
    color: '#6366f1',
    image: '/images/phases/phase-01-idea.webp',
    outcome: 'A written, evidence-backed problem statement and a go / no-go decision.',
  },
  {
    id: 2,
    slug: 'brand-domain-identity',
    title: 'Brand, Domain & Identity',
    tagline: 'A name, a look and a domain people trust in one glance.',
    summary:
      'Choose a memorable name, secure the domain and social handles, and build a lightweight brand system — logo, colours, type and voice — that makes you look funded from day one.',
    color: '#ec4899',
    image: '/images/phases/phase-02-brand.webp',
    outcome: 'A registered domain, a favicon-ready logo and a documented brand kit.',
  },
  {
    id: 3,
    slug: 'foundation-infrastructure',
    title: 'Foundation & Infrastructure',
    tagline: 'Repos, hosting, DNS and a deploy you can trust.',
    summary:
      'Set up the plumbing: version control, a hosting target, Cloudflare in front, HTTPS, a repeatable deploy and staging. Boring, and the reason you can move fast later.',
    color: '#06b6d4',
    image: '/images/phases/phase-03-infra.webp',
    outcome: 'A live URL that redeploys with one command and never leaks secrets.',
  },
  {
    id: 4,
    slug: 'mvp-build',
    title: 'MVP Build',
    tagline: 'The smallest thing that delivers the core value.',
    summary:
      'Scope ruthlessly and ship the one workflow that solves the validated problem. Model the data, build the happy path, seed it with believable data and get it in front of users.',
    color: '#f59e0b',
    image: '/images/phases/phase-04-mvp.webp',
    outcome: 'A working MVP a stranger can complete the core job on, unaided.',
  },
  {
    id: 5,
    slug: 'design-quality',
    title: 'Design & Quality Bar',
    tagline: 'Look like the funded competitor, not the weekend project.',
    summary:
      'Raise the craft: a hero that converts, a consistent design system, responsive layouts, empty/loading/error states, accessibility and speed. Quality is a feature.',
    color: '#8b5cf6',
    image: '/images/phases/phase-05-design.webp',
    outcome: 'A polished, fast, accessible product you are proud to demo to anyone.',
  },
  {
    id: 6,
    slug: 'auth-data-security',
    title: 'Auth, Data & Security',
    tagline: 'Real accounts, real data, no embarrassing breaches.',
    summary:
      'Add Google sign-in, a real Postgres database, working notifications, billing rails, backups and the security basics that keep users — and their data — safe.',
    color: '#10b981',
    image: '/images/phases/phase-06-security.webp',
    outcome: 'Authenticated users, persistent data, payments and a security baseline.',
  },
  {
    id: 7,
    slug: 'content-seo-launch',
    title: 'Content, SEO & Launch Prep',
    tagline: 'Get found on Google and ready for launch day.',
    summary:
      'Write the pages that rank and convert, ship technical SEO, add legal pages, wire up a status page and rehearse the launch so nothing breaks when the traffic lands.',
    color: '#3b82f6',
    image: '/images/phases/phase-07-launch.webp',
    outcome: 'Indexable, trustworthy pages and a launch runbook you have tested.',
  },
  {
    id: 8,
    slug: 'analytics-tracking-feedback',
    title: 'Analytics, Tracking & Feedback',
    tagline: 'If you cannot measure it, you are guessing.',
    summary:
      'Instrument the funnel, define your north-star metric, watch session replays, run experiments and build a fast loop from user feedback to shipped fix.',
    color: '#14b8a6',
    image: '/images/phases/phase-08-analytics.webp',
    outcome: 'A dashboard of the metrics that matter and a working feedback loop.',
  },
  {
    id: 9,
    slug: 'email-community-retention',
    title: 'Email, Community & Retention',
    tagline: 'Turn one-time visitors into a growing base that stays.',
    summary:
      'Capture emails, send a lifecycle sequence, build a community, add referrals and win back churned users. Retention is what turns growth into 10,000 real users.',
    color: '#f43f5e',
    image: '/images/phases/phase-09-email.webp',
    outcome: 'A growing email list and improving week-over-week retention.',
  },
  {
    id: 10,
    slug: 'growth-to-10000',
    title: 'Growth to 10,000',
    tagline: 'Repeatable channels that compound to five figures.',
    summary:
      'Launch loudly, find the one or two channels that work, and scale them: content and SEO, paid ads, social, influencers, PR, automations and, when it pays, boots on the ground.',
    color: '#f97316',
    image: '/images/phases/phase-10-growth.webp',
    outcome: '10,000 users, 10,000 followers and 10,000 transactions — with proof.',
  },
  {
    id: 11,
    slug: 'fundraising-vc',
    title: 'Fundraising: Idea → VC',
    tagline: 'Package the traction into a term sheet.',
    summary:
      'Assemble the metrics, deck, data room and story; build the pipeline of investors; run a tight process; negotiate the terms and close the round that funds the next chapter.',
    color: '#eab308',
    image: '/images/phases/phase-11-vc.webp',
    outcome: 'A clean data room, a warm investor pipeline and a signed term sheet.',
  },
];

export const phaseById = (id: number) => phases.find((p) => p.id === id);
export const phaseBySlug = (slug: string) => phases.find((p) => p.slug === slug);
