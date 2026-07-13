import type { TaskExtras } from './types';

/**
 * Plain-language extras for every task, keyed by task id:
 *  - eli5:     an "explain like I'm 5" paragraph (no jargon)
 *  - examples: concrete, real-world examples of the task in practice
 * Merged onto each Task in tasks.ts.
 */
export const extras: Record<number, TaskExtras> = {
  1: {
    eli5: 'Before building a treehouse, you say out loud who it is for and why they need it. Writing your idea down does the same thing — it turns a fuzzy “wouldn’t it be cool” into a clear sentence about a real person with a real problem, so you can tell if it’s actually worth building.',
    examples: [
      'A one-pager: “Solo real-estate agents in Nairobi lose leads because WhatsApp enquiries get buried. Today they use a paper notebook and memory, and miss commissions worth hundreds of dollars a month.”',
      'Airbnb’s original note: “Travellers can’t find affordable places during sold-out conferences; hosts have spare rooms and could earn extra cash.”',
      'A fitness-app idea rewritten from “an app for health” to “busy new parents skip workouts because they can’t get to a gym for a full hour.”',
    ],
  },
  2: {
    eli5: 'Instead of guessing what people want, you go ask them — like asking friends what pizza toppings they like before ordering ten pizzas. You talk to 15 real people who might have the problem and just listen, so you learn the truth instead of what you hope is true.',
    examples: [
      'Calling 15 dog owners and asking, “Tell me about the last time you struggled to find a dog-sitter,” without pitching anything.',
      'A founder using The Mom Test: asking about past behaviour (“What did you do last time?”) instead of “Would you use my app?”',
      'Superhuman interviewing users about their email pain for months before writing much code.',
    ],
  },
  3: {
    eli5: 'You pick exactly one type of person to make happy first, and describe them so clearly you’d recognise them in a crowd. Trying to please everyone means you please no one — so you choose your “first best friend” customer.',
    examples: [
      'Not “small businesses” but “owner-run dental clinics with 2–5 staff who still book by phone.”',
      'A persona card: “Meet Aisha, 34, runs a Nairobi salon, uses Instagram daily, hates no-shows.”',
      'Facebook deliberately starting with “Harvard undergraduates” before expanding to other colleges.',
    ],
  },
  4: {
    eli5: 'You do some back-of-the-napkin math to check if this could ever be a big business — like counting how many houses are on your street before starting a lemonade stand. You estimate how many people have the problem and how much they’d pay.',
    examples: [
      '“120,000 salons in our region × $30/month × the slice we could realistically win = our target revenue.”',
      'A bottom-up estimate built from real numbers (customers × price) rather than “it’s a $1 trillion market.”',
      'Deciding a niche is too small for VC and consciously choosing to bootstrap it instead.',
    ],
  },
  5: {
    eli5: 'You look at every other way people already solve this problem — including doing nothing or using a spreadsheet — so you know who you’re really up against and where you can be clearly better.',
    examples: [
      'A grid comparing your tool to two competitors, a spreadsheet, and “pen and paper.”',
      'Reading 1-star reviews of a competitor on G2 to find the pain they leave unsolved.',
      'Notion realising its real competitor was “ten separate apps duct-taped together.”',
    ],
  },
  6: {
    eli5: 'You write one clear sentence that says what you do, who it’s for, and why it’s better — short enough that a stranger instantly “gets it.” It’s your elevator pitch made crisp.',
    examples: [
      '“Superhuman is the fastest email experience ever made, for busy professionals.”',
      '“For X who struggle with Y, we do Z, unlike [alternative], because [reason].”',
      'Testing five homepage headlines and keeping the one people repeat back correctly.',
    ],
  },
  7: {
    eli5: 'Before building the whole thing, you put up a simple web page describing it and see if strangers actually click “sign me up.” It’s like setting out an empty box labelled “new toy” to see how many kids reach for it.',
    examples: [
      'A one-page site with an email box, sharing it in relevant communities, and measuring sign-ups.',
      'A “fake door” button for a feature that opens a “coming soon — want this?” form.',
      'Buffer’s famous landing page that tested demand (and pricing) before the product existed.',
    ],
  },
  8: {
    eli5: 'Wanting something and paying for it are different. Here you find out if people will actually open their wallets — like seeing if friends will pre-order the lemonade, not just say “yum.”',
    examples: [
      'Showing real prices and asking for a card or a small deposit to hold a spot.',
      'A pre-sale where 20 people pay upfront before the product is finished.',
      'Asking “what would be too expensive? what would feel cheap?” to find the price range.',
    ],
  },
  9: {
    eli5: 'You squeeze the whole business onto a single page — problem, solution, customers, money — and decide what “it’s working” will look like, so you can check yourself later against clear targets.',
    examples: [
      'Filling in a Lean Canvas: problem, solution, unfair advantage, revenue, costs, channels.',
      'Writing success criteria like “100 sign-ups and 10 paying customers in 60 days.”',
      'A one-pager you revisit monthly and update as you learn.',
    ],
  },
  10: {
    eli5: 'You look at everything you learned and honestly decide: build it, change it, or walk away. It’s the moment you choose to spend real time and money — or save them for a better idea.',
    examples: [
      'A go/no-go meeting reviewing interviews, smoke-test numbers and willingness to pay.',
      'Pivoting from the original idea to an adjacent one the evidence pointed to.',
      'Deciding to stop and keep the learnings, instead of building something nobody wanted.',
    ],
  },
  11: {
    eli5: 'You pick a name that’s easy to say, spell and remember — and that you can actually get as a website address. A good name is like a good nickname: short, sticky and yours.',
    examples: [
      'Brainstorming 50 names, then checking which .com or local domains are free.',
      'Saying each finalist out loud on a fake phone call to hear if it’s clear.',
      'Choosing “Stripe” over a longer, harder-to-spell alternative.',
    ],
  },
  12: {
    eli5: 'You buy your website address and a few look-alikes so no one can grab them, and you keep them in an account only you control — like buying the land your house will sit on.',
    examples: [
      'Registering yourbrand.com plus .co and the local .ke, and turning on auto-renew.',
      'Buying common misspellings so typos still reach you.',
      'Locking the domain and enabling 2FA on the registrar account.',
    ],
  },
  13: {
    eli5: 'You grab the same username on all the social apps so people can always find the real you, even before you post anything. It’s like reserving your seat before the show starts.',
    examples: [
      'Claiming @yourbrand on X, Instagram, LinkedIn, TikTok and YouTube in one sitting.',
      'Using a tool like Namecheckr to find a handle that’s free everywhere.',
      'Adding a simple logo and bio link to each placeholder profile.',
    ],
  },
  14: {
    eli5: 'You make a simple logo and a tiny icon that still looks clear when it’s tiny — like the little red “N” for Netflix. That small icon shows up in browser tabs and phone screens, so it has to be recognisable at thumbnail size.',
    examples: [
      'A clean wordmark plus a single-letter mark that stays sharp at 16×16 pixels.',
      'Exporting favicon.svg and app icons for iOS/Android home screens.',
      'Testing the icon shrunk down next to other browser tabs to check it still reads.',
    ],
  },
  15: {
    eli5: 'You choose a small set of colours and fonts and write them down as reusable “tokens,” so everything you build looks like it belongs to the same brand — like picking your team’s uniform colours.',
    examples: [
      'Defining primary/accent colours, a font pair, and spacing as CSS variables/tokens.',
      'Checking colour contrast so text stays readable for everyone.',
      'A tokens file the whole app and website both pull from.',
    ],
  },
  16: {
    eli5: 'You decide how your brand “talks” — friendly, expert, playful — and the few key messages you repeat everywhere, so you always sound like the same person.',
    examples: [
      'A voice guide: “We’re warm, plain-spoken and never use corporate jargon.”',
      'Three core messages every page and email reinforces.',
      'Mailchimp’s well-known playful-but-clear content style guide.',
    ],
  },
  17: {
    eli5: 'You put all your logos, colours, fonts and templates in one shared folder so you (and anyone helping) never hunt for the right file or use the wrong old logo again.',
    examples: [
      'A shared drive/Figma with logo variants, colour codes, fonts and slide templates.',
      'Versioned files so everyone uses the latest logo, not last year’s.',
      'Canva brand kit templates for quick social posts.',
    ],
  },
  18: {
    eli5: 'You design the little preview pictures that show up when someone shares your link on WhatsApp, X or LinkedIn, so every shared link looks polished instead of blank.',
    examples: [
      'A branded 1200×630 Open Graph image for the homepage.',
      'Auto-generated share cards for each blog post with its title.',
      'Testing links in a preview debugger before launch.',
    ],
  },
  19: {
    eli5: 'You set up a real email at your own domain (like you@yourbrand.com) and do the basic paperwork to be a legit business, so you look trustworthy and stay out of trouble.',
    examples: [
      'Google Workspace email on your domain instead of a personal Gmail.',
      'Registering a company/entity and a business bank account.',
      'Setting up email SPF/DKIM so your mail doesn’t land in spam.',
    ],
  },
  20: {
    eli5: 'You build one simple, good-looking web page that says what you offer and lets people join or get in touch. It’s your storefront window before the full shop is built.',
    examples: [
      'A single page with a strong headline, a few benefits, and an email sign-up.',
      'A “join the waitlist” page while the product is still being built.',
      'A clean Framer/Vite one-pager pointed at your new domain.',
    ],
  },
  21: {
    eli5: 'You keep every version of your code in Git (like infinite “undo” and a shared history), stored safely on GitHub. It’s a time machine plus a backup, so you never lose work and teammates never overwrite each other.',
    examples: [
      'Running git init, adding a README and .gitignore before writing real code.',
      'Pushing to a private GitHub repo with clear commit messages.',
      'Recovering yesterday’s working version after a bad change with one command.',
    ],
  },
  22: {
    eli5: 'You choose the building blocks (languages and tools) you’ll build with — picking ones you can move fast in, not the flashiest. It’s like choosing familiar LEGO sets so you can build quickly instead of reading manuals all day.',
    examples: [
      'Picking React + Node + Postgres because the team already knows them.',
      'Choosing a boring, well-documented stack over a trendy one for a first product.',
      'Using a batteries-included framework (like Rails or Next.js) to ship faster.',
    ],
  },
  23: {
    eli5: 'You set up your computer so it automatically tidies and checks your code as you write — like spell-check for programming. This catches silly mistakes before they become bugs.',
    examples: [
      'Adding Prettier (formatting), ESLint (linting) and TypeScript (type-checking).',
      'A one-command “npm run dev” that starts everything locally.',
      'Pre-commit hooks that auto-format code before it’s saved to Git.',
    ],
  },
  24: {
    eli5: 'You put Cloudflare in front of your website — it makes your site load faster worldwide, keeps it secure with HTTPS, and blocks bad traffic. Think of it as a fast, guarded front gate for your site.',
    examples: [
      'Pointing your domain’s DNS to Cloudflare and turning on the proxy (orange cloud).',
      'Getting automatic HTTPS and a global CDN cache with a few clicks.',
      'Enabling basic bot/DDoS protection during a launch spike.',
    ],
  },
  25: {
    eli5: 'You get your app running on a computer in the cloud (a server or hosting platform) and connect it to your domain, so anyone typing your address actually reaches your app.',
    examples: [
      'Deploying to a managed platform (Vercel, Render) or your own VPS/IIS server.',
      'Pointing yourbrand.com at the host and confirming it loads.',
      'Setting up the app to restart automatically if the server reboots.',
    ],
  },
  26: {
    eli5: 'You make sure every connection to your site is locked with the little padlock (HTTPS), from the visitor all the way to your server, so no one can snoop or tamper. It’s sealing every envelope end to end.',
    examples: [
      'Valid TLS certificates on the edge and origin, auto-renewing.',
      'Redirecting all http:// traffic to https:// automatically.',
      'Using Cloudflare “Full (strict)” SSL with an origin certificate.',
    ],
  },
  27: {
    eli5: 'You make shipping new code as easy as pressing one button (or automatic when you save to Git), so releasing improvements is quick and safe instead of scary and manual.',
    examples: [
      'A single “deploy” script or GitHub Action that builds and publishes on push.',
      'Rolling back to the previous version with one command if something breaks.',
      'A publish.ps1 that builds and copies files to the live server reliably.',
    ],
  },
  28: {
    eli5: 'You keep a separate “practice” copy of your site (staging) where you try changes first, so real users never see half-finished or broken work. It’s a dress rehearsal before the real show.',
    examples: [
      'A staging.yourbrand.com that mirrors production for testing.',
      'Testing a risky change on staging before promoting it to production.',
      'Separate staging and production databases so tests never touch real data.',
    ],
  },
  29: {
    eli5: 'You keep your passwords and secret keys out of your code and in a safe place, so they don’t leak on GitHub. It’s like not writing your PIN on your debit card.',
    examples: [
      'Storing API keys in environment variables, never committed to Git.',
      'Different secrets for staging vs production.',
      'A .env.example that documents needed keys without exposing real ones.',
    ],
  },
  30: {
    eli5: 'You set up automatic backups of your data and an alarm that tells you the instant your site goes down, so problems don’t become disasters and you’re the first to know, not your users.',
    examples: [
      'Nightly automated database backups you’ve actually tested restoring.',
      'An uptime monitor that texts you if the site returns an error.',
      'Off-site backup copies in case the main server dies.',
    ],
  },
  31: {
    eli5: 'You cut your product down to the one thing it must do really well, and ignore everything else for now. It’s making a great single-scoop cone instead of a mediocre ten-scoop tower.',
    examples: [
      'Shipping just “book a class and pay” before adding chat, reviews and referrals.',
      'A “not now” list of tempting features parked for later.',
      'Instagram launching as just photo filters + sharing, nothing more.',
    ],
  },
  32: {
    eli5: 'You draw out every step a user takes from arriving to getting the win, like a treasure map. Seeing the whole path shows you where people might get lost or stuck.',
    examples: [
      'A flow diagram: land → sign up → create first project → invite teammate.',
      'Marking the exact “aha moment” where the user first feels the value.',
      'Spotting an unnecessary step and deleting it to shorten the path.',
    ],
  },
  33: {
    eli5: 'You decide what information your app stores and how the pieces relate — users, orders, messages — before building. It’s drawing the blueprint before pouring the foundation.',
    examples: [
      'Tables for users, projects and tasks with the right relationships.',
      'Using migrations so schema changes are tracked and repeatable.',
      'Deciding early that each task belongs to one project and one owner.',
    ],
  },
  34: {
    eli5: 'You build the main feature so a user can actually go from start to finish and get the result — the “happy path.” This is the heart of the product working for real.',
    examples: [
      'A user can create an account, add data, and see the core output end to end.',
      'The one workflow from your user-flow map, fully functional.',
      'A to-do app where you can actually add, complete and delete a task.',
    ],
  },
  35: {
    eli5: 'You fill the app with realistic pretend data so it looks alive and you can test it — like putting props on a stage set instead of leaving it empty.',
    examples: [
      'A seed script that creates believable users, projects and history.',
      'Screenshots that look real because the demo data isn’t “test test test.”',
      'Enough sample rows to test sorting, search and pagination.',
    ],
  },
  36: {
    eli5: 'You make the app behave nicely when things go wrong — bad input, a failed save, no internet — instead of crashing or losing work. It’s adding guardrails so users don’t fall off the road.',
    examples: [
      'Friendly messages like “That email looks off — check it?” instead of a crash.',
      'Retrying or saving a draft when the network drops mid-action.',
      'Blocking a form submit until required fields are valid.',
    ],
  },
  37: {
    eli5: 'You make sure your app looks and works great on phones, not just big screens — because most people will visit on their phone. It’s making sure the toy works whether it’s big or pocket-sized.',
    examples: [
      'Designing mobile-first, then scaling up to tablet and desktop.',
      'Tappable buttons and readable text without pinch-zooming.',
      'Testing on a real phone, not just a shrunk browser window.',
    ],
  },
  38: {
    eli5: 'You gently guide brand-new users to their first win and make empty screens helpful instead of blank and confusing. It’s greeting a guest and showing them where things are.',
    examples: [
      'A short welcome checklist that leads to the “aha” moment.',
      'An empty state that says “No projects yet — create your first one” with a button.',
      'Pre-filled sample content new users can play with immediately.',
    ],
  },
  39: {
    eli5: 'You write little automatic checks that make sure the most important parts of your app keep working, so future changes don’t secretly break them. It’s a smoke alarm for your code.',
    examples: [
      'Tests covering sign-up, checkout and anything touching money or data.',
      'A test that fails loudly if the payment flow breaks.',
      'Running the test suite automatically before every deploy.',
    ],
  },
  40: {
    eli5: 'You use your own product every day and give it to a few real target users to try privately. Living with it reveals rough edges you can’t see from the outside.',
    examples: [
      'The founder running their own workflow entirely on the product.',
      'A private alpha with 5–10 friendly users who report bugs.',
      'A shared channel where alpha testers post feedback daily.',
    ],
  },
  41: {
    eli5: 'The hero is the first big thing people see at the top of your homepage. You make it so clear and appealing that visitors instantly understand what you do and want to try it — like a movie poster that makes you want to watch.',
    examples: [
      'A bold headline, one-line subhead, a screenshot, and one obvious button.',
      'Copying the clarity (not the pixels) of afrosoftware.com or dj24.com heroes.',
      'A/B testing two hero headlines to see which gets more sign-ups.',
    ],
  },
  42: {
    eli5: 'You build a set of reusable UI pieces (buttons, cards, inputs) that all look the same, so every new page is fast to build and automatically consistent. It’s a box of matching LEGO bricks.',
    examples: [
      'A component library where “Button” is defined once and used everywhere.',
      'Design tokens driving colours and spacing across all components.',
      'A Storybook page showing every component and its states.',
    ],
  },
  43: {
    eli5: 'You add small, tasteful animations and feedback — a button that responds, a smooth transition — so the app feels alive and premium instead of stiff. Little touches make it feel expensive.',
    examples: [
      'A subtle hover effect and a smooth page transition.',
      'A checkmark animation when a task is completed.',
      'Respecting “reduce motion” settings for people who prefer less animation.',
    ],
  },
  44: {
    eli5: 'You make sure every screen looks good in every situation — while loading, when empty, when something errors, and when it succeeds — not just in the perfect demo. Real users hit all these states.',
    examples: [
      'A skeleton/loading placeholder instead of a blank flash.',
      'A friendly error screen with a “try again” button.',
      'A celebratory success state after checkout.',
    ],
  },
  45: {
    eli5: 'You make your product usable by everyone, including people who use keyboards only or screen readers, or who can’t see certain colours. It’s adding ramps and clear signs so nobody is locked out.',
    examples: [
      'Being able to complete the core flow using only the keyboard.',
      'Alt text on images and labels on form fields for screen readers.',
      'Checking colour contrast passes WCAG AA.',
    ],
  },
  46: {
    eli5: 'You make pages load fast and feel instant, because slow sites lose people. It’s trimming the weight so the race car is quick off the line.',
    examples: [
      'Compressing images to WebP and lazy-loading below-the-fold ones.',
      'Hitting good Core Web Vitals (fast load, quick interaction, no layout jumps).',
      'Code-splitting so the first page doesn’t download the whole app.',
    ],
  },
  47: {
    eli5: 'You replace placeholder boxes with real, on-brand pictures and illustrations so the product looks finished and professional, not like a rough draft.',
    examples: [
      'Cohesive AI-generated illustrations (like these 111 infographics!).',
      'Licensed photography that matches your brand colours.',
      'Custom diagrams that explain features better than words.',
    ],
  },
  48: {
    eli5: 'You make sure your little icon looks crisp everywhere it appears — browser tabs, phone home screens, bookmarks, shared links — like Netflix’s single clean “N.” One icon, perfect at every size.',
    examples: [
      'Exporting all favicon and app-icon sizes from one source SVG.',
      'A maskable icon that looks right as an Android app shortcut.',
      'Checking the icon in a browser tab next to other pinned tabs.',
    ],
  },
  49: {
    eli5: 'You test your product on different browsers (Chrome, Safari, Firefox) and real phones to make sure it looks and works right for everyone, not just on your machine.',
    examples: [
      'Opening the site on an iPhone Safari and an Android Chrome to compare.',
      'Catching a layout bug that only appears in Safari.',
      'Using BrowserStack to test devices you don’t own.',
    ],
  },
  50: {
    eli5: 'You go through all the words in your app — buttons, tips, errors — and make them clear, friendly and on-brand. Good wording quietly makes the whole product feel better.',
    examples: [
      'Changing “Submit” to “Create my account.”',
      'Rewriting a scary error into “Something went wrong — we’ve been notified.”',
      'A consistent, warm tone across every screen.',
    ],
  },
  51: {
    eli5: 'You let people create accounts and log in safely, including the easy “Sign in with Google” button. It’s giving each user their own key to their own locker.',
    examples: [
      'Google OAuth plus email/password sign-in.',
      'A secure password reset flow via email.',
      'Storing passwords hashed, never in plain text.',
    ],
  },
  52: {
    eli5: 'You manage logins so that once someone signs in, they stay safely signed in — and nobody can steal their session or hijack their account. It’s keeping the locker key from being copied.',
    examples: [
      'Secure, httpOnly session cookies with sensible expiry.',
      'Optional two-factor authentication for extra safety.',
      'Logging out all sessions after a password change.',
    ],
  },
  53: {
    eli5: 'You set up a proper grown-up database (PostgreSQL) to store everything reliably in production, with backups and monitoring. It’s the sturdy filing cabinet your whole app depends on.',
    examples: [
      'A managed Postgres instance with connection pooling.',
      'Automated backups and alerts on high load.',
      'Separate databases for staging and production.',
    ],
  },
  54: {
    eli5: 'You make sure each user can only see their own stuff, never anyone else’s — enforced deep in the data, not just hidden in the UI. It’s making sure lockers only open with the right key.',
    examples: [
      'Every query scoped to the logged-in user’s account/organisation.',
      'Row-level security so a bug can’t leak another tenant’s data.',
      'Tests that try to access someone else’s data and confirm it’s blocked.',
    ],
  },
  55: {
    eli5: 'You build a system that tells users when something happens — a bell inside the app and emails — powered by your database so it’s reliable. It’s the app tapping users on the shoulder at the right moments.',
    examples: [
      'An in-app bell showing “Aisha commented on your task.”',
      'A transactional email when someone is invited or mentioned.',
      'Notification preferences so users control what they get.',
    ],
  },
  56: {
    eli5: 'You let customers actually pay you, safely — a subscription or one-time charge — using a trusted payment provider. It’s putting a working cash register in the shop.',
    examples: [
      'Stripe Checkout for monthly subscriptions.',
      'Handling failed payments and sending receipts automatically.',
      'A billing page where users can upgrade, downgrade or cancel.',
    ],
  },
  57: {
    eli5: 'You keep a clear, tamper-proof record of important actions (who did what, when) so everything is transparent and trustworthy — “blockchain-style” honesty, even without a blockchain.',
    examples: [
      'An immutable audit log of edits, approvals and payments.',
      'Showing users a verifiable history timeline of their records.',
      'Hash-chaining records so tampering is detectable.',
    ],
  },
  58: {
    eli5: 'You handle people’s personal data responsibly and follow privacy laws — telling users what you collect and letting them see or delete it. It’s promising to look after their stuff and keeping that promise.',
    examples: [
      'A clear privacy policy and a cookie-consent banner where required.',
      'A “download my data” and “delete my account” option.',
      'Only collecting data you actually need.',
    ],
  },
  59: {
    eli5: 'You lock the doors and windows against the most common online attacks before hackers try them. It’s baby-proofing the house, but for security holes.',
    examples: [
      'Preventing SQL injection and XSS with safe queries and escaping.',
      'Rate-limiting logins to stop password-guessing.',
      'Keeping dependencies patched against known vulnerabilities.',
    ],
  },
  60: {
    eli5: 'You make sure you can always recover if data is lost, and that users can export their own data. It’s having a spare key and a fire escape — you hope you never need them, but you’re glad they exist.',
    examples: [
      'Regular backups you’ve practised restoring from scratch.',
      'A disaster-recovery plan for “what if the server dies?”',
      'A one-click export of a user’s data to CSV/JSON.',
    ],
  },
  61: {
    eli5: 'You grow from a single page into a full website — with pages explaining features, pricing, your story and how to contact you — so visitors can learn everything and decide to buy.',
    examples: [
      'Adding Features, Pricing, About and Contact pages.',
      'A pricing page with clear tiers and a FAQ.',
      'A story page that builds trust with the founder’s “why.”',
    ],
  },
  62: {
    eli5: 'You set things up so Google can easily read and list your site. It’s making sure the librarian can find your book and put it on the right shelf.',
    examples: [
      'A sitemap.xml and robots.txt so crawlers know what to index.',
      'Unique title and description tags on every page.',
      'Structured data so Google shows rich results.',
    ],
  },
  63: {
    eli5: 'You find the exact words people type into Google when they have your problem, then make pages that answer those searches. It’s stocking the shelves with what shoppers are actually looking for.',
    examples: [
      'Discovering people search “dog sitter near me” and building a page for it.',
      'Targeting a specific phrase in the page title, headings and content.',
      'Using a keyword tool to find low-competition terms you can win.',
    ],
  },
  64: {
    eli5: 'You publish helpful articles regularly so people find you through search and learn to trust you. It’s giving away useful tips so people know you’re the expert.',
    examples: [
      'A weekly blog post answering a real customer question.',
      'A guide that ranks on Google and quietly brings sign-ups for years.',
      'Repurposing one post into a thread, a video and a newsletter.',
    ],
  },
  65: {
    eli5: 'You add the “boring but important” legal pages — terms, privacy, cookies, refunds — that protect you and tell users the rules. It’s the fine print that keeps everyone safe.',
    examples: [
      'Terms of Service and a Privacy Policy linked in the footer.',
      'A clear refund/cancellation policy on the pricing page.',
      'A cookie notice where the law requires one.',
    ],
  },
  66: {
    eli5: 'You create a help section so users can answer their own questions without waiting for you. It’s an instruction manual and FAQ so people aren’t stuck.',
    examples: [
      'A searchable help center with how-to articles.',
      'An FAQ answering the top 10 support questions.',
      'Short screen-recording tutorials for common tasks.',
    ],
  },
  67: {
    eli5: 'You publish a page showing whether your service is up, and a list of the improvements you keep shipping. It’s being honest about hiccups and proud of progress.',
    examples: [
      'A status page that shows uptime and any incidents.',
      'A changelog: “This week we added X and fixed Y.”',
      'Auto-updating the status page when monitoring detects downtime.',
    ],
  },
  68: {
    eli5: 'Before opening the doors to a crowd, you run through a checklist and a practice run to make sure nothing’s broken. It’s a dress rehearsal so launch day goes smoothly.',
    examples: [
      'A pre-launch checklist covering analytics, payments, emails and SEO.',
      'A rehearsal where the team walks the full sign-up-to-pay flow.',
      'Load-testing to be sure the site survives a traffic spike.',
    ],
  },
  69: {
    eli5: 'You prepare all the “show off” materials — a demo video, screenshots, a press kit and posts — so launch day, everything you need is ready to go, not made in a panic.',
    examples: [
      'A 60-second demo video showing the product in action.',
      'A press kit with logos, screenshots and a boilerplate description.',
      'Pre-written launch posts for X, LinkedIn and Product Hunt.',
    ],
  },
  70: {
    eli5: 'You actually launch — telling the world across all your channels on the same day to get your first wave of users. It’s cutting the ribbon and inviting everyone in at once.',
    examples: [
      'A coordinated Product Hunt + social + email launch.',
      'Emailing your waitlist the moment you go live.',
      'Rallying friends and early users to engage in the first hours.',
    ],
  },
  71: {
    eli5: 'You add tools that show how many people visit and what they do inside your app, so you can see reality instead of guessing. It’s putting a scoreboard on your product.',
    examples: [
      'Adding Plausible/GA for traffic and PostHog for product events.',
      'Seeing which pages people land on and where they leave.',
      'Tracking “created first project” as a key action.',
    ],
  },
  72: {
    eli5: 'You pick the single most important number that shows your product is really delivering value, plus a few supporting ones. It’s choosing the one score that means you’re winning.',
    examples: [
      'Spotify’s north star: time spent listening.',
      'A SaaS choosing “weekly active teams” as its north star.',
      'Defining 3–5 supporting KPIs beneath the north-star metric.',
    ],
  },
  73: {
    eli5: 'You measure each step from “just visited” to “active happy user” to find where people fall off. It’s watching where the water leaks out of the bucket so you can plug it.',
    examples: [
      'A funnel: visit → sign up → activate → pay, with drop-off at each step.',
      'Discovering 60% quit at email verification and fixing it.',
      'Defining what “activated” means and tracking the % who reach it.',
    ],
  },
  74: {
    eli5: 'You agree on tidy names for the things you track, so your data stays clean and understandable instead of a mess of “btn_click2_final.” It’s labelling the boxes consistently.',
    examples: [
      'A naming convention like “Project Created” with clear properties.',
      'A tracking plan doc everyone follows before adding events.',
      'Avoiding duplicate events that mean the same thing.',
    ],
  },
  75: {
    eli5: 'You record (anonymously) how real people move through your app and where they hesitate or rage-click. It’s watching over their shoulder to see the friction numbers can’t explain.',
    examples: [
      'Session replays revealing users can’t find the “save” button.',
      'A heatmap showing everyone ignores your main call-to-action.',
      'Spotting a confusing step by watching ten real sessions.',
    ],
  },
  76: {
    eli5: 'You set up easy ways for users to tell you what they think, all the time, so you keep learning what to fix and build. It’s leaving a suggestion box that people actually use.',
    examples: [
      'An in-app “feedback” button that files straight to your board.',
      'A short survey after onboarding asking what was confusing.',
      'Regular customer calls to hear problems in their words.',
    ],
  },
  77: {
    eli5: 'You test two versions of something (A vs B) with real users to see which works better, instead of arguing about opinions. It’s a mini science experiment for your product.',
    examples: [
      'Testing two pricing-page layouts to see which sells more.',
      'Trying a new onboarding flow against the old one for half of users.',
      'Only shipping the change if it beats the control with real data.',
    ],
  },
  78: {
    eli5: 'You group users by when they joined and see if they keep coming back over time. It tells you whether your product is “sticky” or a leaky bucket.',
    examples: [
      'A retention chart showing what % of January sign-ups still use it in March.',
      'Comparing retention before and after an onboarding change.',
      'Noticing users who invite a teammate retain far better.',
    ],
  },
  79: {
    eli5: 'You add tools that alert you when the app errors or gets slow for real users, so you fix problems before they drive people away. It’s a check-engine light for your product.',
    examples: [
      'Sentry alerting you to a new crash right after a deploy.',
      'Real-user monitoring showing checkout is slow on mobile.',
      'Getting paged when errors spike above normal.',
    ],
  },
  80: {
    eli5: 'You set a regular weekly time to look at your numbers together and decide what to do next. It’s a steady heartbeat that keeps the team learning and acting, not drifting.',
    examples: [
      'A Monday metrics review of north-star, funnel and retention.',
      'Each metric having an owner who explains changes.',
      'Turning insights into one or two concrete actions each week.',
    ],
  },
  81: {
    eli5: 'You collect email addresses from interested people so you can reach them anytime for free, without depending on social media algorithms. An email list is an audience you actually own.',
    examples: [
      'A newsletter sign-up with a useful free “lead magnet” (checklist, guide).',
      'An exit popup offering a discount for joining the list.',
      'Growing to thousands of subscribers you can email on launch day.',
    ],
  },
  82: {
    eli5: 'You set up the tool that sends your emails properly, so they land in inboxes (not spam) and can send automatically. It’s getting a reliable post office instead of tossing letters in the wind.',
    examples: [
      'Configuring a platform like Resend, Mailchimp or ConvertKit.',
      'Setting up SPF/DKIM/DMARC so emails don’t get marked as spam.',
      'A verified sending domain and a warm-up plan.',
    ],
  },
  83: {
    eli5: 'You write emails that send themselves at the right moments — a welcome, tips to get started, a nudge if someone goes quiet. It’s a helpful auto-pilot that guides each new user.',
    examples: [
      'A 5-email welcome sequence that drives users to the “aha” moment.',
      'An automatic “we miss you” email after 14 days of silence.',
      'A drip series that turns free users into paying ones.',
    ],
  },
  84: {
    eli5: 'You create a place where your users can hang out, talk to you and each other, and feel part of something. A community turns customers into fans who stick around.',
    examples: [
      'A Discord or Slack where users help each other and share wins.',
      'A monthly live call or AMA with the founder.',
      'Notion’s and Figma’s communities that fuel word-of-mouth.',
    ],
  },
  85: {
    eli5: 'You make it easy and rewarding for happy users to invite their friends, so growth spreads on its own. It’s “tell a friend, you both get a treat.”',
    examples: [
      'Dropbox giving extra storage for each successful referral.',
      'A one-tap “invite a teammate” with a shared reward.',
      'A referral leaderboard for your most active fans.',
    ],
  },
  86: {
    eli5: 'You design little reasons for people to come back regularly until it becomes a habit — streaks, reminders, fresh value. It’s giving your product a reason to be part of someone’s routine.',
    examples: [
      'Duolingo’s streaks and reminders that build a daily habit.',
      'A weekly digest that pulls users back in.',
      'Saved progress that makes returning feel rewarding.',
    ],
  },
  87: {
    eli5: 'You reach out to users who drifted away and invite them back with something worthwhile. It’s a friendly “hey, we’ve missed you — look what’s new.”',
    examples: [
      'An email to churned users highlighting a big new feature.',
      'A win-back discount for expired subscriptions.',
      'Asking lapsed users why they left, and fixing that reason.',
    ],
  },
  88: {
    eli5: 'You help users quickly whenever they’re stuck and make sure they actually succeed with your product. Great support turns frustrated people into loyal fans.',
    examples: [
      'Fast, friendly replies via chat or email.',
      'Proactively checking in with new customers to ensure they’re winning.',
      'Turning a support ticket into a delighted public review.',
    ],
  },
  89: {
    eli5: 'You gather proof that real people love your product — reviews, testimonials, star ratings — and show it off. Social proof makes new visitors trust you faster.',
    examples: [
      'A wall of testimonials and logos on the homepage.',
      'Automatically requesting a review after a great experience.',
      'Showcasing user-generated content and case studies.',
    ],
  },
  90: {
    eli5: 'You reward your best customers and give them ways to buy more, growing revenue from people who already love you. It’s taking great care of regulars and offering them the deluxe option.',
    examples: [
      'A loyalty or points program for long-time users.',
      'Upselling a Pro tier with advanced features.',
      'Expansion revenue as teams add more seats.',
    ],
  },
  91: {
    eli5: 'You pick the one or two best ways to get new users and focus hard on them, instead of doing a little of everything badly. It’s choosing the fishing spots where the fish actually are.',
    examples: [
      'Choosing SEO + LinkedIn as your two focus channels for the quarter.',
      'Running small tests to see which channel gets cheapest sign-ups.',
      'Doubling down on the one channel that clearly works.',
    ],
  },
  92: {
    eli5: 'You turn your blog and SEO into a machine that keeps bringing free visitors month after month, growing on its own. It’s planting an orchard that keeps producing fruit.',
    examples: [
      'Publishing content on a schedule and updating old posts.',
      'Building topic clusters that rank for a whole subject area.',
      'Organic traffic compounding into a steady stream of sign-ups.',
    ],
  },
  93: {
    eli5: 'You build a following on the social platforms your customers use — posting useful things regularly, including on LinkedIn — so more people discover you. It’s showing up where the crowd already hangs out.',
    examples: [
      'A consistent LinkedIn posting habit that builds an audience.',
      'Short videos or threads that get shared widely.',
      'Repurposing one idea across X, LinkedIn and TikTok.',
    ],
  },
  94: {
    eli5: 'You pay to show ads to the right people on Google or Facebook to bring in users — carefully, so you earn back more than you spend. It’s buying attention, but only if the math works.',
    examples: [
      'A small Google Ads test on high-intent search terms.',
      'Facebook/Instagram ads targeted at your persona.',
      'Killing ads that cost more than the customers are worth.',
    ],
  },
  95: {
    eli5: 'You team up with popular creators your audience already trusts, so their fans check you out. It’s getting a recommendation from someone people already listen to.',
    examples: [
      'Sponsoring a YouTuber whose viewers match your customers.',
      'Sending free product to creators for honest reviews.',
      'An affiliate deal so creators earn per customer they send.',
    ],
  },
  96: {
    eli5: 'You get written about by journalists, newsletters and podcasts to reach lots of new people and look credible. It’s getting others to tell your story to their audiences.',
    examples: [
      'A launch story picked up by a tech newsletter.',
      'A founder interview on a relevant podcast.',
      'A well-timed press release around a milestone.',
    ],
  },
  97: {
    eli5: 'You connect with other companies so you can reach each other’s customers — building integrations or doing joint marketing. It’s teaming up so both of you grow.',
    examples: [
      'A Slack/Zapier integration that gets you listed in their marketplace.',
      'A co-hosted webinar with a complementary product.',
      'A reseller/channel deal where a partner sells your product.',
    ],
  },
  98: {
    eli5: 'You use AI and automation — chatbots, auto-posting, agent routines — to do marketing work without hiring a big team. It’s having tireless robot helpers handle the repetitive stuff.',
    examples: [
      'A support chatbot that answers common questions 24/7.',
      'Automations that draft and schedule social posts.',
      'AI agent routines that generate content or reports on a schedule.',
    ],
  },
  99: {
    eli5: 'You study what’s already working for competitors and famous success stories, and borrow the proven moves. It’s reading other teams’ playbooks before your big game.',
    examples: [
      'Analysing a competitor’s most-shared posts and pages.',
      'Reading Starter Story breakdowns of how others grew.',
      'Copying the structure of a viral campaign for your niche.',
    ],
  },
  100: {
    eli5: 'You add real-world efforts — local events, street activations — and hire agencies or freelancers to do more than you can alone. It’s bringing in extra hands and going offline to reach more people.',
    examples: [
      'A pop-up or campus activation to sign up users in person.',
      'Hiring a marketing agency to scale ads and content.',
      'Outsourcing design or outreach to trusted contractors.',
    ],
  },
  101: {
    eli5: 'You push to the big goals — 10,000 users, 10,000 followers, 10,000 transactions — while making sure each customer costs less to get than they’re worth. It’s crossing the finish line without going broke doing it.',
    examples: [
      'Tracking CAC (cost to get a customer) vs LTV (what they’re worth).',
      'Hitting 10,000 users with healthy, improving unit economics.',
      'Optimising the cheapest channels as you scale to five figures.',
    ],
  },
  102: {
    eli5: 'You decide, on purpose, whether raising money from investors is right for you — and when. Not every business should; you choose eyes-open, for good reasons, at the right time.',
    examples: [
      'Deciding to raise because growth is capped only by cash, not demand.',
      'Choosing to bootstrap instead because the business funds itself.',
      'Timing the raise right after a strong traction milestone.',
    ],
  },
  103: {
    eli5: 'You gather all your proof and important documents into one organised folder investors can review. It’s packing a neat briefcase of evidence before the big meeting.',
    examples: [
      'A data room with metrics, financials, cap table and contracts.',
      'A clean dashboard of growth, retention and revenue.',
      'Having answers ready for “show me the numbers.”',
    ],
  },
  104: {
    eli5: 'You build a short, clear slideshow that tells your story and makes investors excited to meet you. It’s the movie trailer for your company.',
    examples: [
      'A 10–12 slide deck: problem, solution, traction, market, team, ask.',
      'One killer traction slide with an up-and-to-the-right chart.',
      'Airbnb’s famously simple original pitch deck.',
    ],
  },
  105: {
    eli5: 'You craft the story of why your company matters and will win, plus solid answers to tough questions, so you can pitch confidently in any setting. It’s knowing your story cold.',
    examples: [
      'A crisp “why now, why us, why this will be huge” narrative.',
      'Prepared answers to “what if Google does this?”',
      'A one-liner investors repeat to their partners for you.',
    ],
  },
  106: {
    eli5: 'You build a believable spreadsheet showing how your money works and how you’ll grow, so investors trust your plan. It’s showing the math behind the dream.',
    examples: [
      'A model linking users → revenue → costs → cash over 3 years.',
      'Assumptions you can defend, not hockey-stick fantasy.',
      'Scenarios for slow, base and fast growth.',
    ],
  },
  107: {
    eli5: 'You decide how much money to raise, on what terms, and exactly what you’ll use it for. It’s knowing precisely what you’re asking for and why.',
    examples: [
      'Raising a specific amount to reach clear milestones in 18 months.',
      'A “use of funds” breakdown: hires, marketing, runway.',
      'Setting a valuation grounded in comparable rounds.',
    ],
  },
  108: {
    eli5: 'You build a targeted list of the right investors and get warm introductions to them, because a friend’s referral beats a cold email. It’s lining up the right doors and someone to knock for you.',
    examples: [
      'A CRM of 50 relevant investors ranked by fit.',
      'Asking founders they’ve backed for warm intros.',
      'Researching each fund’s thesis before reaching out.',
    ],
  },
  109: {
    eli5: 'You run the fundraise like a tight process — lots of meetings close together — to build momentum and competition. It’s scheduling all your dates in one window so interest snowballs.',
    examples: [
      'Batching first meetings into two weeks to create urgency.',
      'A disciplined follow-up after every investor call.',
      'Tracking each conversation’s stage in a pipeline.',
    ],
  },
  110: {
    eli5: 'You get through the investor’s deep checking (diligence), agree on fair terms, and sign the deal. It’s the final inspection and handshake that closes the round.',
    examples: [
      'Answering diligence requests quickly with an organised data room.',
      'Negotiating a term sheet with a lawyer’s help.',
      'Signing and getting the money wired.',
    ],
  },
  111: {
    eli5: 'After the money lands, you welcome your investors, spend the funds wisely against your plan, and push toward the next big stage. It’s using the fuel you raised to actually fly.',
    examples: [
      'Onboarding investors with regular, honest updates.',
      'Deploying capital into the hires and channels that drive growth.',
      'Setting the milestones you need to hit before the next round.',
    ],
  },
};
