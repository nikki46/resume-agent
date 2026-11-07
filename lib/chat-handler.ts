import { z } from "zod";
import { chapters } from "./resume";
import { resumeNotes } from "./resume-notes";

import { answerScout, type ScoutInput, type ScoutAnswer } from "./scout-agent";
const inputSchema = z.object({
  chapter: z.string().refine(id => chapters.some(c => c.id === id)),
  messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().trim().min(1).max(1800) })).min(1).max(10)
}).strict();
const rateBuckets = new Map<string, { start: number; count: number }>();
let globalBucket = { start: Date.now(), count: 0 };
const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
function json(value: unknown, status = 200) { return Response.json(value, { status, headers }); }
function envValue(key: string): string | undefined { return process.env[key]; }
export async function GET() { return json({ available: Boolean(envValue("OPENAI_API_KEY")) }); }
export async function handleChat(request: Request, answer: (input: ScoutInput) => Promise<ScoutAnswer> = answerScout) {
  const origin = request.headers.get("origin");
  if (origin && origin !== (process.env.SCOUT_PUBLIC_ORIGIN || new URL(request.url).origin)) return json({ error: "Please ask Scout from this site." }, 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return json({ error: "Please send a valid question." }, 415);
  const maxBytes = 24000;
  if (Number(request.headers.get("content-length")) > maxBytes) return json({ error: "That conversation is a little long. Please start a new one." }, 413);
  let parsed;
  try {
    const raw = await request.text();
    if (raw.length > maxBytes) return json({ error: "Please shorten your question." }, 413);
    parsed = inputSchema.safeParse(JSON.parse(raw));
  } catch { return json({ error: "Please send a valid question." }, 400); }
  if (!parsed.success || parsed.data.messages.at(-1)?.role !== "user") return json({ error: "Please ask a question of up to 1,000 characters." }, 400);
  if (parsed.data.messages.at(-1)!.content.length > 1000) return json({ error: "Please keep your question under 1,000 characters." }, 400);
  const fallback = resumeNotes[parsed.data.messages.at(-1)!.content];
  const offline = () => fallback ? json({ answer: fallback, sources: [parsed.data.chapter], mode: "resume-note" }) : json({ error: "Scout’s live conversation is temporarily unavailable. Try one of the suggested questions for a prepared resume note, or keep exploring the chapters." }, 503);
  const key = envValue("OPENAI_API_KEY");
  if (!key) return offline();
  // Best-effort per-isolate limits; no visitor identity or conversation is persisted.
  const now = Date.now();
  const ip = (process.env.VERCEL ? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() : request.headers.get("cf-connecting-ip")) || "local";
  for (const [id, b] of rateBuckets) if (now - b.start > 60000) rateBuckets.delete(id);
  const bucket = rateBuckets.get(ip) || { start: now, count: 0 };
  if (now - globalBucket.start > 3600000) globalBucket = { start: now, count: 0 };
  if (bucket.count >= 10 || globalBucket.count >= 250) return json({ error: "Scout is taking a small breather. Please try again in a minute." }, 429);
  if (rateBuckets.size >= 2000 && !rateBuckets.has(ip)) return json({ error: "Scout is busy. Please try again shortly." }, 429);
  bucket.count++; globalBucket.count++; rateBuckets.set(ip, bucket);
  try {
    return json(await answer(parsed.data));
  } catch {
    return offline();
  }
}
