import type { Message } from "./whatsapp";
export type Conversation = { id: string; name: string; initials: string; role: string; employee: string; site: string };
export type StoryScene = {
  id: string;
  label: string;
  title: string;
  description: string;
  benefit: string;
  detail: string;
  time: string;
  date: string;
  conversation: Conversation;
  messages: Message[];
  screen: "chat" | "dashboard";
  annotation: { label: string; value: string; subtext: string };
  animation: { stagger: number };
};
