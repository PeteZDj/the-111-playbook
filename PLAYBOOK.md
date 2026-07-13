# The 111 Playbook

**From a raw idea to 10,000 users, 10,000 followers, 10,000 transactions — and your first VC cheque.**

111 concrete, opinionated tasks that take a developer from validating an idea all the way to a fundable startup. Every task has a deep-dive guide, an actionable checklist, recommended tools, common pitfalls, the KPI it moves and a clear definition of done.

🌐 **Live site:** https://111.pete.ke  ·  📦 **Repo:** https://github.com/PeteZDj/the-111-playbook

## The three numbers that unlock funding

- **10,000 users** — a working MVP with real, retained people using it.
- **10,000 followers** — an owned, engaged audience across your channels.
- **10,000 transactions** — orders, payments, or email/lead volume that proves demand.

## The 11 phases

| # | Phase | What you walk away with |
| - | ----- | ----------------------- |
| 1 | **Idea & Validation** | A written, evidence-backed problem statement and a go / no-go decision. |
| 2 | **Brand, Domain & Identity** | A registered domain, a favicon-ready logo and a documented brand kit. |
| 3 | **Foundation & Infrastructure** | A live URL that redeploys with one command and never leaks secrets. |
| 4 | **MVP Build** | A working MVP a stranger can complete the core job on, unaided. |
| 5 | **Design & Quality Bar** | A polished, fast, accessible product you are proud to demo to anyone. |
| 6 | **Auth, Data & Security** | Authenticated users, persistent data, payments and a security baseline. |
| 7 | **Content, SEO & Launch Prep** | Indexable, trustworthy pages and a launch runbook you have tested. |
| 8 | **Analytics, Tracking & Feedback** | A dashboard of the metrics that matter and a working feedback loop. |
| 9 | **Email, Community & Retention** | A growing email list and improving week-over-week retention. |
| 10 | **Growth to 10,000** | 10,000 users, 10,000 followers and 10,000 transactions — with proof. |
| 11 | **Fundraising: Idea → VC** | A clean data room, a warm investor pipeline and a signed term sheet. |

## Contents

### Phase 1 — Idea & Validation

- [1. Write down the idea and the problem it solves](#1-write-down-the-idea-and-the-problem-it-solves)
- [2. Interview 15 potential customers](#2-interview-15-potential-customers)
- [3. Define your ideal customer profile & persona](#3-define-your-ideal-customer-profile-persona)
- [4. Size the market (TAM / SAM / SOM)](#4-size-the-market-tam-sam-som)
- [5. Map the competition & alternatives](#5-map-the-competition-alternatives)
- [6. Craft your value proposition & positioning](#6-craft-your-value-proposition-positioning)
- [7. Run a smoke test to measure real demand](#7-run-a-smoke-test-to-measure-real-demand)
- [8. Validate willingness to pay](#8-validate-willingness-to-pay)
- [9. Write a one-page lean canvas & success criteria](#9-write-a-one-page-lean-canvas-success-criteria)
- [10. Make the go / no-go decision](#10-make-the-go-no-go-decision)

### Phase 2 — Brand, Domain & Identity

- [11. Choose a memorable name](#11-choose-a-memorable-name)
- [12. Register the domain (and protect it)](#12-register-the-domain-and-protect-it)
- [13. Secure social handles & profiles](#13-secure-social-handles-profiles)
- [14. Design a simple logo & a Netflix-style favicon](#14-design-a-simple-logo-a-netflix-style-favicon)
- [15. Define brand colours, type & design tokens](#15-define-brand-colours-type-design-tokens)
- [16. Write your brand voice & messaging guidelines](#16-write-your-brand-voice-messaging-guidelines)
- [17. Create a brand kit & asset library](#17-create-a-brand-kit-asset-library)
- [18. Design social & OG share images](#18-design-social-og-share-images)
- [19. Set up business email & legal identity basics](#19-set-up-business-email-legal-identity-basics)
- [20. Build the first basic landing page](#20-build-the-first-basic-landing-page)

### Phase 3 — Foundation & Infrastructure

- [21. Set up version control & repo hygiene](#21-set-up-version-control-repo-hygiene)
- [22. Choose your tech stack](#22-choose-your-tech-stack)
- [23. Set up local dev environment & tooling](#23-set-up-local-dev-environment-tooling)
- [24. Set up Cloudflare (DNS, CDN, SSL)](#24-set-up-cloudflare-dns-cdn-ssl)
- [25. Provision hosting & connect your server](#25-provision-hosting-connect-your-server)
- [26. Configure HTTPS / SSL end-to-end](#26-configure-https-ssl-end-to-end)
- [27. Build a repeatable one-command deploy](#27-build-a-repeatable-one-command-deploy)
- [28. Set up staging vs production](#28-set-up-staging-vs-production)
- [29. Manage secrets & environment variables](#29-manage-secrets-environment-variables)
- [30. Configure backups & uptime monitoring](#30-configure-backups-uptime-monitoring)

### Phase 4 — MVP Build

- [31. Scope the MVP ruthlessly](#31-scope-the-mvp-ruthlessly)
- [32. Map the core user flow](#32-map-the-core-user-flow)
- [33. Design the data model & schema](#33-design-the-data-model-schema)
- [34. Build the core feature (happy path)](#34-build-the-core-feature-happy-path)
- [35. Seed realistic demo data](#35-seed-realistic-demo-data)
- [36. Handle edge cases, errors & validation](#36-handle-edge-cases-errors-validation)
- [37. Make it responsive & mobile-first](#37-make-it-responsive-mobile-first)
- [38. Add onboarding & empty states](#38-add-onboarding-empty-states)
- [39. Write tests for critical paths](#39-write-tests-for-critical-paths)
- [40. Dogfood & run a private alpha](#40-dogfood-run-a-private-alpha)

### Phase 5 — Design & Quality Bar

- [41. Build a hero section that converts](#41-build-a-hero-section-that-converts)
- [42. Establish a design system / component library](#42-establish-a-design-system-component-library)
- [43. Add tasteful micro-interactions & motion](#43-add-tasteful-micro-interactions-motion)
- [44. Polish every state: empty, loading, error, success](#44-polish-every-state-empty-loading-error-success)
- [45. Ensure an accessibility baseline](#45-ensure-an-accessibility-baseline)
- [46. Optimise performance & Core Web Vitals](#46-optimise-performance-core-web-vitals)
- [47. Add high-quality imagery & illustrations](#47-add-high-quality-imagery-illustrations)
- [48. Perfect the favicon & app icons everywhere](#48-perfect-the-favicon-app-icons-everywhere)
- [49. Cross-browser & device QA](#49-cross-browser-device-qa)
- [50. Content & microcopy polish pass](#50-content-microcopy-polish-pass)

### Phase 6 — Auth, Data & Security

- [51. Add authentication (Google + email)](#51-add-authentication-google-email)
- [52. Session management & account security](#52-session-management-account-security)
- [53. Set up production PostgreSQL](#53-set-up-production-postgresql)
- [54. Build authorization & multi-tenant data isolation](#54-build-authorization-multi-tenant-data-isolation)
- [55. Implement notifications (in-app + email)](#55-implement-notifications-in-app-email)
- [56. Add payments & billing](#56-add-payments-billing)
- [57. Add transparent audit trails & tracking](#57-add-transparent-audit-trails-tracking)
- [58. Privacy & data-protection compliance](#58-privacy-data-protection-compliance)
- [59. Security hardening (OWASP Top 10)](#59-security-hardening-owasp-top-10)
- [60. Backups, disaster recovery & data export](#60-backups-disaster-recovery-data-export)

### Phase 7 — Content, SEO & Launch Prep

- [61. Build out the marketing site](#61-build-out-the-marketing-site)
- [62. Lay the technical SEO foundation](#62-lay-the-technical-seo-foundation)
- [63. Keyword research & on-page SEO](#63-keyword-research-on-page-seo)
- [64. Start a content engine (blog)](#64-start-a-content-engine-blog)
- [65. Add legal pages (terms, privacy, cookies, refunds)](#65-add-legal-pages-terms-privacy-cookies-refunds)
- [66. Build a help center / docs / FAQ](#66-build-a-help-center-docs-faq)
- [67. Set up a status page & changelog](#67-set-up-a-status-page-changelog)
- [68. Run a pre-launch checklist & rehearsal](#68-run-a-pre-launch-checklist-rehearsal)
- [69. Prepare launch assets](#69-prepare-launch-assets)
- [70. Execute the public launch](#70-execute-the-public-launch)

### Phase 8 — Analytics, Tracking & Feedback

- [71. Install web & product analytics](#71-install-web-product-analytics)
- [72. Define your north-star metric & KPIs](#72-define-your-north-star-metric-kpis)
- [73. Build conversion funnels & track activation](#73-build-conversion-funnels-track-activation)
- [74. Design an event-tracking taxonomy](#74-design-an-event-tracking-taxonomy)
- [75. Add session replay & heatmaps](#75-add-session-replay-heatmaps)
- [76. Build a user feedback loop](#76-build-a-user-feedback-loop)
- [77. Set up A/B testing & experimentation](#77-set-up-a-b-testing-experimentation)
- [78. Run cohort & retention analysis](#78-run-cohort-retention-analysis)
- [79. Add error & performance monitoring (RUM)](#79-add-error-performance-monitoring-rum)
- [80. Establish a weekly metrics review](#80-establish-a-weekly-metrics-review)

### Phase 9 — Email, Community & Retention

- [81. Build an email list & capture](#81-build-an-email-list-capture)
- [82. Set up your email marketing platform](#82-set-up-your-email-marketing-platform)
- [83. Design lifecycle email sequences](#83-design-lifecycle-email-sequences)
- [84. Build a community](#84-build-a-community)
- [85. Add a referral / invite program](#85-add-a-referral-invite-program)
- [86. Improve retention hooks & habit formation](#86-improve-retention-hooks-habit-formation)
- [87. Run win-back & re-engagement campaigns](#87-run-win-back-re-engagement-campaigns)
- [88. Deliver great support & customer success](#88-deliver-great-support-customer-success)
- [89. Build a social-proof engine](#89-build-a-social-proof-engine)
- [90. Add loyalty, rewards & expansion](#90-add-loyalty-rewards-expansion)

### Phase 10 — Growth to 10,000

- [91. Nail your growth strategy & pick channels](#91-nail-your-growth-strategy-pick-channels)
- [92. Scale the content & SEO machine](#92-scale-the-content-seo-machine)
- [93. Build organic social & distribution](#93-build-organic-social-distribution)
- [94. Run paid advertising](#94-run-paid-advertising)
- [95. Leverage influencer & creator marketing](#95-leverage-influencer-creator-marketing)
- [96. Earn PR, press & media coverage](#96-earn-pr-press-media-coverage)
- [97. Build partnerships & integrations](#97-build-partnerships-integrations)
- [98. Automate marketing with AI & bots](#98-automate-marketing-with-ai-bots)
- [99. Study competitors & proven viral playbooks](#99-study-competitors-proven-viral-playbooks)
- [100. On-ground activations & outsourcing](#100-on-ground-activations-outsourcing)
- [101. Hit the 10,000 milestones & optimise CAC/LTV](#101-hit-the-10-000-milestones-optimise-cac-ltv)

### Phase 11 — Fundraising: Idea → VC

- [102. Decide whether (and when) to raise](#102-decide-whether-and-when-to-raise)
- [103. Assemble traction metrics & data room](#103-assemble-traction-metrics-data-room)
- [104. Build a compelling pitch deck](#104-build-a-compelling-pitch-deck)
- [105. Craft the fundraising narrative](#105-craft-the-fundraising-narrative)
- [106. Build the financial model & projections](#106-build-the-financial-model-projections)
- [107. Set valuation, round size & use of funds](#107-set-valuation-round-size-use-of-funds)
- [108. Build your investor pipeline & get intros](#108-build-your-investor-pipeline-get-intros)
- [109. Run the fundraising process](#109-run-the-fundraising-process)
- [110. Diligence, negotiation & closing](#110-diligence-negotiation-closing)
- [111. Post-raise: deploy capital & scale](#111-post-raise-deploy-capital-scale)

## Phase 1: Idea & Validation

_Turn a hunch into a validated problem worth solving. Talk to real people, size the market, study competitors and decide — with evidence — whether to build._

**Outcome:** A written, evidence-backed problem statement and a go / no-go decision.

### 1. Write down the idea and the problem it solves

> **Goal:** Turn a vague hunch into a single, sharp problem statement on one page.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Easy · **Estimate:** 2–4 hours · **Metric:** Problem clarity: 3/3 on frequency, expense and urgency.

**Why this matters.** Ideas feel obvious in your head and fall apart on paper. Writing forces you to be specific about who hurts, how much, and why now — the foundation every other task builds on.

**Explain it like I'm 5.** Before building a treehouse, you say out loud who it is for and why they need it. Writing your idea down does the same thing — it turns a fuzzy “wouldn’t it be cool” into a clear sentence about a real person with a real problem, so you can tell if it’s actually worth building.

Most startups do not fail because the code was bad; they fail because they built something nobody urgently needed. The cheapest way to avoid that fate is to write the idea down before you spend a single day building. Your goal in this task is one page that a stranger could read in ninety seconds and understand exactly who has the problem, what the problem costs them today, and why now is the moment to solve it.

Use a simple structure. Start with the customer ("busy solo real-estate agents in Nairobi"), then the problem ("they lose leads because WhatsApp enquiries get buried"), then the current workaround ("a paper notebook and memory"), then the cost of that workaround ("missed commissions worth hundreds of dollars a month"). Finish with your one-sentence solution hypothesis and the single behaviour change you are betting on. If you cannot name the current workaround, you may not have a real problem — people only pay to replace something they already do painfully.

Write in the customer's language, not yours. Avoid feature words ("a platform", "an AI-powered dashboard") and stay on pain and outcome. Then pressure-test it against three filters: is the pain frequent (weekly or daily beats yearly), is it expensive (time, money, risk or status), and is it urgent (something changed that makes it matter now — a new regulation, a price shock, a new channel). A yes on all three is a green light; two out of three means keep sharpening; zero or one means find a better problem. Keep this page as a living document — you will revisit it after every customer conversation, and watching it change is how you know you are learning.

**What this looks like in practice**

- A one-pager: “Solo real-estate agents in Nairobi lose leads because WhatsApp enquiries get buried. Today they use a paper notebook and memory, and miss commissions worth hundreds of dollars a month.”
- Airbnb’s original note: “Travellers can’t find affordable places during sold-out conferences; hosts have spare rooms and could earn extra cash.”
- A fitness-app idea rewritten from “an app for health” to “busy new parents skip workouts because they can’t get to a gym for a full hour.”

**Checklist**

- [ ] Draft a one-page problem statement: customer, problem, current workaround, cost, your hypothesis.
- [ ] Write it in the customer’s words — ban internal jargon and feature-speak.
- [ ] Score the problem on frequency, expense and urgency (aim for 3/3).
- [ ] Name the exact behaviour change your product requires.
- [ ] List your three riskiest assumptions (the things that, if false, kill the idea).
- [ ] Share the page with two people outside your bubble and note their questions.
- [ ] Timestamp it and commit it to a doc you will update after every interview.

**Tools & services**

- Notion / Google Docs
- Lean Canvas template
- A whiteboard or Excalidraw
- A notes app for capturing raw ideas

**Common pitfalls**

- Describing the solution instead of the problem.
- Choosing a "nice to have" with no frequent, expensive pain.
- Making the customer so broad ("everyone") that no message will ever land.
- Falling in love with the idea before any evidence exists.

**Go deeper**

- [YC: How to Get Startup Ideas (Paul Graham)](https://paulgraham.com/startupideas.html)
- [The Mom Test (why problem framing matters)](https://www.momtestbook.com/)
- [Lean Canvas](https://leanstack.com/lean-canvas)

**Definition of done:** A one-page problem statement with a scored, three-filter pain assessment.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/1-write-down-the-idea-and-the-problem-it-solves)

---

### 2. Interview 15 potential customers

> **Goal:** Talk to real people to confirm the problem exists and learn how they experience it.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Medium · **Estimate:** 1–2 weeks · **Metric:** ≥10 of 15 interviews confirm the same core problem.

**Why this matters.** Fifteen honest conversations will teach you more than three months of building. They surface the real workflow, the language customers use, and whether the pain is worth paying to remove.

**Explain it like I'm 5.** Instead of guessing what people want, you go ask them — like asking friends what pizza toppings they like before ordering ten pizzas. You talk to 15 real people who might have the problem and just listen, so you learn the truth instead of what you hope is true.

This is the single highest-leverage task in the entire playbook, and most founders skip it because it feels slow and awkward. Do not skip it. Fifteen conversations with people who actually have the problem will save you from building the wrong thing for a year. The aim is not to pitch — it is to learn. You want to leave each call knowing more about their world and less certain about your assumptions.

Recruit from where your customers already gather: WhatsApp groups, LinkedIn, subreddits, Slack communities, your own network, or simply people you can see doing the job. Fifteen is a good first target because patterns start repeating around interview eight to ten, and by fifteen you will hear the same three phrases so often you can quote them. Follow the rules from The Mom Test: ask about their life and past behaviour, never about your idea. Good questions are "walk me through the last time this happened", "what did you do next", "how much did that cost you", and "what have you tried to fix it". Bad questions are "would you use an app that…" — people lie to be nice.

Record (with permission) or take verbatim notes, because the exact words are gold for your future landing page and ads. After each call, log three things: the problem in their words, what they currently pay in time or money, and whether they have ever spent money trying to solve it. That last point is the strongest signal of all — people who have already paid for a bad solution are your beachhead market. Tally the patterns in a simple spreadsheet. If ten of fifteen describe the same painful workflow, you have a validated problem. If everyone describes a different problem, your segment is too broad — narrow it and interview again.

**What this looks like in practice**

- Calling 15 dog owners and asking, “Tell me about the last time you struggled to find a dog-sitter,” without pitching anything.
- A founder using The Mom Test: asking about past behaviour (“What did you do last time?”) instead of “Would you use my app?”
- Superhuman interviewing users about their email pain for months before writing much code.

**Checklist**

- [ ] Build a list of 25–30 people who plausibly have the problem.
- [ ] Write a 6–8 question interview guide focused on past behaviour, not your idea.
- [ ] Book 15 calls (15–20 minutes each); offer a small thank-you if needed.
- [ ] Ask "walk me through the last time…" and shut up — let them talk 80% of the time.
- [ ] Capture verbatim quotes, current costs and any money already spent on solutions.
- [ ] Log each interview in a spreadsheet; tag recurring themes.
- [ ] After 15, write a one-paragraph summary of what you learned and what surprised you.

**Tools & services**

- Google Meet / Zoom
- Otter.ai or Fireflies (transcription)
- A simple spreadsheet
- Calendly for booking

**Common pitfalls**

- Pitching instead of listening.
- Asking hypothetical "would you" questions that invite polite lies.
- Only interviewing friends who will not tell you the truth.
- Stopping at three interviews and calling it validation.

**Go deeper**

- [The Mom Test — summary](https://www.momtestbook.com/)
- [YC: How to talk to users](https://www.ycombinator.com/library/6g-how-to-talk-to-users)
- [Superhuman: how to find early users](https://firstround.com/review/)

**Definition of done:** 15 logged interviews with a themed summary and 5+ verbatim pain quotes.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/2-interview-15-potential-customers)

---

### 3. Define your ideal customer profile & persona

> **Goal:** Pin down exactly who you are building for first, in enough detail to find and message them.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Easy · **Estimate:** 3–5 hours · **Metric:** You can name 3 exact places to reach this persona today.

**Why this matters.** You cannot market to "everyone". A sharp beachhead customer makes your product decisions, copy and ad targeting obvious — and a beachhead you dominate is how you eventually expand.

**Explain it like I'm 5.** You pick exactly one type of person to make happy first, and describe them so clearly you’d recognise them in a crowd. Trying to please everyone means you please no one — so you choose your “first best friend” customer.

After your interviews, you will notice the pain is not evenly distributed. Some people feel it intensely and pay to fix it; others shrug. Your ideal customer profile (ICP) is the tightest possible description of the group that feels it most. Resist the urge to keep it broad "so you can sell to more people" — the opposite is true. A narrow segment lets you speak their exact language, appear everywhere they look, and become the obvious choice. You can always expand later; nobody ever regretted starting too focused.

Write the ICP as firmographics plus a human persona. Firmographics (for B2B) or demographics (for B2C) are the filters you can target on: industry, company size, role, location, budget, tools they already use. The persona brings it to life: a named archetype ("Agent Aisha, 34, runs her property listings from a phone, 200 WhatsApp chats a week, hates losing leads"), their goals, their daily frustrations, and the words they use. Pull the details straight from your interviews so it is grounded in reality, not invention.

Crucially, define where this person can be reached and what they already trust. Which communities, publications, influencers, hashtags and search terms are part of their day? This directly seeds your growth plan later — a well-defined ICP basically writes your channel strategy for you. Finish by naming an anti-persona: the tempting-but-wrong customer you will politely decline early on, because saying no to the wrong customer is how you keep the product coherent. Keep the ICP to a single page and pin it where you will see it; every future decision about features, pricing and copy should be answerable with "does this serve Aisha?"

**What this looks like in practice**

- Not “small businesses” but “owner-run dental clinics with 2–5 staff who still book by phone.”
- A persona card: “Meet Aisha, 34, runs a Nairobi salon, uses Instagram daily, hates no-shows.”
- Facebook deliberately starting with “Harvard undergraduates” before expanding to other colleges.

**Checklist**

- [ ] Cluster your interviewees by how intensely they feel the pain.
- [ ] Pick the single segment with the sharpest, most frequent, most expensive pain.
- [ ] Write firmographics/demographics: the filters you can actually target on.
- [ ] Write a named persona with goals, frustrations and real quotes.
- [ ] List where they gather online and offline, and who they trust.
- [ ] Define an anti-persona you will not serve yet.
- [ ] Condense to one page and pin it to your workspace.

**Tools & services**

- Notion / Docs
- HubSpot Make My Persona
- Your interview spreadsheet
- LinkedIn Sales Navigator (B2B)

**Common pitfalls**

- Making the ICP so broad it guides nothing.
- Inventing traits instead of using interview evidence.
- Ignoring "where to reach them", which you will need for growth.
- Never revisiting it as you learn more.

**Go deeper**

- [a16z: Finding your beachhead market](https://a16z.com/)
- [HubSpot: Make My Persona](https://www.hubspot.com/make-my-persona)
- [April Dunford: Obviously Awesome (positioning)](https://www.aprildunford.com/)

**Definition of done:** A one-page ICP + persona grounded in interview evidence, plus an anti-persona.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/3-define-your-ideal-customer-profile-and-persona)

---

### 4. Size the market (TAM / SAM / SOM)

> **Goal:** Estimate whether this can become a big business, using bottom-up math you can defend.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Medium · **Estimate:** 4–8 hours · **Metric:** A defensible SAM figure and a credible path to $100M revenue (or a conscious bootstrap decision).

**Why this matters.** A great product in a tiny market is a lifestyle business, not a venture. Investors — and you — need to believe there is a path to a large outcome, backed by numbers you can explain.

**Explain it like I'm 5.** You do some back-of-the-napkin math to check if this could ever be a big business — like counting how many houses are on your street before starting a lemonade stand. You estimate how many people have the problem and how much they’d pay.

Market sizing is where founders either hand-wave ("it's a $50 billion market!") or do the honest work. Do the honest work — it is more convincing and it protects you from building in a market too small to matter. The three numbers are TAM (total addressable market: everyone who could ever use this), SAM (serviceable available market: the slice you can realistically reach with your model and geography), and SOM (serviceable obtainable market: what you can plausibly capture in three to five years).

Prefer bottom-up over top-down. Top-down starts from an analyst's giant number and multiplies down by made-up percentages; nobody believes it. Bottom-up builds from units: how many customers exist in your segment, multiplied by a realistic annual revenue per customer. For example, "40,000 licensed agents in Kenya × $120/year = ~$4.8M SAM in Kenya, growing as we add markets." Show your assumptions clearly so anyone can challenge one number without dismissing the whole thing. Cross-check with a comparable company's revenue or a known market report to sanity-test your order of magnitude.

The goal is not a perfect number — it is a defensible story about scale and a decision. As a rough VC filter, a venture-scale opportunity usually needs a SAM in the hundreds of millions and a credible path for the company to reach $100M+ in revenue. If your honest math lands far below that, you have three options: expand the customer set, increase revenue per customer, or accept that this is a great bootstrapped business rather than a VC one — all valid, but decide on purpose. Write the sizing as a short section with the formula, the sources, and the one-line conclusion.

**What this looks like in practice**

- “120,000 salons in our region × $30/month × the slice we could realistically win = our target revenue.”
- A bottom-up estimate built from real numbers (customers × price) rather than “it’s a $1 trillion market.”
- Deciding a niche is too small for VC and consciously choosing to bootstrap it instead.

**Checklist**

- [ ] Define the unit (a customer, a seat, a transaction) and the annual value per unit.
- [ ] Count units in your beachhead segment from real sources.
- [ ] Compute SAM = units × annual value; expand logically to TAM.
- [ ] Estimate a realistic SOM (share) for years 1, 3 and 5.
- [ ] Cross-check against a comparable company or market report.
- [ ] List every assumption with its source so it is challengeable.
- [ ] Write a one-line conclusion: venture-scale, bootstrap-scale, or expand the wedge.

**Tools & services**

- Spreadsheet (Google Sheets/Excel)
- Statista / government stats
- Industry association data
- Comparable company filings / Crunchbase

**Common pitfalls**

- Top-down "1% of a huge market" reasoning that convinces no one.
- Hiding assumptions so the math cannot be checked.
- Confusing TAM (everyone) with what you can actually reach (SAM).
- Ignoring revenue-per-customer, which usually matters more than headcount.

**Go deeper**

- [YC: How to calculate TAM](https://www.ycombinator.com/library)
- [a16z: 16 startup metrics](https://a16z.com/16-startup-metrics/)
- [Crunchbase (comparables)](https://www.crunchbase.com/)

**Definition of done:** A bottom-up TAM/SAM/SOM model with sourced assumptions and a scale verdict.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/4-size-the-market-tam-sam-som)

---

### 5. Map the competition & alternatives

> **Goal:** Understand every way your customer solves this today — including doing nothing.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** A defensible wedge: one axis where you are 10× better for your ICP.

**Why this matters.** Your real competitor is usually a spreadsheet, WhatsApp or apathy, not another startup. Mapping alternatives reveals where you can be clearly better and how to position against the status quo.

**Explain it like I'm 5.** You look at every other way people already solve this problem — including doing nothing or using a spreadsheet — so you know who you’re really up against and where you can be clearly better.

Founders love to say "we have no competitors." It is almost never true and it is a red flag when you say it, because it signals you have not looked hard enough or the problem is not painful enough for anyone to have tried solving it. Your customer is solving this problem today somehow — with a direct competitor, an adjacent tool, a manual workaround, or by tolerating the pain. All four are competition for the customer's attention and budget.

Build a simple landscape. List direct competitors (products that do roughly what you do), indirect ones (different approach, same job), and the "do nothing / DIY" option (spreadsheets, paper, an assistant, WhatsApp). For each, capture what customers like, what they complain about (mine their app-store reviews, G2, Reddit and Twitter for exact wording — complaints are your feature roadmap), their pricing, and their apparent go-to-market. Sign up for the top two or three yourself and actually use them; you will learn more in an hour of hands-on use than a week of reading.

Now find your wedge. You do not need to beat incumbents on every axis — you need to be dramatically better on the one axis your ICP cares about most, and at least acceptable on the rest. Maybe you are radically simpler, local and priced in shillings, faster to set up, or focused on a segment the incumbent ignores. Summarise this as a positioning line: "Unlike [main alternative], we [key difference] for [ICP]." Keep the landscape as a living doc; revisit it each quarter, because a market with active competitors is a market with money in it — that is good news, not bad.

**What this looks like in practice**

- A grid comparing your tool to two competitors, a spreadsheet, and “pen and paper.”
- Reading 1-star reviews of a competitor on G2 to find the pain they leave unsolved.
- Notion realising its real competitor was “ten separate apps duct-taped together.”

**Checklist**

- [ ] List direct competitors, indirect tools, and the do-nothing/DIY option.
- [ ] Sign up for and actually use the top 2–3 alternatives.
- [ ] Mine reviews (G2, app stores, Reddit) for loved features and hated gaps.
- [ ] Record each competitor’s pricing, target customer and main channel.
- [ ] Identify the one axis your ICP cares about most.
- [ ] Write a positioning line: "Unlike X, we Y for Z."
- [ ] Save it as a living competitive doc and set a quarterly review.

**Tools & services**

- G2 / Capterra
- App Store & Play Store reviews
- Reddit / Twitter search
- SimilarWeb / Ahrefs (traffic & keywords)

**Common pitfalls**

- Claiming you have no competitors.
- Only comparing features, not the jobs customers actually hire for.
- Ignoring the "do nothing" default, which is the hardest competitor to beat.
- Copying an incumbent instead of finding an underserved wedge.

**Go deeper**

- [April Dunford: Obviously Awesome](https://www.aprildunford.com/)
- [Clayton Christensen: Jobs to be Done](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done)
- [SimilarWeb](https://www.similarweb.com/)

**Definition of done:** A competitive landscape doc with a clear one-line positioning statement.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/5-map-the-competition-and-alternatives)

---

### 6. Craft your value proposition & positioning

> **Goal:** Say what you do, for whom, and why it is better — in one sentence anyone gets instantly.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Medium · **Estimate:** 3–6 hours · **Metric:** ICP members restate your value prop back correctly without prompting.

**Why this matters.** Your value proposition is the headline of your landing page, the first line of your pitch and the filter for every feature. If it is fuzzy, everything downstream — marketing, sales, product — is fuzzy too.

**Explain it like I'm 5.** You write one clear sentence that says what you do, who it’s for, and why it’s better — short enough that a stranger instantly “gets it.” It’s your elevator pitch made crisp.

A value proposition is the promise of the concrete value a customer gets, in their words, differentiated from the alternative. It is not a slogan and not a feature list. The classic template is useful as a starting scaffold: "For [ICP] who [need], [product] is a [category] that [key benefit], unlike [alternative] which [limitation]." Fill it in, then rewrite it until a member of your ICP would nod and say "yes, that's me and that's what I want."

Lead with outcome, not mechanism. Customers do not want a "cloud-based AI CRM"; they want to "never lose a lead again." Test your draft against three questions: is it specific (would a competitor be unable to claim the exact same thing), is it believable (can you back it up on day one), and is it desirable (does it name a benefit your ICP actually craved in interviews). Steal the exact phrases customers used — the best copy is transcribed, not invented. Draft five variations and read them aloud; the right one usually sounds like something a happy customer would say to a friend.

Then extend the one-liner into a small positioning kit you will reuse everywhere: the headline, a one-sentence subheading, three benefit bullets (each an outcome plus a proof point), and a one-paragraph "elevator" version. This becomes your landing-page hero, your app-store description, your pitch intro and your social bios. Positioning is not set-and-forget: as you learn from ads and sales calls, the words that convert will change, and you should keep the version that wins. A sharp, tested value proposition is one of the highest-ROI assets you will ever create — it makes every subsequent marketing dollar work harder.

**What this looks like in practice**

- “Superhuman is the fastest email experience ever made, for busy professionals.”
- “For X who struggle with Y, we do Z, unlike [alternative], because [reason].”
- Testing five homepage headlines and keeping the one people repeat back correctly.

**Checklist**

- [ ] Fill the "For X who Y, we are a Z that benefit, unlike alternative" template.
- [ ] Rewrite it to lead with the customer outcome, not the technology.
- [ ] Draft 5 headline variations using verbatim customer language.
- [ ] Test each against specific / believable / desirable.
- [ ] Pick a winner and write a subheading + 3 benefit bullets + a short paragraph.
- [ ] Put it in front of 3 ICP members and keep the phrasing they react to.
- [ ] Save the positioning kit for reuse across site, app stores and pitch.

**Tools & services**

- Docs
- Wynter (message testing)
- Your interview quotes
- ChatGPT/Claude for variations (then edit hard)

**Common pitfalls**

- Vague slogans that any competitor could also claim.
- Leading with features and jargon instead of outcomes.
- Promising something you cannot deliver on day one.
- Never testing the wording with real customers.

**Go deeper**

- [April Dunford: Obviously Awesome](https://www.aprildunford.com/)
- [Value Proposition Canvas (Strategyzer)](https://www.strategyzer.com/library/the-value-proposition-canvas)
- [Julian Shapiro: growth & copy handbook](https://www.julian.com/guide/growth/landing-pages)

**Definition of done:** A tested one-line value proposition plus a reusable positioning kit.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/6-craft-your-value-proposition-and-positioning)

---

### 7. Run a smoke test to measure real demand

> **Goal:** Put up a landing page (or fake-door) and see if strangers will actually sign up.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** ≥5–15% of targeted visitors convert to email/waitlist.

**Why this matters.** Interviews reveal the problem; a smoke test reveals demand. Watching people give you their email — or click "buy" — before the product exists is the strongest pre-build signal you can get.

**Explain it like I'm 5.** Before building the whole thing, you put up a simple web page describing it and see if strangers actually click “sign me up.” It’s like setting out an empty box labelled “new toy” to see how many kids reach for it.

Talk is cheap; email addresses are not. A smoke test is a lightweight experiment that measures whether people will take a real action toward your product before you build it. The most common form is a landing page that describes the value proposition and asks for an email (or a "get early access" click). A stronger form is the fake-door test: you advertise a specific plan or feature with a price and a "Buy" button; clicking it leads to "coming soon — join the waitlist." The click-through is a far better signal than a survey because it costs the visitor something.

Build the page fast with a no-code tool or a simple static site — do not over-engineer it. It needs a compelling headline (your value prop), a short benefit section, one clear call to action, and an email capture. Then drive a small amount of targeted traffic: post in the communities your ICP frequents, message warm contacts, or spend $50–$100 on tightly targeted ads. You are looking for signal, not scale. Track visits and conversions so you can compute a landing-page conversion rate; 5–15% of targeted visitors giving an email is a healthy sign, though it varies by channel and price point.

Interpret the result honestly and instrument everything. If conversion is strong, you have demand and a warm list to launch to later — a huge head start. If it is weak, do not immediately blame the product; first debug the message and the traffic. Was the audience actually your ICP? Was the headline clear? Try two or three headline variants (a cheap A/B test) before concluding the demand is not there. Keep every email you collect in one list from day one; this waitlist becomes your first users and your first source of feedback. A smoke test can be run in a weekend and can save you months building something no one wanted.

**What this looks like in practice**

- A one-page site with an email box, sharing it in relevant communities, and measuring sign-ups.
- A “fake door” button for a feature that opens a “coming soon — want this?” form.
- Buffer’s famous landing page that tested demand (and pricing) before the product existed.

**Checklist**

- [ ] Build a one-page landing site with your value prop and an email capture.
- [ ] Optionally add a fake-door "pricing/Buy" flow that leads to a waitlist.
- [ ] Add analytics + event tracking for visits, clicks and sign-ups.
- [ ] Drive targeted traffic from ICP communities and/or $50–100 of ads.
- [ ] Run 2–3 headline variants to test the message, not just the idea.
- [ ] Compute conversion rate and compare across sources.
- [ ] Save every email into one waitlist for launch.

**Tools & services**

- Carrd / Framer / a simple static site
- Plausible / GA4
- Meta or Google Ads (small budget)
- A form + email list (Mailchimp/ConvertKit)

**Common pitfalls**

- Driving untargeted traffic and misreading the low conversion.
- No analytics, so you cannot compute a conversion rate.
- Over-building the page instead of testing the message.
- Not saving emails, wasting the warm audience you created.

**Go deeper**

- [Lean Startup: MVP & smoke tests](http://theleanstartup.com/principles)
- [Julian Shapiro: landing pages](https://www.julian.com/guide/growth/landing-pages)
- [Carrd (fast landing pages)](https://carrd.co/)

**Definition of done:** A live landing page with tracked traffic and a conversion rate you can defend.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/7-run-a-smoke-test-to-measure-real-demand)

---

### 8. Validate willingness to pay

> **Goal:** Find out not just whether people want it, but whether they will pay — and roughly how much.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Hard · **Estimate:** 3–5 days · **Metric:** At least 1–3 customers commit money before the product is finished.

**Why this matters.** Free interest is easy; money is truth. Understanding willingness to pay early shapes your business model, your positioning and whether the unit economics can ever work.

**Explain it like I'm 5.** Wanting something and paying for it are different. Here you find out if people will actually open their wallets — like seeing if friends will pre-order the lemonade, not just say “yum.”

Wanting something and paying for it are different behaviours, and the gap between them has killed many "validated" ideas. This task is about probing price seriously before you build a billing system. You are not trying to set final prices — you are trying to learn whether money is on the table, from whom, and in what range. The strongest evidence is a pre-sale or a paid pilot: someone commits real money (even a deposit or a discounted annual plan) before the product is finished. If even a handful of ICP customers pre-pay, you have exceptional validation.

Short of pre-sales, use structured pricing conversations. The Van Westendorp method asks four questions — at what price is it too cheap (to be credible), a bargain, getting expensive, and too expensive — and the overlaps reveal an acceptable range. Simpler still, in your interviews ask what they pay today for the workaround (an assistant's time, a rival tool, lost revenue) and anchor to that. Reframe price against the cost of the problem: if losing leads costs an agent $300/month, $20/month is trivial. Always tie price to value, never to your costs.

Decide on a model, not just a number: subscription, usage-based, transaction fee, freemium, or one-off. For most software targeting 10,000 users, a low-friction subscription or freemium-to-paid model works, but a transaction fee can be powerful if you sit in the flow of money. Sketch the unit economics: expected price, gross margin, and a rough sense of customer acquisition cost versus lifetime value — you need LTV comfortably above CAC (a 3:1 ratio is a common healthy target) for growth to be fundable. Write down your pricing hypothesis and the evidence behind it; you will refine it continuously, but starting with a money-grounded thesis keeps you honest.

**What this looks like in practice**

- Showing real prices and asking for a card or a small deposit to hold a spot.
- A pre-sale where 20 people pay upfront before the product is finished.
- Asking “what would be too expensive? what would feel cheap?” to find the price range.

**Checklist**

- [ ] Ask interviewees what they pay today for the current workaround.
- [ ] Run Van Westendorp (4 price questions) with 10+ ICP members.
- [ ] Attempt 1–3 pre-sales or paid pilots (deposit, founding-member deal).
- [ ] Frame price against the cost of the problem, not your costs.
- [ ] Choose a pricing model (subscription, usage, transaction, freemium).
- [ ] Sketch unit economics: price, gross margin, target LTV:CAC ≥ 3:1.
- [ ] Write a one-page pricing hypothesis with the evidence.

**Tools & services**

- Van Westendorp survey (Google Forms/Typeform)
- Stripe Payment Links (for pre-sales)
- A spreadsheet for unit economics
- Interview notes

**Common pitfalls**

- Treating free sign-ups as proof people will pay.
- Pricing from your costs instead of the customer’s value/pain.
- Skipping a real money test (pre-sale) entirely.
- Ignoring CAC/LTV so growth turns out to be unprofitable.

**Go deeper**

- [a16z: 16 startup metrics (LTV/CAC)](https://a16z.com/16-startup-metrics/)
- [ProfitWell / Paddle pricing guides](https://www.paddle.com/resources)
- [Stripe Payment Links](https://stripe.com/payments/payment-links)

**Definition of done:** A pricing hypothesis backed by willingness-to-pay evidence (ideally a pre-sale).

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/8-validate-willingness-to-pay)

---

### 9. Write a one-page lean canvas & success criteria

> **Goal:** Capture the whole business model on one page and define what "working" looks like.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Easy · **Estimate:** 2–4 hours · **Metric:** A single page anyone can read to understand the whole business model.

**Why this matters.** A lean canvas forces you to connect problem, solution, customers, channels and money in one view. Explicit success criteria stop you from moving the goalposts when results are ambiguous.

**Explain it like I'm 5.** You squeeze the whole business onto a single page — problem, solution, customers, money — and decide what “it’s working” will look like, so you can check yourself later against clear targets.

You now have a lot of scattered learning — a problem statement, interviews, an ICP, market size, competitors, positioning, demand and pricing signals. The lean canvas pulls it into a single page so you can see the whole business model at once and spot the weakest link. Its nine boxes are: problem, customer segments, unique value proposition, solution, channels, revenue streams, cost structure, key metrics and unfair advantage. Filling it takes under an hour once the earlier tasks are done, and it becomes the map you update as you learn.

The two boxes founders under-invest in are key metrics and unfair advantage. Key metrics is your handful of numbers that indicate real progress — for a pre-launch product this might be waitlist size and interview-confirmed pain; post-launch it becomes activation rate, retention and revenue. Unfair advantage is what stops a competitor from simply copying you: proprietary data, a community, exclusive relationships, deep domain expertise, or network effects. "We'll work harder" is not an unfair advantage. If the box is empty, that is fine for now, but note it as a risk to build toward.

Most importantly, write explicit success criteria for the next stage before you start it, so future-you cannot rationalise a bad result. Define what evidence would justify continuing to build (for example: "300 waitlist sign-ups, 3 paid pre-orders, and 10 of 15 interviews confirming the pain"), and — just as important — kill criteria that would tell you to stop or pivot. Give it a deadline. This turns your project from an open-ended hope into a testable bet, which is exactly the mindset investors reward and the discipline that stops you sinking years into a dead end.

**What this looks like in practice**

- Filling in a Lean Canvas: problem, solution, unfair advantage, revenue, costs, channels.
- Writing success criteria like “100 sign-ups and 10 paying customers in 60 days.”
- A one-pager you revisit monthly and update as you learn.

**Checklist**

- [ ] Fill all nine boxes of the lean canvas from your prior tasks.
- [ ] Stress-test the weakest box — usually channels or unfair advantage.
- [ ] Define 3–5 key metrics that signal real progress for this stage.
- [ ] Write explicit success criteria (what justifies building on).
- [ ] Write kill criteria (what would make you stop or pivot).
- [ ] Attach a deadline to the next validation milestone.
- [ ] Save the canvas as a living doc and review it monthly.

**Tools & services**

- LeanStack / Canvanizer
- Notion / Docs
- Your prior validation artefacts
- A calendar for milestone deadlines

**Common pitfalls**

- Treating the canvas as a one-time exercise you never revisit.
- Leaving "unfair advantage" blank without acknowledging the risk.
- Vague success criteria you can bend to any outcome.
- No kill criteria, so you never let a bad idea die.

**Go deeper**

- [Lean Canvas (LeanStack)](https://leanstack.com/lean-canvas)
- [Running Lean by Ash Maurya](https://leanstack.com/books/running-lean)
- [Canvanizer](https://canvanizer.com/)

**Definition of done:** A completed lean canvas with explicit success and kill criteria and a deadline.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/9-write-a-one-page-lean-canvas-and-success-criteria)

---

### 10. Make the go / no-go decision

> **Goal:** Look at all the evidence and consciously decide to build, pivot or stop.
>
> **Phase:** 1 — Idea & Validation · **Difficulty:** Easy · **Estimate:** 2–3 hours · **Metric:** A conscious, criteria-based decision — not drift.

**Why this matters.** The decision to commit months of your life should be deliberate, not accidental. A clear go / no-go — measured against the criteria you set — is what separates disciplined founders from sunk-cost prisoners.

**Explain it like I'm 5.** You look at everything you learned and honestly decide: build it, change it, or walk away. It’s the moment you choose to spend real time and money — or save them for a better idea.

This is the checkpoint that closes Phase 1. You have a scored problem, fifteen interviews, an ICP, a market size, a competitive wedge, a tested value proposition, demand and pricing signals, and a lean canvas with success criteria. Now you sit down and make the call, comparing the evidence against the criteria you wrote in the previous task — before you knew the answer, which is what keeps you honest. There are only three honest outcomes: go (the evidence clears your bar — commit and build the MVP), pivot (the problem is real but your angle, segment or solution is wrong — adjust and re-validate the changed assumption), or stop (the evidence says the pain is not big or urgent enough — free yourself for a better idea).

Beware the two failure modes. The first is false-negative timidity: killing a good idea because validation felt hard or a few interviews were lukewarm. The second, far more common, is sunk-cost momentum: pushing forward because you already told people you were doing it, not because the evidence supports it. Your pre-written criteria are the antidote to both. If you clear the bar, go with conviction. If you clearly miss it, stopping is a win, not a failure — you just saved yourself a year. If you are in between, define the single most important remaining question and run one more focused experiment rather than half-committing.

Whatever you decide, write it down: the decision, the evidence for and against, the biggest remaining risk, and — if it is a go — the one metric you will watch obsessively through the build (usually activation or retention, not sign-ups). Share this decision memo with a trusted mentor or peer for a gut check; an outside view catches the biases you cannot see. This memo is also the seed of your future pitch narrative: "we saw this problem, we validated it like this, and here is why we committed." Investors love a founder who can show a disciplined path from insight to decision. With a clear go, you move into Phase 2 with momentum and evidence on your side.

**What this looks like in practice**

- A go/no-go meeting reviewing interviews, smoke-test numbers and willingness to pay.
- Pivoting from the original idea to an adjacent one the evidence pointed to.
- Deciding to stop and keep the learnings, instead of building something nobody wanted.

**Checklist**

- [ ] Lay all Phase 1 evidence next to the success/kill criteria you pre-wrote.
- [ ] Score each criterion honestly: met, partially met, or missed.
- [ ] Choose one: go, pivot, or stop — and state why in writing.
- [ ] If pivoting, name the single assumption to change and re-test.
- [ ] If going, pick the one north-star metric you will watch during the build.
- [ ] Write a short decision memo (evidence, risks, decision).
- [ ] Get an outside gut-check from a mentor or peer.

**Tools & services**

- Docs
- Your lean canvas + validation artefacts
- A trusted mentor/peer
- A decision-log template

**Common pitfalls**

- Deciding on gut feel instead of the pre-written criteria.
- Sunk-cost pushing forward despite weak evidence.
- Killing a promising idea because validation felt uncomfortable.
- Not documenting the decision, so you cannot learn from it later.

**Go deeper**

- [YC: Should you start this startup?](https://www.ycombinator.com/library)
- [Running Lean: validation to decision](https://leanstack.com/books/running-lean)
- [Farnam Street: decision journals](https://fs.blog/decision-journal/)

**Definition of done:** A written go / pivot / stop decision memo with evidence and the chosen north-star metric.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/10-make-the-go-no-go-decision)

---

## Phase 2: Brand, Domain & Identity

_Choose a memorable name, secure the domain and social handles, and build a lightweight brand system — logo, colours, type and voice — that makes you look funded from day one._

**Outcome:** A registered domain, a favicon-ready logo and a documented brand kit.

### 11. Choose a memorable name

> **Goal:** Land on a brand name that is easy to say, spell, remember and secure as a domain.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Medium · **Estimate:** 1–3 days · **Metric:** 5/5 people spell it correctly after hearing it once.

**Why this matters.** Your name is the most repeated word in your company’s life. A good one lowers marketing cost forever; a bad one taxes every conversation, ad and word-of-mouth referral.

**Explain it like I'm 5.** You pick a name that’s easy to say, spell and remember — and that you can actually get as a website address. A good name is like a good nickname: short, sticky and yours.

Naming feels artistic but is mostly a filtering exercise. Generate a large, messy list — 50 to 100 candidates — then filter hard. Good startup names tend to be short (one or two syllables help), easy to spell after hearing it once, easy to pronounce across your target markets, and free of unfortunate meanings in other languages. They also leave room to grow: a name that boxes you into one feature ("QuickInvoicePDF") ages badly when the product expands. Descriptive names (Salesforce) are easy to understand but hard to own; invented or evocative names (Stripe, Kuza) are easy to trademark and rank for but need more marketing to give them meaning.

Run every serious candidate through a practical gauntlet before you fall in love. Say it out loud on a fake phone call ("Hi, this is Aisha from ___"). Ask five people to spell it after hearing it once. Check the .com (or your primary TLD) is available or affordable — you will do the real domain work in the next task, but eliminate names whose domain is hopeless now. Do a quick trademark search in your key markets and a Google search to make sure you are not colliding with an existing company, a slur, or something embarrassing. Check social handle availability too.

Do not let naming become a month-long stall — it is a common procrastination trap disguised as important work. Give yourself a deadline, shortlist three to five, sleep on them, and get gut reactions from a handful of ICP members (not just friends, who will be too kind). Pick one that clears the practical filters and that you will not cringe saying a thousand times. Remember that many iconic names sounded strange at first (Google, Zappos, Kuza) and acquired meaning through use — so weight "ownable and memorable" over "instantly self-explanatory." Once chosen, commit; the sooner you stop debating the name, the sooner you start building the brand that gives it meaning.

**What this looks like in practice**

- Brainstorming 50 names, then checking which .com or local domains are free.
- Saying each finalist out loud on a fake phone call to hear if it’s clear.
- Choosing “Stripe” over a longer, harder-to-spell alternative.

**Checklist**

- [ ] Brainstorm 50–100 candidates (descriptive, invented, evocative, compound).
- [ ] Filter for short, spellable, pronounceable, no bad meanings.
- [ ] Say each finalist aloud on a mock phone call; test spelling with 5 people.
- [ ] Eliminate names with hopeless domains or handles.
- [ ] Run a trademark + Google search in your key markets.
- [ ] Shortlist 3–5 and get ICP gut reactions.
- [ ] Pick one, set a deadline, and commit.

**Tools & services**

- Namelix / Squadhelp (ideas)
- Namechk (handle availability)
- USPTO / national trademark search
- A thesaurus + other-language dictionaries

**Common pitfalls**

- Over-descriptive names that box you into one feature.
- Hard-to-spell or hard-to-pronounce names that tax every referral.
- Ignoring trademark or foreign-language meaning.
- Spending a month naming instead of building.

**Go deeper**

- [Namelix (AI name generator)](https://namelix.com/)
- [Namechk (domain + handle check)](https://namechk.com/)
- [a16z: naming your startup](https://a16z.com/)

**Definition of done:** One chosen name that passes spelling, pronunciation, trademark and gut-check filters.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/11-choose-a-memorable-name)

---

### 12. Register the domain (and protect it)

> **Goal:** Secure your primary domain plus key defensive variants, on an account you control.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Easy · **Estimate:** 1–2 hours · **Metric:** Domain resolves, is locked, and is logged in your asset register.

**Why this matters.** The domain is your address, your email and a trust signal. Owning the right one — and locking it down — prevents squatters, impersonation and painful rebrands later.

**Explain it like I'm 5.** You buy your website address and a few look-alikes so no one can grab them, and you keep them in an account only you control — like buying the land your house will sit on.

Your domain is a permanent asset, so buy it deliberately. Aim for the cleanest version of your name on the most trusted TLD your audience expects — usually .com globally, or a strong local TLD (.co.ke, .ke) if your beachhead is local and trusts it. If the exact .com is taken but affordable on the aftermarket and central to your brand, it can be worth the one-time cost; otherwise a clean alternative TLD is fine for launch (many great companies run on .io, .app, .co or country domains). Avoid hyphens and creative misspellings that people will mistype.

Buy from a reputable registrar and treat the account like production infrastructure. Register the primary domain plus a few defensive variants: the common misspelling, the plural/singular, and the main alternative TLDs, so competitors and squatters cannot exploit them. Immediately enable auto-renew (a lapsed domain is a catastrophe), turn on registrar lock to prevent unauthorised transfers, and add WHOIS privacy so your personal details are not public. Set up multi-factor authentication on the registrar account and use a shared company email — not a personal one — as the owner, so you do not lose the domain if you lose access to a personal inbox.

Point the domain somewhere sensible from day one, even if it is just a "coming soon" page or your smoke-test landing page — a live domain builds trust and lets you start collecting emails. Note your nameservers; in the next phase you will move DNS to Cloudflare for speed, security and easy record management. Finally, record the domain, registrar login location, renewal date and owner email in your company password manager and asset log. Domains are cheap to hold and expensive to lose or reacquire — a little discipline here prevents a class of avoidable disasters, including the nightmare scenario of an expired domain being scooped up right as your marketing gains traction.

**What this looks like in practice**

- Registering yourbrand.com plus .co and the local .ke, and turning on auto-renew.
- Buying common misspellings so typos still reach you.
- Locking the domain and enabling 2FA on the registrar account.

**Checklist**

- [ ] Choose the primary domain: cleanest name on the most-trusted TLD for your audience.
- [ ] Register it plus 2–4 defensive variants (misspelling, plural, key TLDs).
- [ ] Use a reputable registrar and a company (not personal) owner email.
- [ ] Enable auto-renew, registrar lock, WHOIS privacy and MFA.
- [ ] Point it at a live "coming soon"/landing page immediately.
- [ ] Record domain, logins, renewal date and nameservers in your asset log.
- [ ] Plan to move DNS to Cloudflare in the infrastructure phase.

**Tools & services**

- Cloudflare Registrar / Namecheap / Porkbun
- A password manager (1Password/Bitwarden)
- A company email for ownership
- DNS: Cloudflare

**Common pitfalls**

- Registering under a personal email you might lose access to.
- Forgetting auto-renew and losing the domain.
- Skipping defensive variants that squatters then grab.
- Choosing a hyphenated or misspelled domain people mistype.

**Go deeper**

- [Cloudflare Registrar (at-cost domains)](https://www.cloudflare.com/products/registrar/)
- [Porkbun](https://porkbun.com/)
- [ICANN: domain protection basics](https://www.icann.org/resources/pages/domain-name-protection)

**Definition of done:** A locked, auto-renewing primary domain (+ variants) pointing to a live page.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/12-register-the-domain-and-protect-it)

---

### 13. Secure social handles & profiles

> **Goal:** Claim a consistent @handle everywhere and set up placeholder profiles.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Easy · **Estimate:** 2–4 hours · **Metric:** Same handle secured on 100% of your target platforms.

**Why this matters.** Consistent handles make you findable and credible, and claiming them early stops impersonators. Even empty, branded profiles rank in search and reserve your identity for launch.

**Explain it like I'm 5.** You grab the same username on all the social apps so people can always find the real you, even before you post anything. It’s like reserving your seat before the show starts.

Even if you will not post for weeks, claim your handle everywhere now. Handles are first-come, first-served, and nothing looks more amateur than being "@yourbrand_official_ke" because someone took the clean version. Aim for the exact same handle across every platform your ICP uses — consistency makes you effortless to find and tag. Use a handle checker to see availability across platforms at once, and if your first choice is taken on a key platform, consider a small consistent modifier you can use everywhere rather than a different name per platform.

Prioritise by where your customers actually are, but claim the majors regardless: X/Twitter, LinkedIn (company page), Instagram, TikTok, YouTube, Facebook, plus any niche community platform your ICP lives in. For a developer or B2B tool, add GitHub and possibly a Product Hunt maker profile. Set up each profile with the basics even if you are not launching: your logo as the avatar, a branded banner, the one-line value proposition in the bio, and a link back to your domain (or a link-in-bio page). This turns idle profiles into working assets — they appear in search, reserve your name, and give early fans somewhere to follow.

Protect and organise these accounts like the assets they are. Create them under a company email, enable two-factor authentication on every one, and store all credentials in your shared password manager so you never lose access or depend on one person's personal login. Decide now which one or two platforms you will actually invest in (you cannot do all of them well), and treat the rest as reserved placeholders. You will build the real audience in the growth phase, but claiming and lightly branding the handles today costs an hour and saves you from impersonation, brand confusion and the scramble of setting up profiles under launch-day pressure.

**What this looks like in practice**

- Claiming @yourbrand on X, Instagram, LinkedIn, TikTok and YouTube in one sitting.
- Using a tool like Namecheckr to find a handle that’s free everywhere.
- Adding a simple logo and bio link to each placeholder profile.

**Checklist**

- [ ] Run your name through a handle-availability checker.
- [ ] Claim the exact same handle on all major platforms + niche ones your ICP uses.
- [ ] Set avatar (logo), banner, value-prop bio and website link on each.
- [ ] Create a link-in-bio page for platforms that allow one link.
- [ ] Enable 2FA on every account; use a company email.
- [ ] Store all credentials in the shared password manager.
- [ ] Decide the 1–2 platforms you will actually invest in.

**Tools & services**

- Namechk / Namecheckr
- Canva (avatars/banners)
- Linktree / Bio.link
- Password manager + 2FA app

**Common pitfalls**

- Inconsistent handles across platforms, hurting findability.
- Leaving profiles blank and unbranded.
- Personal-email accounts nobody else can access.
- Trying to be active everywhere and doing all of it badly.

**Go deeper**

- [Namechk](https://namechk.com/)
- [Canva brand kit](https://www.canva.com/)
- [Buffer: social profile setup](https://buffer.com/library/)

**Definition of done:** Consistently branded, 2FA-protected profiles on every relevant platform.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/13-secure-social-handles-and-profiles)

---

### 14. Design a simple logo & a Netflix-style favicon

> **Goal:** Create a clean wordmark plus a single-icon mark that reads perfectly at 16px.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** Icon is recognisable and legible at 16×16 across tabs, apps and avatars.

**Why this matters.** A crisp logo makes you look funded and trustworthy. A distinctive single-letter/icon favicon (think Netflix’s "N") gives you a recognisable mark for tabs, apps and social avatars.

**Explain it like I'm 5.** You make a simple logo and a tiny icon that still looks clear when it’s tiny — like the little red “N” for Netflix. That small icon shows up in browser tabs and phone screens, so it has to be recognisable at thumbnail size.

You do not need an expensive brand agency for launch — you need a clean, confident mark that does not look like clip-art. Most early logos are a simple wordmark (your name in a well-chosen typeface, lightly customised) plus a compact icon/monogram for small spaces. The icon is the piece founders often neglect and the one that matters most operationally: it becomes your favicon, your app icon, your social avatar and your loading screen. Follow the "Netflix N" principle — a single, bold, instantly recognisable glyph (a letter, a simple symbol, or a distinctive shape) in your brand colour that stays legible when shrunk to 16×16 pixels.

Design for the constraints. Test the icon at tiny sizes early and often; intricate details vanish at favicon scale, so favour a bold silhouette and high contrast. Provide the favicon as an SVG (crisp at any size) plus PNG fallbacks (16, 32, 180 for Apple touch, 512 for PWA). Keep the wordmark in a vector format so it scales without blur. Design light and dark variants, because your mark needs to work on your dark hero and on a white app-store listing. Avoid trend-chasing gradients that will date quickly unless they are core to your identity; a strong solid mark ages better.

Keep the workflow lightweight and iterate. You can start in a tool like Figma, use a generator for inspiration, or brief a cheap freelancer on Fiverr with clear references — but always own the source files and the full rights. Export a tidy asset set: full logo (light/dark, SVG + PNG), icon only, and a favicon package. Then actually wire the favicon into your site and any app so it appears everywhere consistently (this playbook has a whole task on favicons across sites for a reason — an inconsistent or default favicon quietly signals "unfinished"). A distinctive, well-implemented mark is a small thing that punches far above its weight in perceived quality.

**What this looks like in practice**

- A clean wordmark plus a single-letter mark that stays sharp at 16×16 pixels.
- Exporting favicon.svg and app icons for iOS/Android home screens.
- Testing the icon shrunk down next to other browser tabs to check it still reads.

**Checklist**

- [ ] Choose a typeface and craft a clean wordmark.
- [ ] Design a single bold icon/monogram (the "Netflix N" test).
- [ ] Verify the icon is legible at 16×16px before finalising.
- [ ] Create light and dark variants of both logo and icon.
- [ ] Export favicon.svg + PNGs (16/32/180/512) and a full asset set.
- [ ] Own the source files and full commercial rights.
- [ ] Wire the favicon and app icon into your site/app consistently.

**Tools & services**

- Figma
- Looka / Brandmark (inspiration)
- RealFaviconGenerator
- Fiverr / 99designs (optional freelancer)

**Common pitfalls**

- A detailed logo that turns to mush at favicon size.
- Only a wordmark, with no compact icon for small spaces.
- No dark/light variants, so it breaks on some backgrounds.
- Leaving the default framework favicon in production.

**Go deeper**

- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Figma](https://www.figma.com/)
- [The Netflix rebrand (icon thinking)](https://www.designstudio.uk.com/)

**Definition of done:** A logo set (light/dark, SVG+PNG) and a favicon package legible at 16px.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/14-design-a-simple-logo-and-a-netflix-style-favicon)

---

### 15. Define brand colours, type & design tokens

> **Goal:** Lock a small, accessible palette and type scale, encoded as reusable design tokens.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Medium · **Estimate:** 4–8 hours · **Metric:** Every text/background pair passes WCAG AA; one theme file drives the UI.

**Why this matters.** A consistent palette and type system is what separates "designed" from "thrown together". Encoding them as tokens keeps every page, email and ad visually coherent — and speeds up building.

**Explain it like I'm 5.** You choose a small set of colours and fonts and write them down as reusable “tokens,” so everything you build looks like it belongs to the same brand — like picking your team’s uniform colours.

Colour and type do more heavy lifting for perceived quality than any single feature. Start with a small, disciplined palette: one primary brand colour, one or two accents, a set of neutrals (greys) for text and surfaces, and semantic colours for success, warning and error. Resist the rainbow — restraint reads as premium. Choose your primary to fit the emotion of your category (trustworthy blues, energetic oranges, premium purples) and to stand apart from your main competitor's colour so you are not visually confused with them. Reference the hero styling of sites you admire (afrosoftware.com, dj24.com, petedigital.com) for how a confident, limited palette on a dark background feels expensive.

Verify accessibility from the start. Text must meet WCAG contrast ratios against its background (4.5:1 for body text), so check every foreground/background pair with a contrast tool and adjust shades until they pass. Do the same for type: pick one or two typefaces (a characterful display face for headings, a highly readable face for body — often a clean sans), and define a modular type scale (for example 12/14/16/20/24/32/48px) so sizes feel harmonious rather than arbitrary. Decide font weights and line-heights too; generous line-height and a sensible max line length make long text far more readable.

Encode all of this as design tokens — named variables for colours, spacing, radii, shadows and type — rather than scattering hex codes across your code. In a Tailwind or CSS-variables setup this is a single theme file that every component reads from, which means you can restyle the whole product by changing a few values, and every new page is automatically on-brand. Document the palette, type scale and usage rules in one place. This system is the backbone of the design phase later; investing an afternoon now to define tokens pays back every single time you build a screen, and it is the practical difference between a product that looks coherent and one that looks like five different people built it.

**What this looks like in practice**

- Defining primary/accent colours, a font pair, and spacing as CSS variables/tokens.
- Checking colour contrast so text stays readable for everyone.
- A tokens file the whole app and website both pull from.

**Checklist**

- [ ] Pick 1 primary, 1–2 accents, a neutral scale, and semantic colours.
- [ ] Differentiate your primary from your main competitor’s colour.
- [ ] Check every text/background pair for WCAG contrast (≥4.5:1 body).
- [ ] Choose 1–2 typefaces (display + body) and a modular type scale.
- [ ] Define spacing, radii, shadows and line-heights.
- [ ] Encode everything as design tokens / CSS variables / a theme file.
- [ ] Document the palette, type and usage rules in one reference.

**Tools & services**

- Coolors / Realtime Colors
- WCAG contrast checker
- Google Fonts / Fontshare
- Tailwind theme / CSS variables

**Common pitfalls**

- Too many colours, making everything feel chaotic.
- Poor contrast that fails accessibility and readability.
- Hardcoding hex values everywhere instead of tokens.
- A type scale of random sizes with no rhythm.

**Go deeper**

- [Realtime Colors](https://www.realtimecolors.com/)
- [Refactoring UI (colour & type)](https://www.refactoringui.com/)
- [Type Scale](https://typescale.com/)

**Definition of done:** A documented, accessible palette and type scale encoded as reusable tokens.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/15-define-brand-colours-type-and-design-tokens)

---

### 16. Write your brand voice & messaging guidelines

> **Goal:** Define how you sound and the core messages you repeat everywhere.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Easy · **Estimate:** 3–5 hours · **Metric:** Anyone (or an AI) can produce on-brand copy from the guide alone.

**Why this matters.** Consistent voice and messaging make a small team feel like a real brand and make your marketing recognisable. It also lets you (and later, teammates and AI tools) write on-brand copy fast.

**Explain it like I'm 5.** You decide how your brand “talks” — friendly, expert, playful — and the few key messages you repeat everywhere, so you always sound like the same person.

Voice is your brand's personality expressed in words; messaging is the small set of things you say over and over. Both need to be decided, not left to chance, because inconsistency erodes trust and wastes the compounding value of repetition. Start with voice: pick three or four adjectives that describe how you want to sound (for example "clear, confident, warm, a little playful") and, crucially, their opposites — what you are not ("not corporate, not hypey, not condescending"). Add do/don't examples: rewrite the same sentence in your voice and in an off-brand voice so the difference is concrete and copyable.

Then lock your messaging hierarchy. This builds on your value proposition: the one-line positioning, a supporting subheadline, three to five key benefit messages (each tied to a proof point), and answers to the top objections your ICP raised in interviews. Include the exact customer language you collected — the words your customers use to describe the problem and the win are almost always better than anything you would invent, and using them makes people feel understood. Define a few "words we use / words we avoid" to keep terminology consistent (do you say "users", "members", "clients"? "sign up" or "get started"?).

Package this as a short, practical guide — one to three pages, not a fifty-page brand bible nobody reads. Cover voice adjectives with examples, the messaging hierarchy, tone adjustments by context (a playful social post versus a serious error message), and a glossary of preferred terms. This document becomes the reference for your website copy, emails, ads, social posts and support replies, and it is the single most useful thing to paste into an AI writing tool so it produces on-brand drafts instead of generic mush. As you learn which messages convert, update the guide; your voice can stay stable while your messaging sharpens with evidence.

**What this looks like in practice**

- A voice guide: “We’re warm, plain-spoken and never use corporate jargon.”
- Three core messages every page and email reinforces.
- Mailchimp’s well-known playful-but-clear content style guide.

**Checklist**

- [ ] Choose 3–4 voice adjectives and their opposites.
- [ ] Write do/don’t sentence examples showing on- vs off-brand.
- [ ] Build a messaging hierarchy: positioning, subhead, benefits, objections.
- [ ] Bake in verbatim customer language from your interviews.
- [ ] Define preferred vs avoided terms (a mini glossary).
- [ ] Note tone adjustments by context (social vs error messages).
- [ ] Package it as a 1–3 page practical guide and reuse it everywhere.

**Tools & services**

- Docs / Notion
- Your interview quote bank
- Grammarly / Hemingway (clarity)
- ChatGPT/Claude primed with the guide

**Common pitfalls**

- A voice that sounds like every other SaaS ("empower", "seamless").
- Ignoring the customer’s own words in favour of invented jargon.
- A bloated brand bible no one on the team will read.
- Inconsistent terminology that confuses users.

**Go deeper**

- [Mailchimp Content Style Guide](https://styleguide.mailchimp.com/)
- [Copyhackers (voice & conversion copy)](https://copyhackers.com/)
- [Nielsen Norman: writing for the web](https://www.nngroup.com/articles/)

**Definition of done:** A concise brand voice + messaging guide with examples and a term glossary.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/16-write-your-brand-voice-and-messaging-guidelines)

---

### 17. Create a brand kit & asset library

> **Goal:** Gather logos, colours, fonts, imagery and templates into one shared, versioned place.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Easy · **Estimate:** 3–6 hours · **Metric:** A new collaborator can produce an on-brand asset without asking for files.

**Why this matters.** A single source of truth for brand assets prevents the slow drift into inconsistency and lets you (and collaborators) produce on-brand material in minutes instead of hunting for the right file.

**Explain it like I'm 5.** You put all your logos, colours, fonts and templates in one shared folder so you (and anyone helping) never hunt for the right file or use the wrong old logo again.

As soon as you have a logo, palette, type and voice, they start living in scattered files — a logo in Downloads, a hex code in someone's memory, a font installed on one laptop. A brand kit centralises everything so your brand stays consistent as you scale from one person to a team and start outsourcing design and marketing. The kit should contain: all logo variants (full/icon, light/dark, SVG + PNG), the favicon package, the colour tokens with hex/RGB values, the fonts (files and web-font links), your voice/messaging guide, and any recurring imagery or illustration style.

Add templates, because templates are where a brand kit turns from documentation into a productivity multiplier. Build reusable templates for the things you will make constantly: social post formats, an OG/share image template, a slide deck theme, email header/footer, and a simple one-pager. When these exist, producing a new on-brand asset becomes a five-minute fill-in-the-blanks job rather than a from-scratch design task — which matters enormously when you hit the growth phase and need to ship dozens of posts and ads. Store editable source files, not just flattened exports, so anyone can adapt them.

Put it all somewhere shared, permissioned and versioned — a Figma file or team library, a Google Drive/Notion folder, or a dedicated brand-kit tool. Give it a clear structure and a short "how to use these assets" note so a new freelancer can be productive without a call. Keep a changelog when the brand evolves, and set the old versions aside clearly so nobody uses last quarter's logo by accident. This is unglamorous housekeeping, but it directly protects the perceived-quality gains you worked for in the rest of this phase: a consistent brand across every touchpoint is a quiet, constant signal that you are a real, credible company.

**What this looks like in practice**

- A shared drive/Figma with logo variants, colour codes, fonts and slide templates.
- Versioned files so everyone uses the latest logo, not last year’s.
- Canva brand kit templates for quick social posts.

**Checklist**

- [ ] Collect all logo/favicon variants in SVG + PNG.
- [ ] Add colour tokens (hex/RGB), fonts and web-font links.
- [ ] Include the voice/messaging guide and imagery style.
- [ ] Build templates: social posts, OG image, deck, email, one-pager.
- [ ] Store editable source files, not just exports.
- [ ] Put everything in a shared, permissioned, versioned location.
- [ ] Add a short "how to use" note and a changelog.

**Tools & services**

- Figma (team library)
- Google Drive / Notion
- Canva Brand Kit
- A version/changelog note

**Common pitfalls**

- Assets scattered across personal machines and chats.
- Only flattened exports, so no one can edit them.
- No templates, so every asset is built from scratch.
- No versioning, so outdated logos keep resurfacing.

**Go deeper**

- [Figma libraries](https://www.figma.com/best-practices/)
- [Canva Brand Kit](https://www.canva.com/brand/)
- [Brandpad / Frontify (brand systems)](https://brandpad.io/)

**Definition of done:** A single shared brand kit with assets, tokens, guide and reusable templates.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/17-create-a-brand-kit-and-asset-library)

---

### 18. Design social & OG share images

> **Goal:** Create branded Open Graph and social card images so every shared link looks intentional.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Easy · **Estimate:** 3–5 hours · **Metric:** Every shared link renders a crisp, branded preview across platforms.

**Why this matters.** When someone shares your link, the preview image is your first impression to their whole audience. A blank or broken preview looks abandoned; a crisp, branded card earns clicks for free.

**Explain it like I'm 5.** You design the little preview pictures that show up when someone shares your link on WhatsApp, X or LinkedIn, so every shared link looks polished instead of blank.

Every time your URL is pasted into WhatsApp, X, LinkedIn, Slack or iMessage, the platform tries to render a preview using your Open Graph (OG) meta tags. If you have not set them, you get a blank box or a random cropped image — a small but real credibility leak that repeats every single time your link travels. Fixing it is cheap and permanent. Design a default OG image (1200×630px is the safe standard) featuring your logo, your value proposition or page title, your brand colours, and enough visual interest to stand out in a busy feed.

Build it as a template, not a one-off, because different pages benefit from different cards. Your homepage, blog posts, pricing page and key features all convert better with tailored previews. A simple approach is a branded background with a slot for a headline and optional subtitle; a more advanced approach is dynamic OG image generation (for example, rendering the blog post title automatically) which is worth it once you publish content regularly. At minimum, ship a strong default now and page-specific overrides for your top three pages. Keep text large and high-contrast — these are viewed as thumbnails.

Wire the tags correctly and test them. Set og:title, og:description, og:image (absolute URL), og:type and og:url, plus the Twitter card tags (twitter:card = summary_large_image). Use the official debuggers (Facebook Sharing Debugger, LinkedIn Post Inspector, X Card Validator) to preview and to force a re-scrape after changes, because platforms cache aggressively. Confirm the image loads over HTTPS and is not blocked. Once done, this quietly upgrades every share, ad and backlink for the life of the product — a classic high-leverage, do-it-once task that many founders skip and later regret when their big launch post shows an ugly blank preview.

**What this looks like in practice**

- A branded 1200×630 Open Graph image for the homepage.
- Auto-generated share cards for each blog post with its title.
- Testing links in a preview debugger before launch.

**Checklist**

- [ ] Design a default 1200×630 OG image with logo, headline and brand colours.
- [ ] Create a template with a headline/subtitle slot for per-page cards.
- [ ] Add tailored OG images for your top 3 pages (home, pricing, key feature).
- [ ] Set og:title/description/image/url/type + twitter:card tags.
- [ ] Use absolute HTTPS image URLs.
- [ ] Validate with Facebook, LinkedIn and X debuggers; force re-scrape.
- [ ] Consider dynamic OG generation once you publish regularly.

**Tools & services**

- Figma / Canva (templates)
- Vercel OG / Satori (dynamic images)
- Facebook Sharing Debugger
- X Card Validator / LinkedIn Post Inspector

**Common pitfalls**

- No OG tags, so shares render blank or with a bad crop.
- Relative image URLs that platforms cannot fetch.
- Text too small to read as a feed thumbnail.
- Forgetting platforms cache and not forcing a re-scrape.

**Go deeper**

- [The Open Graph protocol](https://ogp.me/)
- [Vercel OG image generation](https://vercel.com/docs/functions/og-image-generation)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

**Definition of done:** Branded OG/Twitter cards on your key pages, validated in the platform debuggers.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/18-design-social-and-og-share-images)

---

### 19. Set up business email & legal identity basics

> **Goal:** Get a professional domain email and lay the minimum legal/entity foundation.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** Professional email deliverable to inbox; entity ready before first payment.

**Why this matters.** A "yourname@yourdomain" address is a baseline trust signal, and a basic legal entity lets you take payments, sign contracts and one day raise money without a scramble.

**Explain it like I'm 5.** You set up a real email at your own domain (like you@yourbrand.com) and do the basic paperwork to be a legit business, so you look trustworthy and stay out of trouble.

Two unglamorous but foundational things belong here. First, professional email: set up mailboxes on your own domain (hello@, you@) instead of using a personal gmail for business. It costs a few dollars a month, dramatically improves how you are perceived by customers, partners and investors, and — done right — protects your deliverability. When you configure it, also set the email authentication records (SPF, DKIM and DMARC) so your messages land in inboxes and nobody can spoof your domain; this pays off enormously when you start sending lifecycle and marketing email later. Create shared aliases (support@, billing@) that forward appropriately so the company is not dependent on one person's inbox.

Second, the legal foundation appropriate to your stage and geography. You do not need to over-lawyer a pre-revenue idea, but you should understand what you need before money changes hands: registering a business entity (a limited company is common and gives you liability protection and a vehicle to raise), a business bank account so personal and company money never mix, and the basic tax registrations for your country. If you have a co-founder, this is the moment to agree founder equity split and vesting in writing — the single most important legal document early on, and the source of the most painful disputes when skipped. Payment processors like Stripe will also require a registered entity, so this unblocks monetisation.

Keep it proportionate and get advice where it counts. For many founders the right sequence is: professional email now (an hour), entity + bank account when you are ready to take money or sign real contracts, and proper legal help for anything involving co-founders, equity, or investment. Use reputable local resources or a startup-friendly incorporation service, and store every document — incorporation certificate, tax IDs, bank details, founder agreements — in your secure company records. Getting these basics right early removes friction at exactly the moments you cannot afford it: taking your first payment, signing your first big customer, or receiving your first investment cheque.

**What this looks like in practice**

- Google Workspace email on your domain instead of a personal Gmail.
- Registering a company/entity and a business bank account.
- Setting up email SPF/DKIM so your mail doesn’t land in spam.

**Checklist**

- [ ] Set up domain mailboxes (hello@, you@) on a business email provider.
- [ ] Configure SPF, DKIM and DMARC for deliverability and anti-spoofing.
- [ ] Create shared aliases (support@, billing@) that forward correctly.
- [ ] Decide on and register a business entity when you are ready to take money.
- [ ] Open a business bank account; never mix personal and company funds.
- [ ] If you have a co-founder, put equity split + vesting in writing.
- [ ] Store all legal/financial documents in secure company records.

**Tools & services**

- Google Workspace / Microsoft 365 / Zoho Mail
- SPF/DKIM/DMARC (via DNS)
- Stripe Atlas / local incorporation service
- Startup lawyer for equity/vesting

**Common pitfalls**

- Running the business from a personal gmail.
- Skipping SPF/DKIM/DMARC and landing in spam later.
- Mixing personal and company money.
- No written founder equity/vesting agreement.

**Go deeper**

- [Google Workspace](https://workspace.google.com/)
- [Stripe Atlas (incorporation)](https://stripe.com/atlas)
- [DMARC setup guide](https://dmarc.org/overview/)

**Definition of done:** Working domain email with auth records and the right legal/banking basics for your stage.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/19-set-up-business-email-and-legal-identity-basics)

---

### 20. Build the first basic landing page

> **Goal:** Ship a clean one-page site that states the value prop and captures interest.
>
> **Phase:** 2 — Brand, Domain & Identity · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Page is live on your domain and converting visitors to your email list.

**Why this matters.** A live landing page turns your brand and positioning into something real that people can visit, share and sign up on. It is also the canvas you will keep upgrading into your full marketing site.

**Explain it like I'm 5.** You build one simple, good-looking web page that says what you offer and lets people join or get in touch. It’s your storefront window before the full shop is built.

With a name, domain, brand and message in hand, put up a real landing page. This is the first public expression of everything you have decided, and even a single well-made page does a lot of jobs: it validates demand (if you have not already smoke-tested), collects emails for launch, gives your social profiles somewhere to point, and makes you look like a going concern to anyone who checks you out. Keep it to one page for now — you are not building the whole marketing site yet, just a strong first impression with a clear call to action.

Follow the proven landing-page anatomy. A hero at the top with your value proposition as the headline, a one-line subhead, a primary call to action (join the waitlist / start free), and a supporting visual. Below it: a short "how it works" or three-benefit section (outcomes, not features), a slice of social proof if you have any (testimonials, logos, waitlist count, "as seen in"), a brief objection-handler or FAQ, and a closing call to action. Reuse your brand tokens so it looks cohesive, and study the hero styling of sites you admire (afrosoftware.com, dj24.com, petedigital.com) for the confident, spacious, dark-hero feel that reads as premium.

Ship it fast and instrument it. Use whatever gets you live quickest and that you can iterate on — a static site, a framework you know, or a no-code builder — and wire in your email capture and analytics from the first minute so you can measure conversion. Make sure it is responsive (most of your traffic will be mobile), fast (compress images, it should load in a second or two), and has your favicon and OG tags in place. Do not polish forever; get it live, drive a little traffic, and let real behaviour tell you what to improve. This page is the seed of your product's front door — in later phases you will grow it into a high-converting, SEO-optimised marketing site, but today the win is simply being live, on-brand, and collecting interest.

**What this looks like in practice**

- A single page with a strong headline, a few benefits, and an email sign-up.
- A “join the waitlist” page while the product is still being built.
- A clean Framer/Vite one-pager pointed at your new domain.

**Checklist**

- [ ] Draft the page: hero (value prop + CTA), benefits, social proof, FAQ, closing CTA.
- [ ] Write outcome-focused copy using your messaging guide.
- [ ] Apply brand tokens (colours, type, logo, favicon, OG tags).
- [ ] Wire in email capture and analytics from the start.
- [ ] Make it responsive and fast (compress images, aim for ~1–2s load).
- [ ] Deploy to your domain over HTTPS.
- [ ] Drive a little traffic and note the conversion rate to improve later.

**Tools & services**

- Vite/Next/Astro or Framer/Carrd
- Your brand tokens & assets
- Email list (ConvertKit/Mailchimp)
- Plausible / GA4

**Common pitfalls**

- Feature-dumping instead of leading with the outcome.
- No email capture or analytics, so the page teaches you nothing.
- Ignoring mobile, where most visitors are.
- Polishing endlessly instead of shipping and iterating.

**Go deeper**

- [Julian Shapiro: landing pages](https://www.julian.com/guide/growth/landing-pages)
- [Refactoring UI](https://www.refactoringui.com/)
- [Land-book (inspiration)](https://land-book.com/)

**Definition of done:** A live, responsive, on-brand landing page with email capture and analytics.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/20-build-the-first-basic-landing-page)

---

## Phase 3: Foundation & Infrastructure

_Set up the plumbing: version control, a hosting target, Cloudflare in front, HTTPS, a repeatable deploy and staging. Boring, and the reason you can move fast later._

**Outcome:** A live URL that redeploys with one command and never leaks secrets.

### 21. Set up version control & repo hygiene

> **Goal:** Put your code in Git/GitHub with a clean structure, README and .gitignore from commit one.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Easy · **Estimate:** 1–2 hours · **Metric:** Zero secrets in history; a stranger can clone and run from the README.

**Why this matters.** Version control is your safety net, your history and your collaboration layer. Good repo hygiene from the start prevents leaked secrets, lost work and the chaos of a messy codebase later.

**Explain it like I'm 5.** You keep every version of your code in Git (like infinite “undo” and a shared history), stored safely on GitHub. It’s a time machine plus a backup, so you never lose work and teammates never overwrite each other.

Before you write real features, get the project into Git and pushed to a remote like GitHub. This is non-negotiable: it gives you a full history you can roll back to, a backup off your machine, and the foundation for collaboration and automated deploys. Initialise the repo, add a sensible .gitignore for your stack before the first commit (so you never accidentally commit node_modules, build output, or — critically — secret files), and make a clear first commit. Decide public vs private early; many founders keep the product private and open-source only specific pieces.

Establish hygiene that scales from one person to a team. Write a README that explains what the project is, how to run it locally, and how to deploy — future-you and any collaborator will thank you. Adopt a simple branching approach (for a solo founder, committing to main with feature branches for anything risky is fine; add pull-request review when you have a teammate). Write meaningful commit messages so history is legible. Add a LICENSE if relevant, and a .env.example that documents required environment variables without exposing their values.

Protect the repo like the asset it is. Never commit secrets — API keys, database passwords, tokens — even for a moment, because Git history is forever and bots scan public repos within minutes; use environment variables and a secrets manager (a later task covers this in depth). Turn on secret scanning / push protection on GitHub, and enable two-factor authentication on your account. Consider branch protection on main once others contribute. This foundation seems obvious, but doing it properly on day one avoids an entire category of disasters — leaked credentials, unrecoverable lost work, and the slow rot of an undocumented, undisciplined codebase that becomes impossible to hand to a hire or a co-founder.

**What this looks like in practice**

- Running git init, adding a README and .gitignore before writing real code.
- Pushing to a private GitHub repo with clear commit messages.
- Recovering yesterday’s working version after a bad change with one command.

**Checklist**

- [ ] Initialise Git and create a remote repo (GitHub/GitLab).
- [ ] Add a stack-appropriate .gitignore BEFORE the first commit.
- [ ] Write a README (what it is, run locally, deploy) and add a LICENSE.
- [ ] Add .env.example documenting required variables (no real values).
- [ ] Adopt a simple branching + commit-message convention.
- [ ] Enable 2FA, secret scanning and push protection on the account.
- [ ] Never commit secrets; rotate immediately if one slips in.

**Tools & services**

- Git + GitHub/GitLab
- gitignore.io
- GitHub secret scanning / push protection
- Conventional Commits (optional)

**Common pitfalls**

- Committing node_modules, build output or secret files.
- No README, so nobody (including you) can run it later.
- Leaking an API key into history, where it lives forever.
- No off-machine backup until it is too late.

**Go deeper**

- [GitHub: getting started](https://docs.github.com/en/get-started)
- [gitignore.io](https://www.toptal.com/developers/gitignore)
- [Conventional Commits](https://www.conventionalcommits.org/)

**Definition of done:** A pushed repo with .gitignore, README, LICENSE and secret scanning enabled.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/21-set-up-version-control-and-repo-hygiene)

---

### 22. Choose your tech stack

> **Goal:** Pick languages, frameworks and services you can ship and maintain quickly.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** 2–4 hours · **Metric:** You can scaffold and ship a feature in the stack without fighting it.

**Why this matters.** The right stack lets you move fast and hire later; the wrong one becomes a tax on every feature. At MVP stage, "boring, familiar and productive" beats "trendy and clever" almost every time.

**Explain it like I'm 5.** You choose the building blocks (languages and tools) you’ll build with — picking ones you can move fast in, not the flashiest. It’s like choosing familiar LEGO sets so you can build quickly instead of reading manuals all day.

Your stack choice is a bet on speed and maintainability, not a personality statement. The strongest default is: use what you already know well. A framework you are fluent in will get you to a working MVP far faster than a shinier one you are learning, and speed to real user feedback is the thing that matters now. If you are choosing fresh, favour mature, well-documented, well-supported technologies with big communities — you will hit fewer dead ends, find more answers, and be able to hire people who know it. "Boring technology" is a competitive advantage at this stage.

Decide the major pieces deliberately: frontend framework, backend/runtime, database, hosting model, and the managed services that let you avoid building commodity infrastructure. Lean heavily on managed services for anything that is not your core differentiator — authentication, payments, email, file storage, error tracking. Rebuilding these yourself is a waste of the limited time you should be spending on the one thing that makes you special. Choose a database that fits your data (a relational database like Postgres is a safe, powerful default for most products; reach for specialised stores only when you have a specific reason).

Match the stack to your actual constraints — your skills, your budget, your hosting, and your team's future. Consider total cost at small scale (many platforms are free or cheap until you have real usage), the ease of deployment, and whether you can find help if you get stuck. Avoid two traps: over-engineering (microservices, Kubernetes and event buses for a product with zero users) and premature novelty (betting the company on a framework that is six months old). Write down your choices and the reasoning in your README or an architecture note, so the decisions are explicit and revisitable. The goal is a stack that disappears into the background and lets you focus entirely on building something people want.

**What this looks like in practice**

- Picking React + Node + Postgres because the team already knows them.
- Choosing a boring, well-documented stack over a trendy one for a first product.
- Using a batteries-included framework (like Rails or Next.js) to ship faster.

**Checklist**

- [ ] Default to the framework/language you already know best.
- [ ] Pick frontend, backend, database and hosting model deliberately.
- [ ] Use managed services for auth, payments, email, storage, error tracking.
- [ ] Choose a safe default database (Postgres) unless you have a specific need.
- [ ] Sanity-check cost at small scale and ease of deployment.
- [ ] Avoid over-engineering and unproven, brand-new tech.
- [ ] Document the stack and the reasoning in an architecture note.

**Tools & services**

- Next.js / Vite+React / your preferred framework
- PostgreSQL / managed DB (Supabase/Neon)
- Managed auth, payments, email
- Vercel / your own server (IIS/Node)

**Common pitfalls**

- Learning a brand-new stack on the critical path to launch.
- Over-engineering infra for users you do not have yet.
- Rebuilding auth/payments/email instead of using managed services.
- Choosing tech you cannot hire for or get help with.

**Go deeper**

- [Choose Boring Technology](https://boringtechnology.club/)
- [The Twelve-Factor App](https://12factor.net/)
- [Supabase / Neon (managed Postgres)](https://supabase.com/)

**Definition of done:** A documented stack decision covering frontend, backend, DB, hosting and services.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/22-choose-your-tech-stack)

---

### 23. Set up local dev environment & tooling

> **Goal:** Configure formatting, linting, type-checking and scripts so quality is automatic.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Easy · **Estimate:** 2–4 hours · **Metric:** A bad-style or type-broken commit is blocked automatically.

**Why this matters.** Automated tooling catches bugs and inconsistencies before they ship, keeps the codebase clean as it grows, and removes bikeshedding. Set it up once and it protects quality forever.

**Explain it like I'm 5.** You set up your computer so it automatically tidies and checks your code as you write — like spell-check for programming. This catches silly mistakes before they become bugs.

A little tooling investment now compounds across every line of code you will ever write. Set up a consistent local environment so the project runs the same way every time: pin your runtime version (a .nvmrc or equivalent), document setup in the README, and provide simple scripts (install, dev, build, test, lint) so anyone can get going with one or two commands. If your stack supports it, consider a devcontainer or Docker for a reproducible environment — useful the moment a second person joins.

Add the quality trio: a formatter, a linter and type-checking. A formatter (like Prettier) ends all arguments about style and keeps diffs clean by formatting on save. A linter (like ESLint) catches likely bugs and enforces good patterns. Static typing (TypeScript for JS projects) catches a large class of errors before you even run the code and makes refactoring far safer as the codebase grows — at startup speed, where you will be changing things constantly, this safety net pays for itself quickly. Configure sensible defaults; you can tune rules later.

Automate enforcement so quality does not depend on discipline. Add a pre-commit hook (via Husky/lint-staged or your language's equivalent) that formats and lints changed files before they can be committed, so bad code never enters history. Wire the same checks into CI later so pull requests are validated automatically. Add editor config (an .editorconfig and recommended extensions) so the whole team gets the same experience. None of this is glamorous, but it is the difference between a codebase that stays clean and pleasant to work in and one that degrades into a tangle nobody wants to touch — which directly affects how fast you can ship and how easily you can bring on help.

**What this looks like in practice**

- Adding Prettier (formatting), ESLint (linting) and TypeScript (type-checking).
- A one-command “npm run dev” that starts everything locally.
- Pre-commit hooks that auto-format code before it’s saved to Git.

**Checklist**

- [ ] Pin the runtime version and document setup in the README.
- [ ] Add scripts: install, dev, build, test, lint.
- [ ] Configure a formatter (format on save) for consistent style.
- [ ] Add a linter with sensible default rules.
- [ ] Adopt static typing (e.g. TypeScript) for safer refactors.
- [ ] Add pre-commit hooks to format/lint before commits.
- [ ] Add .editorconfig and recommended editor extensions.

**Tools & services**

- Prettier
- ESLint
- TypeScript
- Husky + lint-staged / pre-commit

**Common pitfalls**

- No formatter, leading to noisy diffs and style wars.
- Skipping types and paying for it during every refactor.
- Relying on discipline instead of automated hooks.
- An environment that only works on your machine.

**Go deeper**

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky (git hooks)](https://typicode.github.io/husky/)

**Definition of done:** Format, lint and type checks running locally and enforced on commit.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/23-set-up-local-dev-environment-and-tooling)

---

### 24. Set up Cloudflare (DNS, CDN, SSL)

> **Goal:** Put Cloudflare in front of your domain for fast DNS, a global CDN, HTTPS and protection.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** 2–4 hours · **Metric:** Site serves over HTTPS globally via the CDN with the origin hidden.

**Why this matters.** Cloudflare gives you enterprise-grade speed, security and TLS for free, hides your origin server, and makes managing DNS records and caching simple — a standard, high-leverage foundation.

**Explain it like I'm 5.** You put Cloudflare in front of your website — it makes your site load faster worldwide, keeps it secure with HTTPS, and blocks bad traffic. Think of it as a fast, guarded front gate for your site.

Cloudflare sits between your visitors and your server, and for a free or near-free product it delivers an outsized set of benefits: fast global DNS, a CDN that caches your static assets close to users worldwide, automatic HTTPS at the edge, DDoS protection, and a clean dashboard for managing everything. Start by adding your domain to Cloudflare and updating your registrar's nameservers to Cloudflare's. Once the zone is active, you manage all DNS records here. Recreate your records (A/AAAA for the apex, CNAME for subdomains) pointing at your origin server's IP, and enable the orange-cloud proxy so traffic flows through Cloudflare rather than exposing your origin directly.

Configure the essentials. Set the SSL/TLS mode correctly for your setup: "Full (strict)" is the goal, meaning Cloudflare validates a real certificate on your origin — pair it with a Cloudflare Origin Certificate installed on your server so the origin link is encrypted and trusted. Turn on "Always Use HTTPS" and automatic HTTPS rewrites so no request is ever served in plaintext. Enable Brotli compression and sensible caching for static assets. For subdomains (like a docs or app subdomain), add each record and issue/attach a certificate so it serves over HTTPS too. Keep DNS changes deliberate — a wrong record or proxy setting is a common cause of "the site is down."

Lean on Cloudflare's extras as you grow. Page Rules or the newer Rules engine let you control caching, redirects (for example, forcing www to apex or vice versa) and security per path. The WAF and rate-limiting protect your endpoints from abuse. Cloudflare Analytics gives you server-independent traffic data. And because Cloudflare proxies your traffic, your origin IP stays hidden, reducing your attack surface. Document your DNS records, SSL mode and any rules so the setup is reproducible and a teammate can understand it. This layer is foundational: it makes your small server feel fast and resilient globally, provides free TLS, and centralises the network controls you will rely on through launch and growth.

**What this looks like in practice**

- Pointing your domain’s DNS to Cloudflare and turning on the proxy (orange cloud).
- Getting automatic HTTPS and a global CDN cache with a few clicks.
- Enabling basic bot/DDoS protection during a launch spike.

**Checklist**

- [ ] Add the domain to Cloudflare and switch nameservers at the registrar.
- [ ] Recreate DNS records (apex + subdomains) pointing at your origin.
- [ ] Enable the proxy (orange cloud) to hide the origin and use the CDN.
- [ ] Install a Cloudflare Origin Certificate; set SSL/TLS to Full (strict).
- [ ] Turn on Always Use HTTPS, HTTPS rewrites and Brotli compression.
- [ ] Add redirect rules (www↔apex) and caching rules for static assets.
- [ ] Document records, SSL mode and rules for reproducibility.

**Tools & services**

- Cloudflare (DNS/CDN/SSL/WAF)
- Cloudflare Origin Certificates
- Cloudflare Rules / Page Rules
- dig / nslookup for verification

**Common pitfalls**

- SSL mode set to Flexible, causing insecure or looping requests.
- Forgetting to proxy records, exposing the origin IP.
- Missing subdomain records or certs, so a subdomain 404s or is insecure.
- Undocumented DNS that no one can reproduce.

**Go deeper**

- [Cloudflare: get started](https://developers.cloudflare.com/fundamentals/setup/)
- [Cloudflare Origin CA](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/)
- [Cloudflare SSL/TLS modes](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/)

**Definition of done:** Domain on Cloudflare with proxied DNS, Full (strict) TLS and HTTPS enforced.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/24-set-up-cloudflare-dns-cdn-ssl)

---

### 25. Provision hosting & connect your server

> **Goal:** Get your app running on a host (managed platform or your own server) reachable from the domain.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** The domain loads the app from any network, and survives a server reboot.

**Why this matters.** Hosting is where your product actually lives. Choosing the right model — and wiring the domain to it correctly — is what turns "works on my machine" into "works for everyone".

**Explain it like I'm 5.** You get your app running on a computer in the cloud (a server or hosting platform) and connect it to your domain, so anyone typing your address actually reaches your app.

You have two broad hosting paths, and either can be right. Managed platforms (Vercel, Netlify, Render, Railway, Fly.io and similar) handle servers, scaling and deploys for you, so you push code and it goes live — ideal when you want zero ops overhead. Self-managed servers (a VPS, or in this environment a Windows/IIS box or a Linux server you control) give you more control and can be cheaper at scale, at the cost of managing the machine yourself. For most MVPs a managed platform is the fastest route; if you already run your own server (as many do), the key is a clean, repeatable way to deploy to it.

Wire the pieces together. For a static SPA, that means building the site and serving the files behind your web server with a SPA fallback (all unknown routes serve index.html) so client-side routing works. For a dynamic app, you run the app as a service (behind a reverse proxy such as IIS, Nginx or Caddy) and proxy the domain to it. Point your Cloudflare DNS at the host, make sure the web server has the correct site binding for your hostname, and confirm the origin serves your app on both http and https. Set the correct MIME types and compression, and add security headers at the server or edge.

Make the connection robust and observable. Run the app as a managed service so it restarts on crash or reboot (a process manager like PM2, a systemd unit, or a Windows service via NSSM), not as a terminal you left open. Verify end to end: DNS resolves to the host, the host serves the app, Cloudflare proxies it over HTTPS, and a real browser loads it. Do a quick smoke test from outside your network (a phone on mobile data is a great check). Document the host, the deploy target directory or service name, and the exact steps to bring it up, so recovering from an outage is a known procedure rather than a panic. With hosting solid, you have a real, reachable product — the base for the deploy pipeline you build next.

**What this looks like in practice**

- Deploying to a managed platform (Vercel, Render) or your own VPS/IIS server.
- Pointing yourbrand.com at the host and confirming it loads.
- Setting up the app to restart automatically if the server reboots.

**Checklist**

- [ ] Choose managed platform vs self-managed server for your stack.
- [ ] For a static SPA: serve built files with an index.html fallback.
- [ ] For a dynamic app: run it as a service behind a reverse proxy.
- [ ] Point Cloudflare DNS at the host and set the correct site binding.
- [ ] Confirm origin serves the app on http and https with right MIME/compression.
- [ ] Run the app under a process manager/service so it survives reboots.
- [ ] Smoke-test end to end from outside your network; document the setup.

**Tools & services**

- Vercel/Netlify/Render/Railway or VPS/IIS/Nginx
- PM2 / systemd / NSSM (service)
- Reverse proxy (IIS/Nginx/Caddy)
- curl / a phone on mobile data (external test)

**Common pitfalls**

- Running the app in a terminal that dies on logout/reboot.
- No SPA fallback, so deep links 404.
- Wrong host binding, so the domain hits the wrong site.
- No documented recovery steps for an outage.

**Go deeper**

- [Vercel docs](https://vercel.com/docs)
- [PM2 process manager](https://pm2.keymetrics.io/)
- [Caddy (automatic HTTPS reverse proxy)](https://caddyserver.com/)

**Definition of done:** Your app live on a host, reachable at the domain over HTTPS, running as a service.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/25-provision-hosting-and-connect-your-server)

---

### 26. Configure HTTPS / SSL end-to-end

> **Goal:** Ensure every request is encrypted from browser to edge to origin, with valid certificates.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** 2–4 hours · **Metric:** SSL checker passes; all hostnames serve HTTPS with a valid, monitored cert.

**Why this matters.** HTTPS is table stakes: browsers warn on plaintext, users distrust it, SEO penalises it, and many APIs require it. End-to-end TLS also protects data in transit and your credibility.

**Explain it like I'm 5.** You make sure every connection to your site is locked with the little padlock (HTTPS), from the visitor all the way to your server, so no one can snoop or tamper. It’s sealing every envelope end to end.

HTTPS is not optional and it is not hard to get right once you understand the chain. There are two legs to secure: browser-to-Cloudflare (the edge) and Cloudflare-to-origin (your server). Cloudflare automatically provides a valid public certificate at the edge, so the visitor always sees a padlock. The leg people get wrong is edge-to-origin: if your origin has no certificate and you use Cloudflare's "Flexible" mode, traffic between Cloudflare and your server travels in plaintext and can loop or leak. The correct setup is "Full (strict)": install a certificate on your origin and let Cloudflare validate it, encrypting both legs.

Get a certificate onto your origin. The easiest path behind Cloudflare is a Cloudflare Origin Certificate (free, long-lived, trusted by Cloudflare) installed on your web server and bound to your hostname. Alternatively, use Let's Encrypt with automatic renewal (via Certbot, Caddy's built-in ACME, or win-acme on Windows). Whichever you choose, ensure it covers the exact hostnames you serve (apex, www, and any subdomains — a wildcard or a SAN cert helps). Bind the certificate to the HTTPS listener/site binding on your server, and confirm the origin actually answers on 443 with the right cert.

Enforce and verify. Turn on "Always Use HTTPS" so any http request is redirected, and enable HSTS (start with a short max-age, then increase) so browsers refuse to downgrade — but only once you are confident everything is HTTPS, because HSTS is sticky. Redirect www to apex (or vice versa) consistently. Then test the whole chain: load the site and check the padlock, run an SSL checker to confirm the certificate is valid and not expiring soon, and set a reminder or automation for renewal (an expired cert is a classic, avoidable outage). Mixed-content warnings (an https page loading an http asset) will break the padlock, so audit that your assets, fonts and API calls are all https. With TLS solid end to end, your product is secure, trusted and ready for everything that requires HTTPS.

**What this looks like in practice**

- Valid TLS certificates on the edge and origin, auto-renewing.
- Redirecting all http:// traffic to https:// automatically.
- Using Cloudflare “Full (strict)” SSL with an origin certificate.

**Checklist**

- [ ] Set Cloudflare SSL/TLS to Full (strict), not Flexible.
- [ ] Install an origin certificate (Cloudflare Origin CA or Let’s Encrypt).
- [ ] Cover all hostnames: apex, www and subdomains (wildcard/SAN).
- [ ] Bind the cert to the HTTPS listener and confirm 443 answers correctly.
- [ ] Enable Always Use HTTPS; add HSTS once fully on HTTPS.
- [ ] Fix any mixed-content (http assets on an https page).
- [ ] Verify with an SSL checker and automate/renew before expiry.

**Tools & services**

- Cloudflare Origin CA / Let’s Encrypt
- Certbot / win-acme / Caddy (ACME)
- SSL Labs / whatsmychaincert
- Browser devtools (mixed content)

**Common pitfalls**

- Flexible SSL leaving the origin leg in plaintext.
- Certificate not covering www or a subdomain.
- Enabling HSTS before everything is HTTPS (hard to undo).
- Letting a certificate expire and taking the site down.

**Go deeper**

- [Cloudflare SSL/TLS modes](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/)
- [Let’s Encrypt](https://letsencrypt.org/)
- [SSL Labs test](https://www.ssllabs.com/ssltest/)

**Definition of done:** Valid end-to-end HTTPS with enforced redirects and no mixed content.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/26-configure-https-ssl-end-to-end)

---

### 27. Build a repeatable one-command deploy

> **Goal:** Make shipping to production a single, reliable command or automatic on push.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** You can ship to production in minutes and roll back in seconds.

**Why this matters.** If deploying is scary or manual, you deploy rarely and dread it. A one-command (or auto) deploy lets you ship small changes constantly and safely — the heartbeat of a fast startup.

**Explain it like I'm 5.** You make shipping new code as easy as pressing one button (or automatic when you save to Git), so releasing improvements is quick and safe instead of scary and manual.

The number of times you ship is a leading indicator of how fast you learn, and the biggest thing suppressing ship frequency is a painful deploy. Your goal is to make going to production boring: one command, or better, automatic on push to main. For a managed platform this is largely free — connect the repo and every push deploys. For a self-managed server, write a deploy script that does the whole job: install dependencies, build, copy the build output to the live directory (or restart the service), and run a smoke test. A good script is idempotent, prints what it is doing, and fails loudly if any step breaks.

Bake in safety. The script should build first and only replace the live version if the build succeeds, so a broken build never takes down the site. Preserve production-only files (like a server config or environment file) during the copy so a deploy does not wipe them. Where possible, deploy atomically — build into a fresh folder and switch, so users never see a half-copied site. Finish with an automated smoke test that hits the live URL and checks for a 200 response, so you find out immediately if the deploy broke something rather than hearing it from a user.

Graduate to CI/CD as you grow. Move the same steps into a pipeline (GitHub Actions is the common default) so that pushing to main runs your lint, type-check and tests, and — if they pass — deploys automatically. This removes you as the single point of failure, enforces quality gates before anything reaches production, and gives every deploy a traceable log. Add the ability to roll back quickly (keep the previous build, or use your platform's instant rollback) because you will eventually ship a bad change and recovery speed matters more than never failing. Document the deploy and rollback procedure. Once shipping is one command and reversible, you will deploy many times a day without fear — which is exactly the cadence that lets a small team out-learn bigger, slower competitors.

**What this looks like in practice**

- A single “deploy” script or GitHub Action that builds and publishes on push.
- Rolling back to the previous version with one command if something breaks.
- A publish.ps1 that builds and copies files to the live server reliably.

**Checklist**

- [ ] Write a deploy that installs, builds, publishes and smoke-tests in one command.
- [ ] Build first; only swap in the new version if the build succeeds.
- [ ] Preserve production-only files (config/env) during deploys.
- [ ] Deploy atomically where possible (build fresh, then switch).
- [ ] Add an automated post-deploy smoke test against the live URL.
- [ ] Move the steps into CI (GitHub Actions) with quality gates on push.
- [ ] Ensure a fast rollback and document deploy + rollback.

**Tools & services**

- GitHub Actions / GitLab CI
- A deploy script (bash/PowerShell) or platform auto-deploy
- robocopy/rsync (file sync)
- curl (smoke test)

**Common pitfalls**

- Manual, error-prone deploys you dread and avoid.
- Replacing live files before confirming the build works.
- Deploys that wipe production config/env files.
- No rollback plan when a bad change ships.

**Go deeper**

- [GitHub Actions](https://docs.github.com/en/actions)
- [The Twelve-Factor App: build/release/run](https://12factor.net/build-release-run)
- [Continuous delivery basics](https://continuousdelivery.com/)

**Definition of done:** A one-command or automatic deploy with a smoke test and a rollback path.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/27-build-a-repeatable-one-command-deploy)

---

### 28. Set up staging vs production

> **Goal:** Create a separate environment to test changes safely before they hit real users.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** Risky changes are validated on staging before ever touching production.

**Why this matters.** Testing in production burns trust when it breaks. A staging environment lets you verify features, migrations and deploys against realistic conditions without risking live users or data.

**Explain it like I'm 5.** You keep a separate “practice” copy of your site (staging) where you try changes first, so real users never see half-finished or broken work. It’s a dress rehearsal before the real show.

Once real users arrive, breaking production becomes expensive — lost trust, lost data, lost momentum. A staging environment is a near-identical copy of production where you validate changes before promoting them. It does not need to be fancy; it needs to be separate. That means its own deployment (a staging subdomain like staging.yourdomain), its own database (never point staging at your production data), and its own copies of environment variables and secrets. The point is to catch the problems — a broken build, a bad migration, a misconfigured integration — where the only person affected is you.

Design the flow: develop locally, deploy to staging, verify, then promote to production. Keep staging as close to production as reasonably possible (same stack, same config shape, similar data volume) so tests are meaningful — subtle differences are how "it worked on staging" bugs happen. Seed staging with realistic but non-sensitive data (a scrubbed copy or generated seed data), and use test credentials for third-party services (Stripe test mode, sandbox APIs) so you never accidentally charge a real card or send a real email during testing. Make deploying to staging as easy as deploying to production — a flag or a separate command.

Use staging as a quality gate, especially for risky changes: database schema migrations, payment flows, auth changes and anything touching user data should always be exercised on staging first. Consider preview environments per pull request (many platforms generate these automatically) so every change gets its own throwaway URL to review — this is a superpower for catching issues and for showing work to teammates or early users. Keep environments in sync (same migrations applied, same config keys present) and document the promotion process. The discipline of "staging first for anything risky" is cheap insurance that keeps production stable as you accelerate, and stability is a feature your users feel even when they cannot name it.

**What this looks like in practice**

- A staging.yourbrand.com that mirrors production for testing.
- Testing a risky change on staging before promoting it to production.
- Separate staging and production databases so tests never touch real data.

**Checklist**

- [ ] Create a separate staging deployment (e.g. staging.yourdomain).
- [ ] Give staging its own database, env vars and secrets.
- [ ] Use sandbox/test credentials for third-party services on staging.
- [ ] Seed staging with realistic, non-sensitive data.
- [ ] Adopt the flow: local → staging → production.
- [ ] Always test migrations, payments and auth on staging first.
- [ ] Consider per-PR preview environments; document promotion.

**Tools & services**

- Platform preview/staging environments
- Separate DB instance for staging
- Stripe test mode / sandbox APIs
- Seed/anonymised data scripts

**Common pitfalls**

- Pointing staging at the production database.
- Staging drifting far from production, hiding real bugs.
- Using live third-party credentials in tests (real charges/emails).
- Skipping staging for "quick" risky changes.

**Go deeper**

- [The Twelve-Factor App: dev/prod parity](https://12factor.net/dev-prod-parity)
- [Vercel preview deployments](https://vercel.com/docs/deployments/preview-deployments)
- [Database migration best practices](https://martinfowler.com/articles/evodb.html)

**Definition of done:** A separate staging environment with its own data/secrets and a promotion flow.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/28-set-up-staging-vs-production)

---

### 29. Manage secrets & environment variables

> **Goal:** Keep API keys, passwords and tokens out of code and safely configured per environment.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** half a day · **Metric:** No secret in Git; leaked keys can be rotated quickly; least privilege applied.

**Why this matters.** Leaked secrets are one of the most common and damaging startup mistakes. Proper secret management prevents breaches, keeps environments separate, and makes rotation painless.

**Explain it like I'm 5.** You keep your passwords and secret keys out of your code and in a safe place, so they don’t leak on GitHub. It’s like not writing your PIN on your debit card.

Every real app has secrets — database URLs, API keys, payment and email credentials, signing keys — and how you handle them is a security decision you make on day one whether you realise it or not. The cardinal rule: secrets never live in source code or Git history. Instead, they are supplied to the app at runtime through environment variables, loaded from a secure source. Locally you use a .env file that is gitignored; in production you use your platform's secret store or environment configuration. Commit a .env.example that lists the variable names (not values) so anyone knows what to set.

Separate secrets per environment. Development, staging and production must have different credentials — you never want a bug in staging to touch production data, and you never want a leaked dev key to compromise real users. Use test-mode keys where providers offer them (Stripe, email) for non-production. For production secrets, prefer a proper secrets manager (your platform's environment settings, or a dedicated tool like Doppler, 1Password Secrets, AWS/GCP Secret Manager, or HashiCorp Vault) over plaintext files on a server, so access is controlled and audited. Restrict who and what can read them.

Plan for rotation and leakage, because both will happen. Enable secret scanning on your repo so an accidental commit is caught immediately; if a secret ever leaks, revoke and rotate it at once (deleting the commit is not enough — assume it is compromised the moment it is pushed). Set up the ability to rotate keys without downtime, and rotate periodically for the most sensitive ones. Give each service the least privilege it needs (a read-only key where possible, scoped tokens rather than god-mode keys). Document where each secret lives and who owns it. Treating secrets with this discipline from the start prevents the single tweet-worthy disaster — a leaked production database credential — that has ended more than one young company's credibility.

**What this looks like in practice**

- Storing API keys in environment variables, never committed to Git.
- Different secrets for staging vs production.
- A .env.example that documents needed keys without exposing real ones.

**Checklist**

- [ ] Load secrets from env vars; never hardcode them in source.
- [ ] Gitignore .env and commit a .env.example with names only.
- [ ] Use different credentials for dev, staging and production.
- [ ] Use test-mode keys for non-production services.
- [ ] Store production secrets in a manager, not plaintext on disk.
- [ ] Enable repo secret scanning; revoke+rotate any leaked key immediately.
- [ ] Apply least privilege and document ownership of each secret.

**Tools & services**

- dotenv / platform env settings
- Doppler / 1Password / Vault / cloud Secret Manager
- GitHub secret scanning
- Provider dashboards for key scoping

**Common pitfalls**

- Committing a .env or key to Git even once.
- Sharing one set of credentials across all environments.
- Plaintext secrets sitting on a server anyone can read.
- Not rotating a key after it leaks.

**Go deeper**

- [OWASP: secrets management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [Doppler](https://www.doppler.com/)
- [The Twelve-Factor App: config](https://12factor.net/config)

**Definition of done:** Secrets loaded from a secure store, separated by environment, with scanning + rotation.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/29-manage-secrets-and-environment-variables)

---

### 30. Configure backups & uptime monitoring

> **Goal:** Automate database/file backups and get alerted the moment the site goes down.
>
> **Phase:** 3 — Foundation & Infrastructure · **Difficulty:** Medium · **Estimate:** 1 day · **Metric:** You are alerted within minutes of downtime and can restore data on demand.

**Why this matters.** Data loss can be fatal to a startup and downtime silently costs users and trust. Backups and monitoring are cheap insurance that turn potential catastrophes into minor, recoverable incidents.

**Explain it like I'm 5.** You set up automatic backups of your data and an alarm that tells you the instant your site goes down, so problems don’t become disasters and you’re the first to know, not your users.

Two safety nets belong at the foundation, not bolted on after a disaster. The first is backups. Your database is often your most irreplaceable asset — losing it can end the company — so automate regular backups (daily at minimum, more often as you grow), store them off the primary server (a different provider or region), and critically, test that you can actually restore from them. An untested backup is a hope, not a backup; schedule a periodic restore drill. Keep a sensible retention window (e.g. daily for a week, weekly for a month) and back up user-uploaded files too, not just the database. If you use a managed database, enable its point-in-time recovery.

The second net is uptime monitoring. Set up an external service that pings your site every minute from outside your infrastructure and alerts you (email, SMS, Slack, phone) the moment it goes down — you want to hear about outages from a robot, not from angry users or a drop in signups. Monitor not just the homepage but a critical path (a health-check endpoint, the login page, an API route) so you catch partial failures. Add certificate-expiry monitoring so an expiring SSL cert never surprises you. Track basic performance too, since a site that is up but painfully slow is functionally down for many users.

Round it out with observability and a plan. Add error tracking (a later analytics task goes deeper) so you learn about broken features before users report them, and keep server/application logs you can search when something breaks. Write a short incident runbook: how to check status, how to roll back a bad deploy, how to restore a backup, and who to contact for each dependency (host, DNS, payments). None of this is exciting, and that is the point — the goal is that when something inevitably goes wrong at 2am, recovery is a calm, known procedure rather than a panicked scramble. Reliability compounds into reputation: users and investors both notice a product that simply stays up.

**What this looks like in practice**

- Nightly automated database backups you’ve actually tested restoring.
- An uptime monitor that texts you if the site returns an error.
- Off-site backup copies in case the main server dies.

**Checklist**

- [ ] Automate database backups (daily+), stored off the primary server.
- [ ] Back up user-uploaded files, not just the database.
- [ ] Do a periodic restore drill to prove backups actually work.
- [ ] Add external uptime monitoring on a critical path, with alerts.
- [ ] Monitor SSL certificate expiry and basic performance.
- [ ] Add error tracking and searchable logs.
- [ ] Write a short incident runbook (rollback, restore, contacts).

**Tools & services**

- Managed DB backups / pg_dump + object storage
- UptimeRobot / BetterStack / Pingdom
- Sentry (errors)
- A written incident runbook

**Common pitfalls**

- Backups that have never been test-restored.
- Backups stored only on the same server that could fail.
- Learning about downtime from users instead of a monitor.
- No runbook, so every incident is improvised under stress.

**Go deeper**

- [UptimeRobot](https://uptimerobot.com/)
- [BetterStack (uptime + logs)](https://betterstack.com/)
- [Google SRE: incident response](https://sre.google/sre-book/managing-incidents/)

**Definition of done:** Automated, test-restored backups and external uptime + cert monitoring with alerts.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/30-configure-backups-and-uptime-monitoring)

---

## Phase 4: MVP Build

_Scope ruthlessly and ship the one workflow that solves the validated problem. Model the data, build the happy path, seed it with believable data and get it in front of users._

**Outcome:** A working MVP a stranger can complete the core job on, unaided.

### 31. Scope the MVP ruthlessly

> **Goal:** Cut the product down to the single core workflow that delivers the validated value.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Medium · **Estimate:** 2–4 hours · **Metric:** The MVP does one core job and could ship in ~2–6 weeks.

**Why this matters.** The number-one reason MVPs miss their window is scope creep. Ruthless scoping gets you to real user feedback in weeks, not months, and forces clarity about what actually matters.

**Explain it like I'm 5.** You cut your product down to the one thing it must do really well, and ignore everything else for now. It’s making a great single-scoop cone instead of a mediocre ten-scoop tower.

MVP means minimum viable product, and both words matter. Minimum: the smallest thing you can build. Viable: it must actually deliver the core value — a broken toy is not an MVP. Your job here is to identify the one workflow that solves the validated problem and build only that, well. Everything else — settings pages, admin dashboards, that clever secondary feature, integrations you "might" need — is deferred. This is genuinely hard because every deferred feature feels important, but shipping a focused MVP in four weeks beats shipping a bloated one in four months, because the four weeks buys you real feedback that will change your plan anyway.

Use a forcing function. Write the single sentence: "A user can [core action] to [core outcome]." For a lead tool: "An agent can capture a WhatsApp lead and never lose it." Then list every feature you imagine, and sort each into must-have (the core sentence literally cannot happen without it), should-have (next), or later (everything else). Be brutal — most "must-haves" are actually "should-haves". A useful test: if you removed this feature, could a user still get the core value? If yes, it is not in the MVP. Aim for a feature list so short it feels uncomfortable.

Protect the scope once set. Write it down as an explicit MVP definition with an in-scope and out-of-scope list, and treat the out-of-scope list as sacred until launch — new ideas go into a backlog, not into this build. Set a target ship date and work backwards; a deadline is the best scope-control tool there is. Remember that an MVP is not the final product or a reflection of your ambition — it is an experiment to learn whether people will use the core thing. You will add the rest later, informed by evidence, once you know the core works. Founders who internalise this ship faster, learn faster, and waste far less time building features nobody ends up wanting.

**What this looks like in practice**

- Shipping just “book a class and pay” before adding chat, reviews and referrals.
- A “not now” list of tempting features parked for later.
- Instagram launching as just photo filters + sharing, nothing more.

**Checklist**

- [ ] Write the one-sentence core: "A user can [action] to [outcome]."
- [ ] List every imagined feature in one place.
- [ ] Sort each into must-have / should-have / later.
- [ ] Apply the test: without it, can users still get the core value?
- [ ] Trim must-haves until the list feels uncomfortably short.
- [ ] Write an explicit in-scope / out-of-scope MVP definition.
- [ ] Set a ship date and defer all new ideas to a backlog.

**Tools & services**

- Notion / Linear (backlog)
- A user story map
- MoSCoW prioritisation
- A calendar (ship date)

**Common pitfalls**

- Calling nice-to-haves "must-haves" and ballooning scope.
- Building admin/settings before the core value exists.
- No ship date, so the build drifts for months.
- Treating the MVP as the final product instead of an experiment.

**Go deeper**

- [Lean Startup: MVP](http://theleanstartup.com/principles)
- [Story mapping (Jeff Patton)](https://www.jpattonassociates.com/story-mapping/)
- [YC: how to build an MVP](https://www.ycombinator.com/library)

**Definition of done:** A written MVP definition with a tight in-scope list and a ship date.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/31-scope-the-mvp-ruthlessly)

---

### 32. Map the core user flow

> **Goal:** Diagram every step a user takes from arrival to achieving the core outcome.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Easy · **Estimate:** 3–6 hours · **Metric:** Shortest possible path to the aha moment, validated by a test walkthrough.

**Why this matters.** A flow map exposes hidden steps, friction and decisions before you build them. It aligns your effort on the happy path and prevents you from discovering a missing screen mid-build.

**Explain it like I'm 5.** You draw out every step a user takes from arriving to getting the win, like a treasure map. Seeing the whole path shows you where people might get lost or stuck.

Before writing feature code, map the journey. A user flow is the sequence of screens and actions from the moment someone arrives to the moment they get the core value — and back for repeat use. Sketch it as a simple diagram: entry point (landing page, ad, referral) → sign up / onboarding → the core action(s) → the payoff → what brings them back. Walk through it as if you were the user, narrating each click. This surfaces steps you would otherwise forget: the empty state before they have data, the confirmation after an action, the error when something fails, the path back in tomorrow.

Focus relentlessly on the happy path first — the ideal route where everything goes right — because that is what most users will do and it is where your MVP must shine. Count the steps and question each one: can you remove it, combine it, or defer it? Every extra step is a place people drop off. Pay special attention to the "aha moment": the point where the user first experiences the core value. Your entire flow should rush them toward that moment as fast as possible, because the sooner they feel the value, the more likely they are to stay. Map where that moment is and minimise everything before it.

Keep the map lightweight and use it as your build checklist. It does not need to be a polished diagram — boxes and arrows on a whiteboard, Excalidraw or FigJam are perfect. Annotate each screen with what it must do and what data it needs (this feeds directly into your data model and your build tasks). Identify the few branching points and decide, for the MVP, whether to handle each branch or defer it. Share the flow with a teammate or an ICP member and watch for "wait, how do I...?" moments — those are gaps. A clear flow turns a fuzzy "build the app" into a concrete, ordered list of screens to build, which makes the actual construction dramatically faster and less prone to rework.

**What this looks like in practice**

- A flow diagram: land → sign up → create first project → invite teammate.
- Marking the exact “aha moment” where the user first feels the value.
- Spotting an unnecessary step and deleting it to shorten the path.

**Checklist**

- [ ] Diagram entry → sign up → core action → payoff → return.
- [ ] Walk it as the user, narrating every click.
- [ ] Mark the "aha moment" and minimise everything before it.
- [ ] Count steps; remove, combine or defer each one you can.
- [ ] Note required data per screen (feeds the data model).
- [ ] Decide which branches to handle vs defer for the MVP.
- [ ] Test the flow with someone and fix every "how do I?" gap.

**Tools & services**

- Excalidraw / FigJam / Whimsical
- Figma (wireframes)
- Paper + pen
- Your MVP scope doc

**Common pitfalls**

- Designing screens in isolation with no connecting flow.
- Burying the aha moment behind long onboarding.
- Forgetting empty, error and return-visit states.
- Too many steps to the core value.

**Go deeper**

- [NN/g: user flows](https://www.nngroup.com/articles/)
- [Excalidraw](https://excalidraw.com/)
- [Reforge: the aha moment](https://www.reforge.com/blog)

**Definition of done:** A user-flow map from entry to core value, annotated with data and states.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/32-map-the-core-user-flow)

---

### 33. Design the data model & schema

> **Goal:** Define the entities, relationships and fields your product needs, and set up migrations.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** Schema supports the full user flow and evolves via versioned migrations.

**Why this matters.** The data model is the skeleton of your app. Getting the core entities and relationships right early avoids painful rewrites, and migrations let the schema evolve safely as you learn.

**Explain it like I'm 5.** You decide what information your app stores and how the pieces relate — users, orders, messages — before building. It’s drawing the blueprint before pouring the foundation.

Your data model is the foundation the whole product stands on, so design it deliberately even though you will evolve it. From your user flow, extract the core entities (nouns: User, Lead, Message, Project, Order) and the relationships between them (a User has many Leads; a Lead has many Messages). For each entity define its fields, types and constraints (required, unique, defaults), and the keys that connect them. A relational database like Postgres is a strong default because relationships, constraints and queries are its native strength, and most products are fundamentally relational.

Model for correctness first, optimisation later. Normalise sensibly so each fact lives in one place (avoid duplicating data that then drifts out of sync), add foreign keys to enforce relationships, and add unique constraints and not-null where the business rule demands it — let the database protect your data integrity rather than relying on application code alone. Include the boring-but-essential fields on every table: a primary key, created-at and updated-at timestamps, and (for user data) an owner reference for access control. Think ahead about a few things that are painful to add later: soft-deletes if you need to recover records, and multi-tenancy scoping if different users' data must be isolated.

Manage schema changes with migrations from day one. Never edit the production database by hand — use a migration tool (Prisma, Drizzle, Rails/Django migrations, Flyway) so every schema change is a versioned, repeatable script that runs the same on local, staging and production. This is what lets you evolve the model safely as you learn, and lets a teammate reproduce your schema exactly. Test migrations on staging before production (especially destructive ones), and pair schema changes with a backup. Document the model with a simple diagram so anyone can understand how the data fits together. A clean, migration-managed schema is quiet infrastructure that makes every feature you build on top of it faster and safer.

**What this looks like in practice**

- Tables for users, projects and tasks with the right relationships.
- Using migrations so schema changes are tracked and repeatable.
- Deciding early that each task belongs to one project and one owner.

**Checklist**

- [ ] Extract core entities and relationships from the user flow.
- [ ] Define fields, types, constraints and keys for each entity.
- [ ] Normalise sensibly; enforce integrity with FKs, unique, not-null.
- [ ] Add id, created-at, updated-at and owner refs to every table.
- [ ] Plan ahead for soft-deletes and tenant isolation if needed.
- [ ] Use a migration tool for all schema changes (no manual edits).
- [ ] Test migrations on staging with a backup; document with a diagram.

**Tools & services**

- PostgreSQL
- Prisma / Drizzle / your ORM
- dbdiagram.io / DrawSQL
- Migration tooling

**Common pitfalls**

- Hand-editing production schema instead of using migrations.
- No constraints, so bad/duplicate data creeps in.
- Forgetting timestamps and owner fields you will need.
- Over-normalising or over-optimising before you have users.

**Go deeper**

- [Prisma data modelling](https://www.prisma.io/docs/orm/prisma-schema)
- [dbdiagram.io](https://dbdiagram.io/)
- [Use The Index, Luke (SQL/indexes)](https://use-the-index-luke.com/)

**Definition of done:** A migration-managed schema with core entities, constraints and a diagram.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/33-design-the-data-model-and-schema)

---

### 34. Build the core feature (happy path)

> **Goal:** Implement the one workflow end to end so a user can complete the core job.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Hard · **Estimate:** 1–3 weeks · **Metric:** A non-technical person finishes the core job with no explanation.

**Why this matters.** This is the heart of the MVP. Everything before it was preparation; a working core feature is the first moment your product actually delivers value to a real person.

**Explain it like I'm 5.** You build the main feature so a user can actually go from start to finish and get the result — the “happy path.” This is the heart of the product working for real.

Now you build the thing. With scope, flow and schema defined, implement the core workflow end to end — from the user's action through the backend and database and back to a visible result. Build the happy path first: the version where the user does the expected thing and it works. Resist perfecting edge cases and styling at this stage; get a working slice that goes all the way through the system, because an end-to-end slice teaches you far more than a beautiful front end with no backend. Wire real data through it as early as possible so you are testing the actual system, not a mock.

Work in thin vertical slices rather than building whole layers. Instead of "build the entire backend, then the entire frontend," build one complete capability at a time (create a lead → see it in the list → open it), each fully working before the next. This keeps you in a constant state of "something works," makes progress visible, and surfaces integration problems early when they are cheap to fix. Commit frequently and deploy to staging often so you are always looking at the real thing. Lean on your managed services and libraries — do not rebuild auth, file upload or payments from scratch when a battle-tested option exists.

Keep quality pragmatic but not sloppy. Write clean, readable code because you will be changing it constantly, but do not gold-plate features that might get cut. Handle the obvious failure of each step at least minimally (what if the save fails?) even before the full edge-case pass in a later task. Get the core feature in front of yourself as a user daily and use it for real — friction you feel is friction your users will feel. The milestone for this task is concrete and powerful: a person who is not you can sit down and complete the core job without you explaining anything. When that is true, you have an MVP that does something real, and everything after this is refinement and growth.

**What this looks like in practice**

- A user can create an account, add data, and see the core output end to end.
- The one workflow from your user-flow map, fully functional.
- A to-do app where you can actually add, complete and delete a task.

**Checklist**

- [ ] Build the happy-path workflow end to end (UI → backend → DB → result).
- [ ] Wire real data through early instead of mocks.
- [ ] Work in thin vertical slices, each fully working before the next.
- [ ] Reuse managed services/libraries for auth, uploads, payments.
- [ ] Handle the obvious failure of each step at least minimally.
- [ ] Commit frequently and deploy to staging often.
- [ ] Use the feature yourself daily and fix the friction you feel.

**Tools & services**

- Your chosen framework
- Your ORM + database
- Managed services (auth/payments/storage)
- Staging environment

**Common pitfalls**

- Building entire layers instead of end-to-end slices.
- Polishing styling/edge cases before the core works.
- Rebuilding commodity infrastructure from scratch.
- Never using your own product as a real user.

**Go deeper**

- [Shape Up (building in slices)](https://basecamp.com/shapeup)
- [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
- [YC: move fast, ship](https://www.ycombinator.com/library)

**Definition of done:** A working core feature a stranger can complete unaided.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/34-build-the-core-feature-happy-path)

---

### 35. Seed realistic demo data

> **Goal:** Populate the app with believable data so it looks alive and is testable.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Easy · **Estimate:** half a day · **Metric:** The app looks alive and holds up under realistic data volume.

**Why this matters.** An empty app is impossible to evaluate and looks dead in demos. Realistic seed data lets you test at scale, design good empty and full states, and show the product convincingly.

**Explain it like I'm 5.** You fill the app with realistic pretend data so it looks alive and you can test it — like putting props on a stage set instead of leaving it empty.

An app with no data is deceptively misleading: everything looks fine with one perfect record, then falls apart with realistic volume and variety. Seed data solves this. Write a script that populates your database with believable records — real-sounding names, plausible values, varied states (active, pending, completed), a range of quantities, and the edge cases that occur in the wild (very long names, empty optional fields, unusual characters). Generate it deterministically (a fixed seed) so it is reproducible, and make it easy to reset so you can wipe and re-seed a clean state anytime.

Realistic data does three jobs. First, it lets you test the product under lifelike conditions — pagination with hundreds of rows, sorting and filtering that actually have something to sort, performance with real volume — catching problems an empty database hides. Second, it powers convincing demos and screenshots: a product shown full of relevant, believable content feels real and valuable, while an empty one feels like a prototype. Match the seed data to your ICP (if you serve Kenyan agents, seed Kenyan names, locations and shilling amounts) so demos resonate. Third, it helps you design the full state properly, not just the empty one.

Keep seed data separate from real data and safe. Never seed a fake user into production that could confuse metrics, and never mix demo data with paying customers' data — seed staging and local, and gate any demo mode clearly. Consider a "demo account" or "sandbox" mode that new visitors can explore with pre-filled data before signing up, which lowers the barrier to experiencing value (a powerful conversion tool later). If you generate data with a library (Faker and friends) or an AI, still review it for anything embarrassing before a demo. Good seed data is a small investment that makes your product testable, demoable and credible — and it is the difference between a demo that lands and one that falls flat because every screen is empty.

**What this looks like in practice**

- A seed script that creates believable users, projects and history.
- Screenshots that look real because the demo data isn’t “test test test.”
- Enough sample rows to test sorting, search and pagination.

**Checklist**

- [ ] Write a deterministic seed script (fixed seed, reproducible).
- [ ] Include varied states, quantities and real-world edge cases.
- [ ] Match the data to your ICP (names, locations, currency).
- [ ] Make reset + re-seed a one-command operation.
- [ ] Test pagination, sorting, filtering and performance at volume.
- [ ] Keep seed data out of production; gate any demo mode.
- [ ] Consider a sandbox/demo account for prospects to explore.

**Tools & services**

- Faker.js / Python Faker
- A seed script + reset command
- Your ORM’s seeding tools
- AI-generated but reviewed data

**Common pitfalls**

- One perfect record that hides real-world breakage.
- Generic data that makes demos feel fake.
- Seeding fake data into production and polluting metrics.
- Non-reproducible seeds you cannot reset cleanly.

**Go deeper**

- [Faker.js](https://fakerjs.dev/)
- [Prisma seeding](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding)
- [Designing empty & full states](https://www.nngroup.com/articles/)

**Definition of done:** A reproducible seed script producing believable, ICP-matched data for local/staging.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/35-seed-realistic-demo-data)

---

### 36. Handle edge cases, errors & validation

> **Goal:** Make the product robust when inputs are bad, actions fail or the network drops.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Medium · **Estimate:** 3–5 days · **Metric:** No dead-ends or crashes when a user does the wrong thing.

**Why this matters.** Users will do unexpected things and systems will fail. Graceful validation and error handling is the difference between a product that feels trustworthy and one that feels broken.

**Explain it like I'm 5.** You make the app behave nicely when things go wrong — bad input, a failed save, no internet — instead of crashing or losing work. It’s adding guardrails so users don’t fall off the road.

Once the happy path works, harden it. Real users do not behave like you did in testing: they submit empty forms, paste weird characters, double-click buttons, lose connection mid-action, and try things in the wrong order. Each of these is a chance for your product to either handle it gracefully or fall over embarrassingly. Go through your core flow and deliberately try to break it — submit invalid data, kill the network, refresh mid-action — and fix what breaks. This adversarial pass is where a demo-quality prototype becomes a product people can rely on.

Validate on both sides and fail helpfully. Validate input on the client for instant feedback (a red field with a clear message beats a silent failure), and always validate again on the server, because client validation can be bypassed and server validation is your real defence for data integrity and security. Write error messages a human understands ("Please enter a valid phone number" not "Error 422") and, where possible, tell the user how to fix it. Handle the states every action can be in: loading (show progress, disable the button to prevent double-submits), success (confirm it worked), and failure (explain and offer a retry). Never leave the user staring at a frozen screen wondering what happened.

Protect the system, not just the UX. Guard against the failures that corrupt data or crash the app: catch and handle exceptions so one bad request does not take everything down, use database transactions so multi-step operations either fully succeed or fully roll back, and enforce constraints so invalid states cannot be saved. Consider the security-adjacent cases here too — reject oversized uploads, sanitise inputs, and never trust data from the client. Log errors (with an error-tracking tool) so you learn about failures you did not anticipate. You cannot handle every edge case in an MVP, so prioritise by likelihood and severity: the common ones and the dangerous ones first. The result is a product that feels solid — and "feels solid" is a quality users sense immediately and reward with trust.

**What this looks like in practice**

- Friendly messages like “That email looks off — check it?” instead of a crash.
- Retrying or saving a draft when the network drops mid-action.
- Blocking a form submit until required fields are valid.

**Checklist**

- [ ] Do an adversarial pass: bad input, no network, double-clicks, refresh.
- [ ] Validate on the client for feedback and on the server for safety.
- [ ] Write human, actionable error messages.
- [ ] Handle loading, success and failure states for every action.
- [ ] Disable buttons during submit to prevent double actions.
- [ ] Use transactions/constraints so failures roll back cleanly.
- [ ] Log errors to a tracker; prioritise common and dangerous cases.

**Tools & services**

- Zod / Yup / server-side validation
- Sentry (error tracking)
- Toast/notification UI for feedback
- Database transactions

**Common pitfalls**

- Trusting client-side validation alone.
- Cryptic error codes users cannot act on.
- Frozen UI with no loading/failure feedback.
- One unhandled exception crashing the whole app.

**Go deeper**

- [NN/g: error message guidelines](https://www.nngroup.com/articles/error-message-guidelines/)
- [OWASP input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [Zod validation](https://zod.dev/)

**Definition of done:** A core flow that validates input, handles failures gracefully and cannot be easily broken.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/36-handle-edge-cases-errors-and-validation)

---

### 37. Make it responsive & mobile-first

> **Goal:** Ensure the product works beautifully on phones, tablets and desktops.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Medium · **Estimate:** 3–5 days · **Metric:** Core flow is fully usable and fast on a mid-range phone.

**Why this matters.** Most of your traffic — especially in emerging markets — will be mobile. A product that breaks on a phone loses the majority of users before they ever experience its value.

**Explain it like I'm 5.** You make sure your app looks and works great on phones, not just big screens — because most people will visit on their phone. It’s making sure the toy works whether it’s big or pocket-sized.

For most products today, and overwhelmingly in markets like Kenya, the majority of users will first meet your product on a phone. If it is awkward, cramped or broken on mobile, you lose them regardless of how good the desktop experience is. Design and build mobile-first: start from the small screen, where space is scarce and priorities must be clear, then progressively enhance for larger screens. This constraint actually improves your product, because it forces you to focus on what matters and cut clutter.

Get the fundamentals right. Use responsive layouts (fluid grids, flexbox, sensible breakpoints) so content reflows rather than overflowing or requiring horizontal scroll. Make tap targets large enough for thumbs (around 44px) and space them so users do not mis-tap. Ensure text is readable without zooming and inputs are easy to use on a touch keyboard (correct input types bring up the right keyboard). Watch out for the classics: fixed-width elements that break the viewport, modals that do not fit, tables that overflow, and hover-only interactions that do not exist on touch. Test real interactions — scrolling, tapping, typing, rotating — not just how it looks.

Test on real devices and real conditions, not just a resized browser window. Use your phone (and ideally a couple of different ones — a small Android, an iPhone) to walk the full core flow. Check performance on a mid-range device and a throttled connection, because your users are not all on flagship phones and fast Wi-Fi; a heavy site that is snappy on your laptop can be painfully slow on a $150 Android over 3G. Optimise images, avoid huge bundles, and keep the critical path light (a later performance task goes deeper). Do not neglect tablet and desktop either — but if you have to choose where to spend polish, spend it where your users are. A product that feels native and fast on a phone captures the audience most of your competitors are quietly losing.

**What this looks like in practice**

- Designing mobile-first, then scaling up to tablet and desktop.
- Tappable buttons and readable text without pinch-zooming.
- Testing on a real phone, not just a shrunk browser window.

**Checklist**

- [ ] Design and build mobile-first, then enhance for larger screens.
- [ ] Use responsive layouts; eliminate horizontal scroll and overflow.
- [ ] Make tap targets ~44px and inputs touch-friendly (right keyboards).
- [ ] Remove hover-only interactions that fail on touch.
- [ ] Walk the full core flow on real phones (small Android + iPhone).
- [ ] Test on a mid-range device and a throttled connection.
- [ ] Optimise images and bundle size for mobile performance.

**Tools & services**

- CSS fl/grid + media queries / Tailwind
- Browser device emulation + throttling
- Real devices (Android + iOS)
- Lighthouse (mobile)

**Common pitfalls**

- Designing desktop-first and cramming it onto mobile.
- Tiny tap targets and hover-only menus.
- Testing only in a resized desktop browser.
- A heavy site that crawls on mid-range phones and slow networks.

**Go deeper**

- [web.dev: responsive design](https://web.dev/responsive-web-design-basics/)
- [Material tap target sizes](https://m3.material.io/foundations/designing/structure)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

**Definition of done:** A product that completes the core flow smoothly on phones, tablets and desktops.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/37-make-it-responsive-and-mobile-first)

---

### 38. Add onboarding & empty states

> **Goal:** Guide new users to the aha moment and make empty screens helpful, not dead ends.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Medium · **Estimate:** 3–5 days · **Metric:** Rising activation rate (% of sign-ups reaching core value).

**Why this matters.** First impressions decide whether users stick. Good onboarding and empty states convert curious sign-ups into activated users who experience the core value quickly.

**Explain it like I'm 5.** You gently guide brand-new users to their first win and make empty screens helpful instead of blank and confusing. It’s greeting a guest and showing them where things are.

A new user arriving at your product knows nothing about it, and the first two minutes decide whether they activate or vanish. Onboarding is the guided path from "just signed up" to "just experienced the core value" (the aha moment). Design it to reach that value as fast as possible with as little effort as possible from the user. Reduce setup friction: ask only for what you truly need up front, prefill or default everything you can, and defer optional configuration. Every field and step before the aha moment is a place people quit, so ruthlessly minimise them.

Empty states are the most-overlooked, highest-leverage screens in a new product, because every new user starts with everything empty. A blank list saying nothing is a dead end; a good empty state explains what this screen is for, why it is empty, and gives one obvious action to fill it ("No leads yet — add your first lead" with a button). Turn empty states into onboarding: they are the perfect place to teach the product in context, at the exact moment the user needs to act. Consider seeding a new account with a sample record or an interactive example so the screen is never truly empty and the user immediately sees what "full" looks like.

Choose onboarding techniques that fit and measure whether they work. Options include a short welcome/setup flow, inline tooltips or a product tour, a checklist of first tasks that drives progress, and contextual empty-state prompts. Prefer "show, don't tell" and learning-by-doing over long tutorials nobody reads; the best onboarding gets the user doing the core action almost immediately. Instrument activation (the % of sign-ups who reach the aha moment) so you can measure and improve it — this single metric is one of the strongest predictors of retention and growth, and it is what turns your eventual 10,000 sign-ups into 10,000 real users. Iterate on the drop-off points until activation climbs.

**What this looks like in practice**

- A short welcome checklist that leads to the “aha” moment.
- An empty state that says “No projects yet — create your first one” with a button.
- Pre-filled sample content new users can play with immediately.

**Checklist**

- [ ] Map the shortest path from sign-up to the aha moment.
- [ ] Cut onboarding fields to the essential minimum; prefill and default.
- [ ] Design every empty state to explain + offer one clear action.
- [ ] Seed new accounts with a sample record or interactive example.
- [ ] Prefer learning-by-doing over long tutorials.
- [ ] Instrument activation (% of sign-ups reaching the aha moment).
- [ ] Find drop-off points and iterate to raise activation.

**Tools & services**

- Onboarding UI (checklists, tooltips)
- Userflow / Intro.js (tours)
- Analytics (activation funnel)
- Sample-data seeding

**Common pitfalls**

- Asking for too much before showing any value.
- Blank empty states that give no next step.
- Long tutorials users skip instead of learning by doing.
- Not measuring activation, so you cannot improve it.

**Go deeper**

- [Reforge / Growth: activation](https://www.reforge.com/blog)
- [NN/g: onboarding & empty states](https://www.nngroup.com/articles/)
- [Useronboard teardowns](https://www.useronboard.com/)

**Definition of done:** An onboarding flow and helpful empty states that drive users to the aha moment.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/38-add-onboarding-and-empty-states)

---

### 39. Write tests for critical paths

> **Goal:** Cover the money-making, data-critical flows with automated tests you can trust.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Medium · **Estimate:** 3–5 days · **Metric:** Critical-path regressions are caught by tests before reaching users.

**Why this matters.** You will change code constantly; tests on the critical paths catch regressions before users do. You do not need 100% coverage — you need confidence that the important things still work.

**Explain it like I'm 5.** You write little automatic checks that make sure the most important parts of your app keep working, so future changes don’t secretly break them. It’s a smoke alarm for your code.

Startups do not need exhaustive test suites, but they do need a safety net around the flows that matter most — the ones where a silent break costs money, corrupts data, or destroys trust. Think: sign-up and login, the core action, payments, and anything that writes to the database. As you ship faster and refactor more, these tests are what let you move quickly without breaking things you cannot afford to break. The goal is confidence, not a coverage percentage: a handful of well-chosen tests on critical paths is worth more than hundreds of tests on trivial code.

Use the right kind of test for each job. Unit tests verify individual functions (especially tricky logic — pricing calculations, validation, date math) and are fast and cheap. Integration tests verify that pieces work together (an API route actually writes the right row to the database). End-to-end tests drive the real app like a user (sign up, do the core action, see the result) and give the highest confidence that the whole system works, though they are slower to write and run. For an MVP, a small number of end-to-end tests over your critical flows plus unit tests on your riskiest logic is a pragmatic, high-value mix.

Make tests part of the workflow, not an afterthought. Run them locally before pushing and wire them into CI so every pull request is validated automatically and a failing test blocks a broken deploy. When a bug slips through, write a test that reproduces it before you fix it — this "regression test" ensures the same bug never returns and steadily grows your suite around real failure points. Keep tests fast and reliable; flaky tests that fail randomly get ignored, which defeats the purpose. You will not (and should not) test everything at MVP stage, but a trustworthy net around the critical paths is what lets you keep shipping confidently as complexity grows — and that sustained pace is a competitive advantage.

**What this looks like in practice**

- Tests covering sign-up, checkout and anything touching money or data.
- A test that fails loudly if the payment flow breaks.
- Running the test suite automatically before every deploy.

**Checklist**

- [ ] List the critical paths (auth, core action, payments, DB writes).
- [ ] Write end-to-end tests over those flows.
- [ ] Add unit tests for your riskiest logic (pricing, validation, dates).
- [ ] Add integration tests for key API/DB interactions.
- [ ] Run tests locally and enforce them in CI on every PR.
- [ ] Write a regression test whenever a bug is found, before fixing it.
- [ ] Keep the suite fast and non-flaky so it is actually used.

**Tools & services**

- Vitest / Jest (unit)
- Playwright / Cypress (E2E)
- Supertest / API test tools
- GitHub Actions (CI)

**Common pitfalls**

- Chasing coverage % on trivial code while critical paths are untested.
- No CI, so tests are written but never run.
- Flaky tests that get ignored.
- Not adding a regression test after fixing a bug.

**Go deeper**

- [Playwright](https://playwright.dev/)
- [Testing Trophy (Kent C. Dodds)](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Vitest](https://vitest.dev/)

**Definition of done:** Automated tests covering critical paths, running in CI on every push.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/39-write-tests-for-critical-paths)

---

### 40. Dogfood & run a private alpha

> **Goal:** Use the product yourself daily and put it in front of a handful of real target users.
>
> **Phase:** 4 — MVP Build · **Difficulty:** Medium · **Estimate:** 1–2 weeks · **Metric:** Alpha users complete the core job unaided and return without prompting.

**Why this matters.** Nothing reveals problems like real usage. Dogfooding and a small private alpha surface the friction, bugs and gaps you cannot see from the inside — before a public launch amplifies them.

**Explain it like I'm 5.** You use your own product every day and give it to a few real target users to try privately. Living with it reveals rough edges you can’t see from the outside.

Before you launch publicly, get the product into the hands of real users under low-stakes conditions. Start with dogfooding: use your own product every day for its actual purpose, not as the developer poking at it, but as a user trying to get the core job done. This is the fastest way to feel the friction — the extra click, the confusing label, the slow screen, the missing feature you assumed you did not need. If you would not choose to use your own product over the alternative, neither will your users; fix what annoys you first.

Then recruit a small private alpha — five to fifteen people from your ICP (your interviewees and waitlist are perfect). Keep it small and hands-on: the goal is deep qualitative feedback, not scale. Give them a clear starting task ("try to do X") and then watch, ideally over a screen-share, without helping. The moments they hesitate, misclick, or ask "how do I...?" are pure gold — they reveal exactly where your product is confusing, and you cannot see these from the inside. Resist the urge to jump in and explain; if you have to explain it, that is a bug in the product, not the user. Take notes on every stumble.

Turn observations into a prioritised fix list and act on it fast. Separate the signal from the noise: a feature one person wants is a data point; a problem five people hit is a priority. Fix the activation-killers (anything blocking people from reaching the aha moment) first, then the frequent friction, then the nice-to-haves. Watch whether alpha users come back unprompted — repeat, voluntary usage is the single strongest signal that you have built something valuable and are ready to launch; if they try it once and never return, dig into why before you scale. This tight loop of use → observe → fix, run with real people at small scale, is what makes your eventual public launch land instead of flopping.

**What this looks like in practice**

- The founder running their own workflow entirely on the product.
- A private alpha with 5–10 friendly users who report bugs.
- A shared channel where alpha testers post feedback daily.

**Checklist**

- [ ] Use your own product daily for its real purpose (dogfood).
- [ ] Fix the friction you personally feel first.
- [ ] Recruit 5–15 ICP alpha users from interviews/waitlist.
- [ ] Give a clear task and watch (screen-share) without helping.
- [ ] Log every hesitation, misclick and "how do I?" moment.
- [ ] Prioritise fixes: activation-blockers, then frequent friction.
- [ ] Track whether alpha users return unprompted.

**Tools & services**

- Screen-share (Zoom/Meet)
- A feedback log / Linear
- Session replay (later phase)
- Your waitlist + interviewees

**Common pitfalls**

- Launching publicly before any real user has tried it.
- Helping users during tests, hiding the real friction.
- Chasing one-off feature requests over common blockers.
- Ignoring that alpha users tried it once and never came back.

**Go deeper**

- [YC: do things that don’t scale](http://paulgraham.com/ds.html)
- [Rooted in usability testing (NN/g)](https://www.nngroup.com/articles/usability-testing-101/)
- [Superhuman PMF engine](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/)

**Definition of done:** A prioritised fix list from real alpha usage, with activation-blockers resolved.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/40-dogfood-and-run-a-private-alpha)

---

## Phase 5: Design & Quality Bar

_Raise the craft: a hero that converts, a consistent design system, responsive layouts, empty/loading/error states, accessibility and speed. Quality is a feature._

**Outcome:** A polished, fast, accessible product you are proud to demo to anyone.

### 41. Build a hero section that converts

> **Goal:** Craft a homepage hero as strong as afrosoftware.com, dj24.com or petedigital.com.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Visitors grasp what you do in under 5 seconds; hero CTA click-through rises.

**Why this matters.** The hero is the first thing visitors see and decides in seconds whether they stay. A confident, clear, beautiful hero is the highest-leverage design work on your entire site.

**Explain it like I'm 5.** The hero is the first big thing people see at the top of your homepage. You make it so clear and appealing that visitors instantly understand what you do and want to try it — like a movie poster that makes you want to watch.

Visitors decide whether to keep reading or bounce within a few seconds, and the hero — the top section above the fold — is what they judge. A great hero communicates, in one glance: what this is, who it is for, why it is better, and what to do next. Study heroes you admire (afrosoftware.com, dj24.com, petedigital.com) and notice the common ingredients: a bold, benefit-led headline (your value proposition), a one-line supporting subhead, a single prominent primary call to action, a strong supporting visual (product shot, illustration or subtle motion), and often a slice of social proof. The feel is confident and spacious, frequently on a dark, gradient background that reads as premium.

Nail the copy first, because design cannot rescue a vague message. The headline should lead with the outcome the customer wants, in their words, not with your technology. Keep it short and specific enough that a competitor could not paste it onto their own site. The subhead adds the how or the who. The primary CTA should be a clear, action-led verb ("Start free", "Get early access") and there should be one obvious primary action — competing CTAs dilute clicks. Add a secondary, lower-emphasis action (a demo, "how it works") for people who need more before committing.

Then make it look funded. Use your brand tokens for a cohesive palette and type; give the section room to breathe with generous whitespace; and use a high-quality visual — a crisp product screenshot (dressed up in a device frame or browser chrome), a custom illustration, or restrained animation that draws the eye without distracting. A subtle gradient, a soft glow, and a single tasteful motion accent go a long way toward the "expensive" feel. Ensure it is flawless on mobile (most visitors), loads fast (the hero image must not be a heavyweight that delays first paint), and puts the CTA within thumb reach. Finally, treat the hero as a living, testable asset: it is the first thing to A/B test for conversion later. A hero that instantly communicates value and looks credible sets the tone for the entire product and directly lifts every downstream conversion.

**What this looks like in practice**

- A bold headline, one-line subhead, a screenshot, and one obvious button.
- Copying the clarity (not the pixels) of afrosoftware.com or dj24.com heroes.
- A/B testing two hero headlines to see which gets more sign-ups.

**Checklist**

- [ ] Write a benefit-led headline (your value prop, in the customer’s words).
- [ ] Add a one-line subhead and a single prominent primary CTA.
- [ ] Add a low-emphasis secondary action for the not-yet-ready.
- [ ] Use brand tokens, generous whitespace and a premium dark/gradient feel.
- [ ] Add a high-quality visual (product shot, illustration or subtle motion).
- [ ] Perfect it on mobile with the CTA in thumb reach; keep it fast.
- [ ] Add light social proof and plan to A/B test the hero later.

**Tools & services**

- Figma
- Your brand tokens
- Device mockup/screenshot tools
- GSAP / Framer Motion (subtle motion)

**Common pitfalls**

- A vague or feature-led headline no one understands.
- Multiple competing CTAs that dilute action.
- A heavy hero image that delays first paint.
- A hero that looks great on desktop but breaks on mobile.

**Go deeper**

- [Julian Shapiro: landing pages](https://www.julian.com/guide/growth/landing-pages)
- [Land-book (hero inspiration)](https://land-book.com/)
- [Refactoring UI](https://www.refactoringui.com/)

**Definition of done:** A hero that clearly states value, looks premium, and converts on mobile and desktop.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/41-build-a-hero-section-that-converts)

---

### 42. Establish a design system / component library

> **Goal:** Build reusable, consistent UI components driven by your design tokens.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Medium · **Estimate:** 3–6 days · **Metric:** New screens are built from consistent components in a fraction of the time.

**Why this matters.** A component library makes every screen consistent, speeds up building, and prevents the visual drift that makes products look amateur. Design once, reuse everywhere.

**Explain it like I'm 5.** You build a set of reusable UI pieces (buttons, cards, inputs) that all look the same, so every new page is fast to build and automatically consistent. It’s a box of matching LEGO bricks.

As your product grows past a few screens, inconsistency creeps in — three shades of "primary" blue, four button styles, buttons that behave differently. A design system prevents this by defining a set of reusable components (buttons, inputs, cards, modals, tables, toasts, badges) built on your design tokens, so every instance looks and behaves the same. This is not enterprise over-engineering; even a small, practical component set pays for itself quickly by making new screens faster to build and automatically on-brand. You design and solve each component once, then compose screens from trusted building blocks.

Build it pragmatically. Start from your tokens (colours, spacing, radii, type, shadows) so components inherit the brand automatically. Create the handful of components you actually use, with their states designed in (a button has default, hover, active, focus, loading and disabled states; an input has default, focus, error and disabled). Consider standing on the shoulders of a headless or styled component library (shadcn/ui, Radix, Headless UI, Chakra, MUI) so you get accessibility and behaviour for free and only style to your brand — reinventing accessible dropdowns and modals from scratch is a poor use of startup time. Keep a single source of truth so a change propagates everywhere.

Document and enforce it lightly. A simple living style guide page (or a tool like Storybook) that shows each component and its variants helps you and any collaborator reuse rather than reinvent, and catches inconsistencies at a glance. Establish a few conventions — spacing scale, when to use which button, how forms are laid out — so the product feels like one coherent thing rather than a patchwork. The payoff is compounding: the tenth screen you build is far faster and more consistent than the first, onboarding a designer or developer becomes trivial, and your product gains the polished, unified feel that signals quality. A good design system is quietly one of the biggest accelerators of both speed and craft.

**What this looks like in practice**

- A component library where “Button” is defined once and used everywhere.
- Design tokens driving colours and spacing across all components.
- A Storybook page showing every component and its states.

**Checklist**

- [ ] Build core components (button, input, card, modal, table, toast, badge).
- [ ] Drive them from your design tokens for automatic brand consistency.
- [ ] Design every state (hover, focus, active, loading, disabled, error).
- [ ] Adopt a headless/styled base library for behaviour + a11y.
- [ ] Keep a single source of truth so changes propagate everywhere.
- [ ] Document components in a style guide or Storybook.
- [ ] Set conventions (spacing, which button when, form layout).

**Tools & services**

- shadcn/ui / Radix / Headless UI / Chakra / MUI
- Storybook
- Your token/theme file
- Figma component library

**Common pitfalls**

- One-off styles per screen causing visual drift.
- Reinventing accessible components instead of using a base library.
- Missing states (no focus/disabled/loading), which feel broken.
- No documentation, so components get duplicated.

**Go deeper**

- [shadcn/ui](https://ui.shadcn.com/)
- [Radix Primitives](https://www.radix-ui.com/primitives)
- [Storybook](https://storybook.js.org/)

**Definition of done:** A reusable, token-driven component library with documented states.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/42-establish-a-design-system-component-library)

---

### 43. Add tasteful micro-interactions & motion

> **Goal:** Use subtle animation and feedback to make the product feel alive and premium.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** The product feels crafted and responsive without motion getting in the way.

**Why this matters.** Well-judged motion communicates state, guides attention and adds delight — the difference between a static page and a product that feels crafted. Overdone, it distracts; done right, it elevates.

**Explain it like I'm 5.** You add small, tasteful animations and feedback — a button that responds, a smooth transition — so the app feels alive and premium instead of stiff. Little touches make it feel expensive.

Motion is a powerful, often underused tool for perceived quality. Small, purposeful animations make a product feel responsive and alive: a button that gently depresses on click, a smooth transition between views, a list item that slides in, a subtle hover lift on a card, a satisfying success checkmark. These micro-interactions do real work — they confirm that an action registered, guide the eye to what changed, and create a sense of craft that users feel even if they cannot articulate it. The best motion feels invisible; you notice its absence more than its presence.

Use motion to serve function, not to show off. Good animation communicates state and continuity: loading spinners and skeletons tell users something is happening; a modal that scales in from where it was triggered feels connected; a page transition orients the user. Keep durations short (typically 150–300ms for UI feedback), use natural easing (ease-out for entrances feels responsive), and animate cheap properties (transform and opacity) so it stays smooth at 60fps. Reserve bigger, attention-grabbing motion (a hero animation, a celebratory moment) for high-value moments where delight is warranted, like completing onboarding or the aha moment.

Respect restraint, performance and accessibility. Too much motion is worse than none — it feels gimmicky, slows perceived speed and annoys repeat users, so animate deliberately and remove anything that does not earn its place. Ensure animations never block interaction or make the UI feel sluggish. Critically, honour the "prefers-reduced-motion" setting: some users get motion sickness or simply prefer stillness, so gate non-essential animation behind that media query and provide a calm fallback. Test motion on lower-end devices to confirm it stays smooth. Done with taste and technical care, motion is a relatively cheap way to move your product from "functional" to "feels like a polished, funded app" — a real edge over rougher competitors.

**What this looks like in practice**

- A subtle hover effect and a smooth page transition.
- A checkmark animation when a task is completed.
- Respecting “reduce motion” settings for people who prefer less animation.

**Checklist**

- [ ] Add micro-feedback: button press, hover lift, success checkmark.
- [ ] Use transitions for view changes and modals to preserve continuity.
- [ ] Add loading skeletons/spinners so waits feel intentional.
- [ ] Keep UI motion short (150–300ms) with natural easing.
- [ ] Animate transform/opacity for smooth 60fps.
- [ ] Reserve bigger motion for the aha moment and key delights.
- [ ] Honour prefers-reduced-motion and test on low-end devices.

**Tools & services**

- Framer Motion / GSAP
- CSS transitions/keyframes
- Lottie (vector animations)
- prefers-reduced-motion media query

**Common pitfalls**

- Over-animating until the product feels gimmicky and slow.
- Long, janky animations that block interaction.
- Animating expensive properties, causing dropped frames.
- Ignoring prefers-reduced-motion and accessibility.

**Go deeper**

- [Material motion guidelines](https://m3.material.io/styles/motion/overview)
- [Framer Motion](https://www.framer.com/motion/)
- [web.dev: prefers-reduced-motion](https://web.dev/articles/prefers-reduced-motion)

**Definition of done:** Tasteful, performant micro-interactions that respect reduced-motion.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/43-add-tasteful-micro-interactions-and-motion)

---

### 44. Polish every state: empty, loading, error, success

> **Goal:** Make sure every screen looks intentional in all its states, not just the ideal one.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Medium · **Estimate:** 3–5 days · **Metric:** No screen ever feels broken, blank or frozen to a real user.

**Why this matters.** Products are judged in their imperfect moments. Loading, empty, error and success states are where amateur products fall apart and polished ones build trust.

**Explain it like I'm 5.** You make sure every screen looks good in every situation — while loading, when empty, when something errors, and when it succeeds — not just in the perfect demo. Real users hit all these states.

Every screen has more than one state, and quality lives in the states you did not design on purpose. A page looks great when it is full of perfect data — but what does it look like while data is loading, when there is no data yet, when a request fails, or right after a successful action? These four states appear constantly, and if you only designed the "everything is perfect" version, users will regularly hit screens that feel broken, jarring or dead. Systematically going through your product and designing each state is one of the clearest markers of a professional, funded-feeling product.

Handle each state with intent. Loading: use skeleton screens (grey placeholders shaped like the content) or subtle spinners so the wait feels intentional and the layout does not jump when content arrives; avoid blank white flashes. Empty: never show a bare "no results" — explain what belongs here, why it is empty, and give one clear action to fill it (this doubles as onboarding). Error: show a human message, what went wrong, and a way forward (retry, contact support), never a raw stack trace or a silent failure. Success: confirm the action clearly (a toast, an inline confirmation, a state change) so users know it worked and are not left wondering.

Make it systematic, not ad hoc. Build these states into your reusable components so they are handled consistently everywhere rather than remembered per screen (a data-list component that has empty, loading and error built in saves you from forgetting). Walk your whole product deliberately triggering each state — throttle the network to see loading, use a fresh account to see empty, force failures to see errors — and fix anything that looks unfinished. Pay attention to layout stability: content appearing should not shove the page around (a cause of misclicks and a Core Web Vitals penalty). This unglamorous pass, screen by screen and state by state, is exactly the kind of polish that separates a product people trust from a prototype people abandon.

**What this looks like in practice**

- A skeleton/loading placeholder instead of a blank flash.
- A friendly error screen with a “try again” button.
- A celebratory success state after checkout.

**Checklist**

- [ ] Inventory every screen and its four states.
- [ ] Loading: use skeletons/spinners; avoid blank flashes and layout jumps.
- [ ] Empty: explain the screen + one clear action to fill it.
- [ ] Error: human message + cause + a way forward (retry/support).
- [ ] Success: clearly confirm the action worked.
- [ ] Build states into reusable components for consistency.
- [ ] Walk the app forcing each state; fix anything unfinished.

**Tools & services**

- Skeleton/loader components
- Toast/notification system
- Network throttling (devtools)
- Error boundaries

**Common pitfalls**

- Only designing the happy, full-of-data state.
- Blank white loading flashes and jumping layouts.
- Dead-end empty states with no next action.
- Silent failures or raw error dumps.

**Go deeper**

- [NN/g: empty states](https://www.nngroup.com/articles/)
- [Skeleton screens](https://www.lukew.com/ff/entry.asp?1797)
- [Refactoring UI](https://www.refactoringui.com/)

**Definition of done:** Every screen looks intentional in loading, empty, error and success states.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/44-polish-every-state-empty-loading-error-success)

---

### 45. Ensure an accessibility baseline

> **Goal:** Make the product usable with a keyboard, screen readers and sufficient contrast.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** You can complete the core flow with keyboard-only and a screen reader.

**Why this matters.** Accessibility widens your audience, is a legal requirement in many markets, improves SEO and usability for everyone, and is far cheaper to build in than to retrofit.

**Explain it like I'm 5.** You make your product usable by everyone, including people who use keyboards only or screen readers, or who can’t see certain colours. It’s adding ramps and clear signs so nobody is locked out.

Accessibility (a11y) means people with disabilities — visual, motor, auditory, cognitive — can actually use your product, and it overlaps heavily with good usability for everyone. It is also increasingly a legal expectation (WCAG-based laws exist in many jurisdictions) and a factor search engines reward. Building a baseline in from the start is dramatically cheaper than retrofitting, and it is mostly a matter of doing the fundamentals rather than heroic effort. Aim for WCAG 2.1 AA as a practical target for the core flows.

Cover the high-impact fundamentals. Use semantic HTML (real buttons, headings, lists, labels) so assistive tech understands your page — a div pretending to be a button is invisible to a screen reader. Ensure everything works with a keyboard alone: you can tab to every interactive element in a logical order, see a visible focus indicator, and operate menus, modals and forms without a mouse (many users, and all screen-reader users, navigate this way). Provide text alternatives: alt text on meaningful images, labels on form fields, and accessible names on icon-only buttons. Meet colour-contrast ratios (4.5:1 for body text) so low-vision users can read — which you largely handled when choosing your palette.

Test with real tools and real methods. Run an automated checker (axe, Lighthouse, WAVE) to catch the obvious issues — these find perhaps a third to half of problems, so do not stop there. Then test manually: unplug your mouse and navigate the core flow with only the keyboard; turn on a screen reader (VoiceOver, NVDA) and try to complete a task; zoom to 200% and check nothing breaks. Fix focus traps in modals, add skip links, and make sure dynamic updates are announced. You do not need perfection at MVP stage, but a solid baseline on your core flows makes your product usable by more people, protects you legally, and — because accessible products are simply better-structured products — tends to improve the experience for everyone, including SEO crawlers.

**What this looks like in practice**

- Being able to complete the core flow using only the keyboard.
- Alt text on images and labels on form fields for screen readers.
- Checking colour contrast passes WCAG AA.

**Checklist**

- [ ] Use semantic HTML (real buttons, headings, labels, lists).
- [ ] Ensure full keyboard operability with a visible focus indicator.
- [ ] Add alt text, form labels and accessible names for icon buttons.
- [ ] Meet WCAG contrast ratios (≥4.5:1 body text).
- [ ] Run an automated checker (axe/Lighthouse/WAVE) and fix issues.
- [ ] Test manually: keyboard-only, screen reader, 200% zoom.
- [ ] Fix focus traps; add skip links; announce dynamic updates.

**Tools & services**

- axe DevTools / WAVE
- Lighthouse (a11y audit)
- VoiceOver / NVDA (screen readers)
- Keyboard-only testing

**Common pitfalls**

- Div "buttons" that keyboards and screen readers cannot use.
- No visible focus state, making keyboard nav impossible.
- Icon-only buttons with no accessible label.
- Relying only on an automated scan and calling it done.

**Go deeper**

- [WCAG quick reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [The A11y Project checklist](https://www.a11yproject.com/checklist/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

**Definition of done:** Core flows usable by keyboard and screen reader, passing an a11y audit.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/45-ensure-an-accessibility-baseline)

---

### 46. Optimise performance & Core Web Vitals

> **Goal:** Make pages load fast and feel instant, hitting good Core Web Vitals scores.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Hard · **Estimate:** 3–5 days · **Metric:** LCP < 2.5s, INP < 200ms, CLS < 0.1 on a mid-range phone.

**Why this matters.** Speed is a feature: faster sites convert better, rank higher and retain more users. On mobile and slow networks — where many of your users are — performance can make or break adoption.

**Explain it like I'm 5.** You make pages load fast and feel instant, because slow sites lose people. It’s trimming the weight so the race car is quick off the line.

Performance directly affects revenue, retention and SEO: study after study shows conversion drops as load time rises, and Google uses Core Web Vitals as a ranking signal. Those vitals are Largest Contentful Paint (how fast the main content appears — aim under 2.5s), Interaction to Next Paint (how responsive it feels to input — aim under 200ms), and Cumulative Layout Shift (how much the page jumps around — aim under 0.1). Measure your real numbers with Lighthouse and PageSpeed Insights (and field data via the Chrome UX Report) before optimising, so you fix what actually matters rather than guessing.

Attack the biggest wins first. Images are usually the heaviest thing on a page: serve them in modern formats (WebP/AVIF), size them correctly for their display, compress them, lazy-load below-the-fold ones, and set explicit dimensions to prevent layout shift. JavaScript is the next culprit: ship less of it, code-split so each page only loads what it needs, defer non-critical scripts, and audit heavy third-party tags (analytics, chat widgets, ad pixels) which quietly wreck performance. Serve everything over your CDN (Cloudflare) with good caching and compression (Brotli), and preload the critical resources needed for first paint.

Then chase the polish and guard against regressions. Eliminate layout shift by reserving space for images, ads and dynamically injected content, and by loading fonts without a jarring swap. Improve responsiveness by keeping the main thread free — break up long tasks and avoid heavy work during interactions. Cache aggressively (static assets with long-lived, fingerprinted URLs) so repeat visits are near-instant. Once you hit good scores, set a performance budget and check it in CI so a future change does not silently make the site slow again. Especially test on a mid-range phone over a throttled connection, because that is the reality for a large share of your users — a site that is fast for them is fast for everyone, and speed is one of the cheapest, most durable competitive advantages you can build.

**What this looks like in practice**

- Compressing images to WebP and lazy-loading below-the-fold ones.
- Hitting good Core Web Vitals (fast load, quick interaction, no layout jumps).
- Code-splitting so the first page doesn’t download the whole app.

**Checklist**

- [ ] Measure current LCP, INP and CLS with Lighthouse/PageSpeed + field data.
- [ ] Optimise images: modern formats, correct sizing, compression, lazy-load.
- [ ] Reduce and code-split JS; defer non-critical and third-party scripts.
- [ ] Serve via CDN with Brotli compression and strong caching.
- [ ] Reserve space for media/fonts to eliminate layout shift.
- [ ] Keep the main thread free for responsive interactions.
- [ ] Set a performance budget and enforce it in CI.

**Tools & services**

- Lighthouse / PageSpeed Insights
- WebPageTest
- Cloudflare (CDN/Brotli/caching)
- Bundle analyzer

**Common pitfalls**

- Huge unoptimised images and oversized JS bundles.
- Third-party tags silently tanking performance.
- Layout shift from images/ads without reserved space.
- Only testing on a fast laptop, not a mid-range phone.

**Go deeper**

- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

**Definition of done:** Good Core Web Vitals on mobile, protected by a performance budget in CI.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/46-optimise-performance-and-core-web-vitals)

---

### 47. Add high-quality imagery & illustrations

> **Goal:** Replace placeholders with cohesive, on-brand images (AI-generated or licensed).
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Visuals look intentional and on-brand; no generic stock or placeholders remain.

**Why this matters.** Imagery sets the emotional tone and perceived quality of your product. Cohesive, high-quality visuals make you look established; generic stock or empty space makes you look unfinished.

**Explain it like I'm 5.** You replace placeholder boxes with real, on-brand pictures and illustrations so the product looks finished and professional, not like a rough draft.

Visuals carry a huge share of the impression your product makes, and the wrong ones actively hurt. Generic, obviously-stock photos (the clichéd handshake, the laughing team around a laptop) signal "template," while a cohesive, distinctive visual style signals a real brand. Decide on a visual direction that fits your brand and audience — clean product screenshots, custom illustrations, abstract 3D shapes, photography with a consistent treatment — and apply it consistently across your site, app, social and marketing. Consistency is what makes a small operation look established.

You have great, affordable options now. AI image generation (tools like Midjourney, DAL·E, or a Gemini/"Nano Banana" pipeline) can produce cohesive, custom imagery cheaply if you use a consistent style prompt/anchor so a whole set matches — this is ideal for illustrations, hero art, backdrops and section visuals that would otherwise cost a fortune. For product visuals, high-quality screenshots dressed in device or browser frames are honest and effective. For photography, use well-licensed sources (Unsplash, Pexels) but apply a consistent treatment (duotone, crop, overlay) so they feel like yours rather than random stock. Always respect licensing and never ship images you do not have rights to.

Optimise and manage the imagery like the asset it is. Export at the right sizes, compress and convert to modern formats (WebP/AVIF), and provide responsive variants so mobile users do not download desktop-sized files — poor image handling is the most common cause of slow pages, so this ties directly to your performance work. Add meaningful alt text for accessibility and SEO. Keep the source files and prompts organised in your brand kit so you can regenerate or extend the set consistently later (for example, when you add a new landing page or a blog). Thoughtful, cohesive, well-optimised imagery is one of the most visible upgrades you can make — it is often the difference between a product that looks like a funded company and one that looks like a side project.

**What this looks like in practice**

- Cohesive AI-generated illustrations (like these 111 infographics!).
- Licensed photography that matches your brand colours.
- Custom diagrams that explain features better than words.

**Checklist**

- [ ] Choose a consistent visual direction that fits your brand.
- [ ] Generate cohesive AI imagery with a shared style anchor, or use treated photography.
- [ ] Use framed product screenshots for honest product visuals.
- [ ] Respect licensing; keep source files/prompts in the brand kit.
- [ ] Export responsive sizes; compress to WebP/AVIF.
- [ ] Add meaningful alt text to every image.
- [ ] Replace all placeholders and remove generic stock clichés.

**Tools & services**

- Midjourney / DALL·E / Gemini image
- Unsplash / Pexels (licensed)
- Figma (framing/treatment)
- sharp / Squoosh (optimise)

**Common pitfalls**

- Clichéd stock photos that scream "template".
- A mishmash of unrelated visual styles.
- Shipping huge unoptimised images that slow the site.
- Using images without the rights to them.

**Go deeper**

- [Unsplash](https://unsplash.com/)
- [Squoosh (image optimiser)](https://squoosh.app/)
- [Midjourney](https://www.midjourney.com/)

**Definition of done:** A cohesive, optimised, rights-cleared image set across the product and marketing.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/47-add-high-quality-imagery-and-illustrations)

---

### 48. Perfect the favicon & app icons everywhere

> **Goal:** Ensure a crisp, consistent Netflix-style icon appears in tabs, bookmarks, apps and shares.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Easy · **Estimate:** half a day · **Metric:** The correct branded icon appears in every context, legible at 16px.

**Why this matters.** The favicon and app icons are tiny but ubiquitous brand touchpoints. A default or inconsistent icon quietly signals "unfinished"; a sharp, consistent one signals a real, polished product.

**Explain it like I'm 5.** You make sure your little icon looks crisp everywhere it appears — browser tabs, phone home screens, bookmarks, shared links — like Netflix’s single clean “N.” One icon, perfect at every size.

The favicon is a small detail with an outsized effect on perceived polish, because it shows up everywhere: browser tabs, bookmarks, history, mobile home screens, search results, and share previews. A default framework icon (or worse, the generic globe) in any of these places is a subtle but constant signal that the product is unfinished. Following the Netflix principle you set in the branding phase, you want one bold, instantly recognisable mark that reads perfectly even at 16×16 pixels, deployed consistently across every context and every one of your sites.

Ship the full icon set, not just a single favicon.ico. Modern setups need: an SVG favicon (crisp at any size and adapts to light/dark), PNG fallbacks at 16 and 32px, a 180×180 Apple touch icon (for iOS home screens), and 192/512px icons plus a web app manifest for Android/PWA installs. Generate these from your master icon with a tool so they are consistent, and reference them correctly in your HTML head. Test that the right icon appears when you bookmark the site, add it to a phone home screen, and view it in a tab — each context pulls a different asset, and it is easy to get one right and another wrong.

Make it consistent across your whole portfolio and your apps. If you run several sites or products, they should each have their own correct, high-quality favicon rather than a leftover default — an audit across all properties often reveals a few embarrassing gaps. For mobile apps, the app icon and splash/loading screen should match the same mark, so the brand is unmistakable from the app store to the home screen to the launch splash. This is a quick, high-leverage polish task: it costs an afternoon, touches thousands of tiny impressions, and removes one of the most common "this looks like a hobby project" tells. Get the mark right once, deploy it everywhere, and it quietly reinforces your brand on every device your users touch.

**What this looks like in practice**

- Exporting all favicon and app-icon sizes from one source SVG.
- A maskable icon that looks right as an Android app shortcut.
- Checking the icon in a browser tab next to other pinned tabs.

**Checklist**

- [ ] Generate a full icon set from your master mark (SVG + PNG sizes).
- [ ] Include Apple touch (180px) and PWA (192/512px) + web manifest.
- [ ] Reference all icons correctly in the HTML head.
- [ ] Verify the icon in tabs, bookmarks and phone home screens.
- [ ] Audit every site/property for default or missing favicons.
- [ ] Match mobile app icons and splash screens to the same mark.
- [ ] Confirm it is crisp and recognisable at 16×16.

**Tools & services**

- RealFaviconGenerator
- Your master icon (SVG)
- Web app manifest
- Device testing (iOS/Android)

**Common pitfalls**

- Leaving the default framework or globe favicon in production.
- A favicon that is unreadable at small sizes.
- Only a .ico, missing Apple/PWA icons.
- Inconsistent icons across multiple sites or the mobile app.

**Go deeper**

- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [web.dev: Add a web app manifest](https://web.dev/articles/add-manifest)
- [Apple touch icon guidance](https://developer.apple.com/design/human-interface-guidelines/app-icons)

**Definition of done:** A crisp, consistent icon set deployed across all tabs, apps and properties.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/48-perfect-the-favicon-and-app-icons-everywhere)

---

### 49. Cross-browser & device QA

> **Goal:** Verify the product works and looks right across major browsers and real devices.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Medium · **Estimate:** 2–3 days · **Metric:** No core-flow breakage on any browser/device your users actually use.

**Why this matters.** What works in your browser may break in Safari, on an older Android, or on a small screen. Systematic QA catches the issues that would otherwise reach — and lose — real users.

**Explain it like I'm 5.** You test your product on different browsers (Chrome, Safari, Firefox) and real phones to make sure it looks and works right for everyone, not just on your machine.

You build in one browser on one machine, but your users arrive on a huge variety of browsers, operating systems, screen sizes and device capabilities. Something that looks perfect in your Chrome can be broken in Safari (which has its own quirks, especially with dates, flexbox and some CSS), unusable on a small Android, or laid out wrong on a large monitor. A structured cross-browser and cross-device QA pass before launch catches these issues in private, rather than letting real, hard-won users hit them and leave. Focus your effort where your actual audience is — check your analytics or ICP to know which browsers and devices matter most.

Cover the meaningful matrix. At minimum, test the latest Chrome, Safari (desktop and iOS — iOS Safari is non-negotiable given mobile traffic), Firefox and Edge, plus a couple of real phones (a small/older Android and an iPhone) and a tablet. Walk the core flows on each, not just the homepage: sign up, do the core action, hit the empty and error states, submit forms. Watch for layout breakage, unclickable elements, broken fonts, features that silently fail, and performance that falls off on weaker devices. Use real devices where you can (emulators miss touch, real fonts and true performance) and a service like BrowserStack for the long tail you cannot physically own.

Make QA repeatable and prioritised. Write a short QA checklist of the flows and states to verify so the pass is consistent every release, not improvised. Log every issue with the browser/device, steps to reproduce and a screenshot, then prioritise: fix anything that blocks the core flow or hits a large share of users first; minor cosmetic quirks on rare browsers can wait. As you grow, consider automated cross-browser tests (Playwright can run across browser engines) to catch regressions without manual effort. This discipline is what stops the demoralising pattern of "it works for me" while users on other setups quietly bounce — and given how much effort goes into acquiring each early user, not losing them to an avoidable rendering bug is a very high return on a day of testing.

**What this looks like in practice**

- Opening the site on an iPhone Safari and an Android Chrome to compare.
- Catching a layout bug that only appears in Safari.
- Using BrowserStack to test devices you don’t own.

**Checklist**

- [ ] Check your analytics/ICP for the browsers and devices that matter.
- [ ] Test latest Chrome, Safari (desktop + iOS), Firefox and Edge.
- [ ] Test real phones (small/older Android + iPhone) and a tablet.
- [ ] Walk core flows and all states on each, not just the homepage.
- [ ] Log issues with browser/device, repro steps and screenshots.
- [ ] Prioritise: fix core-flow blockers and high-traffic issues first.
- [ ] Keep a QA checklist; add automated cross-browser tests over time.

**Tools & services**

- BrowserStack / LambdaTest
- Real devices (Android + iOS)
- Playwright (multi-engine)
- A written QA checklist

**Common pitfalls**

- "Works on my machine" as the only test.
- Skipping iOS Safari despite heavy mobile traffic.
- Only testing the homepage, not the full flows and states.
- No repro details, making bugs hard to fix.

**Go deeper**

- [BrowserStack](https://www.browserstack.com/)
- [Can I use (feature support)](https://caniuse.com/)
- [Playwright cross-browser](https://playwright.dev/docs/browsers)

**Definition of done:** Core flows verified across major browsers and real devices, issues triaged and fixed.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/49-cross-browser-and-device-qa)

---

### 50. Content & microcopy polish pass

> **Goal:** Refine every piece of on-screen text so it is clear, on-brand and helpful.
>
> **Phase:** 5 — Design & Quality Bar · **Difficulty:** Easy · **Estimate:** 1–2 days · **Metric:** No confusing labels, jargon or typos; terminology is consistent throughout.

**Why this matters.** Words are the interface. Clear, confident microcopy reduces confusion, builds trust and reflects your brand — while typos, jargon and vague labels quietly erode credibility.

**Explain it like I'm 5.** You go through all the words in your app — buttons, tips, errors — and make them clear, friendly and on-brand. Good wording quietly makes the whole product feel better.

Users read your product far more than they consciously realise, and every button label, form hint, error message, empty state and confirmation is a chance to help or confuse them. Microcopy — the small bits of interface text — has an outsized effect on usability and perceived quality. A dedicated polish pass, going screen by screen and reading every word as a user would, catches the vague labels, the jargon, the inconsistent terminology and the plain typos that individually seem trivial but collectively make a product feel either sharp or sloppy.

Apply clear principles. Be clear over clever: a button that says "Save changes" beats one that says "Make it so." Be specific: "Delete 3 leads?" beats "Are you sure?" Lead with the user's benefit and use their language (from your brand voice guide and interview quotes), not internal jargon. Keep it concise — cut every word that does not earn its place, because on screens brevity is kindness. Make error messages human and actionable (what happened and how to fix it), make empty states motivating, and make confirmations reassuring. Ensure consistent terminology throughout: pick "sign up" or "get started," "members" or "users," and use it everywhere so you do not confuse people with synonyms for the same thing.

Get it proofed and keep it consistent. Read everything aloud (awkward phrasing jumps out when spoken), run it through a grammar/clarity tool, and ideally have someone else proofread — you are blind to your own typos. Check that tone matches context: playful is fine for an empty state, but an error or a billing message should be calm and clear, not jokey. Verify small details users notice: correct capitalisation style, no lorem ipsum left anywhere, dates and currencies formatted for your audience, and pluralisation handled ("1 lead" vs "2 leads"). This pass is quick relative to its impact — a product with clear, confident, typo-free copy feels trustworthy and well-made, and it is one of the cheapest ways to raise the overall quality bar before you start driving traffic to it.

**What this looks like in practice**

- Changing “Submit” to “Create my account.”
- Rewriting a scary error into “Something went wrong — we’ve been notified.”
- A consistent, warm tone across every screen.

**Checklist**

- [ ] Go screen by screen and read every word as a user.
- [ ] Rewrite labels/messages to be clear, specific and benefit-led.
- [ ] Use brand voice and customer language; cut jargon and filler.
- [ ] Make errors human and actionable; empty states motivating.
- [ ] Enforce consistent terminology across the whole product.
- [ ] Proofread: read aloud, use a grammar tool, get a second pair of eyes.
- [ ] Fix details: capitalisation, pluralisation, dates, currency, no lorem ipsum.

**Tools & services**

- Your brand voice guide
- Grammarly / Hemingway
- A second proofreader
- A terminology glossary

**Common pitfalls**

- Clever copy that sacrifices clarity.
- Inconsistent terms for the same concept.
- Jokey tone in serious contexts (errors, billing).
- Leftover lorem ipsum, typos or bad pluralisation.

**Go deeper**

- [NN/g: microcopy & UX writing](https://www.nngroup.com/articles/microcopy/)
- [Mailchimp content style guide](https://styleguide.mailchimp.com/)
- [Hemingway Editor](https://hemingwayapp.com/)

**Definition of done:** Clear, consistent, typo-free, on-brand copy across every screen and state.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/50-content-and-microcopy-polish-pass)

---

## Phase 6: Auth, Data & Security

_Add Google sign-in, a real Postgres database, working notifications, billing rails, backups and the security basics that keep users — and their data — safe._

**Outcome:** Authenticated users, persistent data, payments and a security baseline.

### 51. Add authentication (Google + email)

> **Goal:** Let users sign up and log in securely, with Google OAuth and an email option.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Users can sign up and log in reliably; unauthorised access is blocked server-side.

**Why this matters.** Accounts unlock personalised, persistent experiences and are the gateway to everything: saved data, billing, notifications. Google sign-in removes friction; secure email auth covers the rest.

**Explain it like I'm 5.** You let people create accounts and log in safely, including the easy “Sign in with Google” button. It’s giving each user their own key to their own locker.

The moment your product needs to remember who someone is, you need authentication. Do not build it from scratch — auth is deceptively hard to get right (password hashing, token handling, session security, account recovery, edge cases), and a mistake here is a serious breach waiting to happen. Use a well-tested library or managed provider (Auth.js/NextAuth, Clerk, Supabase Auth, Firebase Auth, Auth0) that handles the security-critical parts for you. Offer Google OAuth as a primary option because one-tap "Continue with Google" dramatically reduces sign-up friction — no password to create or remember, which measurably lifts conversion, especially on mobile.

Provide the right mix of methods for your audience. Google (and possibly Apple, GitHub, or a local option) covers most users; add an email-based method for those without or unwilling to use social login. For email, prefer modern, lower-friction approaches — magic links or one-time codes avoid password management entirely — or, if using passwords, hash them properly (bcrypt/argon2, never plaintext), enforce reasonable strength, and provide a secure reset flow. Whatever you choose, verify email ownership, handle the "account already exists with a different method" case gracefully (link accounts by verified email), and make the whole flow fast and clear.

Wire auth into the product cleanly and securely. Protect routes and API endpoints so only authenticated (and authorised) users can access what they should — never rely on hiding a button; enforce on the server. Store just enough profile data, and create the user record in your database on first sign-in. Consider offering multi-factor authentication for accounts that hold sensitive data, and definitely for admin accounts. Test the full lifecycle: sign up, log in, log out, session expiry, password/link reset, and signing in from a new device. Good authentication is invisible when it works and catastrophic when it fails, so lean on proven tools, cover the edge cases, and get the security fundamentals right — this is the front door to everything users trust you with.

**What this looks like in practice**

- Google OAuth plus email/password sign-in.
- A secure password reset flow via email.
- Storing passwords hashed, never in plain text.

**Checklist**

- [ ] Use a proven auth library/provider — do not roll your own.
- [ ] Offer "Continue with Google" as a low-friction primary option.
- [ ] Add an email method (magic link / OTP, or properly hashed passwords).
- [ ] Verify email ownership and handle duplicate-account linking.
- [ ] Protect routes and APIs server-side, not just in the UI.
- [ ] Create the user record in your DB on first sign-in.
- [ ] Test the full lifecycle: signup, login, logout, expiry, reset, new device.

**Tools & services**

- Auth.js / Clerk / Supabase Auth / Auth0
- Google Cloud OAuth credentials
- bcrypt/argon2 (if passwords)
- Email provider (magic links)

**Common pitfalls**

- Building auth from scratch and getting security wrong.
- Storing passwords in plaintext or weak hashes.
- Only hiding UI instead of enforcing auth on the server.
- No account-linking, creating duplicate accounts per method.

**Go deeper**

- [Auth.js (NextAuth)](https://authjs.dev/)
- [Clerk](https://clerk.com/)
- [OWASP authentication cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

**Definition of done:** Secure sign-up/login with Google + email and protected routes/APIs.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/51-add-authentication-google-email)

---

### 52. Session management & account security

> **Goal:** Handle sessions, tokens and account protections so accounts cannot be hijacked.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Hard · **Estimate:** 2–3 days · **Metric:** Expired/stolen sessions cannot access data; admin accounts require MFA.

**Why this matters.** Getting login right is only half the job; keeping the session secure afterwards is the other half. Weak session handling lets attackers impersonate users even with strong login.

**Explain it like I'm 5.** You manage logins so that once someone signs in, they stay safely signed in — and nobody can steal their session or hijack their account. It’s keeping the locker key from being copied.

After a user authenticates, your app maintains a session so they do not have to log in on every request — and how you handle that session is a security decision. Whether you use secure httpOnly cookies (the safer default for web apps, invisible to JavaScript and thus resistant to XSS token theft) or tokens, the fundamentals are the same: transmit only over HTTPS, set cookies as httpOnly, Secure and SameSite to defend against theft and CSRF, and give sessions a sensible expiry with a refresh mechanism so a stolen token has a limited life. Most managed auth providers handle this well; if you self-manage, follow their guidance closely rather than improvising.

Add the account-protection features users expect and attackers probe for. Provide a clear logout that truly invalidates the session (server-side), and ideally a "log out of all devices" option and a list of active sessions. Protect the login endpoint against brute force with rate limiting and lockouts, and consider CAPTCHA or challenge on suspicious activity. Offer multi-factor authentication (TOTP app, or at least email/SMS codes) for users who want it and enforce it for privileged/admin accounts — MFA is the single most effective defence against account takeover from leaked passwords. Secure the account-recovery flow too, since password reset is a favourite attack vector: use expiring, single-use tokens sent to a verified email.

Guard against the common web account attacks. Implement CSRF protection for state-changing requests, set a Content Security Policy and sanitise output to reduce XSS (which can steal sessions), and never expose session identifiers in URLs. Log important security events (logins, new devices, password changes, MFA changes) and consider notifying users of them so they can spot unauthorised access. Regenerate the session identifier on privilege changes (like login) to prevent fixation. Finally, test these protections: try to reuse an expired session, access another user's data with your token, and confirm logout really kills access. Solid session and account security is what ensures that the trust users place in your login actually holds — a breach here is not just a bug, it is the kind of incident that can end a young company's reputation.

**What this looks like in practice**

- Secure, httpOnly session cookies with sensible expiry.
- Optional two-factor authentication for extra safety.
- Logging out all sessions after a password change.

**Checklist**

- [ ] Use httpOnly, Secure, SameSite cookies over HTTPS (or provider defaults).
- [ ] Set sensible session expiry with refresh; limit stolen-token lifespan.
- [ ] Make logout invalidate the session server-side; offer log-out-all-devices.
- [ ] Rate-limit and lock out brute-force login attempts.
- [ ] Offer MFA to users; enforce it for admin/privileged accounts.
- [ ] Secure recovery with expiring, single-use tokens to verified email.
- [ ] Add CSRF protection, a CSP, and security-event logging/alerts.

**Tools & services**

- Your auth provider’s session tools
- TOTP/MFA (Authenticator)
- Rate limiting (Cloudflare/app)
- CSP + CSRF middleware

**Common pitfalls**

- Storing tokens where XSS can steal them (non-httpOnly).
- Sessions that never expire or cannot be revoked.
- No brute-force protection on login.
- An insecure password-reset flow (reusable/long-lived tokens).

**Go deeper**

- [OWASP session management cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [OWASP CSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [MDN: cookie security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

**Definition of done:** Secure, revocable sessions with MFA options and hardened login/recovery.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/52-session-management-and-account-security)

---

### 53. Set up production PostgreSQL

> **Goal:** Run a reliable, secured production Postgres database with pooling and monitoring.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Medium · **Estimate:** 1 day · **Metric:** Stable performance under load; verified restore; no public exposure.

**Why this matters.** Your database holds the data that is your business. A properly provisioned, secured and backed-up production database is the difference between durable trust and a catastrophic data-loss event.

**Explain it like I'm 5.** You set up a proper grown-up database (PostgreSQL) to store everything reliably in production, with backups and monitoring. It’s the sturdy filing cabinet your whole app depends on.

Development often runs on SQLite or a local database, but production needs a robust, managed relational database — PostgreSQL is the excellent default: powerful, reliable, and universally supported. Use a managed Postgres provider (Supabase, Neon, RDS, Cloud SQL, Render) unless you have a strong reason to self-host, because managed services handle backups, patching, failover and scaling that are easy to get wrong yourself. Provision an instance sized for your stage (start small; you can scale up), in a region close to your users for low latency, and separate from your staging database so tests never touch real data.

Secure and connect it properly. Never expose the database publicly with a weak password; restrict access by network (allowlist your app/servers) and require TLS for connections so data in transit is encrypted. Use a dedicated, least-privilege database user for the app rather than the superuser. Manage the connection string as a secret (env var, secret manager) and — importantly for serverless or many-instance apps — use connection pooling (PgBouncer or your provider's pooler), because Postgres has a limited connection count and unpooled apps will exhaust it under load, causing outages that are confusing to debug. Run your schema via migrations (as set up earlier) so production matches your code.

Operate it for reliability and performance. Enable automated backups and point-in-time recovery, and test a restore (an untested backup is not a backup). Add indexes for the columns you filter and join on — missing indexes are the most common cause of a database slowing to a crawl as data grows — and watch slow-query logs to catch problems early. Set up basic monitoring (connections, CPU, storage, replication lag) with alerts so you notice pressure before it becomes an outage, and set a plan for scaling (read replicas, bigger instance) before you need it. Keep credentials rotated and access audited. A well-run production database quietly underpins everything users trust you with; investing in getting it right — secured, pooled, backed up, indexed and monitored — prevents the class of incidents that are both most damaging and hardest to recover from.

**What this looks like in practice**

- A managed Postgres instance with connection pooling.
- Automated backups and alerts on high load.
- Separate databases for staging and production.

**Checklist**

- [ ] Provision managed Postgres, sized for your stage, near your users.
- [ ] Keep production separate from staging/dev databases.
- [ ] Restrict network access, require TLS, use a least-privilege app user.
- [ ] Store the connection string as a secret; use connection pooling.
- [ ] Apply schema via migrations so prod matches code.
- [ ] Enable automated backups + PITR and test a restore.
- [ ] Add indexes, watch slow queries, and monitor with alerts.

**Tools & services**

- Supabase / Neon / RDS / Cloud SQL
- PgBouncer / provider pooler
- Migration tool (Prisma/Drizzle)
- DB monitoring + slow-query logs

**Common pitfalls**

- Exposing the DB publicly or using a weak/shared password.
- No connection pooling, exhausting connections under load.
- Missing indexes that cripple performance as data grows.
- Backups that have never been test-restored.

**Go deeper**

- [Neon (serverless Postgres)](https://neon.tech/)
- [Use The Index, Luke](https://use-the-index-luke.com/)
- [PgBouncer](https://www.pgbouncer.org/)

**Definition of done:** A secured, pooled, backed-up and monitored production Postgres instance.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/53-set-up-production-postgresql)

---

### 54. Build authorization & multi-tenant data isolation

> **Goal:** Ensure every user can only access their own data, enforced at the data layer.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Hard · **Estimate:** 2–4 days · **Metric:** Cross-tenant access attempts fail every time, verified by tests.

**Why this matters.** The most damaging and common SaaS bug is one user seeing another user’s data. Proper authorization and tenant isolation are essential for trust, security and compliance.

**Explain it like I'm 5.** You make sure each user can only see their own stuff, never anyone else’s — enforced deep in the data, not just hidden in the UI. It’s making sure lockers only open with the right key.

Authentication answers "who are you?"; authorization answers "what are you allowed to do?" — and getting the second wrong is how you end up with the nightmare headline "users could see each other's data." Every piece of data in your system belongs to someone (a user, a team, an organisation), and every request must be checked against who is making it. Design your authorization model early: is it per-user, or do you have teams/organisations (tenants) where members share data? Most B2B products are multi-tenant, so decide how tenants are represented (an org_id on records) and make it a first-class part of your data model.

Enforce access at the data layer, not just the UI. Hiding a button or filtering on the client is not security — an attacker will call your API directly. Every query that reads or writes user data must be scoped to the authenticated user's allowed set (for example, always filter by the current user's org_id, and verify ownership before update/delete). Centralise this so it is not re-implemented (and forgotten) per endpoint: middleware that injects the tenant scope, a repository layer that always applies it, or database-level Row Level Security (which Postgres and Supabase support) that enforces isolation even if application code slips. Defence in depth — checks in both app and database — is ideal for the most sensitive data.

Add roles and permissions as needed, and test isolation ruthlessly. Many products need at least a couple of roles (owner/admin vs member, plus your own super-admin for support) with different capabilities; keep the model as simple as your use case allows and expand deliberately. The critical test is cross-tenant access: create two accounts with data, then try — via the UI and by manipulating IDs in API calls — to access account A's data while logged in as account B. It must fail every time. Automate a few of these authorization tests so a future refactor cannot silently open a hole. This is not glamorous work, but a single authorization flaw can expose your entire user base's data at once, so treat isolation as a core, always-on requirement rather than a feature — it is foundational to being trusted with anyone's information.

**What this looks like in practice**

- Every query scoped to the logged-in user’s account/organisation.
- Row-level security so a bug can’t leak another tenant’s data.
- Tests that try to access someone else’s data and confirm it’s blocked.

**Checklist**

- [ ] Decide the model: per-user vs team/organisation (multi-tenant).
- [ ] Make tenant/owner IDs a first-class part of the data model.
- [ ] Scope every read/write to the authenticated user’s allowed set.
- [ ] Centralise enforcement (middleware, repo layer, or DB RLS).
- [ ] Add minimal roles/permissions; expand only as needed.
- [ ] Verify ownership before every update/delete.
- [ ] Test cross-tenant access via UI and manipulated API IDs; automate it.

**Tools & services**

- Row Level Security (Postgres/Supabase)
- Authorization middleware / policies
- CASL / OSO / your framework’s guards
- Automated authz tests

**Common pitfalls**

- Filtering data on the client instead of the server/DB.
- Forgetting the tenant scope on one endpoint, leaking data.
- Trusting IDs from the client without ownership checks.
- No cross-tenant tests, so a refactor opens a hole unnoticed.

**Go deeper**

- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [OWASP access control cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [OSO authorization](https://www.osohq.com/)

**Definition of done:** Data-layer authorization that guarantees users only access their own data.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/54-build-authorization-and-multi-tenant-data-isolation)

---

### 55. Implement notifications (in-app + email)

> **Goal:** Build a working notification system backed by the database for real-time and email alerts.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Medium · **Estimate:** 3–5 days · **Metric:** Timely, relevant notifications measurably increase return visits.

**Why this matters.** Notifications drive engagement and retention by pulling users back to value. Done well — timely, relevant, backed by real data — they are a growth lever; done badly, they annoy and drive churn.

**Explain it like I'm 5.** You build a system that tells users when something happens — a bell inside the app and emails — powered by your database so it’s reliable. It’s the app tapping users on the shoulder at the right moments.

Notifications are how your product reaches back out to users when something relevant happens — and they are one of the strongest retention levers you have, because they turn a "come back when you remember" product into one that earns re-engagement. Build a proper notification system rather than scattering one-off emails. At its core is a notifications table in your database recording what happened, who it is for, its type, whether it has been read, and a link to the relevant place. Everything else — the in-app bell, the email, the push — is a channel that renders from this source of truth.

Implement the channels users need. In-app notifications (a bell with unread count, a list, mark-as-read) keep active users informed; deliver them in real time where it matters using WebSockets/SSE or your provider's realtime feature, or simply on page load for less time-sensitive updates. Transactional email (via a reliable provider — Resend, Postmark, SES, SendGrid — with your SPF/DKIM/DMARC configured) handles important events even when users are away: welcome, password reset, key activity, receipts. Consider web push or mobile push later for the highest-urgency nudges. Whatever the channel, wire it to real events in your app so notifications reflect actual data, not placeholders.

Respect the user and measure impact. Give users preferences to control what they receive and how (nothing burns trust faster than notifications people cannot turn off), always include an unsubscribe for non-critical email (and honour it — it is legally required for marketing), and batch or digest high-frequency events so you inform without spamming. Keep transactional and marketing notifications separate. Make them genuinely useful and well-timed: a notification should give the user a reason to return, not just noise. Track opens, clicks and the resulting re-engagement so you can tune what works and cut what does not. A thoughtful notification system, grounded in your database and respectful of the user, quietly compounds into meaningfully higher retention — which is exactly what turns raw sign-ups into the sustained, active user base you need.

**What this looks like in practice**

- An in-app bell showing “Aisha commented on your task.”
- A transactional email when someone is invited or mentioned.
- Notification preferences so users control what they get.

**Checklist**

- [ ] Create a notifications table (recipient, type, payload, read, link).
- [ ] Build in-app notifications: bell, unread count, list, mark-as-read.
- [ ] Add real-time delivery (WebSocket/SSE/realtime) where it matters.
- [ ] Send transactional email via a reliable provider with SPF/DKIM/DMARC.
- [ ] Wire notifications to real app events, not placeholders.
- [ ] Add user preferences and honour unsubscribe; separate marketing.
- [ ] Batch/digest noisy events; track opens, clicks and re-engagement.

**Tools & services**

- Postmark / Resend / SES / SendGrid
- WebSockets / SSE / Supabase Realtime
- A notifications DB table
- Web/mobile push (later)

**Common pitfalls**

- Sending notifications with no user control (rapid trust loss).
- No unsubscribe on marketing email (illegal and annoying).
- Spamming every tiny event instead of batching.
- Poor email deliverability from missing SPF/DKIM/DMARC.

**Go deeper**

- [Resend (email API)](https://resend.com/)
- [Postmark (transactional email)](https://postmarkapp.com/)
- [CAN-SPAM / email compliance](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)

**Definition of done:** A DB-backed notification system with in-app + email channels and user preferences.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/55-implement-notifications-in-app-email)

---

### 56. Add payments & billing

> **Goal:** Let customers pay you — subscriptions or one-off — with a secure, reliable billing flow.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Hard · **Estimate:** 3–6 days · **Metric:** Customers can pay, manage and cancel; billing state always matches the provider.

**Why this matters.** Revenue is the ultimate validation and a core VC metric (you need real transactions). A solid billing system turns interest into income and is required before you can scale monetisation.

**Explain it like I'm 5.** You let customers actually pay you, safely — a subscription or one-time charge — using a trusted payment provider. It’s putting a working cash register in the shop.

At some point interest has to become money, and taking payments well is both a technical and a trust exercise. Do not touch raw card data — use a payment provider (Stripe is the global standard; Paystack, Flutterwave and M-Pesa integrations matter for African markets; use what fits your customers) that handles PCI compliance, card storage and the hard parts. Decide your model from your earlier pricing work: subscriptions (recurring, predictable, the common SaaS choice), usage-based, one-off purchases, or a transaction fee. Implement it with the provider's tools — hosted checkout and customer portal get you live fastest and offload security and edge cases.

Build the full billing lifecycle, not just the first charge. Handle the plan selection and checkout, provision access on successful payment, and — critically — process webhooks so your system reacts to what happens at the provider: successful and failed payments, subscription renewals, cancellations, upgrades/downgrades, and refunds. Webhooks (verified for authenticity) are the reliable source of truth for billing state; polling or trusting the client is not. Handle failed payments gracefully with retries and dunning emails so you do not lose customers to an expired card, and manage the states cleanly (trialing, active, past-due, cancelled) with matching access control.

Get the surrounding details right, because billing bugs erode trust fast and can be legal issues. Generate receipts/invoices, handle taxes/VAT where required (providers like Stripe Tax help), and give customers self-service to update cards, change plans and cancel (a portal) — making cancellation easy is both ethical and often legally required, and it builds goodwill. Test extensively in the provider's test mode: successful payments, declines, cancellations, renewals, proration and webhook delivery, before ever going live. Reconcile that your records match the provider's. Once billing is solid, you can confidently drive toward real revenue and the transaction volume investors look for — and you have removed a major source of the support headaches and trust-damaging mistakes that plague hastily-built payment flows.

**What this looks like in practice**

- Stripe Checkout for monthly subscriptions.
- Handling failed payments and sending receipts automatically.
- A billing page where users can upgrade, downgrade or cancel.

**Checklist**

- [ ] Choose a payment provider that fits your customers/markets.
- [ ] Pick a model (subscription/usage/one-off/fee) from your pricing work.
- [ ] Use hosted checkout + customer portal to launch fast and securely.
- [ ] Provision access on payment; handle upgrades/downgrades/cancels.
- [ ] Process verified webhooks as the source of truth for billing state.
- [ ] Handle failed payments with retries + dunning; manage subscription states.
- [ ] Add receipts, tax handling and self-service; test all cases in test mode.

**Tools & services**

- Stripe / Paystack / Flutterwave / M-Pesa
- Stripe Billing + Customer Portal
- Webhook handling (verified)
- Stripe Tax / tax handling

**Common pitfalls**

- Handling raw card data yourself (PCI risk).
- Not processing webhooks, so billing state drifts.
- No dunning, losing customers to failed card charges.
- Making cancellation hard (unethical, often illegal).

**Go deeper**

- [Stripe Billing](https://stripe.com/billing)
- [Stripe webhooks best practices](https://stripe.com/docs/webhooks/best-practices)
- [Paystack (Africa)](https://paystack.com/)

**Definition of done:** A secure billing flow with checkout, webhooks, dunning and self-service.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/56-add-payments-and-billing)

---

### 57. Add transparent audit trails & tracking

> **Goal:** Record an immutable, verifiable history of key actions ("blockchain-style" transparency).
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Every significant action is verifiably recorded; tampering is detectable.

**Why this matters.** An audit trail builds trust, aids debugging and support, and satisfies compliance. Tamper-evident, transparent records are increasingly a differentiator, especially for anything involving money or data.

**Explain it like I'm 5.** You keep a clear, tamper-proof record of important actions (who did what, when) so everything is transparent and trustworthy — “blockchain-style” honesty, even without a blockchain.

For many products — anything touching money, ownership, records or sensitive changes — being able to show exactly what happened, when, and by whom is both a trust feature and an operational necessity. An audit trail is a log of significant actions (created, updated, deleted, paid, shared, permission changed) with actor, timestamp, and before/after context. Start with a well-designed audit log table capturing these events for the actions that matter, written whenever those actions occur. This alone dramatically improves support ("who changed this?"), debugging, and accountability.

To make it "blockchain-style" — tamper-evident and transparent — go a step beyond a plain log. The core technique is hash-chaining: each audit record includes a cryptographic hash of the previous record, so altering any past entry breaks the chain and is detectable. This gives you an append-only, verifiable history without needing an actual blockchain (which is usually overkill and adds cost and complexity for early startups). Where genuine external verifiability matters, you can periodically anchor a hash of your chain to a public ledger or a timestamping service, getting the credibility of immutability at a tiny fraction of the cost of putting everything on-chain. Choose the level that matches your actual trust requirements — most products need tamper-evidence, not full decentralisation.

Expose the right amount of transparency to the right people. Internally, an admin/audit view helps your team support and investigate. For users, showing them a clear history of activity on their own account or records (an activity feed, a change log, a verifiable receipt) builds confidence that your product is honest and reliable — a real differentiator in categories where trust is scarce. Be careful to log responsibly: never put secrets or excessive personal data in logs, protect the audit store from tampering and unauthorised access, and set retention that meets compliance without hoarding data. Done well, transparent tracking turns "trust us" into "verify us," which is a powerful position — and it provides the forensic record that saves you during disputes, incidents and compliance reviews.

**What this looks like in practice**

- An immutable audit log of edits, approvals and payments.
- Showing users a verifiable history timeline of their records.
- Hash-chaining records so tampering is detectable.

**Checklist**

- [ ] Identify the significant actions worth auditing (money/data/permissions).
- [ ] Design an audit log table: actor, action, timestamp, before/after.
- [ ] Write audit records whenever those actions occur.
- [ ] Add hash-chaining so tampering with past entries is detectable.
- [ ] Optionally anchor periodic hashes to a public timestamp/ledger.
- [ ] Expose an internal audit view and a user-facing activity history.
- [ ] Log responsibly (no secrets/PII overload); set retention + access control.

**Tools & services**

- An append-only audit table
- Hashing (SHA-256) for chaining
- Timestamping/anchoring service (optional)
- Admin audit UI

**Common pitfalls**

- Putting everything on an actual blockchain when tamper-evidence suffices.
- Logging secrets or excessive personal data.
- An audit store that can be edited/deleted without trace.
- No user-facing transparency, missing the trust benefit.

**Go deeper**

- [Hash chains / Merkle trees (concept)](https://en.wikipedia.org/wiki/Merkle_tree)
- [OWASP logging cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [AWS QLDB (immutable ledger idea)](https://aws.amazon.com/qldb/)

**Definition of done:** A tamper-evident audit trail with internal and user-facing transparency.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/57-add-transparent-audit-trails-and-tracking)

---

### 58. Privacy & data-protection compliance

> **Goal:** Meet privacy obligations (GDPR and local laws) with a policy, consent and data rights.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Medium · **Estimate:** 2–3 days · **Metric:** Users can access, export and delete their data; consent is genuine and compliant.

**Why this matters.** Handling personal data brings legal duties; non-compliance risks fines and lost trust. Privacy done right is also a selling point — users increasingly choose products that respect their data.

**Explain it like I'm 5.** You handle people’s personal data responsibly and follow privacy laws — telling users what you collect and letting them see or delete it. It’s promising to look after their stuff and keeping that promise.

Once you store personal data, privacy law applies — GDPR in the EU/UK, plus local laws such as Kenya's Data Protection Act, and others depending on where your users are. The good news is that the core principles are sensible and largely overlap: be transparent about what you collect and why, collect only what you need, keep it secure, do not keep it longer than necessary, and honour users' rights over their data. Building with these principles from the start ("privacy by design") is far easier than retrofitting, and it aligns with simply being a trustworthy custodian of people's information.

Put the practical pieces in place. Publish a clear privacy policy (and terms of service) that plainly states what data you collect, why, who you share it with (your processors — analytics, email, payments), and how users exercise their rights; templates and tools can get you a solid draft, but review it against your actual data practices. Implement consent where required — especially for non-essential cookies/tracking, use a proper consent banner that actually blocks scripts until consent, not a fake "we use cookies" bar. Provide the mechanisms for user rights: the ability to access/export their data, correct it, and delete their account and data on request. Keep a basic record of what personal data you hold and where.

Cover the security and vendor angles that privacy law also demands. Encrypt data in transit (HTTPS, done) and sensitive data at rest, apply least-privilege access, and minimise the personal data you collect and log in the first place — data you do not hold cannot be breached or misused. Vet your third-party processors and sign data-processing agreements where required. Have a breach-response plan, since many laws require notifying regulators and users within tight windows if personal data is exposed. You do not need a giant legal department at MVP stage, but you do need the fundamentals: a truthful policy, real consent, working data-rights mechanisms, sensible security and data minimisation. This protects you legally, and increasingly it is a genuine differentiator — respecting privacy is something users and enterprise buyers actively look for and reward.

**What this looks like in practice**

- A clear privacy policy and a cookie-consent banner where required.
- A “download my data” and “delete my account” option.
- Only collecting data you actually need.

**Checklist**

- [ ] Identify what personal data you collect and the laws that apply.
- [ ] Publish a clear, accurate privacy policy and terms of service.
- [ ] Implement real consent for non-essential cookies/tracking.
- [ ] Provide data access/export, correction and account deletion.
- [ ] Minimise data collected/logged; encrypt in transit and at rest.
- [ ] Vet processors and sign data-processing agreements where needed.
- [ ] Prepare a breach-response and notification plan.

**Tools & services**

- Privacy policy generator / lawyer review
- Consent management (Cookiebot/Osano)
- Data export/delete tooling
- DPA templates

**Common pitfalls**

- A copied privacy policy that misstates your real practices.
- A fake cookie banner that does not actually block tracking.
- No way for users to export or delete their data.
- Collecting and logging more personal data than you need.

**Go deeper**

- [GDPR overview](https://gdpr.eu/)
- [Kenya Data Protection Act (ODPC)](https://www.odpc.go.ke/)
- [Cookiebot (consent)](https://www.cookiebot.com/)

**Definition of done:** A truthful privacy policy, working consent, and functional data-rights mechanisms.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/58-privacy-and-data-protection-compliance)

---

### 59. Security hardening (OWASP Top 10)

> **Goal:** Defend against the most common web vulnerabilities before attackers find them.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Hard · **Estimate:** 3–5 days · **Metric:** Automated scans pass; common attacks are blocked; dependencies are patched.

**Why this matters.** A single serious vulnerability can leak all your data or take you offline, destroying trust overnight. Covering the common attack classes is high-leverage, non-negotiable security hygiene.

**Explain it like I'm 5.** You lock the doors and windows against the most common online attacks before hackers try them. It’s baby-proofing the house, but for security holes.

You do not need to be a security expert to avoid the most common, damaging vulnerabilities — you need to systematically cover the well-known attack classes captured in the OWASP Top 10. Most breaches at small companies come from these predictable issues, not exotic zero-days, so methodically closing them off gives you an enormous return. Work through them against your app: broken access control (covered by your authorization work — the most common issue), injection (SQL/command), cross-site scripting (XSS), cross-site request forgery (CSRF), insecure configuration, vulnerable dependencies, and sensitive-data exposure.

Apply the concrete defences. Prevent injection by always using parameterised queries / your ORM (never string-concatenate user input into SQL) and validating input. Prevent XSS by escaping/encoding output, using a framework that auto-escapes, and setting a Content Security Policy so injected scripts cannot run. Add CSRF protection for state-changing requests. Set security headers (CSP, HSTS, X-Content-Type-Options, X-Frame-Options/frame-ancestors, Referrer-Policy). Add rate limiting to APIs and auth endpoints to blunt brute force and abuse (Cloudflare helps here). Validate and constrain file uploads (type, size, storage location) and never trust anything from the client. Keep secrets out of code and errors out of the user's face (no stack traces in production).

Manage dependencies and verify your work. Vulnerable third-party packages are a leading breach vector, so enable automated dependency scanning (Dependabot, npm audit, Snyk) and keep dependencies patched. Run an automated security scan against your app, and as you grow, consider a professional penetration test before major milestones (and definitely before a fundraise or enterprise deals, where security reviews are expected). Set up a simple way for people to report vulnerabilities responsibly. Test your defences: attempt an injection, try to access another user's data, submit a malicious file, and confirm each is blocked. Security is never "done," but covering the OWASP Top 10 and keeping dependencies current puts you ahead of the vast majority of small companies and protects you from the incidents most likely to actually happen — the kind that can end a young startup's credibility in a single bad day.

**What this looks like in practice**

- Preventing SQL injection and XSS with safe queries and escaping.
- Rate-limiting logins to stop password-guessing.
- Keeping dependencies patched against known vulnerabilities.

**Checklist**

- [ ] Confirm broken-access-control defences (server-side authz everywhere).
- [ ] Use parameterised queries/ORM; validate all input (anti-injection).
- [ ] Escape output + set a CSP to prevent XSS; add CSRF protection.
- [ ] Set security headers (CSP, HSTS, X-Content-Type-Options, frame-ancestors).
- [ ] Rate-limit APIs/auth; validate and constrain file uploads.
- [ ] Enable dependency scanning and keep packages patched.
- [ ] Run a security scan; attempt attacks to verify defences; add a report channel.

**Tools & services**

- OWASP ZAP / Burp (scanning)
- Dependabot / Snyk / npm audit
- Cloudflare WAF + rate limiting
- securityheaders.com

**Common pitfalls**

- String-concatenated SQL enabling injection.
- No CSP, so an XSS flaw runs arbitrary scripts.
- Ignoring dependency vulnerabilities.
- Leaking stack traces and internal errors to users.

**Go deeper**

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP cheat sheets](https://cheatsheetseries.owasp.org/)
- [securityheaders.com](https://securityheaders.com/)

**Definition of done:** The OWASP Top 10 addressed, dependencies scanned, defences verified by testing.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/59-security-hardening-owasp-top-10)

---

### 60. Backups, disaster recovery & data export

> **Goal:** Guarantee you can recover from data loss and that users can get their data out.
>
> **Phase:** 6 — Auth, Data & Security · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** A full restore succeeds in a drill; users can export their own data.

**Why this matters.** Servers fail, mistakes delete data, and ransomware happens. A tested recovery plan turns a potential company-ending event into a controlled incident — and data portability builds user trust.

**Explain it like I'm 5.** You make sure you can always recover if data is lost, and that users can export their own data. It’s having a spare key and a fire escape — you hope you never need them, but you’re glad they exist.

You configured backups and monitoring in the infrastructure phase; now, with real user data in play, elevate that into a genuine disaster-recovery capability. The difference between a backup and disaster recovery is a tested plan: knowing not just that backups exist, but exactly how you would restore service after a serious failure — a corrupted database, a bad migration that destroyed data, an accidental deletion, a compromised server, or a provider outage. Define your targets: RPO (how much data you can afford to lose, e.g. one hour) and RTO (how long recovery may take, e.g. two hours), and make sure your backup frequency and restore process actually meet them.

Make recovery real and rehearsed. Ensure backups are automated, encrypted, and stored off the primary system (ideally a different provider or region, so one account compromise or region outage cannot take out both your data and its backup). Keep multiple restore points (point-in-time recovery is ideal) so you can roll back to before a corruption occurred, not just to last night. Then actually practise: do a full restore into a scratch environment and confirm the app works against it. This drill routinely surfaces gaps — a missing table, an un-backed-up file store, an undocumented step — that you absolutely want to discover during a calm rehearsal, not during a real 2am incident. Document the restore procedure step by step so anyone can execute it under pressure.

Add data export for users, which serves both trust and compliance. Let users export their own data in a usable format (CSV/JSON) — it reassures them they are not locked in, satisfies data-portability rights under privacy law, and is simply good practice. Round out the plan with the human side: a short disaster-recovery runbook covering scenarios and steps, an incident-communication plan (how you will tell users if something goes wrong — honest, timely updates preserve trust far better than silence), and the contact/escalation details for each critical dependency. Review the plan periodically and after any incident. This is insurance you hope never to use, but the day something goes badly wrong, a tested recovery plan and calm communication can be the difference between a survivable incident and the end of the company.

**What this looks like in practice**

- Regular backups you’ve practised restoring from scratch.
- A disaster-recovery plan for “what if the server dies?”
- A one-click export of a user’s data to CSV/JSON.

**Checklist**

- [ ] Define RPO/RTO targets and confirm backups/frequency meet them.
- [ ] Ensure backups are automated, encrypted and stored off-site.
- [ ] Keep multiple restore points (point-in-time recovery).
- [ ] Rehearse a full restore into a scratch environment; fix gaps.
- [ ] Document a step-by-step restore runbook anyone can follow.
- [ ] Give users a data export in a usable format (CSV/JSON).
- [ ] Write an incident-communication plan and dependency escalation list.

**Tools & services**

- Managed DB PITR + off-site backups
- Object storage (different region/provider)
- A DR runbook
- User data-export feature

**Common pitfalls**

- Backups stored alongside the thing they are meant to protect.
- Never actually testing a restore until a real disaster.
- No documented procedure, so recovery is improvised under stress.
- Locking users in with no way to export their data.

**Go deeper**

- [Google SRE: disaster recovery](https://sre.google/workbook/)
- [AWS backup & DR concepts](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html)
- [GDPR data portability](https://gdpr.eu/right-to-data-portability/)

**Definition of done:** A tested disaster-recovery plan (meeting RPO/RTO) and a user data-export feature.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/60-backups-disaster-recovery-and-data-export)

---

## Phase 7: Content, SEO & Launch Prep

_Write the pages that rank and convert, ship technical SEO, add legal pages, wire up a status page and rehearse the launch so nothing breaks when the traffic lands._

**Outcome:** Indexable, trustworthy pages and a launch runbook you have tested.

### 61. Build out the marketing site

> **Goal:** Expand from a landing page to a full marketing site: features, pricing, about, contact.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Medium · **Estimate:** 3–6 days · **Metric:** Prospects can self-serve answers and convert; pages are indexed and tracked.

**Why this matters.** A complete marketing site answers the questions prospects have at each stage, builds credibility, and gives search engines and ads real pages to send traffic to and rank.

**Explain it like I'm 5.** You grow from a single page into a full website — with pages explaining features, pricing, your story and how to contact you — so visitors can learn everything and decide to buy.

Your single landing page got you started, but converting a range of visitors — the curious, the comparison-shopper, the ready-to-buy, the enterprise evaluator — needs a fuller marketing site. Each core page does a job. A features/product page shows what it does and, crucially, the outcomes (organised around benefits, not a feature dump). A pricing page turns interest into intent by clearly presenting plans, what each includes, and answering pricing objections — it is one of your highest-traffic, highest-stakes pages, so make it clear, honest and easy to act on. An about page builds trust through your story and team (people buy from people). A contact page gives prospects a way to reach you and signals you are real.

Design each page to convert, not just inform. Every page should have a clear purpose and a call to action appropriate to where the visitor is in their journey. Reuse your design system and brand so the whole site feels coherent and premium. Add social proof throughout — testimonials, logos, case studies, usage stats — because credibility signals lift conversion everywhere they appear. Anticipate and answer objections directly (an FAQ section, comparison content, security/trust info for B2B). Keep navigation clear and the path to sign up or contact never more than a click or two away. Study how sites you admire structure these pages, and adapt rather than copy.

Build for growth and iteration. Structure the site so you can easily add pages (a blog, use-case pages, comparison pages, landing pages for specific campaigns) as your content and SEO efforts expand — these will become major traffic sources. Make sure every page is fast, responsive, and has proper titles, meta descriptions and OG tags (your SEO and share work). Instrument each page with analytics so you can see where visitors drop off and which pages convert. Do not try to make every page perfect before launch; get the core set live and improve them continuously based on data and the questions prospects actually ask. A complete, credible, conversion-focused marketing site is the storefront that turns your traffic-generation efforts into sign-ups and revenue — it is where much of your growth work ultimately lands.

**What this looks like in practice**

- Adding Features, Pricing, About and Contact pages.
- A pricing page with clear tiers and a FAQ.
- A story page that builds trust with the founder’s “why.”

**Checklist**

- [ ] Build core pages: features/product, pricing, about, contact.
- [ ] Organise each around outcomes with a clear, stage-appropriate CTA.
- [ ] Make pricing clear and honest; answer pricing objections.
- [ ] Add social proof (testimonials, logos, stats) throughout.
- [ ] Reuse the design system; keep navigation and sign-up path simple.
- [ ] Add titles, meta, OG tags and analytics to every page.
- [ ] Structure for easy expansion (blog, use-cases, comparisons).

**Tools & services**

- Your framework / CMS
- Design system + brand kit
- Analytics
- Testimonial/social-proof sources

**Common pitfalls**

- A feature dump with no outcomes or CTA.
- A confusing or hidden pricing page.
- No social proof, so credibility is low.
- Pages that are slow or broken on mobile.

**Go deeper**

- [Julian Shapiro: marketing pages](https://www.julian.com/guide/growth/landing-pages)
- [Good pricing page patterns](https://www.priceintelligently.com/blog)
- [Land-book (inspiration)](https://land-book.com/)

**Definition of done:** A coherent, fast marketing site with features, pricing, about and contact pages.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/61-build-out-the-marketing-site)

---

### 62. Lay the technical SEO foundation

> **Goal:** Make your site fully crawlable and indexable with sitemaps, robots, meta and structured data.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** Key pages indexed in Search Console with no crawl/index errors.

**Why this matters.** Organic search is one of the most durable, compounding acquisition channels. Technical SEO is the foundation — if search engines cannot crawl and understand your site, no content will rank.

**Explain it like I'm 5.** You set things up so Google can easily read and list your site. It’s making sure the librarian can find your book and put it on the right shelf.

Search can become your cheapest, most compounding growth channel, but only if search engines can crawl, understand and index your site — which is what technical SEO ensures. Start with the basics that are easy to get wrong: a sitemap.xml listing your important pages (and submitted to Google Search Console), a robots.txt that allows crawling of what should be public and blocks what should not, and confirmation that your pages actually return crawlable content (a special concern for client-side-rendered SPAs, which may need server-side rendering, static generation, or prerendering so crawlers see real content rather than an empty shell).

Get the on-page technical elements right on every page. Each page needs a unique, descriptive title tag and meta description (these drive both ranking and click-through from results), a single clear H1, and a logical heading structure. Set canonical URLs to avoid duplicate-content confusion, and make sure your URL structure is clean and readable. Add structured data (Schema.org JSON-LD) for relevant types — Organisation, Product, FAQ, Article, BreadcrumbList — which helps search engines understand your content and can earn rich results that stand out. Ensure the site is mobile-friendly and fast (Core Web Vitals are ranking factors, and you have already invested there), and served over HTTPS.

Set up the tools and avoid the classic mistakes. Verify your site in Google Search Console (and Bing Webmaster Tools) — it is free and tells you how Google sees your site, which pages are indexed, what queries you appear for, and any crawl or indexing errors; check it regularly. Fix broken links and set up proper redirects (301s) for any URL changes so you never lose accumulated ranking. Handle internationalisation (hreflang) if you serve multiple languages/regions. A frequent, painful error is accidentally blocking your whole site from indexing (a stray "noindex" or a disallow-all robots.txt left over from staging) — double-check this before and after launch. With a solid technical foundation, your content and link-building efforts can actually translate into rankings and a steady stream of free, high-intent traffic that grows over time.

**What this looks like in practice**

- A sitemap.xml and robots.txt so crawlers know what to index.
- Unique title and description tags on every page.
- Structured data so Google shows rich results.

**Checklist**

- [ ] Generate and submit a sitemap.xml; configure robots.txt correctly.
- [ ] Ensure pages return crawlable content (SSR/SSG/prerender for SPAs).
- [ ] Give every page a unique title, meta description and single H1.
- [ ] Set canonical URLs and clean, readable URL structures.
- [ ] Add Schema.org JSON-LD structured data for relevant types.
- [ ] Verify in Google Search Console + Bing; monitor indexing/errors.
- [ ] Fix broken links, set 301 redirects, and check nothing is noindexed.

**Tools & services**

- Google Search Console + Bing Webmaster
- Screaming Frog / Sitebulb (crawl audit)
- Schema.org JSON-LD
- SSR/SSG/prerender for SPAs

**Common pitfalls**

- A client-only SPA that crawlers see as empty.
- Leaving a staging "noindex"/disallow-all in production.
- Duplicate or missing titles and meta descriptions.
- Breaking URLs without 301 redirects, losing rankings.

**Go deeper**

- [Google Search Central](https://developers.google.com/search)
- [Google Search Console](https://search.google.com/search-console/about)
- [Schema.org](https://schema.org/)

**Definition of done:** A crawlable, indexable site with sitemaps, correct meta, structured data and GSC set up.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/62-lay-the-technical-seo-foundation)

---

### 63. Keyword research & on-page SEO

> **Goal:** Find what your customers search for and target those terms with optimised pages.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Growing rankings and organic clicks for target keywords in Search Console.

**Why this matters.** Ranking for terms your buyers actually search brings in high-intent traffic for free, indefinitely. Keyword research tells you which content to create and how to optimise it.

**Explain it like I'm 5.** You find the exact words people type into Google when they have your problem, then make pages that answer those searches. It’s stocking the shelves with what shoppers are actually looking for.

Content only drives growth if it targets what people actually search for, so start with keyword research. Brainstorm the terms your ICP would type when they have the problem you solve — problem phrases ("how to stop losing WhatsApp leads"), solution phrases ("lead management app"), comparison phrases ("X vs Y"), and questions. Expand and validate these with a keyword tool that shows search volume and difficulty, plus free signals like Google autocomplete, "People also ask," related searches, and communities where your audience asks questions. The goal is a prioritised list of terms with real demand that you can realistically rank for.

Prioritise by intent and winnability, not just volume. High-volume head terms are competitive and often lower-intent; long-tail terms (longer, more specific phrases) have less volume but higher intent and are far easier for a new site to rank for — they are where early SEO wins come from. Weigh each keyword by search volume, how hard it is to rank (competition), and how commercially valuable the intent is (someone searching "buy" or "best tool for X" is closer to converting than someone searching a broad definition). Map keywords to page types: transactional terms to product/pricing/comparison pages, informational terms to blog content, so each page has a clear target.

Optimise pages properly without over-doing it. For each target keyword, create or improve a page that genuinely and thoroughly satisfies the searcher's intent — search engines reward content that best answers the query, so depth and usefulness beat keyword-stuffing (which is penalised). Work the keyword and natural variations into the title, H1, headings, body, image alt text and URL, but write for humans first. Cover the topic comprehensively, link internally between related pages, and earn or add credible external references. Track your rankings and organic traffic over time (Search Console shows the queries you appear for and can reveal easy wins where you rank on page two). SEO is a compounding, patient channel: the pages you optimise now can bring in high-intent visitors for years, at effectively zero marginal cost — a powerful complement to paid channels that stop the moment you stop paying.

**What this looks like in practice**

- Discovering people search “dog sitter near me” and building a page for it.
- Targeting a specific phrase in the page title, headings and content.
- Using a keyword tool to find low-competition terms you can win.

**Checklist**

- [ ] Brainstorm problem, solution, comparison and question terms your ICP uses.
- [ ] Validate with a keyword tool + autocomplete/PAA/related searches.
- [ ] Prioritise by volume, difficulty and commercial intent.
- [ ] Favour long-tail, high-intent terms for early wins.
- [ ] Map keywords to page types (transactional vs informational).
- [ ] Create/optimise pages that fully satisfy intent; work terms in naturally.
- [ ] Track rankings and organic traffic; chase page-two easy wins.

**Tools & services**

- Ahrefs / Semrush / Ubersuggest
- Google Keyword Planner
- Google Search Console (queries)
- AlsoAsked / AnswerThePublic

**Common pitfalls**

- Chasing high-volume terms you cannot possibly rank for yet.
- Keyword-stuffing instead of satisfying intent.
- Targeting terms with no commercial intent.
- Never tracking results, so you cannot double down on what works.

**Go deeper**

- [Ahrefs beginner SEO guide](https://ahrefs.com/blog/seo-basics/)
- [Backlinko keyword research](https://backlinko.com/keyword-research)
- [Google: creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

**Definition of done:** A prioritised keyword map with optimised pages targeting high-intent terms.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/63-keyword-research-and-on-page-seo)

---

### 64. Start a content engine (blog)

> **Goal:** Publish useful content consistently to attract, educate and convert your audience.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Medium · **Estimate:** Ongoing (start in 2–3 days) · **Metric:** Consistent publishing driving growing organic traffic and shares.

**Why this matters.** Content compounds: each useful article keeps attracting search traffic and building authority for years. It is a durable, low-cost channel that also fuels social, email and sales.

**Explain it like I'm 5.** You publish helpful articles regularly so people find you through search and learn to trust you. It’s giving away useful tips so people know you’re the expert.

A blog (or content engine more broadly) is how you turn your keyword research and domain expertise into a compounding traffic and trust machine. Unlike ads, which stop the moment you stop paying, a good article keeps attracting visitors and building authority indefinitely. The strategy is to consistently publish content that genuinely helps your target audience — answering their questions, solving adjacent problems, teaching them something valuable — mapped to the keywords and intents you identified. This attracts people at the top of the funnel, builds trust and authority, gives you material to share on social and email, and creates the pages that rank in search.

Focus on quality and intent over volume, especially early. A handful of comprehensive, genuinely useful articles that fully answer high-intent queries will outperform dozens of thin, generic posts — and Google increasingly rewards demonstrable expertise and helpfulness while penalising low-value content (including lazy AI spam). Write for your ICP, in your brand voice, drawing on your real expertise and the customer language from your interviews. Include practical value (steps, examples, data, templates), strong formatting (headings, lists, images) for readability, and a natural call to action toward your product where relevant. Cover topics in clusters — a pillar page plus related articles that interlink — to build topical authority that search engines reward.

Make it sustainable and repurpose relentlessly. Set a realistic cadence you can maintain (consistency matters more than frequency — one solid post a week beats five then nothing), keep an editorial calendar mapped to your keyword priorities, and batch work where you can. Then multiply each piece: turn one article into social posts, an email newsletter section, a short video or thread, and slides — one core piece can feed a week of content across channels, which is essential when you are small. Update and improve older posts as they age (refreshing content often lifts rankings more cheaply than writing new). Track which posts drive traffic and conversions, and do more of what works. AI tools can help you draft and outline faster, but keep a human editing for accuracy, voice and genuine insight — the goal is content people find genuinely useful, because that is what earns the links, shares, rankings and trust that compound into a major growth channel.

**What this looks like in practice**

- A weekly blog post answering a real customer question.
- A guide that ranks on Google and quietly brings sign-ups for years.
- Repurposing one post into a thread, a video and a newsletter.

**Checklist**

- [ ] Plan an editorial calendar mapped to your keyword priorities.
- [ ] Write comprehensive, genuinely useful posts in your brand voice.
- [ ] Organise content in clusters (pillar + related, interlinked).
- [ ] Include practical value and a natural CTA toward the product.
- [ ] Set a sustainable cadence; batch and use AI drafts with human editing.
- [ ] Repurpose each post into social, email, video and threads.
- [ ] Track traffic/conversions per post; refresh and improve older ones.

**Tools & services**

- A CMS / MDX blog
- Editorial calendar (Notion/Trello)
- AI drafting (edited by a human)
- Search Console + analytics

**Common pitfalls**

- Thin, generic or AI-spam posts that never rank.
- Inconsistent publishing that kills momentum.
- Writing about yourself instead of what customers search for.
- Never repurposing, wasting each post’s potential reach.

**Go deeper**

- [Ahrefs blog (content SEO)](https://ahrefs.com/blog/)
- [Animalz content marketing](https://www.animalz.co/blog/)
- [Google helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

**Definition of done:** A live blog with a content calendar and a repeatable publish-and-repurpose process.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/64-start-a-content-engine-blog)

---

### 65. Add legal pages (terms, privacy, cookies, refunds)

> **Goal:** Publish the legal pages that protect you and inform users.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Easy · **Estimate:** 1 day · **Metric:** All required policies are live, accurate and consented to where needed.

**Why this matters.** Legal pages set the rules of engagement, limit your liability, satisfy legal and platform requirements, and signal legitimacy. Missing them creates real legal and trust risk.

**Explain it like I'm 5.** You add the “boring but important” legal pages — terms, privacy, cookies, refunds — that protect you and tell users the rules. It’s the fine print that keeps everyone safe.

Legal pages are unglamorous but necessary — they protect your business, inform your users, and are often required by law, payment providers, ad platforms and app stores. The essentials are: Terms of Service (the contract governing use of your product — acceptable use, your liability limits, dispute terms, account termination), a Privacy Policy (what personal data you collect and how you handle it — tied to your privacy-compliance work), a Cookie Policy and consent (if you use cookies/tracking), and — if you take payments — a clear refund/cancellation policy. Depending on your product you may also need an acceptable-use policy, a DPA for business customers, or specific disclosures.

Get them right for your actual business, not just copy-pasted. Templates and generators are a reasonable starting point at MVP stage and far better than nothing, but a generic policy that misstates your real practices can be worse than useless (and, for privacy, potentially unlawful). Customise them to reflect what you actually do: your real data practices, your real refund terms, your jurisdiction. For anything high-stakes — significant liability, handling sensitive data, regulated industries, taking real money — have a lawyer review them; it is money well spent and cheap relative to the risk. Make sure the terms and refund policy match how your billing actually behaves so you are not promising something your system does not do.

Make them accessible and enforceable. Link legal pages in your footer (a near-universal convention) and surface them at the right moments: link Terms and Privacy at sign-up and, where appropriate, require explicit agreement (a checkbox or clear "by signing up you agree" statement) so the terms are actually binding. Show your refund/cancellation terms at checkout. Keep them up to date as your product and the law change, and note the "last updated" date. While you are here, add the trust-building basics that often live nearby: a clear contact method and, for credibility, your business identity where relevant. These pages will not win you customers, but their absence can lose you the ability to take payments, run ads, list on app stores, or defend yourself in a dispute — so treat them as a required part of being a real, legitimate business.

**What this looks like in practice**

- Terms of Service and a Privacy Policy linked in the footer.
- A clear refund/cancellation policy on the pricing page.
- A cookie notice where the law requires one.

**Checklist**

- [ ] Publish Terms of Service, Privacy Policy and (if used) a Cookie Policy.
- [ ] Add a clear refund/cancellation policy if you take payments.
- [ ] Customise all of them to your real practices and jurisdiction.
- [ ] Get high-stakes terms reviewed by a lawyer.
- [ ] Ensure terms/refunds match how billing actually behaves.
- [ ] Link them in the footer and require agreement at sign-up/checkout.
- [ ] Keep them updated with a visible "last updated" date.

**Tools & services**

- Termly / iubenda / GetTerms (drafts)
- Lawyer review (high-stakes)
- Footer + sign-up/checkout links
- Consent management

**Common pitfalls**

- No legal pages at all (blocks payments/ads/app stores).
- Generic templates that misstate your real practices.
- Refund terms that contradict your billing behaviour.
- Terms not actually agreed to, so they are unenforceable.

**Go deeper**

- [Termly (policy generator)](https://termly.io/)
- [iubenda](https://www.iubenda.com/)
- [Stripe: required policies](https://stripe.com/docs/treasury/marketing-treasury)

**Definition of done:** Accurate, accessible, agreed-to legal pages covering terms, privacy, cookies and refunds.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/65-add-legal-pages-terms-privacy-cookies-refunds)

---

### 66. Build a help center / docs / FAQ

> **Goal:** Give users self-service answers so they succeed without waiting on you.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Easy · **Estimate:** 2–3 days · **Metric:** Falling repeat-question support load; users self-serve common answers.

**Why this matters.** Good documentation reduces support load, improves activation and retention, and ranks in search. It lets users solve problems instantly — and lets you scale support without scaling headcount.

**Explain it like I'm 5.** You create a help section so users can answer their own questions without waiting for you. It’s an instruction manual and FAQ so people aren’t stuck.

As users arrive, they will have questions — how to do X, why Y happened, what Z means. Answering each one personally does not scale and slows users down. A help center (docs, guides, FAQ) lets users find answers instantly, which improves their experience, reduces your support burden, and — because help content ranks in search — even brings in new traffic from people searching for how to solve the problem your product addresses. It also directly supports activation and retention: users who can quickly figure out how to get value are far more likely to stick around than those who get stuck and give up.

Build it around real user needs, not an exhaustive manual. Start with the questions you actually get (from your alpha, support conversations, and onboarding stumbles) — these are the highest-value articles. Cover getting started, the core workflows, common problems and their fixes, billing/account questions, and a plain FAQ for quick hits. Write clearly and concisely with steps, screenshots or short clips, and structure it so answers are easy to find (good search, sensible categories). Keep the tone helpful and in your brand voice. You do not need a hundred articles to launch — a focused set covering the common questions delivers most of the value, and you expand it as new questions recur.

Integrate support into the product and keep it fresh. Surface relevant help in context (a "?" link near a tricky feature, help suggestions in your support widget) so users get answers at the moment of confusion. Offer a clear path to human help when self-service is not enough (contact form, email, chat) — self-service should reduce, not replace, the option to reach a person, especially early when talking to users is invaluable. Track which articles are viewed and searched (and which searches return nothing) to find gaps and prioritise new content. Update docs whenever the product changes so they never mislead. A solid, well-maintained help center is a quiet multiplier: it improves activation and retention, deflects repetitive support so you can focus, and even earns search traffic — all while making users feel supported rather than stranded.

**What this looks like in practice**

- A searchable help center with how-to articles.
- An FAQ answering the top 10 support questions.
- Short screen-recording tutorials for common tasks.

**Checklist**

- [ ] List the real questions from alpha, support and onboarding stumbles.
- [ ] Write focused articles: getting started, core workflows, common fixes, billing.
- [ ] Use clear steps with screenshots/short clips; make search good.
- [ ] Add a plain FAQ for quick answers.
- [ ] Surface relevant help in context within the product.
- [ ] Offer a clear path to human support when needed.
- [ ] Track views/searches to find gaps; keep docs updated with the product.

**Tools & services**

- Help center (Intercom/HelpScout/GitBook/Docusaurus)
- Loom (short clips)
- In-app help widget
- Search analytics

**Common pitfalls**

- No self-service, so every question hits you personally.
- Docs that go stale and mislead users.
- Writing an exhaustive manual instead of answering real questions.
- Hiding the path to human help entirely.

**Go deeper**

- [GitBook](https://www.gitbook.com/)
- [Docusaurus](https://docusaurus.io/)
- [Write the Docs](https://www.writethedocs.org/guide/)

**Definition of done:** A searchable help center covering common questions, surfaced in context.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/66-build-a-help-center-docs-faq)

---

### 67. Set up a status page & changelog

> **Goal:** Communicate uptime/incidents transparently and show a steady stream of improvements.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Easy · **Estimate:** half a day · **Metric:** Incidents are communicated transparently; shipped improvements are visible.

**Why this matters.** A status page builds trust during incidents by replacing silence with transparency. A changelog shows momentum, keeps users informed of new value, and signals an actively improving product.

**Explain it like I'm 5.** You publish a page showing whether your service is up, and a list of the improvements you keep shipping. It’s being honest about hiccups and proud of progress.

Two lightweight communication tools punch above their weight. A status page shows the real-time health of your service and a history of incidents. When something breaks, the difference between users seeing an honest "we're aware and working on it" and hearing nothing is enormous — silence breeds frustration and support tickets, while transparency builds trust and reduces the flood of "is it down?" messages. Set up a status page (a hosted tool, or a simple self-hosted one) that shows current status and lets you post incident updates. Wire it to your uptime monitoring where possible so status reflects reality, and commit to updating it promptly during incidents with honest, plain-language updates and, afterwards, a brief post-mortem for significant ones.

A changelog (or "what's new") shows the steady stream of improvements you are shipping. This matters more than founders expect: it demonstrates momentum and that the product is alive and improving (reassuring to users, prospects and investors alike), keeps users aware of new value they might otherwise miss (which drives feature adoption and re-engagement), and creates a habit of celebrating progress. Keep it simple — a page or feed with dated entries describing what changed, in user-friendly language focused on benefits, not internal jargon. Announce notable updates through your other channels (in-app, email, social) to maximise the re-engagement value.

Make both sustainable and honest. For the status page, decide what components to show, set up subscriber notifications so users can opt in to incident alerts, and resist the temptation to hide or downplay incidents — transparency during trouble is exactly when trust is won or lost, and a mature, honest incident response impresses far more than pretending nothing happened. For the changelog, build a habit of updating it as part of your release process so it does not fall behind (a stale changelog signals a stalled product). Neither of these is technically hard, and together they shape how reliable and alive your product feels — a transparent status page turns incidents into trust-building moments, and a healthy changelog turns your ongoing work into a visible, momentum-signalling drumbeat that reassures everyone watching that the product is going somewhere.

**What this looks like in practice**

- A status page that shows uptime and any incidents.
- A changelog: “This week we added X and fixed Y.”
- Auto-updating the status page when monitoring detects downtime.

**Checklist**

- [ ] Set up a status page showing current health and incident history.
- [ ] Wire it to uptime monitoring; enable subscriber notifications.
- [ ] Commit to prompt, honest updates during incidents + post-mortems.
- [ ] Create a changelog/"what’s new" with dated, benefit-focused entries.
- [ ] Update the changelog as part of every release.
- [ ] Announce notable updates via in-app, email and social.
- [ ] Never hide incidents — transparency is where trust is won.

**Tools & services**

- Statuspage / BetterStack / Instatus
- Uptime monitor integration
- Changelog tool (or a simple page)
- In-app/email announcements

**Common pitfalls**

- Silence during outages, breeding frustration and tickets.
- A status page that never reflects real incidents.
- A stale changelog that signals a stalled product.
- Changelog entries full of internal jargon, not user benefits.

**Go deeper**

- [Instatus (status pages)](https://instatus.com/)
- [Atlassian: incident communication](https://www.atlassian.com/incident-management/incident-communication)
- [Changelog best practices](https://keepachangelog.com/)

**Definition of done:** A live status page wired to monitoring and a regularly updated changelog.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/67-set-up-a-status-page-and-changelog)

---

### 68. Run a pre-launch checklist & rehearsal

> **Goal:** Systematically verify everything works before you drive real traffic and attention.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** Every critical path works flawlessly under a realistic dry run.

**Why this matters.** Launch amplifies both your product and its flaws. A thorough pre-launch pass catches the broken sign-up, the failing payment or the missing tracking before they cost you your one big moment.

**Explain it like I'm 5.** Before opening the doors to a crowd, you run through a checklist and a practice run to make sure nothing’s broken. It’s a dress rehearsal so launch day goes smoothly.

Launch day concentrates attention: a surge of visitors, press, and first impressions that you rarely get twice. If the sign-up is broken, payments fail, the site falls over, or your analytics is not recording, you waste your hardest-won moment. A structured pre-launch checklist and rehearsal catches these issues while it is still private. Go through the entire experience as a brand-new user would — from clicking an ad or link, to landing, to signing up, to reaching the aha moment, to (if relevant) paying — on multiple devices and browsers, and confirm every step works flawlessly and feels good.

Verify the whole system, not just the happy path. Functionality: sign-up/login (including Google), the core flow, payments in live mode with a real card (then refund yourself), email delivery (welcome, reset, receipts actually arrive and are not in spam), and notifications. Infrastructure: the site is fast, HTTPS is valid, it handles load (consider a light load test if you expect a spike), backups and monitoring are on, and errors are being tracked. Analytics: confirm your tracking actually fires and records key events, because launch traffic you cannot measure is largely wasted learning. SEO/sharing: titles, meta, OG images render correctly. Legal: policies are live and linked. Also prepare for support — you will get questions and bug reports, so be ready to respond fast.

Rehearse the launch itself, not just the product. Have your launch assets ready and scheduled (posts, emails, Product Hunt submission, press outreach — the next task), know exactly what you will publish where and when, and line up your first supporters. Do a dry run of the sequence. Prepare a rollback plan and keep the ability to deploy a fix quickly, because something usually needs a last-minute tweak. Assign who watches what on launch day (errors, support, social, the funnel). Going through a comprehensive checklist may feel tedious when you are itching to launch, but it is precisely the discipline that turns a chaotic, bug-ridden launch into a smooth one — protecting the credibility and momentum that a good launch can generate and a bad one can squander.

**What this looks like in practice**

- A pre-launch checklist covering analytics, payments, emails and SEO.
- A rehearsal where the team walks the full sign-up-to-pay flow.
- Load-testing to be sure the site survives a traffic spike.

**Checklist**

- [ ] Walk the full new-user journey on multiple devices/browsers.
- [ ] Test auth (incl. Google), core flow, live payments (then refund), emails, notifications.
- [ ] Confirm speed, valid HTTPS, monitoring, backups and error tracking.
- [ ] Verify analytics actually fires and records key events.
- [ ] Check titles/meta/OG render; confirm legal pages are live.
- [ ] Prepare support to respond fast to questions and bugs.
- [ ] Ready and rehearse launch assets/sequence; prepare a rollback plan.

**Tools & services**

- A written launch checklist
- Real devices + BrowserStack
- Live payment test + refund
- Analytics debugger

**Common pitfalls**

- Discovering a broken sign-up/payment during the launch surge.
- Analytics not firing, so launch traffic teaches you nothing.
- Emails landing in spam on the biggest day.
- No rollback plan when a last-minute bug appears.

**Go deeper**

- [YC: launch checklist](https://www.ycombinator.com/library)
- [Startup launch checklists](https://www.checklist.com/)
- [GTMetrix / load testing (k6)](https://k6.io/)

**Definition of done:** A completed pre-launch checklist with the full journey verified and launch rehearsed.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/68-run-a-pre-launch-checklist-and-rehearsal)

---

### 69. Prepare launch assets

> **Goal:** Create the demo video, press kit, screenshots and channel-specific launch content.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Every channel has tailored, ready-to-publish assets before launch day.

**Why this matters.** A great launch needs great assets ready to go. A crisp demo, clear screenshots and tailored posts make your launch shareable and credible across Product Hunt, social, press and email.

**Explain it like I'm 5.** You prepare all the “show off” materials — a demo video, screenshots, a press kit and posts — so launch day, everything you need is ready to go, not made in a panic.

A launch is only as strong as the assets you fire on the day, and scrambling to make them under launch-day pressure guarantees mediocre results — so prepare them in advance. The centrepiece for most products is a short demo video (30–90 seconds) that shows the product solving the problem: the pain, your solution in action, and the outcome. Keep it tight, well-produced enough to look credible (clean screen recording, clear narration or captions, your branding), and focused on value rather than an exhaustive feature tour. This single asset works everywhere — your site hero, Product Hunt, social, email, ads — so it is worth doing well.

Assemble the supporting kit. High-quality screenshots and/or a GIF showing the product in action (with your good seed data so screens look alive). A press kit / one-pager: a concise description, your logo and brand assets, founder bios and photos, key facts/stats, and contact info — so a journalist or blogger can cover you without chasing you for materials. Compelling copy in several lengths: a one-liner, a short paragraph, and a longer description, all reusable across channels. Your OG/social share images (done earlier) so shared links look great. If launching on Product Hunt, prepare its specific assets (gallery images, tagline, first comment/maker story) since it has its own format and norms.

Tailor content to each channel rather than blasting the same post everywhere. Write channel-specific versions: a personal, story-driven post for LinkedIn; a punchy thread or short post for X; a genuine, community-appropriate message for any groups or subreddits (respecting their self-promotion rules); a launch email to your waitlist (your warmest audience — do not neglect them). Draft your Product Hunt maker comment and line up supporters to engage authentically. Prepare responses to likely questions. Schedule what can be scheduled and have the rest queued and ready. Having every asset polished and ready turns launch day from a frantic scramble into a confident, coordinated push — which is exactly what maximises the reach and credibility of the one moment you get the most attention.

**What this looks like in practice**

- A 60-second demo video showing the product in action.
- A press kit with logos, screenshots and a boilerplate description.
- Pre-written launch posts for X, LinkedIn and Product Hunt.

**Checklist**

- [ ] Produce a tight 30–90s demo video showing pain → solution → outcome.
- [ ] Capture high-quality screenshots/GIFs using good seed data.
- [ ] Build a press kit/one-pager (description, assets, bios, facts, contact).
- [ ] Write reusable copy in one-liner, paragraph and long forms.
- [ ] Prepare Product Hunt assets (gallery, tagline, maker comment).
- [ ] Draft channel-specific posts (LinkedIn, X, communities) + a waitlist email.
- [ ] Line up supporters; schedule/queue everything in advance.

**Tools & services**

- Screen Studio / Loom / CapCut (video)
- Figma/Canva (screenshots, press kit)
- Product Hunt (assets)
- Email tool (waitlist)

**Common pitfalls**

- Making assets in a rush on launch day.
- A long, feature-dump demo instead of a tight value story.
- One generic post blasted identically to every channel.
- Ignoring your warmest audience — the waitlist.

**Go deeper**

- [Product Hunt launch guide](https://www.producthunt.com/launch)
- [Screen Studio (demo videos)](https://www.screen.studio/)
- [Press kit examples](https://presskit.io/)

**Definition of done:** A polished, channel-ready set of launch assets (demo, screenshots, press kit, copy).

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/69-prepare-launch-assets)

---

### 70. Execute the public launch

> **Goal:** Run a coordinated launch across your channels to drive your first wave of users.
>
> **Phase:** 7 — Content, SEO & Launch Prep · **Difficulty:** Medium · **Estimate:** 1 day (plus follow-up) · **Metric:** A first wave of sign-ups and clarity on which channels convert best.

**Why this matters.** Launch is your first big traffic moment and a chance to generate momentum, feedback and early adopters. A coordinated execution turns your preparation into real sign-ups and attention.

**Explain it like I'm 5.** You actually launch — telling the world across all your channels on the same day to get your first wave of users. It’s cutting the ribbon and inviting everyone in at once.

Launch day is when preparation meets attention. With your product verified and assets ready, execute a coordinated push across your channels to drive a concentrated wave of traffic, sign-ups and awareness. Think of "launch" as a campaign, not a single tweet — and note that many successful products launch more than once (a Product Hunt launch, a "we're out of beta" launch, feature launches), so treat this as the first of several coordinated moments rather than a make-or-break event. Pick a good day and time (avoid holidays; for Product Hunt, its early-morning US timing matters), and start with your warmest audiences.

Sequence the day for maximum effect. Notify your waitlist and existing supporters first — they are most likely to convert and to help amplify. If launching on Product Hunt or similar, post early and engage every comment authentically throughout the day (engagement drives ranking and reach). Publish your channel-specific content (LinkedIn story, X thread, relevant communities — following their rules) on a schedule, and personally reach out to people and any press/newsletter contacts who might share. Be genuinely present and responsive all day: answer questions, thank supporters, fix urgent issues fast, and ride the conversation. Momentum compounds — early traction attracts more attention — so front-load energy and engagement.

Watch, respond and capture the learning. Monitor your funnel live (traffic, sign-ups, activation, errors) so you can spot and fix problems immediately and see which channels are actually working. Expect something to break or a question to recur — respond quickly and visibly; a well-handled hiccup can build more goodwill than a flawless-but-silent launch. Capture feedback and sign-ups diligently; these early users are gold for the next phase. Afterwards, do a quick retrospective: what drove the most quality traffic, what converted, what surprised you, and what you would do differently next time — this directly informs your growth strategy. Do not be discouraged if the launch is not viral; most are not, and steady momentum beats a one-day spike. The real win is a batch of engaged early users, a validated sense of which channels work, and the confidence and material to keep driving toward your growth targets.

**What this looks like in practice**

- A coordinated Product Hunt + social + email launch.
- Emailing your waitlist the moment you go live.
- Rallying friends and early users to engage in the first hours.

**Checklist**

- [ ] Pick the day/time; treat launch as a campaign, not one post.
- [ ] Notify your waitlist and supporters first.
- [ ] Post on Product Hunt (early) and engage every comment all day.
- [ ] Publish tailored content per channel on a schedule; do personal outreach.
- [ ] Be present and responsive: answer, thank, fix urgent issues fast.
- [ ] Monitor the funnel live; capture sign-ups and feedback.
- [ ] Run a retrospective on what drove quality traffic and conversions.

**Tools & services**

- Product Hunt
- Social + email (scheduled)
- Live analytics dashboard
- Error tracking + fast deploy

**Common pitfalls**

- Treating launch as one tweet and hoping it goes viral.
- Ignoring comments/questions, killing engagement and reach.
- Not monitoring the funnel, missing a broken step live.
- Getting discouraged by a non-viral launch and losing momentum.

**Go deeper**

- [Product Hunt launch guide](https://www.producthunt.com/launch)
- [YC: how to launch (again and again)](https://www.ycombinator.com/library)
- [Lenny’s Newsletter: launches](https://www.lennysnewsletter.com/)

**Definition of done:** A coordinated launch executed across channels, with results captured and reviewed.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/70-execute-the-public-launch)

---

## Phase 8: Analytics, Tracking & Feedback

_Instrument the funnel, define your north-star metric, watch session replays, run experiments and build a fast loop from user feedback to shipped fix._

**Outcome:** A dashboard of the metrics that matter and a working feedback loop.

### 71. Install web & product analytics

> **Goal:** Track visitors and in-product behaviour so you can see what people actually do.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Easy · **Estimate:** half a day · **Metric:** Reliable data flowing; you can see sources and in-product behaviour.

**Why this matters.** You cannot improve what you cannot measure. Analytics turns guesses into evidence, revealing where users come from, what they do, and where they drop off.

**Explain it like I'm 5.** You add tools that show how many people visit and what they do inside your app, so you can see reality instead of guessing. It’s putting a scoreboard on your product.

Flying blind is the default state of a new product, and analytics is how you turn on the lights. There are two complementary layers. Web analytics tracks traffic — where visitors come from (channels, campaigns, referrers), which pages they see, and top-line conversion. Product analytics tracks what users do inside the product — which features they use, the steps they complete, where they drop off, how often they return. You need both: web analytics tells you if your marketing works; product analytics tells you if your product works. Install them early so you accumulate data from day one, because you cannot analyse a past you did not measure.

Choose tools that fit your needs and values. For web analytics, Google Analytics 4 is free and powerful but heavier and privacy-sensitive; privacy-friendly alternatives (Plausible, Fathom, Umami) are lightweight, simple and cookieless — a good fit if you value speed and privacy. For product analytics, tools like PostHog (which also does replays, flags and experiments), Mixpanel or Amplitude let you track custom events and build funnels and retention charts. Many teams run a privacy-friendly web analytics tool plus a product analytics tool; PostHog can cover much of both. Install correctly (respecting consent where required) and verify data is actually flowing.

Set it up to answer real questions, not to hoard vanity numbers. Before drowning in dashboards, decide the key things you need to know: acquisition (where do users come from and how much does each channel bring?), activation (do they reach the aha moment?), retention (do they come back?), and conversion/revenue. Configure your analytics to surface these. Respect privacy and be lean — collect what you will actually use, honour consent and avoid sending personal data you do not need. The goal of this task is simply to have reliable measurement in place and confirmed working; the following tasks turn that raw measurement into a north-star metric, funnels, experiments and a decision-making process. Getting instrumentation right now means every later effort — a marketing push, a product change, a launch — produces learning instead of just activity.

**What this looks like in practice**

- Adding Plausible/GA for traffic and PostHog for product events.
- Seeing which pages people land on and where they leave.
- Tracking “created first project” as a key action.

**Checklist**

- [ ] Install web analytics (Plausible/Fathom/Umami or GA4).
- [ ] Install product analytics (PostHog/Mixpanel/Amplitude).
- [ ] Respect consent and avoid collecting unnecessary personal data.
- [ ] Verify data is actually flowing from real page views/events.
- [ ] Ensure UTM/campaign tracking captures marketing sources.
- [ ] Decide the core questions: acquisition, activation, retention, revenue.
- [ ] Confirm the tools can answer those questions before moving on.

**Tools & services**

- Plausible / Fathom / GA4
- PostHog / Mixpanel / Amplitude
- UTM builder
- Consent management

**Common pitfalls**

- Launching with no analytics and losing the data forever.
- Tracking everything and drowning in vanity metrics.
- Broken installation that silently records nothing.
- Ignoring consent/privacy obligations.

**Go deeper**

- [PostHog](https://posthog.com/)
- [Plausible Analytics](https://plausible.io/)
- [GA4 setup](https://support.google.com/analytics/answer/9304153)

**Definition of done:** Working web + product analytics, verified, capturing acquisition and behaviour.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/71-install-web-and-product-analytics)

---

### 72. Define your north-star metric & KPIs

> **Goal:** Pick the one metric that best captures delivered value, plus supporting KPIs.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Medium · **Estimate:** half a day · **Metric:** The whole team knows the NSM and what drives it.

**Why this matters.** A north-star metric aligns everything you do around real value, not vanity. It focuses a small team, clarifies priorities, and is exactly what investors want to see you moving.

**Explain it like I'm 5.** You pick the single most important number that shows your product is really delivering value, plus a few supporting ones. It’s choosing the one score that means you’re winning.

With data flowing, you risk drowning in numbers. A north-star metric (NSM) cuts through this: it is the single metric that best captures the core value your product delivers to customers, and which — if it grows — means the business is genuinely succeeding. It is not a vanity metric like total sign-ups or page views (which can rise while the product fails); it reflects real, delivered value. Examples: Airbnb's nights booked, WhatsApp's messages sent, a Spotify's time spent listening. For your product, ask "what action, done repeatedly by users, means they are getting the value we promised?" — that is usually your NSM (or close to it).

Choose it carefully because it will steer your priorities. A good NSM has three properties: it reflects customer value (users doing it are getting real benefit), it correlates with revenue/growth (more of it means a healthier business), and it is actionable (your team can influence it). Beware metrics that can be gamed or that grow without real value. Often the NSM is an engagement or usage metric rather than pure revenue, because it leads revenue — but it should have a clear line to money. Write down your NSM and the reasoning, and make sure everyone understands that moving it is the point.

Surround the NSM with a small set of supporting KPIs across the funnel so you can diagnose why it moves — the "pirate metrics" framework (Acquisition, Activation, Retention, Referral, Revenue) is a useful structure. Track a headline for each: acquisition (new users/traffic by channel), activation (% reaching the aha moment), retention (% still active after 1/4 weeks), referral (invites/virality), and revenue (MRR, conversion). These input metrics explain your NSM and highlight your biggest bottleneck. Build a simple dashboard showing the NSM and these KPIs over time, and set targets. This focus is powerful for a small team — it stops you optimising things that do not matter — and it is directly what investors evaluate: they want to see a meaningful metric that is growing, and a founder who understands the drivers behind it. Define it now so every subsequent growth effort is measured against real value.

**What this looks like in practice**

- Spotify’s north star: time spent listening.
- A SaaS choosing “weekly active teams” as its north star.
- Defining 3–5 supporting KPIs beneath the north-star metric.

**Checklist**

- [ ] Identify the repeated action that means users get real value.
- [ ] Choose an NSM that reflects value, correlates with growth, is actionable.
- [ ] Write down the NSM and why it beats vanity alternatives.
- [ ] Add supporting KPIs across Acquisition, Activation, Retention, Referral, Revenue.
- [ ] Track a headline metric for each funnel stage.
- [ ] Build a simple NSM + KPI dashboard over time.
- [ ] Set targets and share so the team optimises the right thing.

**Tools & services**

- Product analytics (PostHog/Mixpanel)
- A dashboard (Metabase/analytics)
- Pirate metrics (AARRR) framework
- A KPI spreadsheet

**Common pitfalls**

- Choosing a vanity metric (total sign-ups) as the north star.
- An NSM that can be gamed without delivering value.
- Tracking dozens of KPIs with no clear priority.
- Never setting targets, so metrics have no meaning.

**Go deeper**

- [Amplitude: north-star metric](https://amplitude.com/blog/product-north-star-metric)
- [AARRR pirate metrics](https://www.500.co/)
- [Lenny: choosing metrics](https://www.lennysnewsletter.com/)

**Definition of done:** A defined north-star metric with supporting funnel KPIs and targets on a dashboard.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/72-define-your-north-star-metric-and-kpis)

---

### 73. Build conversion funnels & track activation

> **Goal:** Measure each step from visitor to activated user and find where people drop off.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Medium · **Estimate:** 2–3 days · **Metric:** Rising conversion through your worst funnel step (especially activation).

**Why this matters.** Funnels reveal exactly where you are losing people. Improving your worst drop-off step is usually the highest-leverage growth work available — often bigger than adding more traffic.

**Explain it like I'm 5.** You measure each step from “just visited” to “active happy user” to find where people fall off. It’s watching where the water leaks out of the bucket so you can plug it.

Growth is a chain of conversions: visitor → sign-up → activated → retained → paying. Each step loses some people, and a funnel visualises exactly how many make it through each stage. This is one of the most valuable analyses you can run, because it tells you where your biggest leak is — and fixing a leak is often far more impactful than pouring in more traffic. If 1,000 people visit, 100 sign up, but only 20 reach the aha moment, your activation step is hemorrhaging value, and doubling your traffic just wastes twice as many visitors. The funnel points you at the highest-leverage fix.

Build your key funnels in your product analytics. The most important is usually the activation funnel: the specific steps from sign-up to the aha moment (create account → complete setup → perform core action → reach value). Define each step as a tracked event and let the tool show conversion between them. Also build the acquisition-to-signup funnel (landing → sign-up) and, if relevant, the conversion-to-paid funnel (activated → upgrade → pay). Segment funnels by source, device, or user type to find where specific groups struggle (maybe mobile users drop at a step desktop users breeze through — a fixable clue).

Turn the biggest drop-off into an experiment. Once you see your worst step, form a hypothesis about why (too many form fields? confusing UI? slow load? unclear value?), watch session replays of people dropping there (next task), and ship a change to improve it — then measure whether conversion through that step rose. This is the core loop of data-informed growth: find the leak, fix it, measure, repeat. Pay special attention to activation, because it is the strongest lever on everything downstream — users who activate retain and convert far better, so raising activation lifts your entire business, and it is what turns raw sign-ups into the real, engaged users you need at scale. Set targets for each step and track them over time, so improving the funnel becomes an ongoing discipline rather than a one-off audit.

**What this looks like in practice**

- A funnel: visit → sign up → activate → pay, with drop-off at each step.
- Discovering 60% quit at email verification and fixing it.
- Defining what “activated” means and tracking the % who reach it.

**Checklist**

- [ ] Map the stages: visitor → sign-up → activated → retained → paying.
- [ ] Define each step as a tracked event in product analytics.
- [ ] Build the activation funnel (sign-up → aha moment) first.
- [ ] Add acquisition→signup and activated→paid funnels.
- [ ] Segment by source, device and user type to find specific leaks.
- [ ] Attack the biggest drop-off with a hypothesis and an experiment.
- [ ] Set per-step targets and track conversion over time.

**Tools & services**

- PostHog / Mixpanel / Amplitude funnels
- Event tracking
- Session replay (next task)
- A/B testing (later task)

**Common pitfalls**

- Adding traffic while a broken funnel wastes most of it.
- Not defining the activation aha moment as a measurable event.
- Looking at aggregate numbers and missing segment-specific leaks.
- Finding the drop-off but never running a fix experiment.

**Go deeper**

- [Amplitude: funnel analysis](https://amplitude.com/blog/funnel-analysis)
- [Reforge: activation](https://www.reforge.com/blog)
- [PostHog funnels](https://posthog.com/product/funnels)

**Definition of done:** Key funnels instrumented, with the biggest drop-off identified and being improved.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/73-build-conversion-funnels-and-track-activation)

---

### 74. Design an event-tracking taxonomy

> **Goal:** Define a clean, consistent naming scheme for the events and properties you track.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Medium · **Estimate:** 1 day · **Metric:** Events are consistently named, correctly firing, and analysis-ready.

**Why this matters.** Messy, inconsistent tracking produces data you cannot trust or analyse. A deliberate taxonomy makes your analytics reliable, comparable and useful — and saves painful clean-up later.

**Explain it like I'm 5.** You agree on tidy names for the things you track, so your data stays clean and understandable instead of a mess of “btn_click2_final.” It’s labelling the boxes consistently.

Analytics is only as good as the events feeding it, and the fastest way to ruin your data is to add events ad hoc with inconsistent names ("Signup", "sign_up", "User Registered", "registration_complete" all for the same action). Once your data is a mess, funnels break, comparisons become impossible, and you lose trust in your own numbers. A tracking plan (taxonomy) prevents this: a documented, agreed scheme for what you track, how events are named, and what properties they carry. Investing a little structure now saves painful, error-prone clean-up and re-instrumentation later.

Establish clear conventions. Pick a consistent naming style (for example, "object action" in a fixed case, like "lead_created", "checkout_completed") and stick to it everywhere. Track meaningful actions, not every click — focus on events that map to your funnel and value (sign-up, activation steps, core actions, upgrades). Attach useful properties to each event (for a "lead_created" event: source, plan, count) and consistent user properties (plan, signup date, cohort) so you can segment. Identify users properly so you can follow a person across sessions and devices. Document each event, when it fires, and its properties in a shared tracking plan that anyone adding tracking must follow.

Keep the data trustworthy over time. Implement tracking against the plan, then verify events fire correctly with the right properties (use your tool's live event view or a debugger) before relying on them — untested tracking is a common source of silently wrong data. Avoid duplicate or double-firing events. As the product evolves, update the tracking plan deliberately rather than bolting on inconsistent new events. Be mindful of privacy: do not put sensitive personal data into event properties, and respect consent. A clean taxonomy is unglamorous, but it is the foundation that makes every other analytics task — funnels, retention, experiments, dashboards — actually reliable. Teams that skip it end up making decisions on data they cannot trust, or spending weeks re-instrumenting; a bit of discipline here pays off across everything you measure.

**What this looks like in practice**

- A naming convention like “Project Created” with clear properties.
- A tracking plan doc everyone follows before adding events.
- Avoiding duplicate events that mean the same thing.

**Checklist**

- [ ] Adopt a consistent event naming convention (e.g. object_action).
- [ ] Track meaningful funnel/value events, not every click.
- [ ] Attach useful, consistent event and user properties for segmentation.
- [ ] Identify users so you can follow them across sessions/devices.
- [ ] Document every event, its trigger and properties in a tracking plan.
- [ ] Verify events fire correctly with a live debugger before relying on them.
- [ ] Keep sensitive data out of properties; update the plan deliberately.

**Tools & services**

- A tracking plan (Sheet/Avo/Segment Protocols)
- Product analytics debugger
- Segment/RudderStack (optional)
- Naming convention doc

**Common pitfalls**

- Ad-hoc, inconsistent event names that break analysis.
- Tracking every click and burying the signal.
- Not verifying events, so data is silently wrong.
- Putting sensitive personal data into event properties.

**Go deeper**

- [Avo: tracking plan guide](https://www.avo.app/blog)
- [Segment: naming conventions](https://segment.com/academy/)
- [PostHog: event tracking](https://posthog.com/docs/product-analytics)

**Definition of done:** A documented, verified event taxonomy driving consistent, trustworthy analytics.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/74-design-an-event-tracking-taxonomy)

---

### 75. Add session replay & heatmaps

> **Goal:** Watch real users interact so you can see the friction numbers alone cannot explain.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Easy · **Estimate:** half a day · **Metric:** You regularly find and fix real friction spotted in replays.

**Why this matters.** Quantitative data shows what is happening; session replays and heatmaps show why. Watching real users struggle is one of the fastest ways to find and fix usability problems.

**Explain it like I'm 5.** You record (anonymously) how real people move through your app and where they hesitate or rage-click. It’s watching over their shoulder to see the friction numbers can’t explain.

Funnels tell you where users drop off; session replays and heatmaps tell you why. A session replay is a reconstruction of a real user's visit — their mouse movement, clicks, scrolling, form interactions and navigation — that you can watch back like a video (privacy-safe, with sensitive fields masked). Heatmaps aggregate where users click, move and how far they scroll across a page. Together they give you the qualitative "why" behind your quantitative "what," and watching them is often humbling and enormously instructive: you see people miss the button you thought was obvious, rage-click something that is not clickable, abandon a form at a confusing field, or never scroll to your key content.

Use them to diagnose specific problems, not to watch randomly. When your funnel shows a big drop at a step, filter replays to sessions that dropped there and watch what happened — you will frequently spot the exact friction (a validation error with an unclear message, a slow load, a misleading label) far faster than you would from numbers alone. Heatmaps reveal whether users see and interact with what you intended: are they clicking your primary CTA or something else? Do they scroll past your value proposition? Are they trying to click non-interactive elements (a sign to make those clickable)? These insights turn vague hypotheses into concrete fixes.

Integrate this into your improvement loop and respect privacy. Make watching a handful of replays a regular habit (especially of new users and of drop-offs at your worst funnel step), because a few sessions can reveal issues that survey data never surfaces. Combine with your funnels: quantitative finds the leak, qualitative explains it, then you fix and re-measure. Configure the tools to mask sensitive inputs (passwords, payment, personal data), honour consent, and comply with privacy law — replay is powerful but must be handled responsibly. Tools like PostHog, Hotjar, Microsoft Clarity (free) and FullStory provide this. The payoff is a much richer understanding of your users' real experience, which consistently leads to higher-impact product and conversion improvements than staring at aggregate charts ever could.

**What this looks like in practice**

- Session replays revealing users can’t find the “save” button.
- A heatmap showing everyone ignores your main call-to-action.
- Spotting a confusing step by watching ten real sessions.

**Checklist**

- [ ] Enable session replay and heatmaps (mask sensitive inputs).
- [ ] When a funnel step leaks, filter replays to sessions that dropped there.
- [ ] Watch for missed CTAs, rage clicks, form abandonment, confusion.
- [ ] Use heatmaps to check whether users see/click what you intended.
- [ ] Turn observed friction into concrete fixes; re-measure after.
- [ ] Make watching a few new-user + drop-off replays a weekly habit.
- [ ] Honour consent and privacy law; comply with data handling rules.

**Tools & services**

- Microsoft Clarity (free)
- PostHog / Hotjar / FullStory
- Heatmaps
- Funnel + replay integration

**Common pitfalls**

- Only looking at numbers, never watching real users.
- Not masking sensitive fields (privacy violation).
- Watching random sessions instead of targeted drop-offs.
- Observing friction but never shipping the fix.

**Go deeper**

- [Microsoft Clarity (free)](https://clarity.microsoft.com/)
- [Hotjar](https://www.hotjar.com/)
- [PostHog session replay](https://posthog.com/product/session-replay)

**Definition of done:** Session replay and heatmaps enabled, privacy-safe, feeding your fix loop.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/75-add-session-replay-and-heatmaps)

---

### 76. Build a user feedback loop

> **Goal:** Collect qualitative feedback continuously via surveys, in-app prompts and conversations.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Easy · **Estimate:** 1–2 days · **Metric:** Steady qualitative input that regularly informs what you build and fix.

**Why this matters.** Analytics shows behaviour; feedback reveals motivation, needs and unmet desires. A steady feedback loop keeps you close to users and points you toward what to build and fix next.

**Explain it like I'm 5.** You set up easy ways for users to tell you what they think, all the time, so you keep learning what to fix and build. It’s leaving a suggestion box that people actually use.

Numbers tell you what users do; talking to them tells you why and what they wish they could do. A continuous feedback loop keeps you connected to your users' real needs as you scale beyond the point where you personally know everyone. Set up multiple, lightweight channels so feedback flows in constantly: in-app prompts (a "give feedback" option, a thumbs up/down on features, a quick reaction after key actions), periodic surveys, an easy way to report bugs or request features, and — crucially — continued direct conversations with users even after launch. The founders who stay closest to their users build the best products.

Use the right instrument for the question. Short, well-timed in-app surveys (one or two questions triggered at a relevant moment) get high response rates and contextual insight — for example, asking new churned users "what stopped you?" or asking activated users "what almost stopped you from signing up?" NPS (Net Promoter Score) and its follow-up "why?" gives a trackable satisfaction pulse and, more valuably, open-ended reasons. A public or private feature-request board lets users tell you and vote on what they want (and shows you demand). Keep talking to users directly — quick calls with power users and with churned users are especially revealing. Aim for a mix of quantitative signals (scores, votes) and qualitative depth (open answers, conversations).

Close the loop — collection is worthless without action. Route all feedback into one place you review regularly, tag and theme it to spot patterns (one person's request is noise; twenty people asking is a signal), and feed it into your prioritisation alongside your data. Distinguish what users say from what they do (they are not always aligned — validate stated desires against behaviour), and remember users describe problems better than they design solutions, so dig for the underlying need. Then actually respond: tell people when you ship something they asked for (a powerful trust and retention move), and reply to feedback so users feel heard. A well-run feedback loop turns your growing user base into a continuous source of direction, catches problems early, surfaces your most-wanted improvements, and builds the kind of user relationships that drive word-of-mouth — all essential as you push toward scale.

**What this looks like in practice**

- An in-app “feedback” button that files straight to your board.
- A short survey after onboarding asking what was confusing.
- Regular customer calls to hear problems in their words.

**Checklist**

- [ ] Add always-available in-app feedback and bug/feature reporting.
- [ ] Run short, well-timed in-app surveys at relevant moments.
- [ ] Track NPS/satisfaction with an open "why?" follow-up.
- [ ] Offer a feature-request board with voting.
- [ ] Keep talking directly to power users and churned users.
- [ ] Route all feedback into one place; tag and theme for patterns.
- [ ] Act on patterns and tell users when you ship what they asked for.

**Tools & services**

- In-app surveys (PostHog/Survicate)
- NPS tools (Delighted)
- Feature board (Canny/Featurebase)
- Direct user calls

**Common pitfalls**

- Collecting feedback but never acting on it.
- Building whatever the loudest user asks for, ignoring patterns.
- Confusing what users say with what they actually do.
- Stopping user conversations after launch.

**Go deeper**

- [Canny (feature requests)](https://canny.io/)
- [The Mom Test (talking to users)](https://www.momtestbook.com/)
- [Intercom: customer feedback](https://www.intercom.com/blog/)

**Definition of done:** Multiple feedback channels flowing into one reviewed, themed, acted-on backlog.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/76-build-a-user-feedback-loop)

---

### 77. Set up A/B testing & experimentation

> **Goal:** Test changes against a control so you learn what truly moves your metrics.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Hard · **Estimate:** 1–2 days · **Metric:** A growing log of validated wins improving your key metrics.

**Why this matters.** Opinions are cheap and often wrong. Controlled experiments let you know, rather than guess, whether a change actually improves conversion or engagement — the basis of real optimisation.

**Explain it like I'm 5.** You test two versions of something (A vs B) with real users to see which works better, instead of arguing about opinions. It’s a mini science experiment for your product.

Once you have traffic and metrics, experimentation lets you improve with evidence instead of opinion. An A/B test shows different versions to comparable groups of users and measures which performs better on a chosen metric, so you can attribute the difference to the change rather than to noise or seasonality. This matters because intuition about what will work is frequently wrong — famous "obvious" improvements have tanked conversion, and unlikely tweaks have lifted it. Building a habit of testing meaningful changes turns your growth from guesswork into a compounding series of validated improvements.

Run experiments rigorously enough to trust the results. Start from a clear hypothesis tied to a metric ("simplifying the sign-up form from 5 fields to 2 will increase sign-up completion"). Change one meaningful thing at a time so you know what caused any difference. Ensure you have enough traffic and run the test long enough to reach statistical significance — underpowered tests on tiny samples produce false conclusions, which is worse than not testing (many small startups do not yet have the traffic for reliable A/B tests on minor tweaks, in which case bigger bets and qualitative methods are more appropriate). Use a proper tool (PostHog, GrowthBook, Optimizely, or your platform's experiments) to split traffic and compute significance, and decide your success criteria before you start to avoid fooling yourself.

Prioritise and institutionalise experimentation. Focus tests where the leverage is highest — your biggest funnel drop-offs, high-traffic pages, key onboarding steps — rather than endlessly tweaking button colours that will not move the needle. Keep a log of every experiment, its hypothesis and its result, so you build institutional knowledge and do not re-run the same tests; the losers and surprises are as instructive as the winners. Beyond A/B tests, use feature flags to roll out changes gradually and safely (release to 10% first, watch metrics, then expand), which doubles as a risk-reduction tool. As traffic grows, a steady cadence of well-run experiments becomes one of your most reliable engines of improvement — each validated win compounds, and collectively they can transform your activation, conversion and retention over time in a way that guessing never could.

**What this looks like in practice**

- Testing two pricing-page layouts to see which sells more.
- Trying a new onboarding flow against the old one for half of users.
- Only shipping the change if it beats the control with real data.

**Checklist**

- [ ] Write a clear hypothesis tied to a specific metric.
- [ ] Change one meaningful thing at a time (A vs B).
- [ ] Ensure enough traffic + duration for statistical significance.
- [ ] Use an experimentation tool to split traffic and compute significance.
- [ ] Decide success criteria before starting; avoid peeking bias.
- [ ] Prioritise high-leverage tests (biggest drop-offs, key pages).
- [ ] Log every experiment and result; use feature flags for safe rollouts.

**Tools & services**

- PostHog / GrowthBook / Optimizely
- Feature flags
- Significance calculator
- An experiment log

**Common pitfalls**

- Calling results on tiny, underpowered samples.
- Changing many things at once, so cause is unknown.
- Testing trivial tweaks instead of high-leverage changes.
- Not logging experiments, repeating past tests.

**Go deeper**

- [GrowthBook (open-source A/B)](https://www.growthbook.io/)
- [Evan Miller: A/B stats](https://www.evanmiller.org/ab-testing/)
- [PostHog experiments](https://posthog.com/product/experiments)

**Definition of done:** An experimentation setup with a hypothesis-driven, logged testing habit.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/77-set-up-a-b-testing-and-experimentation)

---

### 78. Run cohort & retention analysis

> **Goal:** Track whether users keep coming back over time, grouped by when they joined.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Medium · **Estimate:** 1–2 days · **Metric:** A flattening retention curve and later cohorts retaining better.

**Why this matters.** Retention is the truest signal of product-market fit and the foundation of sustainable growth. Cohort analysis shows whether your product actually keeps people — and whether it is improving.

**Explain it like I'm 5.** You group users by when they joined and see if they keep coming back over time. It tells you whether your product is “sticky” or a leaky bucket.

Acquisition gets attention, but retention determines whether you have a real business. A product that acquires users who then leave is a leaky bucket — pouring in more never fills it, and you will never reach a durable 10,000 active users. Retention is also the clearest signal of product-market fit: if a meaningful share of users keep coming back over weeks and months, you have built something valuable; if they churn quickly, no amount of marketing will save you and you should fix the product first. This makes retention analysis one of the most important things you can measure.

Use cohort analysis to see it clearly. Group users by when they joined (weekly or monthly cohorts) and track what fraction remain active in each subsequent period. This produces a retention curve for each cohort and reveals crucial things: how quickly new users drop off (the steep early decline most products see), whether the curve eventually flattens (a flat "retention plateau" above zero is the hallmark of product-market fit — it means a core of users stick permanently), and — by comparing cohorts over time — whether your product changes are actually improving retention (later cohorts retaining better than earlier ones is a great sign your improvements are working). Define "active" meaningfully for your product (a real value action, not just a login).

Turn the analysis into action. If your curve drops to near zero, the priority is not growth but figuring out why users leave — dig into churned-user feedback and replays, and fix the product until the curve flattens; scaling a non-retaining product just wastes money and users. If it flattens but low, work on deepening the habit and value. Look at retention by segment (which types of users, sources, or behaviours retain best — often users who do a specific action early retain far better, revealing an activation target). Track retention as a core KPI over time and celebrate improvements, because retention gains compound: better retention means each acquired user is worth more, word-of-mouth grows, and your base accumulates instead of churning away. Investors scrutinise retention curves closely precisely because they reveal whether growth is real and sustainable — so understanding and improving yours is central both to building a lasting product and to raising funding.

**What this looks like in practice**

- A retention chart showing what % of January sign-ups still use it in March.
- Comparing retention before and after an onboarding change.
- Noticing users who invite a teammate retain far better.

**Checklist**

- [ ] Define "active" as a real value action, not just a login.
- [ ] Group users into weekly/monthly join cohorts.
- [ ] Track the % of each cohort still active over subsequent periods.
- [ ] Look for the retention curve flattening (PMF signal) vs dropping to zero.
- [ ] Compare cohorts over time to see if changes improve retention.
- [ ] Segment retention to find who/what retains best (activation clues).
- [ ] If the curve dies, fix the product before scaling acquisition.

**Tools & services**

- Product analytics cohorts (Amplitude/Mixpanel/PostHog)
- Retention curves
- Churn-user feedback + replays
- A retention KPI dashboard

**Common pitfalls**

- Scaling acquisition while retention leaks it all out.
- Defining "active" as a trivial login, hiding real churn.
- Looking only at aggregate retention, missing segment differences.
- Ignoring retention because acquisition numbers look good.

**Go deeper**

- [Lenny: retention & PMF](https://www.lennysnewsletter.com/p/the-only-metric-that-matters)
- [Amplitude: retention analysis](https://amplitude.com/blog/retention-rate)
- [Reforge: retention](https://www.reforge.com/blog)

**Definition of done:** Cohort retention curves tracked over time, with improvement actions underway.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/78-run-cohort-and-retention-analysis)

---

### 79. Add error & performance monitoring (RUM)

> **Goal:** Catch runtime errors and real-user performance problems before they cost you users.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Medium · **Estimate:** 1 day · **Metric:** Bugs and real-user slowdowns are caught and fixed before users churn.

**Why this matters.** Users rarely report bugs — they just leave. Error and real-user monitoring surface the problems degrading real experiences so you can fix them proactively, protecting retention.

**Explain it like I'm 5.** You add tools that alert you when the app errors or gets slow for real users, so you fix problems before they drive people away. It’s a check-engine light for your product.

Most users who hit a bug or a painfully slow page do not tell you — they silently give up and leave, quietly eroding the retention you worked hard to build. Error monitoring and real-user monitoring (RUM) make these invisible losses visible so you can fix them proactively. Error tracking (Sentry is the standard) captures exceptions happening in real users' browsers and on your server — the stack trace, the affected users, the frequency, the context — and alerts you, so you learn about a broken feature from your tools within minutes rather than from a slow bleed of churn or an eventual support message.

Set it up to be actionable, not noisy. Integrate error tracking on both frontend and backend, with source maps so stack traces are readable, and tag errors with release version and user/session context so you can reproduce and prioritise. Group and rank errors by frequency and impact (an error hitting 500 users matters more than a one-off), and set alerts for new or spiking errors and for critical paths (payment, sign-up). Triage regularly: fix the high-impact ones, and suppress or fix noisy low-value ones so alerts stay meaningful. Wire errors into your workflow (create issues automatically) so they get handled rather than ignored.

Add real-user performance monitoring to catch the "it works but it's slow for real people" problems your lab tests miss. Lab tools (Lighthouse) measure performance on your machine; RUM measures the actual experience of real users on their real devices and networks — capturing field Core Web Vitals, slow pages, and slow API calls across the diversity of your user base (that mid-range phone on a weak connection you cannot fully replicate). This reveals performance issues affecting real segments and lets you prioritise fixes by real-world impact. Combine error and performance monitoring with your uptime monitoring and analytics for a complete picture of your product's health. Together they shift you from reactive (finding out something is broken when a user complains or metrics drop) to proactive (spotting and fixing degradations before they cost you users) — which directly protects the retention and reputation that everything else depends on.

**What this looks like in practice**

- Sentry alerting you to a new crash right after a deploy.
- Real-user monitoring showing checkout is slow on mobile.
- Getting paged when errors spike above normal.

**Checklist**

- [ ] Add error tracking (Sentry) on frontend and backend.
- [ ] Upload source maps; tag errors with release + user/session context.
- [ ] Group and rank errors by frequency and impact.
- [ ] Alert on new/spiking errors and on critical-path failures.
- [ ] Triage regularly; fix high-impact, silence noise.
- [ ] Add real-user monitoring (field Core Web Vitals, slow pages/APIs).
- [ ] Prioritise performance fixes by real-world user impact.

**Tools & services**

- Sentry (errors + performance)
- RUM (Sentry/Datadog/Cloudflare)
- Source maps
- Alerting (Slack/email/PagerDuty)

**Common pitfalls**

- Relying on users to report bugs they never report.
- Alert noise so real errors get ignored.
- No source maps, making errors unreadable.
- Only lab performance testing, missing real-user slowness.

**Go deeper**

- [Sentry](https://sentry.io/)
- [web.dev: field data / RUM](https://web.dev/articles/vitals-measurement-getting-started)
- [Datadog RUM](https://www.datadoghq.com/product/real-user-monitoring/)

**Definition of done:** Error and real-user performance monitoring with actionable, triaged alerts.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/79-add-error-and-performance-monitoring-rum)

---

### 80. Establish a weekly metrics review

> **Goal:** Build a recurring rhythm of reviewing data and deciding what to do about it.
>
> **Phase:** 8 — Analytics, Tracking & Feedback · **Difficulty:** Easy · **Estimate:** Ongoing (set up in 1–2 hours) · **Metric:** Weekly, evidence-based course-corrections moving your KPIs toward targets.

**Why this matters.** Data only creates value when it drives decisions. A disciplined weekly review keeps you honest, focused on the metrics that matter, and continuously improving toward your targets.

**Explain it like I'm 5.** You set a regular weekly time to look at your numbers together and decide what to do next. It’s a steady heartbeat that keeps the team learning and acting, not drifting.

Having dashboards is not the same as being data-informed — plenty of teams collect data they never act on. The habit that converts measurement into progress is a regular metrics review: a recurring session (weekly is ideal early on) where you look at your north-star metric and key KPIs, compare them to targets and to the previous period, and — crucially — decide what to do based on what you see. This rhythm keeps everyone honest and focused, surfaces problems while they are small, and ensures your effort is continuously steered by evidence toward your goals rather than drifting on activity that feels productive but does not move the numbers.

Run it with structure so it drives action, not just observation. Prepare a consistent dashboard/scorecard (NSM, funnel KPIs, retention, revenue, top acquisition channels) so you are comparing the same things each week and can see trends. In the review, go beyond "what happened" to "why" and "so what": which metric moved, what likely caused it (a change you shipped, a channel, seasonality), and what you will do next as a result. Note wins to reinforce and problems to address. Assign clear owners and next actions, and check last week's actions — a review without follow-through is theatre. Keep it tight and focused on the vital few metrics rather than drowning in every number.

Use the cadence to close the learning loop across everything you have built. This is where your funnels, experiments, retention analysis, feedback and error monitoring come together into decisions: the review is where you spot that activation dipped, decide to run an experiment, and next week check whether it worked. Look for leading indicators, not just lagging ones, so you can act early. Over time, this discipline compounds — small, evidence-based course-corrections each week add up to dramatically better outcomes than sporadic, gut-driven pushes. It also builds the muscle and the historical record you will need when talking to investors, who expect founders to know their numbers cold and to demonstrate a rigorous, data-informed operating rhythm. A simple, consistent weekly metrics review is one of the highest-return habits you can establish; it is how you make sure all the instrumentation you invested in actually changes what you do.

**What this looks like in practice**

- A Monday metrics review of north-star, funnel and retention.
- Each metric having an owner who explains changes.
- Turning insights into one or two concrete actions each week.

**Checklist**

- [ ] Schedule a recurring (weekly) metrics review.
- [ ] Prepare a consistent scorecard: NSM, funnel KPIs, retention, revenue, channels.
- [ ] For each key move, ask what caused it and what to do next.
- [ ] Assign owners and concrete next actions.
- [ ] Review whether last week’s actions happened and worked.
- [ ] Focus on the vital few metrics and leading indicators.
- [ ] Keep a running record to build trends and investor-ready history.

**Tools & services**

- A dashboard (Metabase/analytics)
- A weekly scorecard template
- A decisions/actions log
- Calendar recurring event

**Common pitfalls**

- Collecting data but never reviewing or acting on it.
- Reviewing numbers without deciding on actions.
- No follow-through on the actions decided.
- Drowning in every metric instead of the vital few.

**Go deeper**

- [Lenny: operating cadence](https://www.lennysnewsletter.com/)
- [Metabase (open dashboards)](https://www.metabase.com/)
- [Measure What Matters (OKRs)](https://www.whatmatters.com/)

**Definition of done:** A recurring, structured metrics review that consistently produces decisions and actions.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/80-establish-a-weekly-metrics-review)

---

## Phase 9: Email, Community & Retention

_Capture emails, send a lifecycle sequence, build a community, add referrals and win back churned users. Retention is what turns growth into 10,000 real users._

**Outcome:** A growing email list and improving week-over-week retention.

### 81. Build an email list & capture

> **Goal:** Grow an owned email list with compelling opt-ins and lead magnets.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** 2–3 days · **Metric:** Steady list growth toward your 10,000-email target.

**Why this matters.** Email is the one channel you own — no algorithm between you and your audience. A growing list is a durable asset that drives launches, retention and one of your 10,000 targets.

**Explain it like I'm 5.** You collect email addresses from interested people so you can reach them anytime for free, without depending on social media algorithms. An email list is an audience you actually own.

Social followers can vanish with an algorithm change; an email list is an audience you own outright and can reach any time, which makes it one of the most valuable assets you can build. It is also one of the concrete 10,000 targets founders are told to hit (10,000 emails/leads). Start by capturing emails everywhere it makes sense: your landing page and marketing site (a clear, benefit-led opt-in, not a buried "subscribe"), an exit-intent or timed prompt, at sign-up, and via valuable content. The key is giving people a compelling reason to hand over their email — a mere "join our newsletter" converts poorly compared with a specific, valuable exchange.

Offer lead magnets — something genuinely useful in return for an email. Depending on your audience this could be a free tool, a template, a checklist, a mini-course, a valuable guide, early access, or a discount. The best lead magnets solve a real, immediate problem for your ICP and naturally lead toward your product (someone who wanted your "lead-tracking template" is a warm prospect for your lead-tracking app). Make the opt-in prominent and low-friction (ask for just the email), set clear expectations about what they will receive, and deliver the promised value immediately. Content (your blog) is a powerful top-of-funnel feeder into the list when paired with a relevant opt-in.

Handle the list responsibly and keep it healthy. Use proper consent (only email people who opted in), confirm subscriptions where required, and always provide easy unsubscribe — respecting this protects your deliverability and your reputation, and is legally required. Segment as you grow (prospects vs users vs churned) so you can send relevant messages rather than one blast to everyone. Track your list growth as a KPI and your opt-in conversion rate so you can improve capture over time. Protect the list from bad practices that wreck deliverability (never buy lists — it tanks your sender reputation and is often illegal). A steadily growing, engaged, permission-based email list becomes a compounding growth engine: it powers your launches, brings users back, nurtures prospects toward paying, and gives you a direct line to your audience that no platform can take away.

**What this looks like in practice**

- A newsletter sign-up with a useful free “lead magnet” (checklist, guide).
- An exit popup offering a discount for joining the list.
- Growing to thousands of subscribers you can email on launch day.

**Checklist**

- [ ] Add prominent, benefit-led opt-ins across site, content and sign-up.
- [ ] Create lead magnets that solve a real problem and lead to your product.
- [ ] Keep opt-in low-friction (email only) with clear expectations.
- [ ] Deliver the promised value immediately on sign-up.
- [ ] Use real consent, confirmation where required, and easy unsubscribe.
- [ ] Segment (prospects/users/churned) and never buy lists.
- [ ] Track list growth and opt-in conversion as KPIs.

**Tools & services**

- ConvertKit / Mailchimp / Loops
- Lead magnet (template/guide/tool)
- Opt-in forms / popups
- Consent + double opt-in

**Common pitfalls**

- A vague "subscribe" with no compelling reason to opt in.
- Buying lists, destroying deliverability (and breaking the law).
- No easy unsubscribe, hurting reputation and compliance.
- Blasting one message to an unsegmented list.

**Go deeper**

- [ConvertKit (creator email)](https://convertkit.com/)
- [Lead magnet ideas](https://www.optinmonster.com/lead-magnet-ideas/)
- [Really Good Emails](https://reallygoodemails.com/)

**Definition of done:** A growing, permission-based email list with converting opt-ins and lead magnets.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/81-build-an-email-list-and-capture)

---

### 82. Set up your email marketing platform

> **Goal:** Choose and configure an email platform with deliverability and automation set up right.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** 1 day · **Metric:** Emails reliably reach the inbox and render well everywhere.

**Why this matters.** The platform is the engine behind your list. Correct setup — authentication, segmentation, automation — determines whether your emails reach inboxes and actually drive action.

**Explain it like I'm 5.** You set up the tool that sends your emails properly, so they land in inboxes (not spam) and can send automatically. It’s getting a reliable post office instead of tossing letters in the wind.

Your email list needs an engine to manage it and send reliably. Choose a platform that fits your stage and use case: creator/newsletter-focused (ConvertKit, Beehiiv), all-purpose marketing (Mailchimp, Brevo), developer-friendly and product-integrated (Loops, Customer.io, Resend for transactional), or full lifecycle automation as you scale. Consider ease of use, automation capabilities, segmentation, deliverability reputation, integrations with your product/analytics, and pricing as your list grows (some get expensive fast). You can start simple and migrate later, but picking something with room to grow into automation saves a painful move.

Nail deliverability from the start, because an email that lands in spam is worthless. Authenticate your sending domain with SPF, DKIM and DMARC (you set these up earlier — verify they cover your email platform), which proves you are a legitimate sender and dramatically improves inbox placement. Warm up a new sending domain gradually rather than blasting thousands on day one. Keep your list clean (remove hard bounces and long-term non-openers) since sending to dead addresses hurts your reputation. Use a recognisable from-name and address, and separate transactional email (receipts, resets — must always arrive) from marketing email, ideally on subdomains, so a marketing issue never jeopardises critical transactional delivery.

Configure the platform to work, not just to send. Set up segmentation and tags so you can target the right people, connect it to your product/analytics so you can trigger emails on user behaviour and measure impact, and build the foundation for the automated sequences you will create next. Design an on-brand, mobile-friendly email template (most email is read on phones) so every send looks professional and consistent. Test thoroughly: send test emails, check rendering across major clients (Gmail, Outlook, Apple Mail) and on mobile, verify links and unsubscribe work, and confirm you land in the inbox (tools like Mail-Tester score your setup). Getting the platform, authentication and deliverability right is unglamorous but foundational — it is the difference between an email program that reliably reaches and moves your audience and one that quietly rots in spam folders.

**What this looks like in practice**

- Configuring a platform like Resend, Mailchimp or ConvertKit.
- Setting up SPF/DKIM/DMARC so emails don’t get marked as spam.
- A verified sending domain and a warm-up plan.

**Checklist**

- [ ] Choose a platform fitting your stage, automation and integration needs.
- [ ] Verify SPF, DKIM and DMARC cover your sending domain/platform.
- [ ] Warm up a new sending domain; keep the list clean of bounces.
- [ ] Separate transactional from marketing (ideally on subdomains).
- [ ] Set up segmentation/tags and connect to product + analytics.
- [ ] Build an on-brand, mobile-friendly email template.
- [ ] Test rendering across clients + mobile; confirm inbox placement.

**Tools & services**

- ConvertKit / Loops / Customer.io / Brevo
- SPF/DKIM/DMARC
- Mail-Tester (inbox score)
- Litmus/Email on Acid (rendering)

**Common pitfalls**

- Skipping authentication and landing in spam.
- Blasting a cold new domain and getting flagged.
- Mixing transactional and marketing, risking critical delivery.
- Emails that render broken on mobile or Outlook.

**Go deeper**

- [Mail-Tester](https://www.mail-tester.com/)
- [Postmark: deliverability guide](https://postmarkapp.com/guides/email-deliverability)
- [Loops (product email)](https://loops.so/)

**Definition of done:** A configured email platform with verified authentication and inbox deliverability.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/82-set-up-your-email-marketing-platform)

---

### 83. Design lifecycle email sequences

> **Goal:** Automate the right emails at the right moments: welcome, onboarding, nurture, re-engage.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** 3–5 days · **Metric:** Onboarding emails measurably increase activation; sequences convert.

**Why this matters.** Automated lifecycle emails work around the clock to activate, retain and convert users. A good welcome and onboarding sequence measurably lifts activation and reduces early churn.

**Explain it like I'm 5.** You write emails that send themselves at the right moments — a welcome, tips to get started, a nudge if someone goes quiet. It’s a helpful auto-pilot that guides each new user.

One-off broadcasts have their place, but the highest-ROI email is automated lifecycle email — messages triggered by where a user is in their journey, running continuously without your involvement. The foundational sequence is the welcome/onboarding series for new sign-ups: the welcome email (highest open rates you will ever get, so make it count — reinforce the value, set expectations, and drive the one action that leads to activation), followed by a few emails that guide them to the aha moment, teach a key feature, share a quick win, and prompt them back if they have not activated. This directly boosts activation and combats the early drop-off that kills so many products.

Map emails to the whole lifecycle, triggered by behaviour rather than just time. Beyond onboarding: nurture sequences for prospects/leads (from your lead magnets) that build trust and move them toward signing up or buying; behavioural triggers (someone used a feature, hit a limit, abandoned a step — send a relevant, timely nudge); milestone and celebration emails (reinforce progress and habit); upgrade/expansion prompts when usage signals readiness; and re-engagement/win-back for users going quiet (covered more in a later task). Behaviour-triggered emails vastly outperform generic blasts because they arrive when they are relevant. Keep each email focused on one clear purpose and call to action.

Write and optimise them well. Use your brand voice, lead with value (not "check out our features"), keep them concise and mobile-friendly, and make the desired action obvious. Personalise with real data (name, their activity, relevant recommendations) so emails feel one-to-one rather than mass. Respect the user: do not over-email, honour preferences and unsubscribes, and make sure every automated email is genuinely useful — a barrage of pushy emails churns people faster than no emails at all. Then measure and iterate: track opens, clicks, and — most importantly — the downstream action (did the onboarding sequence lift activation? did the nurture sequence convert?), and A/B test subject lines and content. Well-crafted lifecycle sequences are a compounding, automated growth and retention engine: set them up once, and they work on every user who comes through, quietly improving activation, retention and conversion at scale while you focus elsewhere.

**What this looks like in practice**

- A 5-email welcome sequence that drives users to the “aha” moment.
- An automatic “we miss you” email after 14 days of silence.
- A drip series that turns free users into paying ones.

**Checklist**

- [ ] Build a welcome/onboarding series driving new users to the aha moment.
- [ ] Create nurture sequences for leads from your lead magnets.
- [ ] Add behaviour-triggered emails (feature used, limit hit, step abandoned).
- [ ] Add milestone/celebration and upgrade/expansion emails.
- [ ] Personalise with real user data; one purpose + CTA per email.
- [ ] Respect frequency, preferences and unsubscribes.
- [ ] Track downstream actions (activation/conversion); A/B test and iterate.

**Tools & services**

- Customer.io / Loops / ConvertKit automations
- Behavioural triggers (from product events)
- Personalisation/merge fields
- A/B testing on emails

**Common pitfalls**

- Only sending manual blasts, no automated lifecycle.
- Time-based emails that ignore what the user actually did.
- Over-emailing and churning users.
- Measuring opens but not the downstream action.

**Go deeper**

- [Customer.io lifecycle guides](https://customer.io/resources)
- [Userlist: onboarding emails](https://userlist.com/blog/)
- [Really Good Emails](https://reallygoodemails.com/)

**Definition of done:** Automated lifecycle sequences (welcome, onboarding, nurture, triggered) that lift activation.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/83-design-lifecycle-email-sequences)

---

### 84. Build a community

> **Goal:** Create a space where users connect with you and each other around your product/mission.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** Ongoing (start in 2–3 days) · **Metric:** A growing core of engaged, returning, contributing members.

**Why this matters.** A community deepens engagement and retention, generates feedback and content, creates word-of-mouth, and can become a durable moat competitors cannot easily copy.

**Explain it like I'm 5.** You create a place where your users can hang out, talk to you and each other, and feel part of something. A community turns customers into fans who stick around.

A community turns individual users into a connected group with a stake in your product, and it is one of the strongest retention and growth assets you can build — engaged community members retain far better, advocate for you, help each other (reducing support load), and give you a constant stream of feedback and ideas. It can also become a genuine moat: features are copyable, but a vibrant community is not. Choose a home that fits your audience and where they already are — Discord (great for developer/consumer/real-time communities), Slack (common for B2B/professional), WhatsApp/Telegram (excellent in many markets including Kenya for immediacy and reach), a forum (Discourse, good for searchable long-form and SEO), or a comments/social layer inside your product.

Seed and nurture it deliberately, because communities do not thrive on autopilot early on. Start with your warmest users (alpha users, waitlist, early adopters) and be genuinely present — a founder actively engaging in the early days sets the tone and makes members feel valued. Give the community a clear purpose and value (early access, direct access to you, peer help, exclusive content, networking) so people have a reason to join and return. Establish light norms/guidelines to keep it welcoming, and spark activity with questions, updates, and by highlighting members. In the early stage, quality and warmth matter far more than size — a small, active, friendly community beats a large, dead one.

Integrate the community into your product and growth loops. Use it as a fast feedback channel (announce features, gather reactions, run polls), a source of user-generated content and testimonials, and a place where power users onboard newcomers. Make it easy to join (link it in-app, in onboarding emails, in your footer) and give members reasons to invite others. As it grows, empower moderators/ambassadors from among your most engaged members so it scales beyond just you. Track engagement (active members, activity, contribution) as a health signal, and note that community can directly feed your 10,000-follower/engaged-audience target. A well-run community compounds over time into a self-reinforcing engine of retention, advocacy, feedback and word-of-mouth growth — and the relationships built there are exactly the kind of loyal, engaged user base that both sustains a product and impresses investors evaluating whether people truly love what you have built.

**What this looks like in practice**

- A Discord or Slack where users help each other and share wins.
- A monthly live call or AMA with the founder.
- Notion’s and Figma’s communities that fuel word-of-mouth.

**Checklist**

- [ ] Choose a platform where your audience already is (Discord/Slack/WhatsApp/forum).
- [ ] Seed it with your warmest early users; be genuinely present.
- [ ] Give it a clear purpose and reasons to join and return.
- [ ] Set light, welcoming norms; spark activity with questions and updates.
- [ ] Use it for feedback, UGC, testimonials and peer onboarding.
- [ ] Make joining easy and give members reasons to invite others.
- [ ] Empower moderators/ambassadors; track engagement as a health signal.

**Tools & services**

- Discord / Slack / WhatsApp / Telegram
- Discourse / Circle (forums)
- In-product community layer
- Polls + AMAs

**Common pitfalls**

- Launching a community and leaving it empty and unattended.
- Choosing a platform your audience does not use.
- Chasing size over genuine engagement early.
- No clear reason for members to join or return.

**Go deeper**

- [CMX: community building](https://cmxhub.com/)
- [Discourse](https://www.discourse.org/)
- [Circle (community platform)](https://circle.so/)

**Definition of done:** An active, well-seeded community integrated into your product and feedback loops.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/84-build-a-community)

---

### 85. Add a referral / invite program

> **Goal:** Turn happy users into a growth channel with built-in sharing and referral incentives.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** A meaningful share of new users arriving via referral; rising viral coefficient.

**Why this matters.** Referrals are high-trust, low-cost acquisition — people believe friends over ads. A working referral loop can drive compounding, viral growth toward your user targets.

**Explain it like I'm 5.** You make it easy and rewarding for happy users to invite their friends, so growth spreads on its own. It’s “tell a friend, you both get a treat.”

Your happiest users are your best marketers: a recommendation from a friend converts far better than any ad, and it costs you little. A referral or invite program systematises this word-of-mouth so it happens by design rather than by chance. The classic model (Dropbox's famous example) rewards both the referrer and the new user — give storage, credits, discounts, cash, premium features, or other value to both sides for a successful referral. The double-sided incentive works because it gives the referrer a reason to share and the invitee a reason to accept. Match the reward to your economics and to what your users actually value.

Design the loop for low friction and genuine motivation. Make sharing effortless: a personal referral link, one-tap sharing to the channels your users use (WhatsApp, email, social), pre-written messages they can customise, and clear visibility of their referral status and rewards. Prompt sharing at the right moments — right after a user experiences value or hits a success milestone (the peak of goodwill), not the moment they sign up before they care. Ensure the incentive is compelling enough to motivate action but sustainable for your unit economics. Beyond formal rewards, build in natural sharing where your product creates shareable output (invite teammates, share a result, public profiles) — collaborative products often grow through inherent invitations.

Instrument, protect and iterate on it. Track the key referral metrics: how many users refer, how many invites each sends, the invite acceptance/conversion rate, and your viral coefficient (new users generated per existing user) — a coefficient approaching or exceeding 1 means self-sustaining viral growth, though even below 1 referrals meaningfully lower your blended acquisition cost. Guard against abuse (fake accounts farming rewards) with sensible limits and verification. A/B test the incentive, the messaging and the prompt timing to improve performance. Remember the prerequisite: referral programs amplify an already-good product — if people do not love it, no incentive will make them recommend it (so make sure retention and satisfaction are solid first). Done right, a referral loop becomes a compounding, low-cost acquisition engine that turns your growing base of happy users into accelerating growth toward the 10,000 target.

**What this looks like in practice**

- Dropbox giving extra storage for each successful referral.
- A one-tap “invite a teammate” with a shared reward.
- A referral leaderboard for your most active fans.

**Checklist**

- [ ] Pick a reward model (often double-sided) matched to your economics.
- [ ] Give each user a personal referral link and easy one-tap sharing.
- [ ] Prompt sharing right after a value/success moment.
- [ ] Add natural invitations where the product creates shareable output.
- [ ] Track referrers, invites, acceptance rate and viral coefficient.
- [ ] Add anti-abuse limits and verification.
- [ ] A/B test incentive, messaging and timing; ensure the product is loved first.

**Tools & services**

- Referral tooling (Rewardful/GrowSurf) or custom
- Share links + prefilled messages
- Analytics (viral coefficient)
- Anti-fraud checks

**Common pitfalls**

- Launching referrals before the product is genuinely loved.
- High-friction sharing that no one bothers with.
- Prompting at sign-up before users care.
- No fraud protection, so rewards get farmed.

**Go deeper**

- [Reforge: viral growth loops](https://www.reforge.com/blog)
- [Dropbox referral case study](https://www.referralcandy.com/blog/dropbox-referral-program)
- [GrowSurf](https://growsurf.com/)

**Definition of done:** A low-friction, incentivised referral loop with tracked viral metrics.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/85-add-a-referral-invite-program)

---

### 86. Improve retention hooks & habit formation

> **Goal:** Design product mechanics that bring users back and build a lasting habit.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Hard · **Estimate:** 3–5 days · **Metric:** Improved repeat usage and a flatter, higher retention curve.

**Why this matters.** Retention is the engine of sustainable growth. Deliberate hooks — triggers, rewards, and reasons to return — turn a useful tool into a habit users keep coming back to.

**Explain it like I'm 5.** You design little reasons for people to come back regularly until it becomes a habit — streaks, reminders, fresh value. It’s giving your product a reason to be part of someone’s routine.

Acquiring users is expensive; keeping them is where value compounds. Beyond fixing funnel leaks, you can deliberately design your product to bring users back and become a habit. A useful framework is the Hook model (trigger → action → variable reward → investment): external triggers (a notification, email) and eventually internal triggers (an emotion or routine that reminds the user to open your product) prompt the action, which delivers a reward, and the user's investment (their data, content, connections, progress) makes the product more valuable each time and harder to leave. Map your product to this loop and strengthen each part.

Build concrete retention hooks appropriate to your product. Meaningful, well-timed notifications and lifecycle emails (built earlier) that give a real reason to return. Streaks, progress, goals and milestones that create momentum and a sense of investment (used well — not manipulatively). Reasons the product gets better with use: saved history, personalisation, accumulated content, network connections, integrations — all increase switching costs and value over time. Regular fresh value (new content, updates, insights) so there is always a reason to come back. Identify your product's natural usage frequency (daily, weekly, monthly) and design hooks to match it — do not force daily engagement on an inherently weekly product; instead be reliably valuable at the natural cadence.

Do it ethically and measure it. The line between a helpful habit and a manipulative dark pattern matters — build hooks that create genuine value and that users would thank you for, not ones that exploit or trap them (manipulative tactics backfire in trust and retention anyway). Anchor hooks to a real "aha" and repeated value, not gimmicks. Then measure impact on retention: watch your cohort curves and frequency metrics as you add hooks, and keep what actually moves them. Combine with your feedback loop to understand why people return (or do not). Strengthening retention is often the single highest-leverage growth work, because it compounds — better retention means users accumulate instead of churning, each acquired user is worth more, word-of-mouth grows, and you actually reach and hold a base of 10,000 active users rather than endlessly refilling a leaky bucket. It is also the clearest evidence of product-market fit that investors look for.

**What this looks like in practice**

- Duolingo’s streaks and reminders that build a daily habit.
- A weekly digest that pulls users back in.
- Saved progress that makes returning feel rewarding.

**Checklist**

- [ ] Map your product to a trigger → action → reward → investment loop.
- [ ] Add meaningful triggers (notifications/emails) that give a real reason to return.
- [ ] Build investment: saved history, personalisation, content, connections.
- [ ] Add progress/streaks/milestones where genuinely motivating.
- [ ] Deliver regular fresh value; match hooks to natural usage frequency.
- [ ] Keep hooks ethical — value-creating, not manipulative.
- [ ] Measure impact on cohort retention and frequency; keep what works.

**Tools & services**

- Notifications + lifecycle email
- Progress/streak mechanics
- Personalisation/recommendations
- Cohort retention analytics

**Common pitfalls**

- Forcing daily use on an inherently weekly product.
- Manipulative dark patterns that erode trust.
- Hooks with no real underlying value.
- Adding hooks without measuring retention impact.

**Go deeper**

- [Hooked (Nir Eyal)](https://www.nirandfar.com/hooked/)
- [Reforge: engagement & retention](https://www.reforge.com/blog)
- [Lenny: retention](https://www.lennysnewsletter.com/)

**Definition of done:** Ethical retention hooks matched to your usage frequency, proven to lift retention.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/86-improve-retention-hooks-and-habit-formation)

---

### 87. Run win-back & re-engagement campaigns

> **Goal:** Bring back users who have gone quiet or churned with targeted campaigns.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** 2–3 days · **Metric:** A measurable share of at-risk/churned users reactivated; lower net churn.

**Why this matters.** Reactivating a past user is often cheaper than acquiring a new one — they already know you. Win-back campaigns recover value you have already paid to acquire and reduce net churn.

**Explain it like I'm 5.** You reach out to users who drifted away and invite them back with something worthwhile. It’s a friendly “hey, we’ve missed you — look what’s new.”

Some users will always drift away — they get busy, forget, or hit a snag — but many are recoverable, and reactivating them is usually far cheaper than acquiring someone new, because they already know your product and once saw value. A systematic re-engagement effort recovers value you have already paid for and directly improves your net retention. Start by defining what "at risk" and "churned" mean for your product (based on your natural usage frequency — e.g. no core action in X weeks), and detect these states automatically so campaigns can trigger without manual work.

Design campaigns for the different stages of disengagement. For at-risk users (slowing down but not gone), a timely, gentle nudge often works best — a helpful tip, a reminder of value they are missing, or a check-in — catching them before they fully churn. For churned users (gone for a while), a win-back sequence: remind them what they are missing, show what is new or improved since they left (addressing the reason they may have left), offer help or an incentive to return, and make coming back frictionless. Personalise based on what they did before and, ideally, why they left (your feedback and churn surveys are gold here — sometimes the fix is telling them you shipped the very thing they wanted). Keep messages empathetic and value-focused, not desperate or guilt-tripping.

Optimise, and know when to let go. Track re-engagement/reactivation rates and iterate on messaging, timing, offers and channels (email, push, even a personal message for high-value users). Combine win-back with genuinely fixing the reasons people leave — the best win-back is a better product, so feed churn insights back into your roadmap. Also practise good list hygiene: for users who are truly gone and unresponsive after your win-back attempts, stop emailing them (a final "should we stay in touch?" then remove), since continuing to send to dead contacts hurts deliverability. Well-run re-engagement campaigns quietly recover a meaningful slice of users you would otherwise lose forever, lowering your effective churn and stretching every acquisition dollar further — an important lever as you push toward, and try to hold, 10,000 active users.

**What this looks like in practice**

- An email to churned users highlighting a big new feature.
- A win-back discount for expired subscriptions.
- Asking lapsed users why they left, and fixing that reason.

**Checklist**

- [ ] Define at-risk and churned based on your natural usage frequency.
- [ ] Detect these states automatically to trigger campaigns.
- [ ] Nudge at-risk users early with helpful, value-focused messages.
- [ ] Build a win-back sequence for churned users (what’s new, help, incentive).
- [ ] Personalise by past behaviour and known reasons for leaving.
- [ ] Track reactivation rates; iterate on message, timing, offer, channel.
- [ ] Feed churn reasons into the roadmap; prune truly-dead contacts.

**Tools & services**

- Lifecycle email/automation
- Churn detection (product events)
- Churn surveys
- Push / personal outreach (high-value)

**Common pitfalls**

- No churn definition, so campaigns never trigger.
- Generic, guilt-trippy win-back messages.
- Ignoring why users left instead of addressing it.
- Emailing dead contacts forever, hurting deliverability.

**Go deeper**

- [Customer.io: win-back campaigns](https://customer.io/resources)
- [Reforge: resurrection](https://www.reforge.com/blog)
- [Churn survey best practices](https://www.chargebee.com/blog/)

**Definition of done:** Automated re-engagement and win-back campaigns with tracked reactivation.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/87-run-win-back-and-re-engagement-campaigns)

---

### 88. Deliver great support & customer success

> **Goal:** Help users succeed fast and turn support interactions into loyalty and advocacy.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** Ongoing (set up in 1–2 days) · **Metric:** High satisfaction (CSAT), lower churn, and support-driven advocacy.

**Why this matters.** Support is where trust is won or lost. Fast, genuine help turns frustrated users into loyal fans and advocates, reduces churn, and — early on — is a goldmine of product insight.

**Explain it like I'm 5.** You help users quickly whenever they’re stuck and make sure they actually succeed with your product. Great support turns frustrated people into loyal fans.

Every support interaction is a moment of truth: a user has hit a problem, and how you respond decides whether they leave frustrated or become a loyal fan. Especially early, exceptional support is a competitive advantage a small team can absolutely deliver — you can be faster, more personal and more genuinely helpful than any big incumbent. Treat support not as a cost to minimise but as an opportunity to build relationships and learn. Make it easy for users to reach you (in-app chat/widget, email, a clear contact path) and respond quickly and genuinely; a fast, human reply often impresses users more than a flawless product.

Go beyond reactive fixes into customer success — proactively helping users get value. This is the difference between "waiting for problems" and "ensuring users succeed." For a self-serve product, this means great onboarding, docs and in-app guidance (built earlier) plus proactive nudges when someone seems stuck; for higher-value customers, it can mean personal check-ins and onboarding help. The goal is that users actually achieve the outcome they came for, because successful users retain, expand and refer, while stuck users churn silently. Watch for signals of struggling users (low activation, stalled usage) and reach out before they give up.

Learn from support and scale it wisely. Early on, do support yourself (or the founders do) — it is one of the richest sources of product insight there is, revealing exactly what confuses users, what breaks, and what they want, which should feed directly into your roadmap and help content. Track support themes to find recurring problems worth fixing at the source (a common question is a docs gap or a UX flaw). As volume grows, scale with self-service (a strong help center deflects repetitive questions), canned responses/macros for common issues, and eventually AI assist or hires — but preserve the personal, high-quality feel that differentiates you. Measure support quality (response time, resolution, satisfaction/CSAT). Also turn happy support moments into advocacy: a delighted user is the perfect person to ask for a review, testimonial or referral. Great support and customer success compound into retention, word-of-mouth and a reputation for caring — all of which drive sustainable growth toward, and retention of, your user targets.

**What this looks like in practice**

- Fast, friendly replies via chat or email.
- Proactively checking in with new customers to ensure they’re winning.
- Turning a support ticket into a delighted public review.

**Checklist**

- [ ] Make support easy to reach (in-app, email, clear contact path).
- [ ] Respond fast and genuinely; treat each interaction as relationship-building.
- [ ] Be proactive: detect struggling users and reach out before they churn.
- [ ] Do support yourself early; mine it for product and docs insights.
- [ ] Track recurring themes and fix problems at the source.
- [ ] Scale with self-service, macros and (later) AI/hires without losing the personal feel.
- [ ] Turn delighted users into reviews, testimonials and referrals.

**Tools & services**

- Intercom / Crisp / HelpScout
- Help center (self-service)
- CSAT/feedback
- Proactive messaging (struggling-user triggers)

**Common pitfalls**

- Treating support as a cost to minimise, not a chance to win fans.
- Slow or robotic responses that frustrate users.
- Fixing tickets without addressing root causes.
- Outsourcing support too early and losing product insight.

**Go deeper**

- [Intercom: customer support](https://www.intercom.com/blog/)
- [Help Scout: support best practices](https://www.helpscout.com/blog/)
- [The effortless experience (support)](https://www.tandemresearch.com/)

**Definition of done:** Fast, personal support plus proactive success, feeding insights into the product.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/88-deliver-great-support-and-customer-success)

---

### 89. Build a social-proof engine

> **Goal:** Systematically collect and showcase reviews, testimonials, case studies and UGC.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Easy · **Estimate:** 2–3 days · **Metric:** Growing library of specific proof; higher conversion where it is shown.

**Why this matters.** People trust other people far more than your marketing. Social proof lifts conversion everywhere it appears and builds the credibility that turns skeptics into customers.

**Explain it like I'm 5.** You gather proof that real people love your product — reviews, testimonials, star ratings — and show it off. Social proof makes new visitors trust you faster.

Prospective customers are skeptical of what you say about yourself but trust what other users say about you — social proof is one of the most powerful conversion levers there is, and it compounds as your user base grows. Rather than scrambling for a testimonial when you need one, build a repeatable engine that continuously collects and showcases proof. The forms of proof to gather: written testimonials (a happy user's quote with name, photo and role — specific and outcome-focused beats generic praise), reviews (on relevant platforms — G2, Capterra, app stores, Google, Trustpilot depending on your product), case studies (a deeper story of a customer's problem, your solution, and measurable results — powerful for B2B), video testimonials (highly persuasive), star ratings, usage stats ("10,000 users"), logos of known customers, and user-generated content (people organically posting about you).

Systematise the collection. Identify happy users through your NPS/satisfaction data, support interactions and usage (power users, those who hit success milestones) and ask them at the peak of their goodwill — right after a win, a positive support experience, or a high NPS score. Make it easy: a direct link to leave a review, a short set of testimonial questions, or a quick call you turn into a case study. Ask specific questions that elicit concrete, outcome-focused answers ("what problem did this solve? what result did you get?") rather than vague praise. Build the ask into your lifecycle (an automated prompt after a milestone) so proof accumulates continuously rather than sporadically. Always get permission to use names, photos and quotes.

Showcase proof strategically and keep it fresh. Place testimonials and social proof where they reduce doubt at decision moments: your homepage hero and throughout the marketing site, on the pricing page (near the decision), in checkout/sign-up flows, in ads and emails, and on dedicated case-study pages. Match the proof to the audience (show enterprise logos to enterprise prospects, relatable individual stories to individuals). Encourage and amplify user-generated content by making your product shareable and by engaging with and reposting mentions. Keep it current — outdated or thin proof is unconvincing — and grow it as you scale (your journey toward 10,000 users itself becomes proof: "join 10,000+ users"). A steady social-proof engine turns your satisfied users into a compounding credibility asset that lifts conversion across every channel and helps overcome the trust barrier that stops prospects from becoming customers.

**What this looks like in practice**

- A wall of testimonials and logos on the homepage.
- Automatically requesting a review after a great experience.
- Showcasing user-generated content and case studies.

**Checklist**

- [ ] Identify happy users via NPS, support and usage signals.
- [ ] Ask at peak goodwill (after a win, great support, high NPS).
- [ ] Collect varied proof: testimonials, reviews, case studies, video, logos, stats.
- [ ] Ask specific, outcome-focused questions; always get permission.
- [ ] Automate the ask into your lifecycle so proof accumulates.
- [ ] Place proof at decision moments (hero, pricing, checkout, ads, emails).
- [ ] Match proof to audience; keep it fresh and growing.

**Tools & services**

- Review platforms (G2/Capterra/Trustpilot/app stores)
- Testimonial tools (Senja/Testimonial.to)
- Case-study process
- NPS to identify promoters

**Common pitfalls**

- Scrambling for proof only when you need it.
- Generic "great product!" quotes with no specifics or names.
- Hiding proof away instead of placing it at decision points.
- Stale or thin social proof that undercuts credibility.

**Go deeper**

- [Testimonial.to](https://testimonial.to/)
- [Case study frameworks](https://www.animalz.co/blog/)
- [Robert Cialdini: social proof](https://www.influenceatwork.com/)

**Definition of done:** A repeatable engine collecting and showcasing social proof at decision moments.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/89-build-a-social-proof-engine)

---

### 90. Add loyalty, rewards & expansion

> **Goal:** Reward loyal users and grow revenue per customer through upsells and expansion.
>
> **Phase:** 9 — Email, Community & Retention · **Difficulty:** Medium · **Estimate:** 2–4 days · **Metric:** Rising LTV/ARPU and net revenue retention trending toward or above 100%.

**Why this matters.** It is far cheaper to grow existing customers than acquire new ones. Loyalty and expansion increase lifetime value, improve unit economics, and can push net revenue retention above 100%.

**Explain it like I'm 5.** You reward your best customers and give them ways to buy more, growing revenue from people who already love you. It’s taking great care of regulars and offering them the deluxe option.

Growth is not only about new users — it is also about getting more value from the users you already have, which is far cheaper and improves the unit economics investors scrutinise. Two levers work together here. Loyalty: recognising and rewarding your best, longest-tenured and most engaged customers so they feel valued and stay (and advocate). Expansion: growing the revenue and value each customer represents over time through upsells, cross-sells and usage growth. Together these increase customer lifetime value (LTV) and can push your net revenue retention above 100% — meaning your existing base grows revenue even before new sales, one of the strongest signals of a healthy, fundable business.

Design expansion that aligns with delivering more value, not squeezing users. Natural expansion paths: tiered plans where growing usage or needs lead customers to upgrade (seats, usage limits, advanced features gated to higher tiers); add-ons and premium features that solve additional problems for those who want them; and usage-based components that scale revenue with the value delivered. The key is that customers expand because they are getting more value, not because you trapped them — trigger upgrade prompts on genuine signals of readiness (hitting a limit, using a feature that a higher tier enhances) so the offer is timely and relevant rather than pushy. Make upgrading frictionless.

Add loyalty and reward mechanics that deepen the relationship. Recognise milestones and tenure (anniversary perks, status tiers, early access for loyal users), reward the behaviours you value (referrals, engagement, advocacy), and consider a rewards or credits program if it fits your model. Even simple gestures — thanking long-time users, giving power users a voice in your roadmap, surprise-and-delight perks — build the emotional loyalty that reduces churn and drives word-of-mouth. Measure the results: track LTV, average revenue per user, expansion revenue, and net revenue retention over time, and watch that loyalty/expansion efforts genuinely improve them without harming satisfaction. Balancing new-user acquisition with growing and retaining existing customers is what makes growth efficient and sustainable — expansion revenue and strong net retention stretch every acquisition dollar, improve the economics that determine whether you can profitably reach and hold 10,000+ users, and demonstrate to investors that customers not only stay but grow, which is exactly the durable, compounding growth that earns funding.

**What this looks like in practice**

- A loyalty or points program for long-time users.
- Upselling a Pro tier with advanced features.
- Expansion revenue as teams add more seats.

**Checklist**

- [ ] Design tiered plans/add-ons where more value leads to upgrades.
- [ ] Trigger upgrade prompts on genuine readiness signals (limits, feature use).
- [ ] Make upgrading frictionless and clearly value-driven.
- [ ] Reward loyalty: tenure perks, status, early access, advocacy rewards.
- [ ] Use simple surprise-and-delight to deepen emotional loyalty.
- [ ] Give power/loyal users a voice in the roadmap.
- [ ] Track LTV, ARPU, expansion revenue and net revenue retention.

**Tools & services**

- Tiered billing/add-ons (Stripe)
- In-app upgrade prompts
- Loyalty/rewards mechanics
- LTV / NRR analytics

**Common pitfalls**

- Focusing only on new users while ignoring expansion.
- Pushy upsells that damage trust instead of adding value.
- Rewarding nothing, so loyal users feel unrecognised.
- Not measuring LTV/NRR, so you cannot tell if it works.

**Go deeper**

- [a16z: net revenue retention](https://a16z.com/2019/05/24/saas-metrics/)
- [Reforge: monetisation & expansion](https://www.reforge.com/blog)
- [ProfitWell: expansion revenue](https://www.paddle.com/resources)

**Definition of done:** Working expansion paths and loyalty mechanics that grow LTV and net retention.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/90-add-loyalty-rewards-and-expansion)

---

## Phase 10: Growth to 10,000

_Launch loudly, find the one or two channels that work, and scale them: content and SEO, paid ads, social, influencers, PR, automations and, when it pays, boots on the ground._

**Outcome:** 10,000 users, 10,000 followers and 10,000 transactions — with proof.

### 91. Nail your growth strategy & pick channels

> **Goal:** Choose the one or two acquisition channels to focus on and how to test them.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Hard · **Estimate:** 2–4 days · **Metric:** A repeatable channel with acceptable CAC and quality users identified.

**Why this matters.** Trying every channel at once spreads a small team too thin to win any of them. Focus, tested with discipline, is how startups find the one or two channels that actually scale.

**Explain it like I'm 5.** You pick the one or two best ways to get new users and focus hard on them, instead of doing a little of everything badly. It’s choosing the fishing spots where the fish actually are.

Reaching 10,000 users will not happen by dabbling in ten channels; it happens by finding the one or two that work for your product and audience, and doubling down. Most successful startups grow primarily through a small number of channels, not a scattergun of all of them. So before spending money and energy everywhere, form a strategy: list the plausible channels (content/SEO, paid ads, social, influencers, PR, partnerships, community, referrals, outbound, on-ground), and reason about which fit your ICP (where do they already spend attention?), your product (a viral consumer app suits different channels than a niche B2B tool), and your economics (can you afford paid acquisition given your price point?).

Use a disciplined framework to choose and test. The "Bullseye" approach (from Traction) is useful: brainstorm every channel, rank them into most-promising few, then run cheap experiments on those few to find what actually works before committing. For each candidate channel, define a small, time-boxed test with a clear success metric (cost per acquisition, sign-ups, quality of users) so you can compare objectively rather than by gut. Be honest about results: a channel that brings cheap, activating, retaining users is a winner; one that brings expensive or low-quality traffic is not, however popular it is elsewhere. Your earlier launch and analytics data already hint at which channels convert — build on that.

Then focus and scale. Once testing reveals a channel (or two) with promising, repeatable results and acceptable economics, pour your effort there and work to scale it while keeping unit economics sound, rather than immediately chasing the next shiny channel. Set concrete growth targets tied to your 10,000 goals and a rough plan/timeline for how each channel contributes. Keep a small amount of experimentation ongoing to discover new channels as you grow and as channels saturate, but resist the trap of constant channel-hopping that never masters any. Document your growth strategy — the channels, the tests, the results, the focus — so it is deliberate and reviewable in your weekly metrics rhythm. Clarity and focus on the right channels is what turns growth from random activity into a repeatable engine driving toward five figures of users.

**What this looks like in practice**

- Choosing SEO + LinkedIn as your two focus channels for the quarter.
- Running small tests to see which channel gets cheapest sign-ups.
- Doubling down on the one channel that clearly works.

**Checklist**

- [ ] List every plausible acquisition channel.
- [ ] Rank by fit with your ICP, product and economics (Bullseye).
- [ ] Run cheap, time-boxed tests on the top few with clear success metrics.
- [ ] Judge channels on cost, quality, activation and retention of users.
- [ ] Focus effort on the 1–2 channels that work; scale while economics hold.
- [ ] Set growth targets tied to your 10,000 goals with a timeline.
- [ ] Keep light ongoing experimentation; document the strategy.

**Tools & services**

- Traction: Bullseye framework
- Analytics (CAC/quality by channel)
- A channel-test tracker
- Weekly metrics review

**Common pitfalls**

- Spreading thin across ten channels and winning none.
- Judging channels by vanity traffic, not user quality/economics.
- Constant channel-hopping that never masters one.
- No clear success metric per test.

**Go deeper**

- [Traction (Weinberg & Mares)](https://tractionbook.com/)
- [Lenny: growth channels](https://www.lennysnewsletter.com/)
- [a16z: growth](https://a16z.com/)

**Definition of done:** A focused growth strategy naming 1–2 primary channels validated by tests.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/91-nail-your-growth-strategy-and-pick-channels)

---

### 92. Scale the content & SEO machine

> **Goal:** Turn content and SEO into a compounding organic acquisition engine.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Hard · **Estimate:** Ongoing · **Metric:** Organic traffic and organic-sourced sign-ups growing month over month.

**Why this matters.** Organic search is the channel that keeps giving after you stop paying. Scaled deliberately, content and SEO can become your largest, cheapest and most durable source of users.

**Explain it like I'm 5.** You turn your blog and SEO into a machine that keeps bringing free visitors month after month, growing on its own. It’s planting an orchard that keeps producing fruit.

You laid the SEO foundation and started a blog earlier; now scale content into a genuine growth engine, because organic search is often the highest-ROI long-term channel — it compounds, it is not rented from an ad platform, and it brings high-intent visitors indefinitely. Scaling means moving from occasional posts to a systematic content operation: a prioritised backlog of topics mapped to keywords across the funnel, a consistent production cadence, topic clusters that build authority in your niche, and continuous optimisation of what you publish. Aim to own the search results your buyers see when they have the problem you solve.

Build the machine, not just the articles. Expand your keyword and topic research into a roadmap covering informational content (top-of-funnel, brings traffic and trust), commercial content (comparisons, alternatives, "best X" — high intent, closer to conversion), and product-led/programmatic pages where relevant (e.g. templated pages targeting many long-tail variations at scale — powerful for some products). Establish a repeatable production process (research → outline → draft → edit → optimise → publish → promote → update) so quality stays high as volume grows; AI can accelerate drafting and outlining, but keep human expertise and editing so content is genuinely useful and not the low-value AI spam search engines now penalise. Interlink content into clusters, and pursue off-page SEO too — earning quality backlinks (through genuinely link-worthy content, digital PR, guest posts, and being useful in your community) is a major ranking driver.

Optimise relentlessly and diversify formats. Use Search Console to find pages ranking on page two (small pushes can move them to page one for big traffic gains) and content that is slipping (refresh it — updating existing content often beats writing new). Track which content drives not just traffic but sign-ups and revenue, and double down on what converts. Beyond written articles, extend the engine into other searchable/discoverable formats where your audience is — YouTube (the second-largest search engine), which also feeds your social presence. Content and SEO are a patient, compounding play: it can take months to build momentum, but a mature content engine becomes a moat competitors cannot quickly replicate and a steady stream of free, high-intent users flowing toward your 10,000 target long after each piece is published.

**What this looks like in practice**

- Publishing content on a schedule and updating old posts.
- Building topic clusters that rank for a whole subject area.
- Organic traffic compounding into a steady stream of sign-ups.

**Checklist**

- [ ] Build a keyword/topic roadmap across informational, commercial and programmatic content.
- [ ] Set a repeatable production process and a sustainable cadence.
- [ ] Use AI to accelerate drafts but keep human expertise and editing.
- [ ] Interlink into topic clusters; pursue quality backlinks (digital PR, guest posts).
- [ ] Use Search Console to push page-two wins and refresh slipping content.
- [ ] Track content that drives sign-ups/revenue, not just traffic; double down.
- [ ] Extend into YouTube and other discoverable formats.

**Tools & services**

- Ahrefs / Semrush
- Google Search Console
- AI drafting + human editing
- Content ops (Notion/Airtable)

**Common pitfalls**

- Publishing low-value AI spam that never ranks and can be penalised.
- Ignoring off-page SEO (backlinks) entirely.
- Chasing traffic that never converts.
- Giving up before SEO’s compounding kicks in.

**Go deeper**

- [Ahrefs blog](https://ahrefs.com/blog/)
- [Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Programmatic SEO guide](https://www.programmaticseo.com/)

**Definition of done:** A systematic content/SEO operation compounding into growing organic acquisition.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/92-scale-the-content-and-seo-machine)

---

### 93. Build organic social & distribution

> **Goal:** Grow an engaged audience on the platforms your customers use (incl. a LinkedIn presence).
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Medium · **Estimate:** Ongoing · **Metric:** Growing engaged followers and social-sourced sign-ups toward 10,000.

**Why this matters.** Organic social builds brand, distributes your content, and grows the 10,000-follower target. A founder’s authentic presence — especially on LinkedIn/X — can be a powerful early growth driver.

**Explain it like I'm 5.** You build a following on the social platforms your customers use — posting useful things regularly, including on LinkedIn — so more people discover you. It’s showing up where the crowd already hangs out.

Organic social media does double duty: it builds an audience (contributing directly to your 10,000-follower target) and it distributes your content and message to grow awareness and users. The mistake most founders make is trying to be everywhere; instead, focus on the one or two platforms where your ICP actually spends time and where your content format fits — LinkedIn and X are often high-leverage for B2B and startup audiences, Instagram/TikTok for consumer and visual products, YouTube for depth, and WhatsApp/Telegram/Facebook groups where your local market gathers. Pick your battlegrounds and commit to them rather than spreading thin.

Lean into founder-led, authentic content, which massively outperforms polished corporate posts early on. People connect with people and stories, not logos. Share your building journey (build-in-public), lessons learned, customer wins, useful insights from your domain, and behind-the-scenes moments — a genuine LinkedIn post or X thread telling your story or teaching something valuable can reach far more people than any ad, and costs nothing but effort. Post consistently (a sustainable cadence beats sporadic bursts), engage genuinely with others in your space (commenting and connecting grows reach more than just broadcasting), and use the content you are already creating (repurpose blog posts, data, product updates into native social posts and threads).

Turn social into a repeatable distribution system, not random posting. Maintain a simple content calendar, batch content creation, repurpose each core piece across platforms in native formats, and use scheduling tools to stay consistent without living in the apps. Track what resonates (engagement, reach, clicks, resulting sign-ups) and do more of it. Encourage and amplify user-generated content and mentions. As you find what works, you can systematise and even semi-automate parts of it (covered in the automation task). Set follower and engagement growth as tracked goals tied to your 10,000 target, but remember quality of audience matters more than raw follower count — an engaged, relevant following that trusts you drives real sign-ups and word-of-mouth, whereas vanity followers do nothing. A consistent, authentic organic social presence compounds into a durable owned audience and a reliable distribution channel for everything you create.

**What this looks like in practice**

- A consistent LinkedIn posting habit that builds an audience.
- Short videos or threads that get shared widely.
- Repurposing one idea across X, LinkedIn and TikTok.

**Checklist**

- [ ] Focus on the 1–2 platforms where your ICP actually is.
- [ ] Lead with authentic, founder-led content (build-in-public, lessons, wins).
- [ ] Post consistently and engage genuinely, not just broadcast.
- [ ] Repurpose your content into native formats per platform.
- [ ] Run a content calendar; batch and schedule to stay consistent.
- [ ] Track engagement, reach and resulting sign-ups; double down on what works.
- [ ] Grow an engaged, relevant audience toward the 10,000-follower goal.

**Tools & services**

- LinkedIn / X / Instagram / TikTok / YouTube
- Buffer / Typefully / Hypefury (scheduling)
- Content calendar
- Analytics per platform

**Common pitfalls**

- Trying to be on every platform and doing all badly.
- Polished corporate posts instead of authentic founder content.
- Broadcasting without engaging with others.
- Chasing vanity followers over an engaged, relevant audience.

**Go deeper**

- [Build in public (guide)](https://buildinpublic.com/)
- [Justin Welsh: LinkedIn/solopreneur](https://www.justinwelsh.me/)
- [Typefully (X/LinkedIn)](https://typefully.com/)

**Definition of done:** A consistent, authentic presence on 1–2 platforms with a growing engaged audience.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/93-build-organic-social-and-distribution)

---

### 94. Run paid advertising

> **Goal:** Use Google, Meta/Facebook and other paid channels to acquire users profitably.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Hard · **Estimate:** Ongoing (test in 1–2 weeks) · **Metric:** Scalable paid acquisition with LTV:CAC ≥ 3:1 and healthy user quality.

**Why this matters.** Paid ads buy predictable, scalable traffic — the fastest way to test messaging and, once unit economics work, to scale acquisition toward 10,000 users on demand.

**Explain it like I'm 5.** You pay to show ads to the right people on Google or Facebook to bring in users — carefully, so you earn back more than you spend. It’s buying attention, but only if the math works.

Paid advertising is the channel you can turn up on demand: unlike organic, which takes time to compound, ads deliver traffic immediately, let you test messaging and audiences fast, and scale predictably — provided the economics work. The major channels are search ads (Google — capturing high-intent people actively searching for your solution, usually the highest-converting paid traffic) and social/display ads (Meta/Facebook & Instagram, TikTok, LinkedIn for B2B — great for reaching people by interest/demographics and for visual storytelling). Start small and treat early spend as paid research: the goal first is to learn what messaging, creative and audiences convert, not to scale immediately.

Run it disciplined and measured, because ads punish sloppiness by burning money. Define your target cost per acquisition based on your unit economics (you need CAC comfortably below LTV — a common target is LTV:CAC of 3:1 or better — for paid to be sustainable). Set up conversion tracking properly (so you optimise toward real sign-ups/customers, not clicks), send traffic to relevant, high-converting landing pages (not your generic homepage), and start with tightly targeted audiences and small budgets. Test systematically: multiple ad creatives and headlines, different audiences, different landing pages — kill losers fast and reallocate to winners. For Google, focus on high-intent keywords; for Meta, nail the creative (the ad itself matters most) and let the platform find your audience.

Scale only what works, and watch the economics like a hawk. Once you find a profitable combination (creative + audience + landing page + offer with CAC below your threshold), gradually increase budget while monitoring that performance holds (costs often rise as you scale and audiences saturate, so watch CAC and quality closely and refresh creative to combat fatigue). Track the full picture — not just cost per click, but cost per activated, retaining, paying user — because cheap clicks that never convert are expensive. Use retargeting to re-reach visitors who did not convert (often your most efficient spend). Be prepared to pause if economics break; paid is a lever you control, so use it deliberately. Done right, profitable paid acquisition becomes a dial you can turn to reliably add users toward your 10,000 goal — and demonstrating a repeatable, profitable acquisition channel is a powerful proof point for investors that growth can be scaled with capital.

**What this looks like in practice**

- A small Google Ads test on high-intent search terms.
- Facebook/Instagram ads targeted at your persona.
- Killing ads that cost more than the customers are worth.

**Checklist**

- [ ] Set a target CAC from your unit economics (aim LTV:CAC ≥ 3:1).
- [ ] Set up accurate conversion tracking (optimise to real conversions).
- [ ] Start with search (high intent) and/or Meta with small budgets.
- [ ] Send ads to dedicated, high-converting landing pages.
- [ ] Test creatives, headlines, audiences; kill losers, scale winners.
- [ ] Add retargeting for non-converting visitors.
- [ ] Scale profitable combos while watching CAC, quality and creative fatigue.

**Tools & services**

- Google Ads
- Meta Ads Manager (FB/IG)
- Conversion tracking + landing pages
- Retargeting pixels

**Common pitfalls**

- Scaling spend before proving profitable unit economics.
- Optimising to clicks instead of activated/paying users.
- Sending paid traffic to a generic homepage.
- Ignoring creative fatigue and rising CAC as you scale.

**Go deeper**

- [Google Ads basics](https://ads.google.com/home/resources/)
- [Meta Blueprint](https://www.facebook.com/business/learn)
- [a16z: CAC/LTV](https://a16z.com/16-startup-metrics/)

**Definition of done:** A profitable, tracked paid channel with CAC below your LTV threshold.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/94-run-paid-advertising)

---

### 95. Leverage influencer & creator marketing

> **Goal:** Partner with creators your audience trusts to reach engaged, relevant users.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Medium · **Estimate:** Ongoing (test in 2–3 weeks) · **Metric:** Positive-ROI creator partnerships delivering quality sign-ups.

**Why this matters.** Creators have built the trust and attention you are trying to earn. A well-matched influencer partnership can deliver highly relevant, high-converting reach faster than building your own audience.

**Explain it like I'm 5.** You team up with popular creators your audience already trusts, so their fans check you out. It’s getting a recommendation from someone people already listen to.

Influencers and creators have already done the hard work of building an engaged, trusting audience — exactly the audience you want. Partnering with the right ones can put your product in front of thousands of relevant people with the creator's implicit endorsement, which converts far better than a cold ad because it comes with borrowed trust. The key word is relevant: a creator with 5,000 highly engaged followers who are your exact ICP is worth far more than a generic celebrity with a million uninterested ones. Micro and niche creators (often more affordable and more trusted by their audience) frequently deliver better ROI than big names for early-stage startups.

Find and vet the right partners. Identify creators your ICP already follows — on the platforms you focus on — whose content and values align with your brand. Assess genuine engagement (real comments and interaction, not just follower count, which can be inflated) and audience fit, not vanity metrics. Reach out with a clear, respectful proposal and a mutually attractive arrangement — options range from free product/access, to affiliate/referral commission, to flat sponsorship fees, to co-created content or long-term ambassadorships. Give creators creative freedom within brand guidelines; authentic content in their own voice outperforms scripted ads their audience will tune out. Start with a small test partnership before committing big budgets.

Structure it to measure and scale. Use unique tracking (dedicated links, promo codes, UTM parameters) so you can attribute sign-ups and sales to each creator and judge real ROI, not just impressions. Test several creators/partnerships, then double down on those that drive quality, converting users. Build genuine relationships — creators you treat well become long-term advocates and often deliver more value over time than one-off deals. Combine influencer content with your other channels (repurpose it as social proof and ads, with permission). Beyond paid partnerships, cultivate organic advocacy: get your product into the hands of creators and passionate users who might feature it because they genuinely love it. Well-chosen creator marketing can rapidly expand your relevant reach and credibility, accelerating you toward both your user and follower targets by borrowing the trust others have built with exactly the people you want to reach.

**What this looks like in practice**

- Sponsoring a YouTuber whose viewers match your customers.
- Sending free product to creators for honest reviews.
- An affiliate deal so creators earn per customer they send.

**Checklist**

- [ ] Identify creators your ICP already follows on your focus platforms.
- [ ] Vet for genuine engagement and audience fit, not follower count.
- [ ] Reach out with a clear, mutually attractive proposal.
- [ ] Favour relevant micro/niche creators; give creative freedom.
- [ ] Start with a small test partnership before big budgets.
- [ ] Use unique links/codes/UTMs to track real sign-ups and ROI.
- [ ] Double down on winners; build long-term creator relationships.

**Tools & services**

- Creator discovery (manual / Modash / Upfluence)
- Unique links/promo codes/UTMs
- Affiliate tracking
- Content usage rights

**Common pitfalls**

- Choosing creators by follower count over engagement/fit.
- Scripting ads that feel inauthentic to their audience.
- No tracking, so ROI is unknowable.
- Big spend on an unvetted partnership.

**Go deeper**

- [Modash (creator discovery)](https://www.modash.io/)
- [Influencer marketing guide](https://influencermarketinghub.com/)
- [Micro-influencer ROI](https://later.com/blog/)

**Definition of done:** Tracked creator partnerships driving relevant, converting users.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/95-leverage-influencer-and-creator-marketing)

---

### 96. Earn PR, press & media coverage

> **Goal:** Get covered by media, newsletters and podcasts to build awareness and credibility.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Medium · **Estimate:** Ongoing · **Metric:** Credible media mentions driving awareness, backlinks and referral traffic.

**Why this matters.** Media coverage delivers reach and third-party credibility money cannot easily buy, drives spikes of traffic, builds valuable backlinks, and strengthens your story for customers and investors.

**Explain it like I'm 5.** You get written about by journalists, newsletters and podcasts to reach lots of new people and look credible. It’s getting others to tell your story to their audiences.

Press and media coverage give you something ads cannot: third-party credibility. When a respected publication, newsletter or podcast features you, their audience's trust transfers to you, driving traffic, sign-ups, valuable backlinks (great for SEO), and a "as featured in" credibility you can reuse everywhere — including with investors. You do not need a PR agency to start; founders can earn meaningful coverage directly with a good story and targeted outreach. The foundation is a genuine story worth telling — a launch, a notable milestone, an interesting data insight from your product, a unique founder journey, or a fresh take on your industry. Journalists cover stories, not products, so frame yours as a story.

Target thoughtfully rather than blasting a generic press release. Build a list of the specific outlets, journalists, newsletter writers and podcasters who actually cover your space and reach your ICP — often niche industry publications and popular newsletters deliver better, more relevant results than chasing a big general outlet. Personalise your pitch to each: reference their past work, explain concisely why this is relevant to their audience, and make their job easy (a tight pitch, a ready press kit, quotes, data, visuals — which you prepared earlier). Keep it short and lead with the hook. Build relationships over time; journalists remember helpful, non-spammy founders. Tools like HARO/Connectively let you respond to journalists actively seeking sources, an easy way to earn mentions.

Maximise and compound each opportunity. Time pitches around news hooks (your launch, funding, a milestone, a trend you can comment on). When you land coverage, amplify it across your channels, add the logo to your site's credibility bar, and nurture the relationship for future coverage. Getting on relevant podcasts is especially valuable and accessible for founders — it is long-form, builds genuine connection with an engaged audience, and creates reusable content. Track the impact (referral traffic, sign-ups, backlinks) to learn which outlets matter. PR is unpredictable and rarely a reliable primary channel, so treat it as a credibility-and-awareness multiplier alongside your core channels rather than your main engine — but a few good pieces of coverage can meaningfully boost awareness, trust and your progress toward your targets, while building the media relationships and credibility that also help when you raise.

**What this looks like in practice**

- A launch story picked up by a tech newsletter.
- A founder interview on a relevant podcast.
- A well-timed press release around a milestone.

**Checklist**

- [ ] Craft a genuine, newsworthy story (launch, milestone, data, journey).
- [ ] Build a targeted list of relevant journalists, newsletters and podcasts.
- [ ] Personalise each pitch; lead with the hook and make coverage easy.
- [ ] Use HARO/Connectively to answer journalists seeking sources.
- [ ] Time pitches around news hooks; prioritise relevant niche outlets and podcasts.
- [ ] Amplify every piece of coverage and add it to your credibility bar.
- [ ] Track referral traffic/sign-ups/backlinks; nurture media relationships.

**Tools & services**

- Media list (manual) / Prowly
- HARO / Connectively
- Press kit (prepared earlier)
- Podcast pitching

**Common pitfalls**

- Pitching a product, not a story journalists want to tell.
- Generic mass press releases with no personalisation.
- Chasing big outlets while ignoring relevant niche ones.
- Treating unpredictable PR as your primary growth channel.

**Go deeper**

- [Connectively (HARO)](https://connectively.us/)
- [YC: how to get press](https://www.ycombinator.com/library)
- [Founder PR guides](https://www.saastr.com/)

**Definition of done:** Earned coverage in relevant outlets/podcasts, amplified and tracked.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/96-earn-pr-press-and-media-coverage)

---

### 97. Build partnerships & integrations

> **Goal:** Grow through other companies’ audiences via integrations, co-marketing and channel deals.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Medium · **Estimate:** Ongoing · **Metric:** Partnership-sourced sign-ups growing; key integrations shipped and adopted.

**Why this matters.** Partnerships let you tap into audiences and distribution others have already built. Integrations, co-marketing and channel partners can drive scalable, high-trust growth you could not reach alone.

**Explain it like I'm 5.** You connect with other companies so you can reach each other’s customers — building integrations or doing joint marketing. It’s teaming up so both of you grow.

Partnerships are a form of leverage: instead of building every audience yourself, you tap into audiences and distribution other companies have already built, in a mutually beneficial way. Several models can drive real growth. Integration partnerships: connect your product with tools your customers already use (an integration, an app-store listing on a bigger platform's marketplace) — this both adds value for users and exposes you to the partner's user base, often a strong, high-trust acquisition channel. Co-marketing: partner with complementary (non-competing) companies serving the same ICP to do joint webinars, content, bundles, or cross-promotions, sharing audiences. Channel/reseller partnerships: others sell or distribute your product to their customers.

Pursue the partnerships that fit your product and stage. Integrations are especially powerful if your product lives in an ecosystem — being in a popular platform's marketplace (and well-reviewed there) can be a durable source of qualified users, and integrations increase your own product's stickiness. Identify the tools and platforms your ICP already uses, and prioritise integrations by user demand and reach. For co-marketing, find companies whose audience is your ICP but who are not competitors (they solve an adjacent problem), and propose a genuinely mutual value exchange — the best partnerships benefit both sides and both audiences. Start with lightweight collaborations (a joint blog post, a webinar, a mutual mention) to build the relationship before bigger commitments.

Make partnerships real and measurable. Approach potential partners with a clear articulation of the mutual benefit (what is in it for them and their users, not just you), and make it easy for them to say yes. Track results with dedicated links/attribution so you know which partnerships actually drive quality users, and invest more in those that work. Nurture partner relationships — a good partnership can deepen over time into a major channel. Be realistic: partnerships take effort to establish and not all pan out, so pursue them alongside your core channels rather than depending on them prematurely. But well-chosen integrations and partnerships can unlock scalable, high-trust distribution — reaching users through a partner's endorsement and existing relationship — that meaningfully accelerates your path to 10,000 and beyond, while also making your product more valuable and defensible.

**What this looks like in practice**

- A Slack/Zapier integration that gets you listed in their marketplace.
- A co-hosted webinar with a complementary product.
- A reseller/channel deal where a partner sells your product.

**Checklist**

- [ ] List the tools/platforms your ICP already uses; prioritise integrations by demand/reach.
- [ ] Build key integrations and list on relevant marketplaces (get good reviews).
- [ ] Find complementary, non-competing companies with the same ICP.
- [ ] Propose genuinely mutual co-marketing (webinars, content, bundles).
- [ ] Start with lightweight collaborations before big commitments.
- [ ] Articulate clear mutual benefit; make it easy to say yes.
- [ ] Track results with attribution; invest more in partnerships that work.

**Tools & services**

- Platform marketplaces / app directories
- Integration/API work
- Co-marketing (webinars/content)
- Partner attribution links

**Common pitfalls**

- Pitching partnerships that only benefit you.
- Building integrations no users actually asked for.
- Depending on partnerships before core channels work.
- No attribution, so you cannot tell which partnerships pay off.

**Go deeper**

- [Reforge: partnerships/BD](https://www.reforge.com/blog)
- [Partnership program examples](https://www.partnerhacker.com/)
- [Integration-led growth](https://www.lennysnewsletter.com/)

**Definition of done:** Live integrations and co-marketing partnerships driving tracked, quality users.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/97-build-partnerships-and-integrations)

---

### 98. Automate marketing with AI & bots

> **Goal:** Use AI and automation (chatbots, content/posting automations, agent routines) to scale without headcount.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Medium · **Estimate:** Ongoing (start in 1 week) · **Metric:** Meaningful time saved and output/conversions up without quality loss.

**Why this matters.** A small team cannot manually do everything growth requires. AI and automation multiply your output — content, posting, support, lead nurture — letting you operate like a much bigger team.

**Explain it like I'm 5.** You use AI and automation — chatbots, auto-posting, agent routines — to do marketing work without hiring a big team. It’s having tireless robot helpers handle the repetitive stuff.

As a small team pushing toward 10,000 users, your scarcest resource is time — and AI plus automation is how you multiply your output far beyond your headcount. The principle is to automate the repetitive, high-volume work so your limited human energy goes to strategy, relationships and quality. High-leverage areas to automate: content production (AI to help draft, outline, repurpose and generate variations of posts, emails and articles — always with human editing for quality and brand voice), social posting (schedule and even auto-generate posts across platforms so your presence stays consistent without daily manual effort), and image/media creation (AI image and video tools — e.g. Higgsfield, Midjourney, or a Gemini pipeline — to produce marketing visuals, ad creative and social graphics at a fraction of the usual cost and time).

Automate the customer-facing and nurture layers too. A customer support/chat bot (AI-powered) can answer common questions instantly around the clock, deflecting repetitive queries and qualifying leads while you sleep — connect it to your help content so answers are accurate, and always offer an easy path to a human. Marketing and lifecycle automation (from earlier phases) already handle behaviour-triggered emails; extend this thinking to lead scoring, automated follow-ups, and routing. You can also build agent-style routines — using tools and AI agents (for example, scheduled Claude/LLM routines, MCP-connected agents, or workflow automations in Zapier/Make/n8n) — to handle recurring tasks: monitoring mentions, drafting responses, compiling reports, generating and queuing content, syncing data between tools. These "digital employees" quietly do work that would otherwise consume hours.

Automate wisely — keep quality, authenticity and control. The failure mode is churning out generic AI slop that damages your brand and gets ignored (or penalised), so put humans in the loop for anything customer-facing and brand-defining: use AI to accelerate and scale, not to abdicate judgement. Start by automating one painful, repetitive task, verify the quality and the results, then expand. Measure impact (time saved, output produced, conversions) so automation is genuinely helping rather than just adding complexity. Maintain the personal, authentic touch that differentiates a startup — the goal is to free your time for the high-value human work (real relationships, creative strategy, talking to users) by offloading the grind to AI and automation. Done well, this lets a tiny team produce the content volume, responsiveness and consistency of a much larger one, which is often exactly what it takes to reach five-figure user and follower counts without a big budget.

**What this looks like in practice**

- A support chatbot that answers common questions 24/7.
- Automations that draft and schedule social posts.
- AI agent routines that generate content or reports on a schedule.

**Checklist**

- [ ] List your repetitive, high-volume marketing/support tasks.
- [ ] Use AI (with human editing) to draft/repurpose content and generate variations.
- [ ] Automate social scheduling and, where safe, content generation.
- [ ] Use AI image/video tools for marketing visuals and ad creative.
- [ ] Deploy an AI support/chat bot wired to your help content (human handoff available).
- [ ] Build agent/workflow routines (Zapier/Make/n8n, scheduled LLM/MCP agents) for recurring work.
- [ ] Keep humans in the loop for brand-facing output; measure time saved and results.

**Tools & services**

- LLMs (Claude/GPT) + MCP agents
- Higgsfield / Midjourney (media)
- Zapier / Make / n8n
- AI chat/support bot

**Common pitfalls**

- Publishing generic AI slop that harms the brand.
- Fully automating customer-facing work with no human oversight.
- Adding automation complexity without measuring benefit.
- Losing the authentic, personal touch that differentiates you.

**Go deeper**

- [Zapier automation guides](https://zapier.com/blog/)
- [n8n (open-source automation)](https://n8n.io/)
- [Anthropic: building with Claude](https://www.anthropic.com/)

**Definition of done:** Automated content, posting, support and workflow routines that scale output with humans in the loop.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/98-automate-marketing-with-ai-and-bots)

---

### 99. Study competitors & proven viral playbooks

> **Goal:** Learn what works by analysing competitors and proven case studies (e.g. Starter Story).
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Medium · **Estimate:** Ongoing (deep-dive in 2–4 days) · **Metric:** Higher tactic hit-rate by adapting proven playbooks to your market.

**Why this matters.** You do not have to invent every growth tactic. Studying what already worked for competitors and comparable startups lets you copy proven playbooks and skip expensive trial-and-error.

**Explain it like I'm 5.** You study what’s already working for competitors and famous success stories, and borrow the proven moves. It’s reading other teams’ playbooks before your big game.

Growth does not require reinventing the wheel — an enormous amount of what works has already been discovered and documented by others, and studying it lets you skip costly trial-and-error. Two rich sources: your competitors and comparable-startup case studies. For competitors, go deep on how they actually acquire and convert users. Which keywords do they rank and bid for (Ahrefs/Semrush reveal their organic and paid keywords and estimated traffic)? What ads are they running (Meta Ad Library and Google Ads Transparency Center show live ads — a goldmine of proven messaging and creative)? What content performs for them, what does their funnel look like, where do their backlinks come from, what are people saying about them? This tells you what is working in your exact market.

Mine proven case studies and viral playbooks. Sites like Starter Story, Indie Hackers, Failory, and growth-focused newsletters document, often in detail, how real startups grew — the specific tactics, channels, numbers and mistakes. Study companies similar to yours (same model, audience or stage) and extract concrete, applicable tactics rather than vague inspiration. Look at proven viral and high-performing content — the hooks, formats and angles that repeatedly go viral in your niche on the platforms you use — and understand why they worked (the emotional trigger, the format, the timing) so you can adapt the pattern to your brand rather than copying superficially. Swipe files of great landing pages, emails, ads and posts are worth building.

Turn analysis into your own tested tactics. The goal is not to blindly copy but to shortcut discovery: identify patterns of what works for your market and audience, adapt them to your product and voice, and test them (using your experimentation discipline) to see if they work for you too. Keep a running "swipe file" and playbook of proven tactics to try, prioritised by relevance and effort. Also learn from failures — understanding why tactics or companies failed saves you from repeating expensive mistakes. Make competitive and case-study analysis a periodic habit, not a one-off, since markets and channels evolve. By systematically learning from what has already worked (and failed) for competitors and comparable startups, you dramatically increase your hit rate and speed toward your growth targets — standing on the shoulders of others' hard-won lessons instead of paying full price for every one yourself.

**What this looks like in practice**

- Analysing a competitor’s most-shared posts and pages.
- Reading Starter Story breakdowns of how others grew.
- Copying the structure of a viral campaign for your niche.

**Checklist**

- [ ] Analyse competitors’ organic + paid keywords and traffic (Ahrefs/Semrush).
- [ ] Study their live ads in Meta Ad Library and Google Ads Transparency Center.
- [ ] Examine their content, funnel, backlinks and reviews.
- [ ] Read case studies (Starter Story, Indie Hackers, Failory) of similar startups.
- [ ] Deconstruct proven viral content: hook, format, trigger, timing.
- [ ] Build a swipe file/playbook of adaptable, prioritised tactics.
- [ ] Adapt and test tactics for your product; learn from failures too.

**Tools & services**

- Ahrefs / Semrush / SimilarWeb
- Meta Ad Library / Google Ads Transparency
- Starter Story / Indie Hackers / Failory
- A swipe file

**Common pitfalls**

- Blindly copying tactics without adapting or testing them.
- Claiming no competitors and skipping the learning.
- Copying surface-level without understanding why it worked.
- Doing it once instead of as an ongoing habit.

**Go deeper**

- [Starter Story](https://www.starterstory.com/)
- [Indie Hackers](https://www.indiehackers.com/)
- [Meta Ad Library](https://www.facebook.com/ads/library/)

**Definition of done:** A prioritised, adaptable playbook of proven tactics from competitors and case studies.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/99-study-competitors-and-proven-viral-playbooks)

---

### 100. On-ground activations & outsourcing

> **Goal:** Extend reach with offline/local activations and by hiring agencies or contractors for scale.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Hard · **Estimate:** Ongoing · **Metric:** On-ground and outsourced efforts delivering trackable, cost-effective growth.

**Why this matters.** Online tactics have limits, especially in local markets. On-ground activations reach people digital cannot, and outsourcing/hiring lets you scale execution beyond what founders can do alone.

**Explain it like I'm 5.** You add real-world efforts — local events, street activations — and hire agencies or freelancers to do more than you can alone. It’s bringing in extra hands and going offline to reach more people.

As you push for scale — particularly in a specific geographic market like Kenya — purely online tactics have limits, and two complementary moves extend your reach. First, on-ground activations: offline and local efforts that reach people digital channels miss and build trust in ways online cannot. Depending on your product and market, this can mean events, meetups, demos, university or market activations, local partnerships, field sales, sponsorships, or promoters activating your product where your customers physically are. In many markets, especially for products serving local businesses or consumers, on-ground presence and word-of-mouth are powerful and sometimes essential — a physical demo or a trusted local rep can convert people who would never sign up from an ad.

Second, outsourcing and hiring to scale execution beyond the founders. You cannot personally do all the content, ads, design, outreach and on-ground work required to reach 10,000 users — at some point, buying execution capacity is the constraint-breaker. Options range from freelancers/contractors (for specific skills — design, content, ads, video), to specialised agencies (a marketing/growth agency, a PR firm, an SEO agency, or a field-marketing/activations company to run on-ground campaigns), to your first marketing hires. Outsourcing lets you scale a proven tactic quickly without long-term commitment, and taps expertise you may lack. Start by outsourcing well-defined, proven work (scale a channel that already works, not an unproven experiment) so you get leverage rather than expensive guesswork.

Do both deliberately and measure ROI. For on-ground activations, treat them like any channel: set clear goals, track results (sign-ups, leads, conversions attributable to each activation — use codes, links, or dedicated sign-up flows), and double down on formats that work. For outsourcing, vet partners carefully (ask for relevant results and references — many agencies overpromise), start with a small scoped engagement to test them before a big commitment, give clear briefs and success metrics, and hold them accountable to outcomes, not just activity. Retain enough in-house understanding to manage and evaluate them (never fully outsource your growth strategy — own it, and use others to execute). Combining scalable online channels with targeted on-ground activations and the leverage of agencies/contractors is often what it takes to break through to five-figure user counts, especially in markets where trust is built in person — while keeping strategy and measurement firmly in your own hands.

**What this looks like in practice**

- A pop-up or campus activation to sign up users in person.
- Hiring a marketing agency to scale ads and content.
- Outsourcing design or outreach to trusted contractors.

**Checklist**

- [ ] Identify on-ground activation formats that fit your product and market.
- [ ] Run events/demos/local partnerships/field campaigns with clear goals.
- [ ] Attribute on-ground results with codes, links or dedicated sign-up flows.
- [ ] Outsource proven, well-defined work to freelancers/agencies for scale.
- [ ] Vet partners on real results/references; start with a small scoped test.
- [ ] Give clear briefs and success metrics; hold partners to outcomes.
- [ ] Keep strategy and measurement in-house; double down on what works.

**Tools & services**

- Events/meetups + field promoters
- Freelancers (Upwork/Contra) / agencies
- Attribution (codes/links/QR)
- Clear briefs + KPIs

**Common pitfalls**

- On-ground activations with no attribution or goals.
- Outsourcing an unproven tactic instead of scaling a proven one.
- Hiring an agency on promises without references or a test.
- Fully handing over growth strategy instead of owning it.

**Go deeper**

- [Field/experiential marketing basics](https://www.eventbrite.com/blog/)
- [Hiring agencies wisely](https://www.saastr.com/)
- [Do things that don’t scale](http://paulgraham.com/ds.html)

**Definition of done:** Attributed on-ground activations and vetted outsourced execution scaling proven tactics.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/100-on-ground-activations-and-outsourcing)

---

### 101. Hit the 10,000 milestones & optimise CAC/LTV

> **Goal:** Reach 10,000 users, 10,000 followers and 10,000 transactions with sustainable economics.
>
> **Phase:** 10 — Growth to 10,000 · **Difficulty:** Hard · **Estimate:** The core milestone (months) · **Metric:** 10,000 users + 10,000 followers + 10,000 transactions; LTV:CAC ≥ 3:1.

**Why this matters.** These milestones are the traction threshold many investors look for. Hitting them with healthy unit economics proves your growth is real, scalable and fundable — the goal of this whole phase.

**Explain it like I'm 5.** You push to the big goals — 10,000 users, 10,000 followers, 10,000 transactions — while making sure each customer costs less to get than they’re worth. It’s crossing the finish line without going broke doing it.

This is the culmination of the growth phase: driving to the concrete traction milestones that signal you have a real, scalable business — commonly framed as 10,000 users, 10,000 social followers, and 10,000 transactions/orders/emails (adapt the exact numbers to your model, but the point is meaningful, demonstrable scale). Reaching these is the combined result of everything in this phase working together: focused channels, compounding content/SEO, social, paid, referrals, partnerships, retention and automation. Track progress toward each explicitly in your weekly metrics review, know which channels are contributing what, and push hardest on the levers with the best return — while ensuring retention holds so you are accumulating active users, not refilling a leaky bucket.

Just as important as hitting the numbers is hitting them with sustainable economics, because growth that loses money on every user is not fundable growth — it is a countdown. Continuously optimise your two core economic metrics: customer acquisition cost (CAC — what it costs to acquire a customer, blended across channels) and lifetime value (LTV — the total value a customer delivers over their lifetime). You want LTV comfortably above CAC (a 3:1 ratio is a healthy benchmark) and a reasonable CAC payback period. Improve the ratio from both ends: lower CAC (better targeting, higher-converting funnels, more organic/referral, killing unprofitable spend) and raise LTV (better retention, expansion, higher pricing where justified). This is where all your earlier funnel, retention and monetisation work pays off — a high-converting, high-retaining product makes every channel cheaper and every customer more valuable.

Prove it is repeatable and package the story. Investors do not just want to see 10,000 users; they want evidence that your growth is repeatable and efficient — a clear, working acquisition engine with sound economics that more capital would predictably scale. So as you approach the milestones, solidify the narrative: here are our channels, here is our CAC and LTV, here is our retention, here is why the next dollar in produces more users out. Watch that quality and retention stay strong as you scale (rapid growth can mask churn — check your cohorts). Celebrate the milestones as real validation, but treat them as a threshold, not a finish line: they qualify you for the fundraising phase and the next stage of scale. Reaching meaningful traction with healthy, repeatable unit economics is precisely the proof that transforms your startup from a promising idea into a fundable company ready to raise the capital to go from 10,000 toward 100,000 and beyond.

**What this looks like in practice**

- Tracking CAC (cost to get a customer) vs LTV (what they’re worth).
- Hitting 10,000 users with healthy, improving unit economics.
- Optimising the cheapest channels as you scale to five figures.

**Checklist**

- [ ] Track explicit progress toward 10,000 users, followers and transactions.
- [ ] Know each channel’s contribution; push the highest-return levers.
- [ ] Ensure retention holds so you accumulate active users.
- [ ] Continuously measure and improve CAC and LTV (target LTV:CAC ≥ 3:1).
- [ ] Lower CAC (targeting, conversion, organic/referral) and raise LTV (retention/expansion).
- [ ] Verify quality/retention stay strong as you scale (check cohorts).
- [ ] Package the repeatable, efficient growth story for fundraising.

**Tools & services**

- KPI dashboard (users/followers/transactions)
- CAC/LTV model
- Cohort analytics
- Channel attribution

**Common pitfalls**

- Hitting user counts while losing money on every one.
- Vanity growth that churns out (a leaky bucket).
- Not knowing CAC/LTV or which channels actually work.
- Treating the milestones as a finish line, not a threshold.

**Go deeper**

- [a16z: 16 startup metrics](https://a16z.com/16-startup-metrics/)
- [What counts as traction (YC)](https://www.ycombinator.com/library)
- [Lenny: growth & metrics](https://www.lennysnewsletter.com/)

**Definition of done:** 10,000-scale traction across users, followers and transactions with healthy CAC/LTV.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/101-hit-the-10-000-milestones-and-optimise-cac-ltv)

---

## Phase 11: Fundraising: Idea → VC

_Assemble the metrics, deck, data room and story; build the pipeline of investors; run a tight process; negotiate the terms and close the round that funds the next chapter._

**Outcome:** A clean data room, a warm investor pipeline and a signed term sheet.

### 102. Decide whether (and when) to raise

> **Goal:** Consciously choose to pursue VC — or an alternative — at the right moment, for the right reasons.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Medium · **Estimate:** 1–2 weeks (reflection) · **Metric:** A conscious funding-path decision matched to your business and ambition.

**Why this matters.** VC is not free money or a badge of success; it is selling part of your company and committing to a high-growth, exit-driven path. The decision should be deliberate, not default.

**Explain it like I'm 5.** You decide, on purpose, whether raising money from investors is right for you — and when. Not every business should; you choose eyes-open, for good reasons, at the right time.

Before chasing investors, decide whether venture capital is actually right for your company — because raising VC is a consequential choice, not an automatic milestone. VC means selling equity and taking on the expectation of rapid, large-scale growth and an eventual exit (acquisition or IPO) that returns many times the investment; it is fuel for a specific kind of rocket. It suits businesses with a large market, a scalable model, and a credible path to a big outcome — and it comes with dilution, loss of some control, board obligations, and pressure to grow fast. Many excellent businesses are better bootstrapped or funded by revenue, grants or angels, retaining full ownership and optionality. Be honest about which path fits your ambition and your business.

If VC is the right path, timing matters enormously. Raising is far easier — and on far better terms — when you have leverage: traction that de-risks the bet (the 10,000-scale milestones and healthy economics you built toward are exactly this), a compelling story, and ideally competitive interest. Raising too early (pre-traction) is possible but usually means giving up more equity for less money on a story alone; raising with real traction lets you command a better valuation and choose your investors. Consider your runway: you should raise before you are desperate (fundraising takes months and desperation destroys negotiating power), typically when you have enough traction to show momentum and enough runway to run a proper process without panic.

Weigh the alternatives and get input before committing. Alternatives to a priced VC round include bootstrapping, revenue-based financing, grants and competitions, crowdfunding, angel investors, or accelerators (like Y Combinator, which provide capital, network and credibility). Each has trade-offs in control, speed, amount and expectations. Talk to founders who have raised (and who have chosen not to) to understand the reality beyond the headlines. If you decide to raise, be clear on why you need the money and what it will achieve (specific milestones the capital unlocks) — "we need funding" is not a reason; "this capital gets us from 10,000 to 100,000 users and to profitability" is. This deliberate decision — whether to raise, when, how much, and why — sets up everything else in the fundraising process and ensures you are choosing the VC path with eyes open rather than defaulting into it.

**What this looks like in practice**

- Deciding to raise because growth is capped only by cash, not demand.
- Choosing to bootstrap instead because the business funds itself.
- Timing the raise right after a strong traction milestone.

**Checklist**

- [ ] Assess whether your business is venture-scale (big market, scalable, exit path).
- [ ] Honestly weigh dilution, control and growth pressure vs your ambition.
- [ ] Consider alternatives: bootstrap, revenue-based, grants, angels, accelerators.
- [ ] Time the raise from a position of leverage (traction + runway, not desperation).
- [ ] Ensure enough runway to run a months-long process calmly.
- [ ] Define exactly why you need the money and what milestones it unlocks.
- [ ] Talk to founders who raised (and who did not) before committing.

**Tools & services**

- Founder mentors/peers
- Accelerators (YC/Techstars)
- Runway/cash-flow model
- Fundraising reading (venture deals)

**Common pitfalls**

- Treating raising VC as a success milestone rather than a tool.
- Raising on a story alone when traction would get far better terms.
- Starting to raise only when nearly out of cash.
- No clear reason for the money or milestones it unlocks.

**Go deeper**

- [Paul Graham: how to raise money](http://paulgraham.com/fr.html)
- [Venture Deals (Feld & Mendelson)](https://venturedeals.com/)
- [YC: should you raise?](https://www.ycombinator.com/library)

**Definition of done:** A deliberate decision on whether/when to raise (or an alternative) with clear rationale.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/102-decide-whether-and-when-to-raise)

---

### 103. Assemble traction metrics & data room

> **Goal:** Compile the metrics and documents investors will scrutinise into an organised data room.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Medium · **Estimate:** 1 week · **Metric:** You can answer any diligence request in hours with honest, clear data.

**Why this matters.** Investors fund evidence, not just vision. A clean set of metrics and a well-organised data room signals a serious, transparent founder and accelerates due diligence toward a yes.

**Explain it like I'm 5.** You gather all your proof and important documents into one organised folder investors can review. It’s packing a neat briefcase of evidence before the big meeting.

Investors back founders and stories, but they verify with data — so before you pitch, assemble the metrics and documents that prove your traction and readiness. The metrics are the heart of it: your growth numbers (users, revenue, followers, transactions — your 10,000-scale milestones), your key ratios (activation, retention/cohort curves, CAC, LTV, LTV:CAC, payback, churn, growth rate), and the trend over time (momentum matters more than absolute numbers at early stage). Present them honestly and clearly; sophisticated investors will see through cherry-picked vanity metrics, and a founder who knows their numbers cold and presents them straight builds immediate credibility.

Build a data room — an organised, secure place (a shared drive or a purpose-built data-room tool) containing the documents investors request during diligence. Typical contents: the pitch deck, a metrics dashboard/summary, financial statements and your financial model/projections, the cap table (who owns what), incorporation and key legal documents, founder/employee agreements and any IP assignments, major contracts, and evidence of traction (analytics screenshots, customer testimonials/case studies, letters of intent). Having this ready before you start pitching means that when an interested investor asks, you respond in hours not weeks — which keeps momentum and signals professionalism. Disorganised or slow diligence responses kill deals.

Get your metrics story straight and your house in order. Be able to explain not just what the numbers are but why they are what they are and where they are going — the drivers behind your growth, retention and economics, and how funding accelerates them. Fix any obvious problems before diligence surfaces them (a messy cap table, missing IP assignments, unsigned founder agreements are red flags that spook investors — clean them up now). Keep the data room updated as your metrics improve during the raise (rising numbers mid-process are great ammunition). Investors will pattern-match on both the quality of your metrics and the quality of your organisation; a compelling, honestly-presented metrics story backed by a clean, complete data room dramatically de-risks their decision and speeds the path from interest to term sheet.

**What this looks like in practice**

- A data room with metrics, financials, cap table and contracts.
- A clean dashboard of growth, retention and revenue.
- Having answers ready for “show me the numbers.”

**Checklist**

- [ ] Compile growth metrics and key ratios (activation, retention, CAC, LTV, churn, growth).
- [ ] Show trends over time, presented honestly and clearly.
- [ ] Build a secure, organised data room.
- [ ] Include deck, financials/model, cap table, legal docs, agreements, traction evidence.
- [ ] Prepare to explain the drivers behind each metric and where it is heading.
- [ ] Fix red flags now (messy cap table, missing IP/founder agreements).
- [ ] Keep the data room updated as metrics improve during the raise.

**Tools & services**

- Data room (DocSend/Notion/Drive)
- Metrics dashboard
- Cap table (Carta/Pulley/sheet)
- Financial model

**Common pitfalls**

- Cherry-picking vanity metrics that don’t survive scrutiny.
- Slow, disorganised diligence responses that kill momentum.
- A messy cap table or missing legal docs scaring investors.
- Not knowing the drivers behind your own numbers.

**Go deeper**

- [DocSend data room guide](https://www.docsend.com/)
- [a16z: startup metrics](https://a16z.com/16-startup-metrics/)
- [Carta (cap tables)](https://carta.com/)

**Definition of done:** A clean metrics summary and a complete, organised data room ready for diligence.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/103-assemble-traction-metrics-and-data-room)

---

### 104. Build a compelling pitch deck

> **Goal:** Create a clear, persuasive deck that tells your story and makes investors want to meet.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Hard · **Estimate:** 1–2 weeks · **Metric:** The deck gets meetings and gets forwarded to decision-makers.

**Why this matters.** The deck is your primary fundraising tool — it opens doors, frames meetings and gets forwarded. A tight, compelling deck can be the difference between a meeting and a pass.

**Explain it like I'm 5.** You build a short, clear slideshow that tells your story and makes investors excited to meet you. It’s the movie trailer for your company.

The pitch deck is the core artefact of fundraising: it is what you send to get meetings, present in them, and what investors forward to partners. A great deck is clear, concise (roughly 10–15 slides), visually clean, and tells a compelling, logical story — not a data dump. It should work both as a "send deck" (readable on its own) and a "present deck" (backing your live pitch). The standard flow, refined over thousands of raises, covers: the problem, your solution, why now, market size, product, business model, traction, competition/moat, team, the ask (how much you're raising and use of funds), and often a vision slide. Follow this proven structure rather than reinventing it — investors expect it and can absorb your story faster.

Lead with your strongest cards and make every slide earn its place. For an early-stage raise with real traction, your traction and team are often your best slides — put traction early and make it undeniable (a clear up-and-to-the-right chart of your 10,000-scale growth). The problem must be visceral and the solution obviously compelling; the market must be credibly large (your bottom-up sizing); the "why now" must explain why this is the moment. Each slide should make one clear point with minimal text and strong visuals — investors skim, so a cluttered slide loses them. Cut anything that does not advance the story. Design matters: a clean, professional deck signals competence, while an ugly or chaotic one undermines even a great business.

Craft the narrative and iterate relentlessly. The deck should tell a story that builds inevitability — by the end, the investor should feel that this problem is real and big, this team is uniquely able to solve it, the traction proves it is working, and this round is the fuel to win. Prepare an appendix for the detailed data (financials, cohort curves, detailed metrics) that backs up your claims without cluttering the main flow. Then get feedback: show the deck to founders and advisors who have raised, and refine based on what confuses them or falls flat — a deck improves dramatically through iteration. Also prepare a short teaser/one-pager for initial outreach. The deck is not static; you will keep sharpening it throughout the raise as you learn which slides and phrasings land. A tight, well-designed, story-driven deck backed by strong traction is what turns cold outreach into meetings and meetings into follow-ons toward a term sheet.

**What this looks like in practice**

- A 10–12 slide deck: problem, solution, traction, market, team, ask.
- One killer traction slide with an up-and-to-the-right chart.
- Airbnb’s famously simple original pitch deck.

**Checklist**

- [ ] Follow the standard ~10–15 slide flow (problem → ask → vision).
- [ ] Lead with your strongest cards (traction, team) and make traction undeniable.
- [ ] One clear point per slide, minimal text, strong visuals, clean design.
- [ ] Make it work both as a send deck and a present deck.
- [ ] Build a narrative of inevitability; add an appendix for detailed data.
- [ ] Prepare a short teaser/one-pager for outreach.
- [ ] Get feedback from founders/advisors who raised; iterate throughout.

**Tools & services**

- Figma/Pitch/Google Slides
- YC/Sequoia deck templates
- DocSend (send + track views)
- Advisor feedback

**Common pitfalls**

- A cluttered data-dump deck instead of a clear story.
- Burying traction late or making it hard to read.
- Ugly or inconsistent design that undermines credibility.
- Never iterating the deck based on feedback and results.

**Go deeper**

- [YC: how to design a pitch deck](https://www.ycombinator.com/library/2u-how-to-build-your-seed-round-pitch-deck)
- [Sequoia: writing a business plan](https://www.sequoiacap.com/article/writing-a-business-plan/)
- [DocSend deck research](https://www.docsend.com/index/)

**Definition of done:** A tight, well-designed, story-driven pitch deck (plus a teaser) that earns meetings.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/104-build-a-compelling-pitch-deck)

---

### 105. Craft the fundraising narrative

> **Goal:** Develop a compelling story and the answers to tough questions that you can tell in any format.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Hard · **Estimate:** 1 week (ongoing practice) · **Metric:** You can deliver a compelling, consistent pitch and handle any objection confidently.

**Why this matters.** Investors invest in a story about the future. A crisp, believable narrative — and confident answers to hard questions — is what makes them believe in the size of the opportunity and in you.

**Explain it like I'm 5.** You craft the story of why your company matters and will win, plus solid answers to tough questions, so you can pitch confidently in any setting. It’s knowing your story cold.

Beyond the deck lies the narrative — the story you tell about why this company matters and will win, which you deliver in meetings, calls, emails and casual conversations. Great fundraising is great storytelling grounded in evidence. Your narrative should weave together: the compelling problem and why it matters now, the unique insight or "secret" you have about the solution that others miss, why your team is uniquely positioned to win, the proof it is working (traction), and the vision of how big this becomes. The best narratives create a sense of inevitability and FOMO — this is happening, it is going to be big, and the investor can either be part of it or watch from the sidelines.

Prepare for the hard questions, because how you handle scrutiny is itself a signal. Investors will probe your weak points: Why won't a big incumbent crush you? How do you actually acquire customers profitably at scale? Why is this market big enough? What happens if a key assumption is wrong? Why you and this team? What are the risks and how do you mitigate them? Anticipate these, prepare honest, confident, evidence-based answers, and practise them until they are natural. Do not be defensive or dodge — acknowledging real risks and showing you have thought deeply about them builds far more trust than pretending there are none. Founders who clearly understand their business's risks and have credible plans for them are the ones investors trust with capital.

Tailor and refine the narrative throughout the raise. Adjust emphasis for different investors (a fund focused on your sector cares about different things than a generalist), but keep the core story consistent. Practise the pitch extensively — with advisors, friendly investors, mentors — and treat every meeting (especially early ones with less-likely investors) as practice that sharpens your delivery and reveals which parts land and which confuse. Refine based on the questions you keep getting and the objections you keep hearing (recurring objections mean your narrative has a gap to address). Know your numbers cold so you can speak to any metric confidently. A crisp, confident, well-rehearsed narrative — backed by traction and honest about risks — is what converts investor interest into conviction; it is the human, persuasive layer on top of your deck and data that ultimately moves people to write a cheque and back you.

**What this looks like in practice**

- A crisp “why now, why us, why this will be huge” narrative.
- Prepared answers to “what if Google does this?”
- A one-liner investors repeat to their partners for you.

**Checklist**

- [ ] Build a core narrative: problem, insight/secret, team, traction, vision.
- [ ] Create a sense of inevitability grounded in real evidence.
- [ ] List the tough questions investors will ask; prepare honest, confident answers.
- [ ] Acknowledge real risks with credible mitigation, don’t dodge.
- [ ] Tailor emphasis per investor while keeping the core story consistent.
- [ ] Practise extensively; use early meetings as rehearsal.
- [ ] Refine based on recurring questions/objections; know your numbers cold.

**Tools & services**

- Mentors/advisors for practice
- A Q&A prep doc
- Recorded practice pitches
- Investor-specific research

**Common pitfalls**

- A story with no evidence, or evidence with no story.
- Being defensive or dodging hard questions.
- Claiming zero risks (a red flag to investors).
- Not practising, so the pitch lands flat under pressure.

**Go deeper**

- [Paul Graham: startup fundraising](http://paulgraham.com/fr.html)
- [YC: how to pitch](https://www.ycombinator.com/library)
- [First Round: storytelling](https://review.firstround.com/)

**Definition of done:** A rehearsed, evidence-backed narrative and prepared answers to the hard questions.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/105-craft-the-fundraising-narrative)

---

### 106. Build the financial model & projections

> **Goal:** Create a credible model of your economics and a defensible growth/revenue projection.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Hard · **Estimate:** 1 week · **Metric:** You can defend every key assumption and tie the raise to milestones.

**Why this matters.** A financial model shows you understand your business’s economics and shows investors the potential return. Even at early stage, credible, assumption-driven projections build confidence.

**Explain it like I'm 5.** You build a believable spreadsheet showing how your money works and how you’ll grow, so investors trust your plan. It’s showing the math behind the dream.

A financial model translates your business into numbers: how you make money, what it costs, and how it grows over time. At early stage, investors know projections are uncertain — nobody believes the year-five number exactly — but the model reveals how well you understand your own economics and the drivers of the business, which is what they are really evaluating. Build a model (usually a spreadsheet) that is driven by clear, explicit assumptions rather than arbitrary hockey-stick numbers: your acquisition (users added per channel), conversion and pricing, retention/churn, and the resulting revenue, alongside your costs (people, infrastructure, marketing/CAC, overhead) and the resulting burn and runway.

Make it bottom-up and defensible. Build revenue from the units you can defend (customers × price, driven by your real conversion and retention rates) rather than top-down "we'll capture 1% of a huge market." Show the key economics investors focus on: unit economics (CAC, LTV, payback, gross margin), growth rate, burn rate and runway, and how the round's capital changes the trajectory (how the money is deployed into growth and what it produces). Present a base case that is ambitious but credible; you can show an upside case, but a projection that is obviously fantastical undermines your credibility more than a grounded one impresses. Every big number should trace back to an assumption a smart investor can interrogate.

Use the model as a tool, not just a fundraising prop. A good model helps you understand your own path: how much runway the round buys, what milestones you can hit with it, when you might reach profitability or need to raise again, and how sensitive the outcome is to key assumptions (run a sensitivity check — what if CAC is higher or retention lower?). Tie the model to your fundraising ask: the amount you raise should be justified by the model (enough to hit the next set of value-creating milestones with buffer). Be ready to walk investors through the assumptions and defend them; the conversation about your model often matters more than the numbers themselves, because it reveals your grasp of the business. Keep it updated as reality unfolds. A credible, assumption-driven financial model demonstrates that you think rigorously about the economics and the future — exactly the financial competence investors want to see before trusting you with their capital to scale.

**What this looks like in practice**

- A model linking users → revenue → costs → cash over 3 years.
- Assumptions you can defend, not hockey-stick fantasy.
- Scenarios for slow, base and fast growth.

**Checklist**

- [ ] Build an assumption-driven model (acquisition, conversion, pricing, retention).
- [ ] Project revenue bottom-up from defensible units, plus costs and burn.
- [ ] Show unit economics (CAC, LTV, payback, margin), growth, burn and runway.
- [ ] Model how the round’s capital changes the trajectory and milestones.
- [ ] Present an ambitious-but-credible base case; avoid fantastical numbers.
- [ ] Run sensitivity checks on key assumptions.
- [ ] Justify the raise amount with the model; be ready to defend assumptions.

**Tools & services**

- Spreadsheet (Excel/Sheets)
- SaaS/financial model templates
- Unit-economics calculators
- Runway/burn tracker

**Common pitfalls**

- Top-down hockey-stick projections with no basis.
- Hiding assumptions so the model can’t be interrogated.
- A raise amount unconnected to the model or milestones.
- Treating the model as a prop instead of a decision tool.

**Go deeper**

- [Baremetrics/ChartMogul modelling](https://baremetrics.com/academy)
- [a16z: 16 metrics](https://a16z.com/16-startup-metrics/)
- [Financial model templates](https://www.causal.app/templates)

**Definition of done:** A credible, assumption-driven financial model with defensible projections and unit economics.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/106-build-the-financial-model-and-projections)

---

### 107. Set valuation, round size & use of funds

> **Goal:** Decide how much to raise, at what terms, and exactly what the money will achieve.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Hard · **Estimate:** 2–4 days · **Metric:** A raise amount and terms justified by your model and milestones.

**Why this matters.** Raising the right amount at the right terms — with a clear use of funds — protects your ownership, gives you enough runway to hit real milestones, and shows investors a disciplined plan.

**Explain it like I'm 5.** You decide how much money to raise, on what terms, and exactly what you’ll use it for. It’s knowing precisely what you’re asking for and why.

Two linked decisions frame your raise: how much to raise (round size) and at what valuation/terms. Get these right and you have enough capital to reach meaningful milestones without giving away too much of your company; get them wrong and you either run out of money before proving the next step, or over-dilute and hamper future rounds. Size the round from your plan, not from ego or a random figure: raise enough to hit the next set of value-creating milestones (the ones that justify a materially higher valuation next round) plus a buffer for things taking longer than expected — typically enough for 18–24 months of runway. Your financial model should directly justify the amount.

Understand the instrument and the terms. Early rounds are often done as SAFEs or convertible notes (which defer the valuation debate) or as priced equity rounds. Valuation at early stage is more art than science — driven by traction, market, team, comparable deals and investor demand more than by financial multiples. Aim for a valuation that is fair and supportable: too low and you over-dilute; too high and you may struggle to raise the next round at a step-up (a "down round" later is painful), or fail to grow into it. Familiarise yourself with the standard terms so you are not negotiating blind — dilution, option pool, liquidation preferences, pro-rata rights, board composition, and control provisions all matter as much as the headline number. Resources like Venture Deals are essential reading here.

Define a crisp use of funds, because investors want to know exactly what their money buys. Break down how the capital will be deployed — typically across team (key hires), growth/marketing, product, and operations — and, crucially, what it achieves: the specific milestones (growth targets, revenue, product, key metrics) you will reach with it that set up the next stage or profitability. "We'll use it to grow" is weak; "this funds 4 key hires and a paid-growth scale-up to take us from 10,000 to 50,000 users and to $X ARR over 18 months, positioning us for a Series A" is compelling. This clarity signals discipline and a plan, reassures investors their money advances the business meaningfully, and gives you a yardstick to manage against post-raise. Deciding round size, terms and use of funds deliberately — grounded in your model and milestones, and informed on the terms — is what lets you raise the right amount, on fair terms, for the right purpose.

**What this looks like in practice**

- Raising a specific amount to reach clear milestones in 18 months.
- A “use of funds” breakdown: hires, marketing, runway.
- Setting a valuation grounded in comparable rounds.

**Checklist**

- [ ] Size the round to fund the next value-creating milestones + buffer (~18–24 months).
- [ ] Justify the amount with your financial model.
- [ ] Choose the instrument (SAFE/convertible/priced) for your stage.
- [ ] Target a fair, supportable valuation you can grow into (avoid future down rounds).
- [ ] Learn the standard terms (dilution, option pool, prefs, pro-rata, board/control).
- [ ] Write a crisp use of funds tied to specific milestones.
- [ ] Set your target and walk-away terms before negotiating.

**Tools & services**

- Venture Deals (book)
- SAFE (YC) / term-sheet templates
- Cap table + dilution modelling
- Comparable-deal data (Crunchbase/PitchBook)

**Common pitfalls**

- Raising too little to hit the next milestone (running out mid-proof).
- Chasing a sky-high valuation you can’t grow into.
- Negotiating terms you don’t understand.
- A vague use of funds with no milestones attached.

**Go deeper**

- [Venture Deals](https://venturedeals.com/)
- [YC SAFE](https://www.ycombinator.com/documents)
- [Paul Graham: how much to raise](http://paulgraham.com/fr.html)

**Definition of done:** A defined round size, target terms and a milestone-tied use of funds.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/107-set-valuation-round-size-and-use-of-funds)

---

### 108. Build your investor pipeline & get intros

> **Goal:** Create a targeted list of the right investors and line up warm introductions.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Medium · **Estimate:** 1–2 weeks · **Metric:** A full pipeline of well-matched investors with warm paths and a parallel plan.

**Why this matters.** Fundraising is a sales process, and the pipeline is your funnel. Targeting the right investors — and reaching them through warm intros — dramatically raises your odds versus cold outreach.

**Explain it like I'm 5.** You build a targeted list of the right investors and get warm introductions to them, because a friend’s referral beats a cold email. It’s lining up the right doors and someone to knock for you.

Fundraising is a sales process, and like any sales process it needs a well-built pipeline. Not all investors are right for you: they differ by stage (pre-seed, seed, Series A), sector focus, geography, cheque size, and how active/helpful they are. Build a targeted list of investors who actually invest in companies like yours — right stage, relevant sector, appropriate cheque — using tools like Crunchbase, their portfolios (an investor who backed a company adjacent to yours is a strong fit), and warm-connection mapping. Aim for a healthy-sized list (dozens, not a handful), because fundraising is a numbers game with a low hit rate, and you want enough targets to create real momentum and options.

Prioritise warm introductions, which convert vastly better than cold outreach. Investors are flooded with cold pitches and heavily weight deals that come through trusted referrals. So map your network for paths to your target investors: founders in their portfolio (the best intro source — a portfolio founder's referral carries huge weight), mutual connections, advisors, other investors, accelerator networks. Use LinkedIn and your relationships to find the warmest path to each target, and ask for a specific, easy-to-forward intro (give the connector a short blurb and your teaser so they can introduce you effortlessly). Where no warm path exists for a high-priority target, a thoughtful, personalised cold email can still work — but lead with traction and relevance, and keep it tight.

Organise and sequence the pipeline like a CRM. Track every investor: fit, priority, connection path, status, and next step. Sequence smartly: consider starting with a few lower-priority or friendly investors to sharpen your pitch (practice reps), then move to your top targets once you are polished — but do not wait so long that you lose momentum. Try to run the process in parallel (many conversations at once) rather than sequentially, both to create competitive tension and because a concentrated process with momentum is far more effective than a drawn-out one. Warm up relationships in advance where you can (many founders build investor relationships before they formally raise, so the ask is not cold). A well-targeted pipeline reached through warm intros, organised and run with momentum, is what turns fundraising from spraying cold pitches into a focused process that generates the meetings — and the competitive interest — that lead to a term sheet.

**What this looks like in practice**

- A CRM of 50 relevant investors ranked by fit.
- Asking founders they’ve backed for warm intros.
- Researching each fund’s thesis before reaching out.

**Checklist**

- [ ] Research investors by stage, sector, geography and cheque size.
- [ ] Build a targeted list of dozens using portfolios and fit signals.
- [ ] Map warm-intro paths to each (portfolio founders are best).
- [ ] Request specific, easy-to-forward intros with a blurb + teaser.
- [ ] Use thoughtful personalised cold outreach only where no warm path exists.
- [ ] Track everyone in a CRM: fit, priority, path, status, next step.
- [ ] Sequence to sharpen the pitch first, then run top targets in parallel with momentum.

**Tools & services**

- Crunchbase / PitchBook / Signal
- LinkedIn (intro mapping)
- An investor CRM (Airtable/Notion)
- Warm intro requests + teaser

**Common pitfalls**

- Mass cold-emailing mismatched investors.
- Too few targets, so the process stalls with no options.
- Running investors one-by-one instead of in parallel.
- No CRM, so follow-ups and momentum slip.

**Go deeper**

- [YC: how to find investors](https://www.ycombinator.com/library)
- [Signal by NFX (investor search)](https://signal.nfx.com/)
- [Fundraising CRM templates](https://www.notion.so/templates)

**Definition of done:** A prioritised investor pipeline in a CRM with warm intros lined up.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/108-build-your-investor-pipeline-and-get-intros)

---

### 109. Run the fundraising process

> **Goal:** Execute investor meetings and follow-ups with momentum to drive toward offers.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Hard · **Estimate:** 3–6 weeks · **Metric:** One or more genuine offers / term sheets in hand.

**Why this matters.** A tight, well-run process creates competitive tension and momentum that lead to offers. A sloppy, drawn-out one signals weakness and lets interest go cold — process discipline wins rounds.

**Explain it like I'm 5.** You run the fundraise like a tight process — lots of meetings close together — to build momentum and competition. It’s scheduling all your dates in one window so interest snowballs.

With pipeline and materials ready, run the actual process: the sequence of meetings, follow-ups and updates that moves investors from first meeting toward a cheque. The golden rule is momentum and concentration: run your outreach and meetings in a tight window (a few weeks of intense parallel activity) rather than a slow trickle over months. Concentration creates competitive tension — investors move faster when they sense other investors are interested — and momentum builds on itself, while a drawn-out process makes each conversation go cold and signals that others have passed. So line up your meetings to happen close together, and be fully prepared to move fast when interest heats up.

Execute each meeting well and follow up relentlessly. First meetings are usually to establish interest and fit; deliver your pitch and narrative confidently, but also make it a two-way conversation — listen, answer questions crisply, and gauge their real interest. After every meeting, follow up promptly with anything promised (the deck, data, answers), a clear thank-you, and the next step. Manage the process actively: keep your CRM updated, know exactly where each investor stands and what the next step is, and gently create urgency (a real timeline, evidence of parallel interest) without lying or bluffing (which sophisticated investors detect and dislike). Send periodic updates showing continued traction — a mid-process metric win is powerful momentum. Move interested investors toward partner meetings and, ultimately, a decision.

Handle rejection and interest like a pro. Expect many passes — even great companies hear "no" repeatedly; fundraising has a low hit rate, so a string of rejections is normal, not a verdict. Learn from them (recurring objections reveal a gap to address in your pitch or business), stay resilient, and keep the pipeline full so a few passes never sink the process. When you get genuine interest, drive toward a term sheet and use any competing interest to create a healthy dynamic (multiple interested investors give you leverage on terms and let you choose the best partner, not just the first). Keep building the relationship and momentum until you have one or more offers in hand. Running a disciplined, momentum-driven, well-managed process — meetings concentrated, follow-ups fast, urgency real, resilience high — is what converts a pipeline of interest into actual term sheets, and often into better terms and a better investor than a passive, drawn-out approach ever would.

**What this looks like in practice**

- Batching first meetings into two weeks to create urgency.
- A disciplined follow-up after every investor call.
- Tracking each conversation’s stage in a pipeline.

**Checklist**

- [ ] Concentrate meetings into a tight window; run investors in parallel.
- [ ] Deliver the pitch confidently; make meetings two-way and gauge real interest.
- [ ] Follow up promptly after every meeting with promised materials + next step.
- [ ] Keep the CRM current; always know each investor’s status and next step.
- [ ] Create genuine urgency (real timeline, parallel interest) — never bluff.
- [ ] Send mid-process traction updates to build momentum.
- [ ] Expect passes, learn from objections, keep the pipeline full, drive to offers.

**Tools & services**

- Investor CRM
- DocSend (track deck engagement)
- Follow-up templates
- Update emails

**Common pitfalls**

- A slow, sequential process that lets interest go cold.
- Weak or slow follow-ups that lose momentum.
- Bluffing about interest/terms (investors detect it).
- Letting a run of rejections stop the process.

**Go deeper**

- [Paul Graham: fundraising](http://paulgraham.com/fr.html)
- [YC: running a raise](https://www.ycombinator.com/library)
- [First Round: fundraising tactics](https://review.firstround.com/)

**Definition of done:** A concentrated, well-managed process producing serious investor interest and offers.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/109-run-the-fundraising-process)

---

### 110. Diligence, negotiation & closing

> **Goal:** Get through due diligence, negotiate fair terms, and close the round.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Hard · **Estimate:** 2–6 weeks · **Metric:** Capital in the bank on fair terms with a strong long-term investor.

**Why this matters.** A term sheet is not cash. Navigating diligence smoothly, negotiating terms wisely and closing cleanly is what turns investor interest into money in the bank — without bad terms that haunt you.

**Explain it like I'm 5.** You get through the investor’s deep checking (diligence), agree on fair terms, and sign the deal. It’s the final inspection and handshake that closes the round.

Once you have a term sheet (a non-binding outline of the deal), the round is close but not done — you must clear due diligence, negotiate the final terms, and close. Due diligence is the investor's deep verification of your business: they will scrutinise your metrics, financials, legal structure, cap table, contracts, IP, and sometimes call customers and references. This is where your organised data room pays off — respond quickly, completely and honestly. Do not hide problems; diligence surfaces them, and a discovered concealment kills the deal and your reputation. Address any issues proactively. Smooth, transparent diligence keeps momentum and builds the trust that carries into the relationship.

Negotiate the terms with knowledge and perspective. The headline valuation matters, but so do the terms that shape control and economics: liquidation preferences, option pool size (and whether it comes out of your ownership pre- or post-money), board composition, pro-rata rights, protective provisions, and vesting. Understand these (Venture Deals is the reference) so you negotiate from knowledge, not fear. Negotiate the terms that truly matter (avoid founder-unfriendly clauses like excessive preferences or loss of control) and do not sweat trivial ones; a slightly lower valuation with clean terms and a great investor often beats a higher valuation with punishing terms. Use any competing interest as leverage, but negotiate in good faith — you are entering a years-long relationship, and how you negotiate sets its tone. Get a good startup lawyer to review everything; this is not where to cut corners.

Close cleanly and choose your partner well. Once terms are agreed, lawyers draft the final documents (the actual investment agreements); review them carefully with counsel, sign, and the funds are wired — the round is closed. Beyond terms, weigh the investor themselves: at early stage you are choosing a long-term partner, so value their reputation, how they treat founders (reference them by talking to their portfolio companies, including ones that struggled), and what they bring beyond money (network, expertise, follow-on support). A great investor at a fair valuation is worth more than a difficult one at a high valuation. Confirm the practicalities (any conditions to closing, the wiring, updating your cap table). Successfully navigating diligence, negotiating fair terms, choosing a good partner and closing cleanly is the moment your fundraising effort becomes real capital in the bank — the fuel to execute the vision you have been building toward across all 111 tasks.

**What this looks like in practice**

- Answering diligence requests quickly with an organised data room.
- Negotiating a term sheet with a lawyer’s help.
- Signing and getting the money wired.

**Checklist**

- [ ] Respond to due diligence quickly, completely and honestly (data room ready).
- [ ] Proactively address any issues rather than concealing them.
- [ ] Learn the key terms; negotiate the ones that matter, not trivia.
- [ ] Weigh valuation against clean terms and a great investor.
- [ ] Use competing interest as leverage; negotiate in good faith.
- [ ] Get a startup lawyer to review all documents before signing.
- [ ] Reference the investor via their portfolio; choose a good long-term partner; close.

**Tools & services**

- Startup lawyer
- Venture Deals (terms)
- Data room (for diligence)
- Cap table software

**Common pitfalls**

- Slow or evasive diligence responses that stall or kill the deal.
- Concealing problems that surface anyway.
- Accepting bad terms because you don’t understand them.
- Optimising valuation over the quality of the investor/partner.

**Go deeper**

- [Venture Deals](https://venturedeals.com/)
- [YC: understanding SAFE/terms](https://www.ycombinator.com/library)
- [Clerky / legal for startups](https://www.clerky.com/)

**Definition of done:** A closed round: diligence cleared, fair terms negotiated, documents signed, funds wired.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/110-diligence-negotiation-and-closing)

---

### 111. Post-raise: deploy capital & scale

> **Goal:** Onboard investors, deploy the funds against your plan, and execute toward the next stage.
>
> **Phase:** 11 — Fundraising: Idea → VC · **Difficulty:** Hard · **Estimate:** Ongoing (the next chapter) · **Metric:** Hitting the milestones the round funded; set up to raise again from strength.

**Why this matters.** Raising is a means, not the end. What you do with the capital — hitting the milestones you promised — determines whether you build a lasting company and can raise again on great terms.

**Explain it like I'm 5.** After the money lands, you welcome your investors, spend the funds wisely against your plan, and push toward the next big stage. It’s using the fuel you raised to actually fly.

Closing the round is a milestone, not the finish line — the real work is executing with the capital to build the company and hit the milestones that justify the next stage. Resist the two classic post-raise traps: complacency (treating the raise as "made it" and slowing down) and reckless spending (burning the money faster than you create value). The money is fuel for a plan, so deploy it deliberately against the use of funds you defined: make the key hires that unlock growth, scale the channels that work, and invest in the product and operations that move your metrics — while keeping a close eye on burn and runway so you always know how long the money lasts and what you must achieve before it runs out.

Onboard and leverage your investors, who are now partners for years. Set up a regular investor update (a concise monthly or quarterly email covering metrics, wins, challenges, asks) — this builds trust, keeps investors engaged, and makes them far more likely to support your next round and to help when you ask. And do ask: good investors bring more than money — introductions to customers, partners, hires and future investors; advice; and pattern-matched experience — so use them actively rather than treating updates as a chore. Handle governance well (board meetings if you have a board) as a tool for alignment and support, not just reporting. The way you communicate through both good and bad news sets the tone; transparency, especially about challenges, builds the credibility that pays off enormously over time.

Execute toward the next stage and the bigger vision. Manage against the milestones the round was meant to achieve (the growth, revenue and product goals that will justify a materially higher valuation next time), and steer with your weekly metrics rhythm so you catch problems early and stay on plan. Keep strengthening the fundamentals from every prior phase — retention, unit economics, the growth engine — because scaling amplifies both strengths and weaknesses. Begin building relationships for the next raise well before you need it (the best time to raise is from strength, with momentum), so your metrics and story are ready. Ultimately, this final task loops back to the beginning: with capital in hand and traction proven, you push from 10,000 toward 100,000 users and beyond, executing the vision that started as an idea 111 tasks ago. Fundraising was never the goal — building a valuable, lasting company that solves a real problem at scale is; the capital is simply what lets you do it faster and bigger. Deploy it wisely, hit your milestones, keep your investors close, and keep building.

**What this looks like in practice**

- Onboarding investors with regular, honest updates.
- Deploying capital into the hires and channels that drive growth.
- Setting the milestones you need to hit before the next round.

**Checklist**

- [ ] Deploy funds deliberately against your defined use of funds and milestones.
- [ ] Make the key hires and scale the channels that work; watch burn and runway.
- [ ] Send regular, honest investor updates (metrics, wins, challenges, asks).
- [ ] Actively leverage investors for intros, hires, advice and future funding.
- [ ] Run governance/board as a tool for alignment and support.
- [ ] Manage against milestones via your weekly metrics rhythm.
- [ ] Build next-round relationships early; push from 10,000 toward 100,000.

**Tools & services**

- Investor update template
- Burn/runway + KPI dashboard
- Board/governance tools
- Hiring + growth execution

**Common pitfalls**

- Treating the raise as the finish line and losing urgency.
- Burning capital faster than you create value.
- Going silent with investors, especially about bad news.
- Not leveraging investors beyond their cheque.

**Go deeper**

- [Lenny/First Round: investor updates](https://review.firstround.com/)
- [Founder’s guide to board meetings](https://www.sequoiacap.com/article/)
- [Paul Graham: after the raise](http://paulgraham.com/)

**Definition of done:** Capital deployed against milestones, engaged investors, and execution toward the next stage.

[↑ Back to contents](#contents) · [Open on the web ↗](https://111.pete.ke/task/111-post-raise-deploy-capital-and-scale)

---

## Case studies — the playbook in the wild

Real companies, mapped to the playbook. Illustrative summaries drawn from widely reported public accounts.

### 🛏️ Airbnb — Air mattresses on a floor → a global marketplace.

_Marketplace_ · 4M+ hosts · 1.5B+ guest arrivals · IPO at ~$47B (2020)

Airbnb started as “AirBed & Breakfast” — three founders renting air mattresses in their apartment during a sold-out design conference. They validated a painfully real problem (no affordable rooms during peak events), did famously unscalable things to get traction, and grew into one of the most valuable marketplaces in the world.

- **Phase 1 — Idea & Validation:** They tested demand for one specific event before building anything — real guests paid to sleep on air mattresses, proving people would book a stranger’s home.
- **Phase 10 — Growth to 10,000:** The founders “did things that don’t scale” — flying to New York to photograph listings themselves — which lifted quality and bookings. Later, referral incentives compounded growth.
- **Phase 11 — Fundraising: Idea → VC:** Rejected by many investors, they survived by selling novelty cereal boxes, then got into Y Combinator and raised once early traction was undeniable.

**Lessons you can steal**

- Test demand for one narrow use-case before building broadly.
- Do unscalable things early to learn and lift quality.
- Traction — not a perfect deck — is what eventually convinces investors.

_Illustrates tasks: #7 Run a smoke test to measure real demand; #40 Dogfood & run a private alpha; #85 Add a referral / invite program; #89 Build a social-proof engine; #104 Build a compelling pitch deck._

---

### 📝 Notion — A near-death rewrite → a beloved all-in-one workspace.

_Productivity SaaS_ · 100M+ users · $10B valuation · Largely community-led growth

Notion almost died: the team scrapped an over-complex version, moved to Kyoto, and rebuilt around a simpler vision of blocks that replace a dozen separate tools. Design polish and a passionate community turned it into a viral, bottoms-up SaaS success.

- **Phase 4 — MVP Build:** They ruthlessly cut scope and rebuilt around one core idea (composable blocks), choosing focus over feature bloat.
- **Phase 5 — Design & Quality Bar:** Obsessive craft and a distinctive aesthetic made Notion feel premium and shareable — quality became the marketing.
- **Phase 9 — Email, Community & Retention:** A devoted community created templates and tutorials, turning users into an unpaid growth and support engine.

**Lessons you can steal**

- Cutting scope can save a company — focus beats feature count.
- Design quality can be your most powerful growth channel.
- A community that creates for you multiplies every effort.

_Illustrates tasks: #31 Scope the MVP ruthlessly; #42 Establish a design system / component library; #47 Add high-quality imagery & illustrations; #84 Build a community; #89 Build a social-proof engine._

---

### 💳 Stripe — Seven lines of code → the internet’s payments backbone.

_Developer Infrastructure_ · Millions of businesses · $1T+ processed annually · ~$65B valuation

Stripe won by obsessing over developer experience: payments that used to take weeks of paperwork became a few lines of code. The Collison brothers did hands-on onboarding (“the Collison install”) and treated documentation and reliability as core product.

- **Phase 3 — Foundation & Infrastructure:** Reliability, security and clean APIs were the product — they invested in the “boring” infrastructure others neglected.
- **Phase 6 — Auth, Data & Security:** Trust and security underpinned everything — handling money means zero tolerance for sloppiness.
- **Phase 7 — Content, SEO & Launch Prep:** World-class documentation became a growth engine, ranking in search and converting developers on the spot.

**Lessons you can steal**

- A great developer/user experience can be your entire moat.
- For anything touching money, security and reliability are the product.
- Documentation is marketing — invest in it early.

_Illustrates tasks: #22 Choose your tech stack; #56 Add payments & billing; #59 Security hardening (OWASP Top 10); #62 Lay the technical SEO foundation; #66 Build a help center / docs / FAQ._

---

### 🦉 Duolingo — Gamified lessons + a pushy owl → habit-forming learning.

_Consumer / EdTech_ · 500M+ downloads · ~100M monthly users · NASDAQ IPO (2021)

Duolingo turned language learning into a game with streaks, XP and reminders, then relentlessly A/B-tested retention. A bold, meme-savvy social presence and habit mechanics grew it to hundreds of millions of learners and a public listing.

- **Phase 8 — Analytics, Tracking & Feedback:** A data-obsessed culture ran constant experiments, optimising retention as the north-star metric.
- **Phase 9 — Email, Community & Retention:** Streaks, reminders and habit loops (and a famously persistent owl) brought users back daily.
- **Phase 10 — Growth to 10,000:** A daring social/TikTok persona drove massive organic reach and brand love at near-zero cost.

**Lessons you can steal**

- Habit mechanics (streaks, reminders) are retention rocket fuel.
- Relentless A/B testing compounds into a huge advantage.
- A bold organic-social voice can outperform paid ads.

_Illustrates tasks: #77 Set up A/B testing & experimentation; #78 Run cohort & retention analysis; #86 Improve retention hooks & habit formation; #93 Build organic social & distribution; #72 Define your north-star metric & KPIs._

---

### 📦 Dropbox — A demo video + referrals → viral file sync.

_Consumer SaaS_ · 700M+ registered users · Waitlist 5k → 75k from one video · IPO (2018)

Before building the hard parts, Dropbox validated demand with a simple explainer video that drove its waitlist from 5,000 to 75,000 overnight. A two-sided referral program (free storage for both sides) then made growth viral.

- **Phase 1 — Idea & Validation:** A demo video acted as a smoke test, proving strong demand before heavy engineering.
- **Phase 9 — Email, Community & Retention:** A double-sided referral program rewarded both inviter and invitee with storage, driving exponential sign-ups.

**Lessons you can steal**

- A simple video can validate demand before you build the hard stuff.
- Double-sided referral incentives can make growth exponential.
- Reduce the risk before you write the most expensive code.

_Illustrates tasks: #7 Run a smoke test to measure real demand; #20 Build the first basic landing page; #85 Add a referral / invite program; #81 Build an email list & capture._

---

### ⚡ Superhuman — A “must-have” score → a premium email cult following.

_Premium SaaS_ · 40%+ “very disappointed” (PMF bar) · Long invite waitlist · Premium $30/mo pricing

Superhuman delayed scaling until it nailed product-market fit, using a now-famous survey: “How would you feel if you could no longer use the product?” They optimised for the segment that answered “very disappointed,” building a fast, premium email client with white-glove onboarding.

- **Phase 1 — Idea & Validation:** They quantified product-market fit with a survey and focused only on the users who would truly miss the product.
- **Phase 5 — Design & Quality Bar:** Obsessive speed and craft justified premium pricing and created word-of-mouth demand.
- **Phase 8 — Analytics, Tracking & Feedback:** They engineered PMF systematically, doubling down on what the happiest segment loved and fixing what the “somewhat disappointed” were missing.

**Lessons you can steal**

- Measure product-market fit; don’t just guess at it.
- Serve your most passionate segment before broadening.
- Quality and speed can support genuine premium pricing.

_Illustrates tasks: #2 Interview 15 potential customers; #8 Validate willingness to pay; #41 Build a hero section that converts; #76 Build a user feedback loop; #88 Deliver great support & customer success._

---

### 🎨 Canva — SEO + freemium → design for everyone.

_Consumer / Prosumer SaaS_ · 200M+ monthly users · Profitable at scale · ~$40B valuation

Canva made design accessible to non-designers with templates and drag-and-drop simplicity. A massive SEO and content strategy (thousands of “make a ___” landing pages) plus a generous free tier drove enormous organic acquisition.

- **Phase 7 — Content, SEO & Launch Prep:** Programmatic SEO — landing pages for countless design intents — captured huge organic search demand.
- **Phase 10 — Growth to 10,000:** A freemium model plus templates created a self-serve funnel that scaled globally with low CAC.

**Lessons you can steal**

- Programmatic SEO can unlock enormous low-cost acquisition.
- Freemium lets users experience value before paying.
- Lowering the skill barrier expands your market dramatically.

_Illustrates tasks: #62 Lay the technical SEO foundation; #63 Keyword research & on-page SEO; #64 Start a content engine (blog); #92 Scale the content & SEO machine; #47 Add high-quality imagery & illustrations._

---

### 🧩 Figma — Browser-based design → collaboration as the moat.

_Collaborative SaaS_ · Dominant in UI design · Bottoms-up team adoption · ~$20B acquisition agreed

Figma spent years on hard technical foundations to run a design tool in the browser, then made multiplayer collaboration its wedge. Bottoms-up adoption by design teams led to a landmark acquisition agreement.

- **Phase 3 — Foundation & Infrastructure:** Heavy early investment in browser rendering tech created a capability competitors couldn’t easily copy.
- **Phase 5 — Design & Quality Bar:** Real-time multiplayer collaboration was a delightful, differentiating experience that spread within teams.
- **Phase 9 — Email, Community & Retention:** Community files, plugins and shared workflows made Figma stickier the more a team used it.

**Lessons you can steal**

- A hard technical bet can become a durable moat.
- Collaboration features drive viral, in-team adoption.
- The more a team invests in your product, the harder it is to leave.

_Illustrates tasks: #22 Choose your tech stack; #34 Build the core feature (happy path); #43 Add tasteful micro-interactions & motion; #84 Build a community; #97 Build partnerships & integrations._

---

## License

Released as an open playbook — use it, fork it, ship your startup. See `LICENSE`.
