# Nicole Leon — an interactive resume

An animated, conversational resume for Nicole Leon’s SDR application to LangChain. Six chapters connect her customer-facing work, leadership, process improvement, and technical curiosity. Scout is a custom SVG lion guide.

## Stack

React 19, TypeScript, Vinext/Vite, Tailwind CSS, Motion, LangChain.js, and OpenAI. Supports Next.js on Vercel and Vinext on Sites (Cloudflare Workers). LangChain runs a tool-capable agent with `get_resume_chapter` and `suggest_chapter`; the browser controls tour progression. The site prominently credits LangChain. No visitor login or conversation database.

## Run locally

Use Node 22.13+.

```sh
npm ci
# Configure OPENAI_API_KEY in .env.local (never commit it).
npm run dev
```

Environment variables:
- `OPENAI_API_KEY`: required for live answers; server only.
- `OPENAI_MODEL`: optional, defaults to `gpt-4.1-mini`.

Local secrets are ignored. Hosted secrets are configured through Sites runtime settings, never through source or client environment variables. API billing must have a positive balance. If live generation fails, the 18 suggested questions can return explicitly labeled prepared resume notes; arbitrary questions show a clear unavailable message. These notes are not presented as AI-generated answers.

```sh
npx tsc --noEmit
npm run build
node scripts/check-chat.mjs http://127.0.0.1:5173
```

## Content

- `lib/resume.ts`: resume facts, chapters, recruiter topics, and explicit evidence gaps.
- `lib/resume-notes.ts`: prepared notes for the seeded questions.
- `components/scout-experience.tsx`: tour, chat, accessibility, and disclosure.
- `components/scout-lion.tsx`, `components/journey-art.tsx`: original vector illustrations.
- `app/api/chat/route.ts`: LangChain agent, validation, error handling, and limits.

A public, printable HTML resume is available at `/resume`; it links to the original source document. Its reported metrics are attributed to the resume. The branch’s #1 ranking is a team result. SDR connections are interpretations; no direct sales quota, pipeline, cold-call results, or independent authorship of this site are claimed.

Before adding personal interview stories, obtain Nicole’s own answers to why sales, why LangChain, an ambitious goal, a setback or rejection, and a persuasion example. No contact email or scheduling link was supplied, so none is invented.

## Privacy, cost, and reliability

Messages go to OpenAI to generate answers. The application keeps conversation history only in browser memory and sends at most ten messages per request. It does not write chats to a database. Provider retention policies still apply.

The server validates chapter IDs, role values, input sizes, and same-origin browser requests. Model responses have output and timeout limits, no retries, and bounded agent recursion. Tools are read-only and cannot browse, send messages, change records, or access credentials. Prompt instructions require evidence-grounded answers, but model behavior still needs review with live tests.

Rate limits are best-effort per Worker isolate (10 requests/minute/IP and 250/hour/isolate), not durable global spending controls. For larger exposure, add platform-wide rate limiting and monitor API usage. Current limits reduce casual abuse but do not guarantee a hard spend cap.

## Vercel hosting

Production: https://nicole-leon-resume.vercel.app

Vercel project: `sirui-test1/nicole-leon-resume`. The initial production release was deployed directly from this checkout. GitHub auto-deployment is not yet connected: Vercel requires a GitHub Login Connection before it can link `nikki46/resume-agent`. `vercel.json` selects Next.js and the standard Next production build. `OPENAI_API_KEY` is configured as a production-only Secret in Vercel. `OPENAI_MODEL` is optional. Use Node 22 or later. No database is needed. The public domain contains no account username. `.vercelignore` excludes local secrets and generated build folders from uploads.

For a local Vercel-equivalent preview, use `npm run build:vercel` followed by `npm run start:vercel`. GitHub Pages cannot run the chat API, so it is not a complete hosting target for this app.

## Sites publishing

`.openai/hosting.json` records the existing Site ID; reuse it for updates. The Sites source mirror is a deployment requirement; `nikki46/resume-agent` remains Nicole’s application repository. Build and push the same source revision before publishing. A GitHub push alone does not deploy the Site. Public access is configured through Sites.

## Verification status

The Vercel production build succeeded on October 22, 2026. Its public chat endpoint passed all six validation and response checks with a live AI answer; no visitor login was required. Nicole’s portrait, larger typography, and supporting lion mascot were checked at desktop and mobile widths before migration.


Type checking and the production build passed. The browser tour, desktop/mobile layouts, modal, seeded-question fallback, input validation, and unavailable-state handling are tested during initial development. An initial local API check returned `credit_balance_exhausted`. After deployment, the public endpoint successfully generated live replies. Hosted tests confirmed that Scout treats the branch ranking as a team achievement, acknowledges missing personal motivations/rejection stories, and refuses fabricated sales claims or requests for secrets. The hosted endpoint also passed six validation and response checks. Model behavior is probabilistic; these are representative checks, not a guarantee for every prompt.
