import { GET as availability, handleChat } from "@/lib/chat-handler";
export const dynamic = "force-dynamic";
export const maxDuration = 45;
export const GET = availability;
export const POST = (request: Request) => handleChat(request);
