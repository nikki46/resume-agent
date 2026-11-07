import { Annotation, END, START, StateGraph } from "@langchain/langgraph";
import type { RunnableConfig } from "@langchain/core/runnables";
import { answerScout, type ScoutInput, type ScoutAnswer } from "../lib/scout-agent";

const State = Annotation.Root({
  chapter: Annotation<string>,
  messages: Annotation<ScoutInput["messages"]>,
  answer: Annotation<string>,
  sources: Annotation<string[]>,
  suggestedChapter: Annotation<string | undefined>,
  mode: Annotation<ScoutAnswer["mode"]>,
});

export const graph = new StateGraph(State)
  .addNode("answer_resume_question", (state, config: RunnableConfig) => answerScout(state, config))
  .addEdge(START, "answer_resume_question")
  .addEdge("answer_resume_question", END)
  .compile();
