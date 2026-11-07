export const isLangSmith = process.env.NEXT_PUBLIC_HOSTING_TARGET === "langsmith";
export const chatPrivacy = isLangSmith
  ? "Your messages are sent to OpenAI for replies and recorded in LangSmith traces for debugging and quality evaluation. Reloading clears the chat on this screen, but does not delete those traces. Please avoid sharing sensitive information."
  : "Your messages are sent to the AI provider to generate replies. This app does not save your conversation to a database; it disappears when you reload. Please avoid sharing sensitive information.";
