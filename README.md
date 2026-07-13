# The 111 Playbook

**From a raw idea to 10,000 users, 10,000 followers, 10,000 transactions — and your first VC cheque.**

111 concrete tasks across 11 phases, each with a deep-dive guide, checklist, tools, pitfalls, the KPI it moves and a definition of done. Roughly 48,679 words of guidance in total.

- 🌐 **Live site:** https://111.pete.ke
- 📖 **Read the full playbook:** [PLAYBOOK.md](./PLAYBOOK.md)

## The three numbers that unlock funding

| Target | Meaning |
| ------ | ------- |
| **10,000 users** | A working MVP with real, retained users |
| **10,000 followers** | An owned, engaged audience |
| **10,000 transactions** | Orders, payments or email/lead volume |

## The 11 phases

1. **Idea & Validation** — Prove the problem is real before you write code.
2. **Brand, Domain & Identity** — A name, a look and a domain people trust in one glance.
3. **Foundation & Infrastructure** — Repos, hosting, DNS and a deploy you can trust.
4. **MVP Build** — The smallest thing that delivers the core value.
5. **Design & Quality Bar** — Look like the funded competitor, not the weekend project.
6. **Auth, Data & Security** — Real accounts, real data, no embarrassing breaches.
7. **Content, SEO & Launch Prep** — Get found on Google and ready for launch day.
8. **Analytics, Tracking & Feedback** — If you cannot measure it, you are guessing.
9. **Email, Community & Retention** — Turn one-time visitors into a growing base that stays.
10. **Growth to 10,000** — Repeatable channels that compound to five figures.
11. **Fundraising: Idea → VC** — Package the traction into a term sheet.

## Run the site locally

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build to dist/
npm run playbook   # regenerate PLAYBOOK.md + README.md from the task data
```

## Tech

Vite + React + TypeScript + Tailwind CSS. Content lives as typed data in `src/data/`, so the website and the Markdown playbook are always generated from a single source of truth.

## License

MIT — use it, fork it, ship your startup.
