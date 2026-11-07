# Scout on LangSmith

This branch adds a separate LangSmith-hosted copy. It does not replace or deploy the Vercel production site. The same React interface, resume content, photo, and lion interactions are retained.

## Architecture

`npm run build:langsmith` exports the Next.js UI into `.langsmith-build/out`. It stages only explicitly allowed source directories; API routes and secrets are not copied into the browser build. Images use local files because this copy has no Next.js image-optimization server.

LangSmith Agent Server loads `langsmith/graph.ts:graph` and the Hono app in `langsmith/webapp.ts`. The public `/api/chat` keeps the original input validation, timeout, bounded recursion, fallback notes, and conservative in-memory rate limit. It invokes the exported graph, whose node runs the LangChain tool agent. The graph does not use mutable global conversation state.

Public custom routes serve only the website, its assets, and its bounded chat API. Built-in Agent Server routes remain under the platform's normal authentication; `enable_custom_route_auth: false` applies to the explicitly declared public app routes. Verify both unauthenticated page access and rejection of unauthenticated `/threads` access after deployment. The browser never receives either provider key.

## Credentials

Create an ignored `.env.langsmith` with:

```
LANGSMITH_API_KEY=<workspace-authorized key>
LANGSMITH_WORKSPACE_ID=<workspace UUID>
LANGSMITH_TENANT_ID=<same workspace UUID, for deployment CLI>
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_TRACING=true
LANGSMITH_PROJECT=scout-nicole-langsmith
SCOUT_HOSTING=langsmith
OPENAI_API_KEY=<existing app provider key>
OPENAI_MODEL=gpt-4.1-mini
```

The API key needs deployment, dataset, experiment, and tracing permissions for this workspace. Do not use a tracing-only key for provisioning or evals. Use the workspace's regional endpoint if outside US/GCP. Do not commit credentials, pass keys in command arguments, or put keys in `NEXT_PUBLIC_*` variables.

## Build and run

```
npm ci
npm run build:langsmith
npm run dev:langsmith
node scripts/check-chat.mjs http://localhost:2024
```

The local Agent Server serves both website and chat at port 2024. Local development APIs do not emulate the cloud authentication boundary.

## Cloud deployment

The deployed copy is available at [Nicole's LangSmith site](https://nicole-leon-resume-8bd62bd4753a52e8b51d7d24dac3ba4a.us.langgraph.app). Its deployment ID is `2814d2ce-a6f1-4d2a-b0f7-5bf58b9c183d`. Source lives on `langsmith-hosting`; `main` continues to serve the existing Vercel copy.

Production traces are available in [Nicole's LangSmith projects](https://smith.langchain.com/o/90d2a04e-e6a3-4387-8038-fee41ccca668/a/nicole-leon-resume/projects), under `nicole-leon-resume-production`.

With a paid workspace that supports deployments:

```
node --env-file=.env.langsmith node_modules/@langchain/langgraph-cli/dist/cli/cli.mjs deploy --name nicole-leon-resume --deployment-type dev --remote --install-command "npm ci" --build-command "npm run build:langsmith" --no-input
```

`dev` is the CLI's serverless deployment type. The CLI uploads an archive that excludes `.env*`, `.git`, `.vercel`, and generated output, then applies secrets separately through the platform API. It does not need a GitHub app connection. Keep the returned deployment ID; pass `--deployment-id` for future updates. If a proxy rewrites the request URL origin, set `SCOUT_PUBLIC_ORIGIN` to the exact HTTPS site origin and redeploy to retain same-origin request checks.

## Tracing and evaluations

LangChain/LangGraph instrument model calls, tools, latency, errors, and nested agent execution using LangSmith. Public requests are tagged `scout` / `public-site` with the current chapter. Do not add IP addresses or visitor identifiers to trace metadata. The UI explicitly explains that clearing the chat does not delete retained traces.

Run the 12 synthetic cases:

```
npm run eval:langsmith
```

The dataset name contains a content hash, making reruns reuse the same fixtures and changed fixtures create a new version. Each run creates a LangSmith experiment with the commit, model, target, and fixture version. Deterministic evaluators check live answers, valid chapter sources, and a specific navigation request. A separate model judge scores grounding and case-specific correctness, with explanations. Judge results are probabilistic and require review; they are not proof of universally safe behavior.

For a hosted run, set `SCOUT_EVAL_URL` to the verified HTTPS deployment origin in the ignored environment file. The evaluator calls authenticated `/runs/wait` using the exported `scout` graph, rather than bypassing the app with an unrelated test implementation. It never treats prepared notes as live model success. The evaluation script exits nonzero when any scored check fails. Normal experiment runs use two concurrent requests and do not run automatically on visitor traffic.

## Retention and limitations

The hosted baseline experiment [scout-grounding-1e4eaa6c](https://smith.langchain.com/o/90d2a04e-e6a3-4387-8038-fee41ccca668/datasets/ddd4db1e-28d4-4dc3-a305-1d39540c9765/compare?selectedSessions=ff0e3564-c3ef-49a9-8fba-4622c14e7a39) passed all 12 live-answer, source, grounding, and case-rubric checks, plus the explicit chapter-navigation check. The public HTTP contract checks also passed with a live answer; built-in Agent Server routes rejected unauthenticated access.

The visitor UI still clears on reload. LangSmith records inputs, outputs, tool calls, and other diagnostics; workspace retention settings govern those records. Cloud graph endpoints may also use the platform's run/thread storage. Restrict workspace access and configure retention there. Do not describe the LangSmith copy as having no stored conversations.

The public endpoint uses a shared per-instance fallback bucket when the platform does not provide a documented trusted client IP. This is conservative but can throttle concurrent visitors. These limits are best-effort, not a global spend cap. Use platform billing limits for spend control. Serverless cold starts can delay the first visit.

The Vercel version remains on its original branch and deployment. `npm run build:vercel` is retained and verified; no Vercel credentials or deployment settings are needed for this copy.
