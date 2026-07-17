/*
 * The 111 Playbook - copy-paste AI prompts, one per task.
 * Each prompt turns an AI assistant (ChatGPT / Claude / etc.) into an operator
 * that actually helps you DO the task. Fill in the [BRACKETED] placeholders.
 * Merged into the shared /111 tasks.js by scripts/gen-111-tasks.mjs.
 *
 * Status: 111 / 111 authored (all tasks, all 11 phases).
 * Keep entries keyed by task id. Plain ASCII punctuation only (safe across the
 * generator -> tasks.js -> browser pipeline).
 */

export const PROMPTS = {
  // ---- Phase 1: Idea & Validation -----------------------------------------
  1: `You are a seasoned startup advisor trained on The Mom Test and YC's idea-stage playbook. I want to turn a rough idea into a sharp one-page problem statement.
My raw idea: [DESCRIBE YOUR IDEA IN 2-3 SENTENCES].
My target customer: [WHO].
First, interview me with 5 pointed questions to extract specifics. Then write a one-page problem statement structured as: customer, problem, current workaround, cost of that workaround, and my one-sentence solution hypothesis. Score the problem 1-5 on frequency, expense and urgency with a short justification for each, list my 3 riskiest assumptions, and flag any sentence where I described a solution instead of a problem. Write it in my customer's language, not startup jargon.`,

  2: `You are an expert user researcher who teaches The Mom Test. I'm about to interview potential customers about this problem: [PROBLEM], for this customer: [ICP].
Create a 15-20 minute interview guide of 7 open questions that dig into past behaviour and NEVER pitch my idea (e.g. "walk me through the last time this happened"). For each question add one follow-up probe and note the signal I'm listening for. Then give me: (1) a 3-line outreach message to recruit interviewees from [WHERE MY CUSTOMERS GATHER], (2) a spreadsheet schema (columns) to log answers, and (3) the 3 questions that best reveal willingness to pay. Finish with the 4 most common interviewing mistakes and how to avoid them.`,

  3: `You are a positioning strategist. Based on these interview findings: [PASTE KEY QUOTES / PATTERNS], help me define the tightest possible ideal customer profile and a named persona.
Output: (1) firmographics/demographics I can actually target on (industry, size, role, location, budget, tools they use); (2) a named persona with goals, daily frustrations and 3 verbatim quotes; (3) exactly where this person can be reached online and offline and who they trust; (4) an "anti-persona" I should politely decline for now. Push back hard if my segment is too broad to message precisely, and suggest a narrower wedge. Keep it to one page.`,

  4: `You are a VC analyst who insists on defensible, bottom-up market sizing. Help me size the market for [PRODUCT] sold to [ICP] in [GEOGRAPHY].
Build a bottom-up model: define the unit, estimate the number of units in my segment from realistic public sources, and multiply by a defensible annual revenue per unit to get SAM; then expand logically to TAM and estimate a realistic SOM for years 1, 3 and 5. Ask me for any numbers you need before finalising. Present a clean table, list every assumption with the kind of source that would back it, cross-check the result against a comparable company, and end with a one-line verdict: venture-scale, bootstrap-scale, or widen the wedge.`,

  5: `You are a competitive-intelligence analyst. For [PRODUCT] serving [ICP], where the job-to-be-done is "[CORE JOB]", map the full competitive landscape.
List (1) direct competitors, (2) indirect / adjacent tools, and (3) the "do nothing / DIY" option (spreadsheet, WhatsApp, an assistant). For each, give me what customers love, common complaints (and exactly where to mine reviews for the real wording), pricing model, and likely go-to-market. Then identify the single axis my ICP cares about most and draft a positioning line: "Unlike [main alternative], we [key difference] for [ICP]." Warn me if I'm just copying an incumbent instead of finding an underserved wedge.`,

  6: `You are a positioning expert in the style of April Dunford. Context - customer: [ICP]; their need: [NEED]; my product: [PRODUCT]; main alternative: [ALTERNATIVE] and its limitation: [LIMITATION]; real customer quotes: [PASTE 2-3 QUOTES].
Draft my value proposition. Give me 5 headline variations that lead with the customer's OUTCOME (not my technology), using verbatim customer language. Score each on specific / believable / desirable. Then take the winner and produce a reusable positioning kit: headline, one-sentence subheading, 3 benefit bullets (each an outcome + a proof point), and a one-paragraph elevator version I can reuse on my site, app stores and pitch.`,

  7: `You are a growth engineer who runs demand experiments. Help me design a smoke test for [PRODUCT] targeting [ICP], value prop: [VALUE PROP].
Write the copy for a one-page landing site: a headline, a 3-bullet benefit section, one clear call-to-action, and email-capture microcopy. Then give me a stronger "fake-door" pricing variant that leads to a waitlist. Specify exactly which events to track, 2-3 headline variants to A/B test, where to spend about $50-100 of tightly targeted traffic to reach my ICP, and what conversion rate would count as real demand versus a weak signal. Remind me how to instrument analytics and store every email for launch.`,

  8: `You are a pricing strategist. Help me test willingness to pay for [PRODUCT] BEFORE I build billing. My ICP: [ICP]; they currently solve this via [CURRENT WORKAROUND] costing roughly [COST].
Give me: (1) a Van Westendorp 4-question survey with exact wording; (2) a short script to attempt 1-3 pre-sales or a founding-member paid pilot; (3) how to frame price against the cost of the problem, not my costs; (4) a recommended pricing model (subscription / usage / transaction / freemium) with reasoning for my case; and (5) a simple unit-economics sketch (price, gross margin, target LTV:CAC of 3:1 or better). End with a one-page pricing-hypothesis template I can fill in.`,

  9: `You are a Running Lean coach. Interview me to fill all nine boxes of a Lean Canvas for [PRODUCT]: problem, customer segments, unique value proposition, solution, channels, revenue streams, cost structure, key metrics, and unfair advantage.
Ask for anything missing, then present the completed canvas. Stress-test my weakest box (usually channels or unfair advantage) and be honest if "unfair advantage" is empty. Finally help me write explicit success criteria (the evidence that justifies building on), kill criteria (what would make me stop or pivot), the 3-5 key metrics for this stage, and a dated deadline for the next validation milestone.`,

  10: `You are a disciplined decision coach who guards against sunk-cost bias. Here is my Phase 1 evidence: [PASTE: problem score, interview patterns, ICP, market size, competitive wedge, demand and pricing signals]. Here are the success/kill criteria I wrote beforehand: [PASTE].
Score each criterion as met / partially met / missed, then recommend go, pivot, or stop with clear reasoning. If pivot: name the single assumption to change and the cheapest way to re-test it. If go: propose the one north-star metric I should watch obsessively during the build. Draft a short decision memo (evidence for and against, biggest remaining risk, the decision) and name the cognitive biases you think are affecting my judgement.`,

  // ---- Phase 2: Brand, Domain & Identity ----------------------------------
  11: `You are a brand-naming expert. Help me name [PRODUCT], which does [ONE-LINE DESCRIPTION] for [ICP], with a brand personality that is [ADJECTIVES].
Generate 20 candidate names across several styles (invented, compound, metaphor, real-word). Each must be easy to say, spell and remember. For each, note the vibe, any meaning, and the likelihood the .com is taken. Flag names that are hard to pronounce, easily misspelled, or clash with big existing brands. Then shortlist your top 5 with a one-line rationale, and tell me exactly how to check domain and trademark availability before I commit.`,

  12: `You are a domain and brand-protection advisor. My chosen name is [NAME].
Recommend which domains to register: the primary (.com if possible), the highest-value defensive variants (common misspellings, other TLDs like .co / .io / .app, and my country TLD [ccTLD]), and which are safe to skip to save money. Explain how to register them on an account I fully control, why to turn on auto-renew, WHOIS privacy and registrar lock, and how to avoid the classic mistake of a domain sitting under an employee's or agency's personal account. Give me a short, ordered registration checklist.`,

  13: `You are a social-media brand manager. For the brand [NAME], help me claim a consistent @handle everywhere.
List the platforms I should secure now even if I won't use them yet (X, Instagram, TikTok, LinkedIn, YouTube, GitHub, Facebook, Reddit, Product Hunt, and any relevant to [ICP]). Suggest 3 handle options in case my first choice is taken. Then give me a consistent profile kit: a 150-character bio, a one-line tagline, a longer "about" paragraph, and guidance on avatar vs banner imagery. Tell me which handles matter most for my [ICP] and where to place my link / waitlist.`,

  14: `You are a brand identity designer. Help me design a simple, modern logo and a Netflix-style single-icon favicon for [NAME], a [CATEGORY] product with a [ADJECTIVES] personality.
Propose 3 distinct logo concepts (describe the wordmark, the icon idea, and the feeling each conveys). For the favicon, describe a single-glyph mark that stays crisp and recognisable at 16px. Then give me exact AI image-generation prompts to produce each concept, the colour and typography direction, the file sizes/formats I need (SVG, 16/32/180/512px, maskable), and a checklist to verify the mark reads well tiny and on both light and dark tabs.`,

  15: `You are a design-systems specialist. Create an accessible brand palette and type scale for [NAME], a [CATEGORY] product with a [ADJECTIVES] feel.
Output: a primary colour, an accent, neutrals (background, surface, border, text, muted) and semantic colours (success / warning / error), each as hex with WCAG contrast notes for key text pairings. Recommend a heading font and a body font (from Google Fonts) and a modular type scale (sizes + line-heights). Then express everything as reusable design tokens - both CSS custom properties and a JSON block - with clear names I can drop straight into my codebase, including a dark-mode variant.`,

  16: `You are a brand strategist and copy chief. Define the brand voice and core messaging for [NAME], serving [ICP], with a personality that is [ADJECTIVES]. Ground it in how my customers actually talk: [PASTE CUSTOMER PHRASES].
Produce: 3-4 voice principles (each as "we are X, not Y" with a do/don't example); a messaging hierarchy (one-line positioning, 3 key messages, proof points); tagline options; the words and phrases we always and never use; and 3 short sample snippets rewritten in our voice (a hero line, an error message, and a welcome-email opener).`,

  17: `You are a brand operations manager. Help me assemble a versioned brand kit for [NAME] so any teammate or AI can produce on-brand assets.
List everything the kit should contain (logo variants + clear-space rules, colour tokens, fonts + fallbacks, imagery/illustration style, iconography, templates for social/OG/slides, and a tone-of-voice summary). Recommend how to organise the folder structure, where to host it (e.g. a shared drive or Figma) with version control, and what a one-page "brand at a glance" summary should include. Give me the folder tree and a README template for the kit.`,

  18: `You are a conversion-focused visual designer. Design the Open Graph and social-share image system for [NAME] so every shared link looks intentional. My brand fonts: [FONTS]; colours: [COLORS].
Specify the correct dimensions and safe areas for OG / Twitter and a general 1200x630 card, and describe a reusable template (logo placement, headline treatment, background style). Give me 3 layout variants (home, blog post, product/pricing), either exact AI image prompts or an HTML/CSS template to auto-generate them, and the meta tags (og:*, twitter:*) I must add. Include a checklist to verify with a link-preview debugger.`,

  19: `You are a practical startup operations advisor (not a lawyer). For [NAME], based in [COUNTRY/CITY], guide me through the minimum viable setup.
Cover: getting professional domain email (recommend a provider and the exact DNS records - MX, SPF, DKIM, DMARC - to configure), and the lightest sensible legal foundation (whether to register a legal entity now vs later and the options in my jurisdiction, plus the basic records to keep). Give me a prioritised checklist marking what is essential before launch vs what can wait, and clearly flag where I should consult a real accountant or lawyer.`,

  20: `You are a landing-page copywriter and front-end developer. Write and structure a clean one-page site for [NAME] that states the value prop and captures interest. Value prop: [VALUE PROP]; ICP: [ICP]; primary CTA: [CTA]; brand tokens: [TOKENS].
Give me the full section-by-section structure (hero, problem/benefit, how it works, social-proof placeholder, FAQ, final CTA) with finished copy for each, an email-capture form with microcopy, the meta/OG tags, and clean, responsive, fast semantic HTML + CSS that uses my tokens. Keep it focused on a single action and ban filler.`,

  // ---- Phase 3: Foundation & Infrastructure -------------------------------
  21: `You are a senior engineer setting up a new project. For a [STACK] project called [NAME], give me clean Git/GitHub setup from commit one.
Provide: a sensible repo/folder structure, a complete .gitignore for this stack, a README template (what it is, setup, scripts, deploy), a branch strategy suited to a solo/small team, conventional-commit guidance, and recommended repo settings (branch protection, PR template). Then give me the exact commands to initialise, make the first commit and push, plus 3 hygiene rules that stop secrets and junk from ever being committed.`,

  22: `You are a pragmatic CTO who optimises for shipping speed and maintainability, not hype. Recommend a tech stack for [PRODUCT DESCRIPTION]. Requirements: [KEY REQUIREMENTS]; my team's existing skills: [SKILLS]; expected scale: [SCALE].
Compare 2-3 viable stacks (frontend, backend, database, hosting, key services) in a table with trade-offs, then give a clear recommendation with reasoning. Bias toward boring, well-documented, hireable technologies I can maintain solo. Flag any choice that could become an expensive dead-end, and tell me what I can safely defer.`,

  23: `You are a developer-experience engineer. For a [STACK] project, set up automatic code quality so mistakes are caught before commit.
Give me the exact config for formatting (e.g. Prettier), linting (e.g. ESLint) and type-checking, an .editorconfig, recommended editor settings/extensions, npm scripts (dev / build / lint / format / typecheck / test), and a pre-commit hook (e.g. Husky + lint-staged) that runs them. Provide the config file contents and install commands, and explain how to make the whole setup reproducible on a new machine or for a teammate.`,

  24: `You are a DevOps engineer experienced with Cloudflare. Walk me through putting [DOMAIN] behind Cloudflare for fast DNS, global CDN, HTTPS and protection. My host: [HOST].
Cover: moving nameservers; the DNS records I need for my host and email; which records to proxy (orange cloud) vs leave direct; choosing the right SSL/TLS mode and why Full (Strict); enabling HSTS; caching rules that won't break my app or APIs; and basic security (WAF, bot/rate settings) sensible for a small startup. Give me a step-by-step checklist and the common misconfigurations that cause redirect loops or broken APIs.`,

  25: `You are a deployment engineer. Help me get [PRODUCT] (stack: [STACK]) running on a host reachable from [DOMAIN].
First compare a managed platform vs my own VPS for my case. Then give step-by-step setup for the recommended option: provisioning, runtime/build config, connecting the domain (DNS records), process management, and a health check. Include the commands, the runtime versions to pin, and how to verify it is live over HTTPS. Do not skip the security basics (firewall, non-root user, automatic updates) - list them explicitly.`,

  26: `You are a security-minded infrastructure engineer. Ensure every request to [DOMAIN] is encrypted browser -> edge (Cloudflare) -> origin ([HOST]).
Explain how to obtain and auto-renew a valid origin certificate, configure the correct Cloudflare SSL mode (Full/Strict) so there is no insecure hop, force HTTPS with proper redirects, set HSTS safely, and avoid mixed-content and redirect-loop pitfalls. Give me a verification checklist (what to test with curl and an online SSL checker) and how to confirm the origin is not reachable over plain HTTP.`,

  27: `You are a CI/CD engineer. Help me make shipping [PRODUCT] (stack: [STACK], host: [HOST]) a single reliable command, or automatic on push to main.
Design a pipeline that installs, runs lint/typecheck/tests, builds, and deploys, with a fast rollback path. Give me the config (e.g. a GitHub Actions workflow YAML, or a deploy script), how to store deploy secrets, how to add a post-deploy smoke test, and how to make it idempotent and safe. Then explain the rollback procedure and how to keep the last known-good build.`,

  28: `You are a release engineer. Help me create a separate staging environment for [PRODUCT] (stack: [STACK]) so I can test changes safely before production.
Explain how to isolate staging (separate domain/subdomain, database, secrets, and any third-party keys in test mode), how to keep staging data realistic but safe, how to stop staging from being indexed by search engines or emailing real users, and how to promote a build from staging to production. Give me the environment/config structure and a pre-promotion checklist.`,

  29: `You are a security engineer. Help me manage secrets (API keys, DB URLs, tokens) for [PRODUCT] across local, staging and production without ever committing them. Host: [HOST].
Recommend an approach (env files locally with a committed .env.example, and a secrets manager or platform env vars in production), a naming convention, how to rotate a leaked key, how to inject secrets at build/runtime on my host, and how to scan the repo and its git history for secrets that slipped in. Give me a .env.example template and a short "never do this" list.`,

  30: `You are a reliability engineer. Set up backups and uptime monitoring for [PRODUCT]. Database: [DB]; host: [HOST].
For backups: recommend a schedule, retention, where to store them (off the primary host), and how to actually test a restore - untested backups do not count. For monitoring: recommend an uptime/heartbeat service, which endpoints to check, alert channels (email/SMS/Slack), and thresholds. Give me the setup steps, a simple backup script, and a monthly "restore drill" checklist.`,

  // ---- Phase 4: MVP Build -------------------------------------------------
  31: `You are a product manager famous for cutting scope. My full product vision: [DESCRIBE]. My validated core value: [CORE VALUE] for [ICP].
Help me cut to the single core workflow that delivers that value. Produce a table of every feature I'm tempted to build, each tagged Must / Later / Never for v1, with a one-line reason. Then define the one "happy path" the MVP must nail, the explicit non-goals for v1, and a single sentence describing what the MVP does. Challenge me hard on anything not essential to proving the core value.`,

  32: `You are a UX designer. Map the core user flow for [PRODUCT] where the user's goal is [CORE OUTCOME].
List every step from first arrival to achieving that outcome, including decision points, the minimum screens/states involved, and what the user must see and do at each step to progress. Identify the single "aha moment" and how to get users there fastest. Output a numbered flow plus a simple text diagram, and flag any step that adds friction or could be removed for v1.`,

  33: `You are a database architect. Design the data model for [PRODUCT], whose core workflow is [WORKFLOW]. ORM/DB: [ORM/DB]. Special needs: [e.g. multi-tenant, soft deletes, timestamps].
Identify the key entities, their fields (with types), and relationships. Give me a normalised schema (with a text or DBML diagram), primary/foreign keys, the important indexes, and how to handle the special needs above. Provide the initial migration, and call out the decisions I will regret if I get them wrong now (IDs, tenancy, enums, money types). Keep it lean but easy to extend.`,

  34: `You are a senior full-stack engineer pair-programming with me. Implement the core workflow of [PRODUCT] end-to-end. Stack: [STACK]; data model: [PASTE/DESCRIBE]; core outcome: [CORE OUTCOME].
Propose the smallest clean architecture (components, API endpoints, data access), then generate the code for the happy path step by step: [STEP 1], [STEP 2], [STEP 3]. Keep it idiomatic and readable, wire the front-end to the back-end, and stop at logical checkpoints so I can test as we go. Do not add any features beyond the happy path yet.`,

  35: `You are a developer building a convincing demo. Write a seed script for [PRODUCT]. Stack/ORM: [STACK]; data model: [DESCRIBE]; audience: [ICP].
Populate the app with believable, non-lorem data - realistic names, values, dates and relationships - that makes the product look alive and exposes real UI edge cases (long text, nearly-empty accounts, large numbers). Make the script idempotent and easy to re-run, parameterised by volume, and safe to run only in dev/staging. Provide the script and the command to run it.`,

  36: `You are a defensive-programming expert. For the core workflow of [PRODUCT] ([DESCRIBE]), stack [STACK], help me make it robust.
List the important edge cases and failure modes (bad input, empty/duplicate data, unauthorised actions, network timeouts, third-party failures, concurrency). For each, tell me how to handle it: input validation (client + server), user-friendly error messages, retries/fallbacks, and safe defaults. Give me a validation-schema approach for my stack, a consistent error-handling pattern, and a checklist so failures degrade gracefully instead of crashing.`,

  37: `You are a front-end engineer who builds mobile-first. Help me make the UI of [PRODUCT] work beautifully on phones, tablets and desktop. Design tokens: [TOKENS].
Give me the breakpoint strategy, a mobile-first CSS approach using my tokens, patterns for the tricky bits (navigation, tables, forms, modals on small screens), touch-target and font-sizing rules, and how to handle safe areas/notches. If I paste a component, refactor it to be responsive. Finish with a device/viewport QA checklist.`,

  38: `You are a product designer focused on activation. Design the onboarding and empty states for [PRODUCT] so new users reach the aha moment ([AHA MOMENT]) fast.
Give me: the ideal first-run flow (minimal steps, and when to ask for what), copy for each step, and designs for every key empty state (e.g. dashboard/list with no data) that teach and prompt the next action instead of being dead ends. Include a sample-data or "quick start" option, progress indicators, and microcopy. Flag anything that delays the user's first win.`,

  39: `You are a test engineer. Help me cover the critical, money- and data-sensitive flows of [PRODUCT] with automated tests I can trust. Stack: [STACK]; key flows: [LIST].
Recommend the right mix (unit / integration / e2e) and tools for my stack, then write tests for the top 3 critical paths: [FLOW 1], [FLOW 2], [FLOW 3]. Focus on behaviour and the edge cases that would actually hurt if broken, keep tests fast and deterministic, and show how to run them in CI. Do not chase 100% coverage - prioritise the flows that matter.`,

  40: `You are a founder-coach who runs great alphas. Help me plan a private alpha for [PRODUCT] with [N] target users from [ICP].
Give me: how to select and invite alpha users, what to tell them (expectations and how to give feedback), a lightweight feedback-capture system (channel + template), the top metrics/signals to watch, a cadence for check-ins, and how to dogfood the product myself daily with a bug/idea log. Provide the invite message, the feedback template, and clear criteria for deciding what to fix before a wider launch.`,

  // ---- Phase 5: Design & Quality Bar --------------------------------------
  41: `You are a world-class landing-page designer and copywriter. Design a homepage hero for [PRODUCT] as strong as a top studio site. ICP: [ICP]; value prop: [VALUE PROP]; brand tokens: [TOKENS].
Give me: 3 headline + subheadline options that lead with the outcome; the primary and a secondary CTA; the supporting visual/product shot to use; trust elements to place above the fold; and the layout (structure + spacing) using my tokens. Then provide clean, responsive HTML/CSS for the hero. Explain the conversion reasoning behind each choice and what to A/B test first.`,

  42: `You are a design-systems engineer. Help me build a small, consistent component library for [PRODUCT] (stack: [STACK]) driven by my design tokens: [TOKENS].
List the core components I need for v1 (button, input, select, card, modal, toast, badge, etc.), define the variants/states/props for each, and generate production-ready, accessible code for the top 5. Ensure everything consumes tokens (no hard-coded values), supports light/dark, and is documented with usage examples. Recommend how to organise and maintain the library so it stays consistent as I add screens.`,

  43: `You are a motion designer who values restraint. Suggest tasteful micro-interactions and animation for [PRODUCT] (stack: [STACK]) that make it feel alive and premium without being distracting.
Recommend where motion adds meaning (button/press feedback, state transitions, loading, success confirmations, list add/remove, hover) and the right duration and easing for each. Give me implementation snippets for my stack, a "motion budget", and accessibility rules (respect prefers-reduced-motion). Also list motion to avoid because it feels cheap or slows users down.`,

  44: `You are a UI quality reviewer. For each key screen of [PRODUCT] ([LIST SCREENS]), help me make every state look intentional: empty, loading, error, partial, and success/ideal.
Give me a per-screen checklist of the states that exist, what each should show (copy + visual treatment), skeleton/loading patterns, and helpful error and empty designs. If I paste a component, produce all of its states. The goal: no screen ever looks broken, blank or unfinished, regardless of data or network conditions.`,

  45: `You are an accessibility (a11y) specialist targeting WCAG 2.1 AA. Audit and help me fix [PRODUCT] for a solid baseline.
Give me a prioritised checklist covering: keyboard navigation and focus order / visible focus, semantic HTML and ARIA where needed, colour contrast, form labels and errors, images and alt text, motion preferences, and screen-reader basics. If I paste a component or page, identify the violations and return corrected, accessible code. Recommend the tools to test with (axe, Lighthouse, keyboard-only, a screen reader) and how to bake a11y checks into my workflow.`,

  46: `You are a web-performance engineer. Help me make [PRODUCT] (stack: [STACK], CDN: Cloudflare) load fast and score well on Core Web Vitals (LCP, INP, CLS).
Give me a prioritised optimisation plan: image strategy (formats, sizing, lazy-loading), font loading, code-splitting and bundle trimming, caching/CDN, reducing render-blocking resources, and avoiding layout shift. Tell me how to measure (Lighthouse, WebPageTest, field data), the target numbers to hit, and the 3 highest-impact fixes to do first. If I paste a report, interpret it and give concrete fixes.`,

  47: `You are an art director. Help me replace placeholders in [PRODUCT] with cohesive, on-brand imagery for a [ADJECTIVES] brand in [CATEGORY]. Palette: [COLORS].
Define a consistent visual style (subject, composition, colour treatment, lighting, photo vs illustration). Then give me ready-to-use AI image-generation prompts for the specific assets I need: [LIST e.g. hero, feature icons, empty states, blog headers]. Include aspect ratios, a quality/negative-prompt guide, licensing guidance for any stock, and how to keep a whole set visually consistent.`,

  48: `You are a brand-assets engineer. Ensure [NAME] has a crisp, consistent icon everywhere.
Give me the complete list of icon assets and sizes I need (favicon.ico, 16/32, apple-touch-icon 180, Android/maskable 192/512, Safari pinned tab, PWA manifest icons, and an OG fallback), the exact HTML <link> tags and web-app-manifest entries, and how to make the mark read perfectly at 16px and on dark tabs. Provide the manifest.json, the head markup, and a checklist to verify it shows correctly in browser tabs, bookmarks, mobile home screens and share previews.`,

  49: `You are a QA engineer. Create a cross-browser and device QA plan for [PRODUCT] before launch. Likely audience: [ICP].
Give me a prioritised test matrix (Chrome / Safari / Firefox / Edge; iOS Safari; Android Chrome; phone / tablet / desktop; light / dark), a checklist of what to verify on each (layout, fonts, forms, auth, core flow, motion), the common browser-specific gotchas to watch for, and how to test efficiently (real devices vs tools like BrowserStack). Provide a repeatable per-release checklist and a template to log issues.`,

  50: `You are a UX writer. Do a microcopy polish pass on [PRODUCT] for [ICP] in my brand voice ([VOICE / ADJECTIVES]).
Give me principles for buttons, labels, empty states, errors, confirmations, tooltips and onboarding, then rewrite the specific strings I paste to be clear, concise, human and on-brand. Replace vague labels ("Submit") with specific actions, turn scary errors into helpful guidance, and remove jargon. If I paste my current strings, return a before/after table with a one-line reason for each change.`,

  // ---- Phase 6: Auth, Data & Security (first half) ------------------------
  51: `You are a senior engineer implementing secure auth. Help me add authentication to [PRODUCT] (stack: [STACK]) supporting Google OAuth and email sign-up/login.
Recommend the best approach for my stack (a library/provider vs rolling my own - and why not to roll my own), then implement: the Google OAuth flow, email/password (or magic-link) with proper password hashing, email verification, and secure session issuance. Provide the code, the required env vars / redirect URIs, and a checklist of the security must-dos (hashing, verification, rate limiting, error handling that does not leak). Keep the UX low-friction.`,

  52: `You are an application-security engineer. Help me get sessions and account security right for [PRODUCT] (stack: [STACK]).
Cover: session/token strategy (cookies vs JWT; httpOnly / secure / sameSite; expiry and refresh/rotation), CSRF protection, secure logout and "log out everywhere", brute-force and rate limiting on auth endpoints, safe password reset, and optional MFA. Explain the right choice for my case, provide the implementation, and give me a checklist of account-takeover risks with how each is mitigated.`,

  53: `You are a database reliability engineer. Help me run production PostgreSQL for [PRODUCT]. Provider/host: [HOST/PROVIDER]; stack: [STACK].
Cover: choosing managed vs self-hosted; sizing; secure configuration (SSL, restricted access, least-privilege roles); connection pooling (e.g. PgBouncer or serverless pooling); a migrations workflow; automated backups + point-in-time recovery; and basic monitoring (slow queries, connections, disk). Give me the setup steps, the connection/pooling config for my stack, a go-live checklist, and the mistakes that most often cause outages or data loss.`,

  54: `You are a security architect specialising in multi-tenant SaaS. Help me ensure every user of [PRODUCT] can only access their own data, enforced at the data layer. My model: [DESCRIBE: single DB with tenant_id / schema-per-tenant / etc.].
Recommend the right isolation approach and implement it: authorization checks (roles/permissions), scoping every query by tenant/owner, and defense-in-depth (e.g. Postgres Row-Level Security). Show the code/policies, then write the abuse tests that prove a user cannot reach another user's data. Finish with the common leaks to audit (missing WHERE clause, IDOR, unprotected admin endpoints).`,

  55: `You are a full-stack engineer building a notification system for [PRODUCT]. Stack: [STACK]; DB: [DB]; real-time via [websockets/polling]; email via [PROVIDER].
Design a database-backed system supporting in-app notifications and email, with user preferences. Give me: the data model (notifications, read state, preferences), the API/service to create and deliver them, a reusable in-app notifications UI (list, unread badge, mark-as-read), email delivery with templates, and how to batch/throttle so users are not spammed. Provide the code and a reliability checklist (retries, idempotency, respecting opt-outs).`,

  56: `You are a payments engineer. Help me add payments and billing to [PRODUCT] (stack: [STACK]) so customers can pay me. Model: [subscription / one-off / usage / transaction fee]; pricing: [PRICING]; regions/currencies: [REGIONS].
Recommend the right provider (e.g. Stripe, Paddle, or a local processor like [LOCAL]) and whether I need a merchant of record for tax. Then implement: checkout, plans/prices, webhooks for the subscription lifecycle (created / updated / canceled / payment_failed), the billing portal, and how to reconcile payment state with my database as the source of truth. Provide the code, webhook signature verification, a test-mode checklist, and how to handle failed payments, refunds, proration and dunning.`,

  57: `You are a systems engineer who builds tamper-evident audit logs. Help me record an immutable, verifiable history of key actions in [PRODUCT] (stack: [STACK], DB: [DB]). Actions to track: [LIST e.g. money movements, status changes, admin actions].
Design an append-only audit-log model capturing who / what / when / before / after, plus a hash-chain (each entry hashes the previous) so tampering is detectable "blockchain-style". Give me the schema, the write path (how to log atomically with the action), a verification routine that detects a broken chain, how to expose a human-readable history to users, and retention/PII considerations. Include the code and how to test that edits break the chain.`,

  58: `You are a practical privacy engineer (not a lawyer) versed in GDPR and comparable local laws. For [PRODUCT], serving users in [REGIONS], help me meet my privacy obligations.
Give me: the personal data I likely collect and a data-inventory template; a plain-language privacy-policy outline; a lawful-basis / consent approach (including a cookie/consent banner that actually gates non-essential tracking); and how to implement data-subject rights (access, export, deletion) technically. Provide a risk-prioritised compliance checklist, DPA/subprocessor notes for the tools I use ([TOOLS]), and clearly flag where I must consult a real lawyer.`,

  59: `You are an application-security engineer. Harden [PRODUCT] (stack: [STACK]) against the OWASP Top 10 before attackers find the gaps.
Go through each category (broken access control, injection, auth failures, SSRF, security misconfiguration, vulnerable dependencies, etc.) and, for each, tell me the concrete risk in my stack and the specific fix (parameterised queries, output encoding, authz checks, security headers/CSP, secrets handling, dependency scanning, rate limiting, safe file uploads). Give me a prioritised hardening checklist, a security-headers config, how to add automated dependency and secret scanning to CI, and a short self-serve pen-test plan.`,

  60: `You are a disaster-recovery engineer. For [PRODUCT] (DB: [DB], host: [HOST], critical data: [DESCRIBE]), guarantee I can recover from data loss and that users can get their data out.
Define an RPO and RTO target for my stage, then design: automated backups (frequency, retention, off-site/immutable copies), point-in-time recovery, and a written recovery runbook. Include how to rehearse a full restore into a clean environment (untested backups do not count), how to survive ransomware / accidental deletion, and a user-facing data-export feature (formats, completeness, rate limits). Give me the backup scripts, the runbook template, and a quarterly DR-drill checklist.`,

  // ---- Phase 7: Content, SEO & Launch Prep --------------------------------
  61: `You are a website strategist and conversion copywriter. Help me expand [PRODUCT]'s landing page into a full marketing site. ICP: [ICP]; value prop: [VALUE PROP]; brand tokens: [TOKENS]; voice: [VOICE].
Recommend the sitemap (home, features / how-it-works, pricing, about, contact, blog, and any use-case/solution pages). For each page give me the goal, the section-by-section structure, and finished draft copy that leads with outcomes. Include the pricing-page design (tiers, comparison, FAQs, objection handling), the internal-linking and CTA strategy, and the SEO title + description for each page.`,

  62: `You are a technical SEO. Make [PRODUCT]'s site ([DOMAIN], stack: [STACK]) fully crawlable and indexable.
Give me the setup for: an XML sitemap and robots.txt, canonical tags, a clean URL structure, meta title/description patterns, Open Graph/Twitter tags, structured data (JSON-LD) for the relevant schema.org types ([e.g. Organization, Product, FAQ, Article]), correct status codes and redirects, pagination, hreflang if multi-region, mobile-friendliness and Core Web Vitals. Provide the code/config for my stack, how to verify in Google Search Console and the rich-results test, and a technical-SEO audit checklist to run each release.`,

  63: `You are an SEO strategist. Help me find what my [ICP] searches for and target it. Product: [PRODUCT]; topics: [TOPICS].
Walk me through building a keyword map: seed terms, how to expand them (tools and free methods), and how to cluster by search intent (informational / commercial / transactional) and by difficulty vs opportunity. Recommend the priority pages to create or optimise. For a target keyword [KEYWORD], give me an on-page template: title, H1, headings outline, meta description, internal links, and the entities/questions to cover to actually rank. Include a simple content-calendar plan to build topical authority.`,

  64: `You are a content-marketing lead. Help me build a consistent content engine for [PRODUCT] targeting [ICP].
Define a content strategy tied to my funnel (awareness / consideration / decision) and to my keyword clusters [PASTE OR DESCRIBE]. Give me: 20 specific article ideas mapped to intent and stage; a repeatable production workflow (brief -> draft -> edit -> SEO -> publish -> distribute -> update); a realistic cadence for a small team; a reusable article-brief template; and how to use AI to draft without producing generic slop (with a human editing checklist). Include how to measure what is working and when to refresh old posts.`,

  65: `You are a startup ops advisor (not a lawyer). Help me publish the essential legal pages for [PRODUCT] ([DOMAIN], based in [COUNTRY], model: [B2B/B2C, payments?, data?]).
Tell me which pages I need (Terms of Service, Privacy Policy, Cookie Policy, Refund/Cancellation, Acceptable Use, DPA if B2B), what each must cover for my case, and how to generate solid first drafts (reputable generators/templates) tailored to my jurisdiction and model. Give me a checklist of the clauses that matter most for me, where to link them (footer, signup, checkout), and clear flags for where a paid lawyer review is worth it.`,

  66: `You are a customer-education specialist. Help me build self-service help for [PRODUCT] so users succeed without waiting on me. Core workflow: [DESCRIBE]; common questions: [LIST/INFER].
Propose the help-center structure (getting started, how-tos, troubleshooting, FAQ, account/billing) and write 5 model articles (task-based titles, clear steps, screenshots noted). Recommend a lightweight platform/approach for my stack, how to make it searchable and linkable from in-app empty/error states, and a process to grow it from real support tickets. Include a docs style guide and a template article.`,

  67: `You are a DevRel/reliability engineer. Help me set up a public status page and a changelog for [PRODUCT] to build trust.
Status page: recommend a tool or self-hosted approach, which components/endpoints to monitor, how to wire automated health checks and incident updates, an incident-communication template (investigating -> identified -> monitoring -> resolved), and a postmortem template. Changelog: recommend where it lives, a cadence and format that shows steady improvement, how to write user-benefit-focused entries (not raw commits), and how to notify users (in-app / email / RSS). Give me the templates.`,

  68: `You are a launch manager. Build me a comprehensive pre-launch checklist and rehearsal plan for [PRODUCT] before I drive real traffic.
Cover: functionality (core flows, auth, payments), reliability (load/perf, error monitoring, backups), security (headers, secrets, rate limits), analytics/tracking firing correctly, SEO/meta/OG, legal pages, email deliverability, mobile/cross-browser, and support readiness. For each item give the acceptance criteria and how to verify. Then design a launch-day rehearsal (a dry run with a small group), a rollback plan, and a go/no-go gate with an owner and status for each item.`,

  69: `You are a product-marketing manager preparing a launch. For [PRODUCT] (value prop: [VALUE PROP], ICP: [ICP], channels: [CHANNELS e.g. Product Hunt, X, LinkedIn, email, communities], voice: [VOICE]), create the launch asset kit.
Give me: a 60-90s demo-video script and shot list; a press-kit outline (boilerplate, founder bio, screenshots, logos, key facts); and channel-specific copy (Product Hunt tagline + first comment, an X/Twitter launch thread, a LinkedIn post, a launch email, and a community/Reddit post that adds value without being spammy). List the screenshots/graphics I need. Keep everything on-brand.`,

  70: `You are a launch strategist. Help me plan and run a coordinated public launch for [PRODUCT] to drive my first wave of users. Channels and assets: [LIST]; waitlist size: [N].
Give me an hour-by-hour launch-day runbook (what to post where and when, who to notify, how to ethically rally early supporters for Product Hunt upvotes/comments), how to engage and respond in real time, how to handle inbound signups and support load, and the metrics to watch live. Include a 7-day post-launch follow-up plan (thank-yous, press outreach, retargeting, iterating on feedback) and how to judge whether the launch worked.`,

  // ---- Phase 8: Analytics, Tracking & Feedback ----------------------------
  71: `You are an analytics engineer. Help me instrument [PRODUCT] (stack: [STACK]) so I can see what users actually do.
Recommend a privacy-respecting web-analytics tool and a product-analytics tool for my case, and explain the split. Then implement: page/view tracking, the core in-product events tied to my activation and value moments [LIST], user identification (anonymous -> identified), and how to keep it GDPR-friendly with consent. Give me the install code, an initial event list with properties, how to verify events fire correctly (debug mode), and the mistakes that produce dirty data.`,

  72: `You are a growth/analytics advisor. Help me choose the one north-star metric that best captures the value [PRODUCT] delivers to [ICP], plus a small set of supporting KPIs. My model: [MODEL].
Explain candidate NSMs, the trade-offs, and pick one with reasoning (it should reflect delivered value, predict revenue, and be movable). Then define the input metrics that drive it across the AARRR frame (acquisition, activation, engagement, retention, referral, revenue), targets for my stage, and an anti-metric to avoid gaming. Give me a one-page metrics tree from NSM down to the daily levers my team can influence.`,

  73: `You are a product analyst. Help me measure the journey from visitor to activated user for [PRODUCT] and find where people drop off.
Define the funnel steps [e.g. visit -> signup -> setup -> first value -> habit], a precise definition of "activated" (the aha action + timeframe), and the events needed for each step. Show me how to build the funnel in [ANALYTICS TOOL], segment by source/cohort, and read drop-off to find the biggest leak. Set up an activation-rate dashboard, then give me a prioritised list of experiments to lift the weakest step.`,

  74: `You are an analytics architect. Help me design a clean, consistent event-tracking taxonomy for [PRODUCT] so my data stays trustworthy as I add features.
Give me a naming convention (object-action, casing) with examples, a standard set of properties to attach to every event, guidance on user vs event vs group properties, what to track vs skip (avoid event bloat), and a tracking-plan spreadsheet template (event, trigger, properties, owner, status). Include how to version and govern it, how to validate events in QA/CI, and how to clean up when names drift.`,

  75: `You are a UX-research/analytics engineer. Help me add session replay and heatmaps to [PRODUCT] (stack: [STACK]) to see the friction numbers cannot explain.
Recommend a tool for my case, show how to install it, and - critically - how to protect privacy (mask PII, exclude sensitive fields, honor consent). Then give me a research workflow: which sessions to watch (rage clicks, drop-offs, errors, new-user first sessions), what to look for, how to combine replays with funnel data, and how to turn observations into a prioritised fix list. Include the settings to avoid capturing sensitive data.`,

  76: `You are a customer-insight lead. Help me collect qualitative feedback from [PRODUCT] users continuously and turn it into decisions.
Design a system combining: in-app micro-surveys at the right moments (post-activation, pre-churn), an NPS/CSAT approach, a way to capture feature requests, and periodic user interviews. For each, give me the trigger, the exact questions, and the tool. Then give me a workflow to centralise, tag and quantify feedback, close the loop with users, and feed themes into the roadmap. Provide the survey question sets and a feedback-triage template.`,

  77: `You are an experimentation lead. Help me set up trustworthy A/B testing for [PRODUCT] (stack: [STACK], traffic: [ROUGH VOLUME]).
Recommend an approach/tool suited to my volume (and warn me if I have too little traffic for classic A/B, with alternatives). Explain how to form a hypothesis, pick a primary metric and guardrails, calculate sample size and duration, avoid peeking / p-hacking, and ship winners. Then design my first experiment on [AREA]: hypothesis, variants, metric, sample size, success threshold. Give me an experiment-brief template and a results-readout template.`,

  78: `You are a retention analyst. Help me measure whether [PRODUCT] users keep coming back, grouped by when they joined. Category: [CATEGORY].
Explain the right retention definition for my model (n-day vs unbounded/rolling, and the key action that counts), how to build a cohort retention table and curve in [ANALYTICS TOOL], and how to read the shape (does it flatten = product-market-fit signal, or decay to zero). Then segment cohorts by source/behavior to find who retains best, identify the leading indicators of retention, and turn that into 3 concrete retention experiments. Include target benchmarks for my category.`,

  79: `You are an observability engineer. Help me catch runtime errors and real-user performance issues in [PRODUCT] (stack: [STACK]) before they cost users.
Recommend tools for error tracking and real-user monitoring (RUM), and implement: front-end + back-end error capture with source maps and release tagging, meaningful alerting (thresholds, dedup, on-call channel), performance / Core Web Vitals field monitoring, and grouping so I fix the highest-impact issues first. Show the setup code, how to add context (user, release, breadcrumbs) without leaking PII, and a triage workflow (severity, ownership, SLAs).`,

  80: `You are an operating-cadence coach. Help me build a weekly metrics-review ritual for [PRODUCT] so data actually drives decisions.
Design: a one-screen dashboard of the north-star + key input metrics [LIST]; a standard weekly agenda (what changed, why, what we will do); how to separate signal from noise; and how to turn insights into 1-3 owned actions each week with follow-up. Give me the dashboard spec, a meeting template/doc, a metric-annotation habit (log launches/changes on the charts), and how to keep it to 30-45 minutes. Include how to run it solo if I have no team yet.`,

  // ---- Phase 9: Email, Community & Retention -------------------------------
  81: `You are a lifecycle-marketing strategist. Help me grow an owned email list for [PRODUCT] targeting [ICP].
Give me 5 lead-magnet ideas genuinely valuable to my ICP, where and how to place capture (site, blog, exit-intent, in-product, social), high-converting opt-in copy and form design, and how to set expectations to keep quality high. Cover double opt-in and compliance, why not to buy lists, and how to segment from the first signup. Provide the opt-in copy variants, a welcome incentive, and the 3 highest-ROI placements to start with.`,

  82: `You are an email deliverability and automation engineer. Help me choose and configure an email platform for [PRODUCT] (transactional + marketing; est. list size [N]; budget [BUDGET]).
Recommend a platform (or split transactional vs marketing) for my case, then set up deliverability correctly: domain auth (SPF, DKIM, DMARC), a dedicated sending subdomain, warm-up, list hygiene, and unsubscribe/preference handling. Explain segmentation and automation-builder basics, how to stay out of spam folders, and the metrics to watch (delivery, open, click, spam, unsub). Give me the exact DNS records and a go-live checklist.`,

  83: `You are a lifecycle-email specialist. Design the core automated email sequences for [PRODUCT] (ICP: [ICP], activation moment: [AHA], value prop: [VALUE PROP]).
Map sequences to the lifecycle: welcome/onboarding (drive to activation), nurture (educate + convert free -> paid), engagement/feature-adoption, pre-churn/win-back, and post-purchase. For the onboarding sequence, write all emails (trigger, timing, subject lines, body, single CTA). For the others, give the trigger logic, timing, and subject/CTA outlines. Include personalization tokens, how to avoid over-emailing, and the KPI for each sequence.`,

  84: `You are a community strategist. Help me build a community around [PRODUCT] / [MISSION] for [ICP].
Help me decide the goal (support, engagement, advocacy, growth) and the right platform (Discord / Slack / Circle / forum / WhatsApp / subreddit) for my audience, then design: the structure (channels/spaces), onboarding and rules, a 30/60/90-day plan to seed activity and avoid a ghost town, rituals/events that create habit, and how to recruit the first members and early moderators. Give me a launch checklist, engagement tactics, and the health metrics to track (active members, posts, retention).`,

  85: `You are a growth engineer specialising in referral loops. Help me turn happy [PRODUCT] users into a growth channel. Margins: [MARGINS]; stack: [STACK].
Assess whether my product suits referral vs invite-to-collaborate virality, then design the mechanic: the incentive (one-sided vs two-sided, and what reward fits my economics), share surfaces and timing (trigger at a positive moment), the messaging, and fraud prevention. Give me the data model and flow (referral codes, attribution, reward fulfillment), the key metric (viral coefficient / invites per user / conversion), how to test and iterate, and an implementation outline for my stack.`,

  86: `You are a behavioral product designer (Hooked / BJ Fogg). Help me design mechanics that bring [PRODUCT] users back and build a lasting habit. Core value moment: [AHA].
Map my product to the Hook model (trigger, action, variable reward, investment). Identify the natural usage frequency and the internal/external triggers I can build, friction to remove from the core action, meaningful notifications (not spam), and streaks/progress/personalization that increase "stored value", plus the leading retention indicators to watch. Give me 5 concrete, prioritised retention features/experiments with a hypothesis and metric for each.`,

  87: `You are a lifecycle marketer. Help me bring back [PRODUCT] users who went quiet or churned.
Define "dormant" vs "churned" for my model, then design segmented re-engagement: the triggers, the channel mix (email / push / in-app), and message sequences for each segment (recently inactive, long-dormant, cancelled). Write a 3-email win-back sequence (subjects + bodies + offers) that leads with new value and a reason to return, plus a "break-up"/sunset email and how to clean the list. Include how to learn why they left (exit survey), an incentive strategy, and the success metrics.`,

  88: `You are a customer-success leader. Help me deliver support that turns users into advocates for [PRODUCT] (team size: [SIZE], volume: [VOLUME]).
Recommend a support stack (shared inbox / help desk, live chat, canned responses, KB integration) for my scale, target response/resolution SLAs, and a tone-of-voice guide for replies. Then design proactive customer success: onboarding check-ins, health scoring to spot at-risk accounts, and how to turn tickets into product fixes and docs. Give me reply templates for common scenarios (bug, angry user, feature request, refund) and the CS metrics to track (CSAT, first-response time, resolution, retention impact).`,

  89: `You are a social-proof systems builder. Help me systematically collect and showcase proof for [PRODUCT]. Review sites that matter for my category: [SITES].
Design a repeatable engine to gather reviews, testimonials, case studies and user-generated content: the ask timing (right after a win/aha), the exact request messages, and compliant incentives. Then help me display proof where it converts (hero, pricing, checkout, ads) with specifics (numbers, names, photos). Give me a case-study template + interview questions, the review-request templates, and a cadence/dashboard to keep proof flowing.`,

  90: `You are a monetization/retention strategist. Help me grow revenue per customer for [PRODUCT] (model: [MODEL], current pricing: [PRICING]).
Identify the expansion levers that fit my case: upsells (higher tiers), cross-sells (add-ons), usage-based expansion, seats, and annual plans. Design a loyalty/rewards approach that fits my economics and actually changes behavior (not just discounts), the right in-product moments to prompt upgrades (at value or at a limit, not randomly), and how to reduce churn among high-value users. Give me the expansion playbook, pricing/packaging tweaks to test, and the metrics to track (NRR, expansion MRR, ARPU).`,

  // ---- Phase 10: Growth to 10,000 -----------------------------------------
  91: `You are a head of growth. Help me choose the 1-2 acquisition channels to focus on for [PRODUCT] (ICP: [ICP], model: [MODEL], budget: [BUDGET], current traction: [TRACTION]).
Walk me through the Bullseye framework: brainstorm across the ~19 traction channels, rank by fit for my ICP and economics, and pick a few to cheaply test. For each candidate, define a small experiment with a budget, a target CAC, and a success threshold. Then give me a focusing rule (double down on the one channel that works, ignore the rest for now), a 90-day channel-test plan, and how to know when a channel is saturated.`,

  92: `You are an SEO growth lead. Help me turn content + SEO into a compounding organic engine for [PRODUCT]. Current content: [DESCRIBE]; target clusters: [CLUSTERS].
Design a scalable system: a topic-cluster / pillar architecture and internal linking; a production pipeline that can publish [N]/week without losing quality; programmatic/templated pages if my data supports them; a backlink/authority strategy (digital PR, guest posts, linkable assets); and a refresh process for decaying posts. Give me the 90-day plan, the roles/tools to scale (in-house + AI + freelancers), and the leading and lagging metrics for organic growth.`,

  93: `You are an organic-social strategist. Help me grow an engaged audience for [PRODUCT] on the platforms my [ICP] actually uses (include a LinkedIn presence). Voice: [VOICE].
Recommend the 1-2 primary platforms for my ICP and why, define content pillars and formats that fit each, a realistic posting cadence, and hooks/templates that drive reach. Give me a founder-led content plan (build-in-public, thought leadership), a 2-week starter calendar with specific post ideas, how to repurpose one idea across platforms, engagement tactics to grow from zero, and the metrics that matter (not vanity).`,

  94: `You are a performance-marketing expert. Help me acquire users for [PRODUCT] profitably via paid ads (target CAC: [CAC], LTV: [LTV], budget: [BUDGET], ICP: [ICP]).
Recommend which platform to start with (Google intent vs Meta interruption vs other) for my case, then design the first campaign: audience/targeting, the offer and landing page, 3-5 ad-creative concepts + copy, campaign structure and budget, and the conversion-tracking/attribution setup. Explain how to read early data, kill losers fast, scale winners, and avoid burning budget. Give me a testing roadmap and the metrics/decision rules (CPM, CTR, CVR, CAC, ROAS).`,

  95: `You are an influencer-marketing manager. Help me partner with creators my [ICP] trusts to reach relevant users for [PRODUCT] (budget: [BUDGET]).
Define the creator profile and tier (nano/micro vs macro) that fits my budget and goals, how to find and vet them (engagement quality, audience fit, red flags), outreach messages that get replies, deal structures (flat fee, affiliate/commission, gifting, whitelisting), the brief to keep it authentic, and proper disclosure. Give me how to track performance (codes/links, CAC per creator), how to run a small test before scaling, and templates for outreach and the creator brief.`,

  96: `You are a startup PR strategist. Help me earn coverage for [PRODUCT] from media, newsletters and podcasts to build awareness and credibility. Beat/topic: [BEAT].
Help me find the genuinely newsworthy angle (data, trend, founder story, milestone), build a targeted media list (journalists / newsletters / podcasts covering my beat), and write a tight pitch email + press release. Cover timing, embargoes, journalist-request tactics (e.g. HARO), why podcasts and newsletters are an easier entry than tier-1 press, and how to build relationships rather than one-off asks. Give me the pitch templates, a press-kit checklist, and how to measure PR impact.`,

  97: `You are a partnerships lead. Help me grow [PRODUCT] through other companies' audiences via integrations, co-marketing and channel deals.
Identify partner types that fit (complementary tools my [ICP] already uses, resellers, communities, platforms/marketplaces) and prioritise by reach x fit x effort. For technical integrations: which to build first and why, and how to get listed in partner marketplaces/app directories. For co-marketing: deal structures (webinars, bundles, cross-promo, affiliate/referral), the outreach pitch that shows mutual value, and a simple partnership-agreement outline. Give me a target-list template, outreach templates, and success metrics.`,

  98: `You are a marketing-automation and AI-ops engineer. Help me scale [PRODUCT]'s marketing without adding headcount using AI and automation.
Map my repetitive workflows (content drafting/repurposing, social scheduling, lead capture/qualification, support triage, personalized outreach, reporting) and, for each, recommend an automation (tools like n8n / Zapier / Make + LLMs, chatbots) with the trigger -> action design and where a human stays in the loop for quality and brand safety. Prioritise by ROI and effort, warn me where automation would hurt (spam, generic content, broken trust), and give me 3 concrete automations to build first with step-by-step setup.`,

  99: `You are a growth researcher. Help me learn what works by dissecting competitors and proven case studies (e.g. Starter Story, growth teardowns) for [PRODUCT]'s space.
Give me a teardown framework to reverse-engineer a competitor's growth: their channels (via tools like SimilarWeb / Ahrefs), positioning, pricing, funnel, content, ads (ad libraries), and viral loops. Then extract transferable playbooks from 3 relevant success stories and adapt them to my ICP and economics rather than copying blindly. Provide a competitor-teardown template, where to find the data, and how to turn findings into 3 experiments to run.`,

  100: `You are a field-marketing and ops lead. Help me extend [PRODUCT]'s reach with offline/local activations and by outsourcing for scale (market: [MARKET/GEO], ICP: [ICP], budget: [BUDGET]).
On-ground: which activations fit (events, meetups, campus/market activations, partnerships with local orgs, sampling, guerrilla), how to run one end to end, and how to track ROI from an offline touch to a signup (codes / QR / landing pages). Outsourcing: which functions to delegate to agencies/contractors/BPO (content, ads, SDR/outreach, support, data), how to brief and manage them, quality control, and unit-cost math. Give me an activation playbook and a hiring/brief template.`,

  101: `You are a growth/finance operator. Help me reach 10,000 users, 10,000 followers and 10,000 transactions for [PRODUCT] with sustainable economics.
Build a growth model working back from these targets: the required traffic / conversion / retention by channel, and a monthly plan. Then rigorously analyse unit economics: CAC by channel, LTV (with real retention and margin), payback period, and the LTV:CAC ratio (target >= 3:1), showing which channels to scale vs cut. Identify the current bottleneck (acquisition, activation, or retention) and where to focus. Give me the model template, a dashboard of milestone + economics metrics, and the 3 highest-leverage moves right now.`,

  // ---- Phase 11: Fundraising: Idea to VC -----------------------------------
  102: `You are a fundraising advisor and former founder. Help me consciously decide whether and when to raise VC for [PRODUCT] (stage: [STAGE], traction: [TRACTION], growth/runway: [DETAILS], my goals: [GOALS]).
Lay out the honest trade-offs of VC vs alternatives (bootstrapping, revenue-based financing, angels, grants, debt) for my situation. Explain what "venture-scale" really requires and whether I fit, the signals that I am ready to raise (or should wait for a stronger milestone), and what raising costs me (dilution, control, growth expectations). End with a clear recommendation and, if raising, the milestone/timing that maximises my leverage.`,

  103: `You are a fundraising-operations expert. Help me compile the metrics and documents investors will scrutinise for [PRODUCT] into an organised data room (stage: [STAGE]).
Give me the metrics investors expect at my stage (growth, retention/cohorts, engagement, revenue/MRR, CAC/LTV, burn/runway) and how to present them honestly and compellingly. Then give me the full data-room folder structure (corporate/legal, cap table, financials, metrics, product, team, customer evidence, market), what goes in each, and how to control access and versioning. Include a metrics-dashboard template, the red flags investors look for, and a data-room readiness checklist.`,

  104: `You are a pitch-deck expert who has seen thousands of decks. Help me build a clear, persuasive [STAGE] deck for [PRODUCT]. My key facts: [PASTE].
Go slide by slide (problem, solution, why now, market size, product, business model, traction, competition, go-to-market, team, financials, ask/use of funds). For each, tell me the ONE point it must land, what to show, and the common mistakes - then draft the actual content using my facts. Give me guidance on narrative flow, design/visual density, the 10-20-30 rule, how to tailor the deck for email (send) vs meeting (present), and a strong one-line hook for the intro.`,

  105: `You are a storytelling and investor-communications coach. Help me craft the fundraising narrative for [PRODUCT] that I can tell in any format (deck, email, meeting, hallway). My facts: [PASTE].
Build the core story arc: the insight / why-now, the problem, the inevitable future I am building toward, why this team wins, and the traction proof. Give me a 30-second, a 2-minute, and a 10-minute version. Then prep me for the tough questions investors ask (market size, competition, moat, why you, unit economics, risks) with honest, confident answers - including how to handle ones I do not know.`,

  106: `You are a startup CFO and financial-modeling expert. Help me build a credible financial model and projections for [PRODUCT] (model: [MODEL], current metrics: [METRICS]).
Build it bottom-up from real drivers (traffic -> conversion -> customers -> revenue; costs; hiring; burn) rather than top-down fantasy, with monthly detail for ~18-24 months and annual for 3-5 years. Show revenue, gross margin, the key SaaS/marketplace metrics, burn and runway, with assumptions clearly separated so they are editable. Explain what investors check, how to make projections ambitious but defensible, and how much runway to raise for. Give me the model structure/tabs and the driver assumptions to define.`,

  107: `You are a venture-financing advisor. Help me decide how much to raise for [PRODUCT], at what terms, and what it will achieve (stage: [STAGE], traction: [TRACTION], geo: [GEO]).
Explain how to size the round from milestones (raise enough for ~18-24 months to hit the next fundable milestone - no more, no less), current valuation ranges and instruments for my stage (SAFE vs priced round; caps/discounts) and typical dilution (~15-25%). Help me build a clear use-of-funds breakdown tied to milestones, model the dilution / cap-table impact, and avoid raising too much (pressure) or too little (running out). Give me the framework and a use-of-funds template.`,

  108: `You are a fundraising-process coach. Help me build a targeted investor pipeline for [PRODUCT] and line up warm intros (stage: [STAGE], sector: [SECTOR], geo: [GEO], round: [ROUND]).
Help me define my ideal-investor profile (stage / check size / sector / thesis fit / value-add), build a ranked target list (and where to research them), and prioritise by fit and access. Explain the warm-intro playbook (who can introduce me and the forwardable blurb that makes it easy), how to handle cold outreach when needed, and how to sequence outreach (practice on tier-2 first; run in parallel to create urgency). Give me the forwardable intro email, a cold-email template, and a CRM/tracker template.`,

  109: `You are a fundraising-execution coach. Help me run my [PRODUCT] raise as a tight, momentum-driven process (round: [ROUND], pipeline: [N investors]).
Give me the process design: batch outreach to create parallel timelines and urgency; how to run first meetings (structure, what they are really evaluating, questions to ask them); disciplined follow-ups with new proof points; and how to track everything in a CRM by stage. Explain how to create and use urgency honestly, how to handle a term sheet arriving, keeping a data-room and update rhythm, and staying resilient through the "no"s. Give me a meeting-prep checklist, a follow-up template, and a weekly cadence to drive toward offers.`,

  110: `You are a fundraising advisor adjacent to startup law (not legal advice). Help me get [PRODUCT] through diligence, negotiate fair terms, and close the round.
Explain what due diligence covers (financial, legal, technical, customer, team) and how to prepare so it is fast and clean. Then walk me through the term-sheet terms that actually matter (valuation/cap, liquidation preference, board/control, pro-rata, option pool, anti-dilution, vesting) and which to push on vs concede. Give me negotiation principles (leverage from multiple offers; standard vs red-flag terms), the closing steps and typical timeline, and when to bring in a real lawyer. Include a term-sheet red-flags checklist.`,

  111: `You are a post-raise operating coach. Help me deploy the capital I just raised for [PRODUCT] against my plan and execute toward the next stage (amount: [AMOUNT], milestones promised: [MILESTONES], runway: [RUNWAY]).
Help me: onboard investors and set up a crisp monthly investor update (format + metrics); turn use-of-funds into a hiring and spending plan sequenced to reduce risk; set company goals/OKRs for the next 12-18 months tied to the metrics that unlock the next round; put light financial discipline in place (budget, burn tracking, runway alarms); and avoid the classic post-raise traps (overhiring, premature scaling, losing focus). Give me an investor-update template and a 90-day post-raise plan.`,
};
