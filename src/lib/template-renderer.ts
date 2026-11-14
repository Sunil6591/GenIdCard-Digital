import { en } from "@/data/whatsapp-templates/en";
import { hi } from "@/data/whatsapp-templates/hi";
import { mr } from "@/data/whatsapp-templates/mr";
import { samples } from "@/data/whatsapp-templates/samples";
import type { Locale, Message } from "@/types/whatsapp";

export function substituteVariables(text: string, variables: Record<string, string> = {}) {
  return text.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (match, key: string) => variables[key] ?? match);
}
export function resolveMessage(message: Message, locale: Locale = "en") {
  const template = message.templateKey ? ({ en, hi, mr }[locale][message.templateKey] ?? en[message.templateKey] ?? samples[message.templateKey]) : undefined;
  return {
    text: substituteVariables(message.text ?? template?.text ?? `[Sample: ${message.templateKey ?? message.id}]`, message.variables),
    placeholder: !template || template.status !== "approved",
    status: template?.status ?? "placeholder",
    buttons: message.buttons ?? (template?.button ? [{ id: `${message.templateKey}-button`, label: template.button.label }] : []),
    language: message.templateKey && samples[message.templateKey] ? "en" : locale,
  };
}
// Tokenize only WhatsApp-style bold. React escapes all text and variable values.
export function boldSegments(text: string): Array<{ text: string; bold: boolean }> {
  return text.split(/(\*[^*\n]+\*)/g).filter(Boolean).map(part => ({
    text: part.startsWith("*") && part.endsWith("*") && part.length > 2 ? part.slice(1, -1) : part,
    bold: part.startsWith("*") && part.endsWith("*") && part.length > 2,
  }));
}
