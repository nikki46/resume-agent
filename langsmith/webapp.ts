import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { GET, handleChat } from "../lib/chat-handler";
import { graph } from "./graph";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../.langsmith-build/out");
export const app = new Hono();
app.get("/api/chat", () => GET());
app.post("/api/chat", c => handleChat(c.req.raw, async input => {
  const result = await graph.invoke(input, {
    runName: "Scout conversation", tags: ["scout", "public-site"],
    metadata: { chapter: input.chapter, hosting: "langsmith" },
    signal: AbortSignal.timeout(35000),
  });
  return { answer: result.answer, sources: result.sources, suggestedChapter: result.suggestedChapter, mode: result.mode };
}));
// Only explicitly public pages/assets bypass Agent Server authentication.
// Do not add a catch-all: built-in thread/run/assistant APIs must retain their auth.
app.get("/", serveStatic({ root, path: "index.html" }));
app.get("/resume", serveStatic({ root, path: "resume.html" }));
app.get("/resume/", serveStatic({ root, path: "resume.html" }));
app.get("/_next/static/*", serveStatic({ root }));
app.get("/organizations/*", serveStatic({ root }));
app.get("/nicole-leon.png", serveStatic({ root }));
app.get("/favicon.svg", serveStatic({ root }));
