export type Locale = "en" | "hi" | "mr";
export type Template = {
  text: string;
  status: "placeholder" | "draft" | "approved";
  button?: { label: string; type: "QUICK_REPLY" | "OPTIONAL_URL" };
};
export type TemplateCatalog = Record<string, Template>;
export type Message = {
  id: string;
  templateKey?: string;
  direction: "incoming" | "outgoing";
  sender?: string;
  timestamp?: string;
  text?: string;
  messageType: "text" | "location" | "image" | "interactive" | "system";
  variables?: Record<string, string>;
  location?: { name?: string; address?: string; latitude?: number; longitude?: number };
  image?: { src: string; alt: string; width: number; height: number };
  buttons?: Array<{ id: string; label: string }>;
};
