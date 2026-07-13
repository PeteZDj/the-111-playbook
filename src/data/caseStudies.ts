import type { CaseStudy } from './types';

/**
 * Real-world stories that show the playbook in action. Each maps a well-known
 * company to the phases and tasks it illustrates best, with copy-able lessons.
 * These are illustrative summaries drawn from widely reported public accounts.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'airbnb',
    company: 'Airbnb',
    tagline: 'Air mattresses on a floor → a global marketplace.',
    emoji: '🛏️',
    color: '#f43f5e',
    category: 'Marketplace',
    summary:
      'Airbnb started as “AirBed & Breakfast” — three founders renting air mattresses in their apartment during a sold-out design conference. They validated a painfully real problem (no affordable rooms during peak events), did famously unscalable things to get traction, and grew into one of the most valuable marketplaces in the world.',
    theNumbers: ['4M+ hosts', '1.5B+ guest arrivals', 'IPO at ~$47B (2020)'],
    phases: [
      {
        phase: 1,
        title: 'Idea & Validation',
        story:
          'They tested demand for one specific event before building anything — real guests paid to sleep on air mattresses, proving people would book a stranger’s home.',
      },
      {
        phase: 10,
        title: 'Growth to 10,000',
        story:
          'The founders “did things that don’t scale” — flying to New York to photograph listings themselves — which lifted quality and bookings. Later, referral incentives compounded growth.',
      },
      {
        phase: 11,
        title: 'Fundraising: Idea → VC',
        story:
          'Rejected by many investors, they survived by selling novelty cereal boxes, then got into Y Combinator and raised once early traction was undeniable.',
      },
    ],
    relatedTasks: [7, 40, 85, 89, 104],
    lessons: [
      'Test demand for one narrow use-case before building broadly.',
      'Do unscalable things early to learn and lift quality.',
      'Traction — not a perfect deck — is what eventually convinces investors.',
    ],
  },
  {
    slug: 'notion',
    company: 'Notion',
    tagline: 'A near-death rewrite → a beloved all-in-one workspace.',
    emoji: '📝',
    color: '#8b5cf6',
    category: 'Productivity SaaS',
    summary:
      'Notion almost died: the team scrapped an over-complex version, moved to Kyoto, and rebuilt around a simpler vision of blocks that replace a dozen separate tools. Design polish and a passionate community turned it into a viral, bottoms-up SaaS success.',
    theNumbers: ['100M+ users', '$10B valuation', 'Largely community-led growth'],
    phases: [
      {
        phase: 4,
        title: 'MVP Build',
        story:
          'They ruthlessly cut scope and rebuilt around one core idea (composable blocks), choosing focus over feature bloat.',
      },
      {
        phase: 5,
        title: 'Design & Quality Bar',
        story:
          'Obsessive craft and a distinctive aesthetic made Notion feel premium and shareable — quality became the marketing.',
      },
      {
        phase: 9,
        title: 'Email, Community & Retention',
        story:
          'A devoted community created templates and tutorials, turning users into an unpaid growth and support engine.',
      },
    ],
    relatedTasks: [31, 42, 47, 84, 89],
    lessons: [
      'Cutting scope can save a company — focus beats feature count.',
      'Design quality can be your most powerful growth channel.',
      'A community that creates for you multiplies every effort.',
    ],
  },
  {
    slug: 'stripe',
    company: 'Stripe',
    tagline: 'Seven lines of code → the internet’s payments backbone.',
    emoji: '💳',
    color: '#635bff',
    category: 'Developer Infrastructure',
    summary:
      'Stripe won by obsessing over developer experience: payments that used to take weeks of paperwork became a few lines of code. The Collison brothers did hands-on onboarding (“the Collison install”) and treated documentation and reliability as core product.',
    theNumbers: ['Millions of businesses', '$1T+ processed annually', '~$65B valuation'],
    phases: [
      {
        phase: 3,
        title: 'Foundation & Infrastructure',
        story:
          'Reliability, security and clean APIs were the product — they invested in the “boring” infrastructure others neglected.',
      },
      {
        phase: 6,
        title: 'Auth, Data & Security',
        story:
          'Trust and security underpinned everything — handling money means zero tolerance for sloppiness.',
      },
      {
        phase: 7,
        title: 'Content, SEO & Launch Prep',
        story:
          'World-class documentation became a growth engine, ranking in search and converting developers on the spot.',
      },
    ],
    relatedTasks: [22, 56, 59, 62, 66],
    lessons: [
      'A great developer/user experience can be your entire moat.',
      'For anything touching money, security and reliability are the product.',
      'Documentation is marketing — invest in it early.',
    ],
  },
  {
    slug: 'duolingo',
    company: 'Duolingo',
    tagline: 'Gamified lessons + a pushy owl → habit-forming learning.',
    emoji: '🦉',
    color: '#58cc02',
    category: 'Consumer / EdTech',
    summary:
      'Duolingo turned language learning into a game with streaks, XP and reminders, then relentlessly A/B-tested retention. A bold, meme-savvy social presence and habit mechanics grew it to hundreds of millions of learners and a public listing.',
    theNumbers: ['500M+ downloads', '~100M monthly users', 'NASDAQ IPO (2021)'],
    phases: [
      {
        phase: 8,
        title: 'Analytics, Tracking & Feedback',
        story:
          'A data-obsessed culture ran constant experiments, optimising retention as the north-star metric.',
      },
      {
        phase: 9,
        title: 'Email, Community & Retention',
        story:
          'Streaks, reminders and habit loops (and a famously persistent owl) brought users back daily.',
      },
      {
        phase: 10,
        title: 'Growth to 10,000',
        story:
          'A daring social/TikTok persona drove massive organic reach and brand love at near-zero cost.',
      },
    ],
    relatedTasks: [77, 78, 86, 93, 72],
    lessons: [
      'Habit mechanics (streaks, reminders) are retention rocket fuel.',
      'Relentless A/B testing compounds into a huge advantage.',
      'A bold organic-social voice can outperform paid ads.',
    ],
  },
  {
    slug: 'dropbox',
    company: 'Dropbox',
    tagline: 'A demo video + referrals → viral file sync.',
    emoji: '📦',
    color: '#0061ff',
    category: 'Consumer SaaS',
    summary:
      'Before building the hard parts, Dropbox validated demand with a simple explainer video that drove its waitlist from 5,000 to 75,000 overnight. A two-sided referral program (free storage for both sides) then made growth viral.',
    theNumbers: ['700M+ registered users', 'Waitlist 5k → 75k from one video', 'IPO (2018)'],
    phases: [
      {
        phase: 1,
        title: 'Idea & Validation',
        story:
          'A demo video acted as a smoke test, proving strong demand before heavy engineering.',
      },
      {
        phase: 9,
        title: 'Email, Community & Retention',
        story:
          'A double-sided referral program rewarded both inviter and invitee with storage, driving exponential sign-ups.',
      },
    ],
    relatedTasks: [7, 20, 85, 81],
    lessons: [
      'A simple video can validate demand before you build the hard stuff.',
      'Double-sided referral incentives can make growth exponential.',
      'Reduce the risk before you write the most expensive code.',
    ],
  },
  {
    slug: 'superhuman',
    company: 'Superhuman',
    tagline: 'A “must-have” score → a premium email cult following.',
    emoji: '⚡',
    color: '#f59e0b',
    category: 'Premium SaaS',
    summary:
      'Superhuman delayed scaling until it nailed product-market fit, using a now-famous survey: “How would you feel if you could no longer use the product?” They optimised for the segment that answered “very disappointed,” building a fast, premium email client with white-glove onboarding.',
    theNumbers: ['40%+ “very disappointed” (PMF bar)', 'Long invite waitlist', 'Premium $30/mo pricing'],
    phases: [
      {
        phase: 1,
        title: 'Idea & Validation',
        story:
          'They quantified product-market fit with a survey and focused only on the users who would truly miss the product.',
      },
      {
        phase: 5,
        title: 'Design & Quality Bar',
        story:
          'Obsessive speed and craft justified premium pricing and created word-of-mouth demand.',
      },
      {
        phase: 8,
        title: 'Analytics, Tracking & Feedback',
        story:
          'They engineered PMF systematically, doubling down on what the happiest segment loved and fixing what the “somewhat disappointed” were missing.',
      },
    ],
    relatedTasks: [2, 8, 41, 76, 88],
    lessons: [
      'Measure product-market fit; don’t just guess at it.',
      'Serve your most passionate segment before broadening.',
      'Quality and speed can support genuine premium pricing.',
    ],
  },
  {
    slug: 'canva',
    company: 'Canva',
    tagline: 'SEO + freemium → design for everyone.',
    emoji: '🎨',
    color: '#06b6d4',
    category: 'Consumer / Prosumer SaaS',
    summary:
      'Canva made design accessible to non-designers with templates and drag-and-drop simplicity. A massive SEO and content strategy (thousands of “make a ___” landing pages) plus a generous free tier drove enormous organic acquisition.',
    theNumbers: ['200M+ monthly users', 'Profitable at scale', '~$40B valuation'],
    phases: [
      {
        phase: 7,
        title: 'Content, SEO & Launch Prep',
        story:
          'Programmatic SEO — landing pages for countless design intents — captured huge organic search demand.',
      },
      {
        phase: 10,
        title: 'Growth to 10,000',
        story:
          'A freemium model plus templates created a self-serve funnel that scaled globally with low CAC.',
      },
    ],
    relatedTasks: [62, 63, 64, 92, 47],
    lessons: [
      'Programmatic SEO can unlock enormous low-cost acquisition.',
      'Freemium lets users experience value before paying.',
      'Lowering the skill barrier expands your market dramatically.',
    ],
  },
  {
    slug: 'figma',
    company: 'Figma',
    tagline: 'Browser-based design → collaboration as the moat.',
    emoji: '🧩',
    color: '#a259ff',
    category: 'Collaborative SaaS',
    summary:
      'Figma spent years on hard technical foundations to run a design tool in the browser, then made multiplayer collaboration its wedge. Bottoms-up adoption by design teams led to a landmark acquisition agreement.',
    theNumbers: ['Dominant in UI design', 'Bottoms-up team adoption', '~$20B acquisition agreed'],
    phases: [
      {
        phase: 3,
        title: 'Foundation & Infrastructure',
        story:
          'Heavy early investment in browser rendering tech created a capability competitors couldn’t easily copy.',
      },
      {
        phase: 5,
        title: 'Design & Quality Bar',
        story:
          'Real-time multiplayer collaboration was a delightful, differentiating experience that spread within teams.',
      },
      {
        phase: 9,
        title: 'Email, Community & Retention',
        story:
          'Community files, plugins and shared workflows made Figma stickier the more a team used it.',
      },
    ],
    relatedTasks: [22, 34, 43, 84, 97],
    lessons: [
      'A hard technical bet can become a durable moat.',
      'Collaboration features drive viral, in-team adoption.',
      'The more a team invests in your product, the harder it is to leave.',
    ],
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

/**
 * Curated, phase-relevant companies so EVERY task can show "see it in a real
 * company" examples — not just the handful explicitly tagged in relatedTasks.
 * Each phase lists the 3 stories that best illustrate that stage of the journey.
 */
const caseStudiesByPhase: Record<number, string[]> = {
  1: ['airbnb', 'dropbox', 'superhuman'], // Idea & Validation
  2: ['notion', 'canva', 'superhuman'], // Brand, Domain & Identity
  3: ['stripe', 'figma', 'dropbox'], // Foundation & Infrastructure
  4: ['notion', 'dropbox', 'airbnb'], // MVP Build
  5: ['notion', 'superhuman', 'figma'], // Design & Quality Bar
  6: ['stripe', 'dropbox', 'figma'], // Auth, Data & Security
  7: ['canva', 'stripe', 'duolingo'], // Content, SEO & Launch Prep
  8: ['duolingo', 'superhuman', 'stripe'], // Analytics, Tracking & Feedback
  9: ['duolingo', 'notion', 'dropbox'], // Email, Community & Retention
  10: ['airbnb', 'duolingo', 'canva'], // Growth to 10,000
  11: ['airbnb', 'stripe', 'figma'], // Fundraising: Idea → VC
};

/**
 * Case studies to show for a task: the explicitly tagged ones first (most
 * relevant), then filled up with phase-relevant stories so there is always a
 * meaningful "real company" example. Capped for a tidy layout.
 */
export function caseStudiesForTask(taskId: number, phaseId?: number, limit = 3): CaseStudy[] {
  const explicit = caseStudies.filter((c) => c.relatedTasks.includes(taskId));
  const seen = new Set(explicit.map((c) => c.slug));
  const fill = (phaseId ? caseStudiesByPhase[phaseId] ?? [] : [])
    .map((slug) => caseStudyBySlug(slug))
    .filter((c): c is CaseStudy => Boolean(c) && !seen.has((c as CaseStudy).slug));
  return [...explicit, ...fill].slice(0, limit);
}

/** Case studies that reference any task in the given phase. */
export const caseStudiesForPhase = (phaseTaskIds: number[]) =>
  caseStudies.filter((c) => c.relatedTasks.some((id) => phaseTaskIds.includes(id)));
