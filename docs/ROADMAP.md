# Second-Year Plan — Income, Investing & the Portfolio Build

A working plan for a second-year software engineering student (Malaysia) covering
three goals: earning money **before** the internship, putting that money to work,
and the portfolio project that anchors it all. Long-form companion: Google Doc
"Second-Year SE Roadmap" (linked in chat / Drive).

---

## 1. Earning income before the internship

Ordered from quickest start to highest ceiling:

| Channel | Realistic rates | Why it works |
| --- | --- | --- |
| **Tutoring** (coding / math / SPM subjects) | RM30–80/hour | Fastest cash; online sessions = no travel from Sitiawan |
| **Freelance dev** (Fiverr/Upwork) | small gigs → raising rates | First 3–5 reviews are the asset; price low, then raise |
| **Local SME websites** (Sitiawan/Manjung) | RM500–1,500 per site | Many small businesses have no site or a dead one; 2/month = serious student income |
| **Hackathons** | RM prize pools | Money + portfolio material at once |
| **Campus roles** | modest | Lab assistant / peer tutoring where available |

**Guardrails**
- Cap side work at **10–15 hours/week**; protect **CGPA ≥ 3.0** — a failed semester
  costs more than any gig pays.
- Keep invoices/receipts for every paid job — they double as proof of real client
  work in interviews later.
- Pick gigs that fit around classes; anything that damages grades is a net loss.

## 2. Investing toward long-term wealth

The order matters more than the amounts:

1. **Emergency fund first** — 3 months of expenses in a savings or money-market
   account (e.g. Versa Cash). Never invest money needed within months.
2. **ASNB funds (ASM / ASM 2 / ASM 3)** — low-risk, accessible to Malaysians; the
   ideal "first investment" while habits form.
3. **Robo-advisors (StashAway, Versa Invest)** — start at RM50–100/month,
   fully hands-off.
4. **EPF i-Saraan** — students with gig income can self-contribute and receive a
   government matching incentive (effectively free money).
5. **Later, with more knowledge** — low-cost ETFs or stocks via Rakuten Trade / moomoo.

**Scam warning**: students are the prime Malaysian target for forex "trading
academies" and crypto-leverage schemes. Guaranteed returns, recruit-friends
mechanics, or locked "VIP tiers" = walk away. Real wealth builds slowly:
*earn more → spend less → invest the gap consistently.*

> Educational guidance, not licensed financial advice; figures are starting
> suggestions, not rules.

## 3. Portfolio project — build the portfolio itself (homelab + Oracle Cloud)

**Recommendation: make the portfolio site the flagship project.** Status here:
✅ **already implemented and merged** ([PR #1](https://github.com/seanneol88/My-portfolio/pull/1), [PR #2](https://github.com/seanneol88/My-portfolio/pull/2), CI green on `main`).

Why it wins:
- The site **documents its own deployment pipeline** — visitors literally use the
  project while reading about it. Screenshots can't prove that.
- The pipeline is real: `git push → GitHub Actions (lint/typecheck/build) →
  Docker image → GHCR → SSH deploy → Oracle Cloud Always Free VM → Caddy auto-HTTPS`.
- A CI smoke test already caught a real pre-production bug — a genuine
  interview story about why pipelines matter.

Hosting strategy (uses both assets):
- **Oracle Cloud VM = public edge**: static IP, serves the containerized site
  behind Caddy HTTPS.
- **Homelab = heavy services** (Nextcloud, monitoring, storage), reached over
  WireGuard — a genuine hybrid-cloud pattern.
- Setup walkthrough: [DEPLOYMENT.md](DEPLOYMENT.md). Deploy workflow goes green
  once the four secrets exist (`ORACLE_HOST`, `ORACLE_USER`, `ORACLE_SSH_KEY`,
  `GHCR_PAT`).

Follow-on projects to fill the Projects section (in this repo's README roadmap):
1. **Saku** — expense & gig-income tracker in RM (Next.js + PostgreSQL + Docker);
   ties directly to §1–2 by managing the money this plan earns.
2. **Homelab status dashboard** — public uptime/service health page backed by
   Uptime Kuma; puts a number behind the "99.9% uptime" claim on the site.
