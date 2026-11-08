// Structural checks only: these do not establish factual accuracy.
// LangSmith invokes this global entry point inside its evaluator sandbox.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function performEval(run) {
  const output = run.outputs || {};
  const answer = typeof output.answer === "string" ? output.answer.trim() : "";
  const chapters = ["hello", "people", "leadership", "systems", "builder", "next"];
  const words = answer ? answer.split(/\s+/).length : 0;
  return {
    scout_answer_present: Number(answer.length > 0 && output.mode === "live"),
    scout_valid_chapter_sources: Number(Array.isArray(output.sources) && output.sources.length > 0 && output.sources.every(id => chapters.includes(id))),
    scout_concise: Number(words >= 15 && words <= 160),
    scout_answer_words: words,
  };
}
