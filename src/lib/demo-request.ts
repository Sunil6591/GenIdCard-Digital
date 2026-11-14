export const employeeCounts = ["1–25", "26–100", "101–500", "501–1,000", "1,000+"] as const;
export type DemoRequest = { name: string; business: string; contact: string; employees: string; message: string; website?: string };
export function validateDemoRequest(value: unknown): { data?: DemoRequest; errors: Record<string, string> } {
  const raw = value && typeof value === "object" ? value as Record<string, unknown> : {};
  const field = (key: string) => typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
  const data: DemoRequest = { name: field("name"), business: field("business"), contact: field("contact"), employees: field("employees"), message: field("message"), website: field("website") };
  const errors: Record<string, string> = {};
  if (data.name.length < 2 || data.name.length > 100) errors.name = "Enter your name (2–100 characters).";
  if (data.business.length < 2 || data.business.length > 160) errors.business = "Enter your business name (2–160 characters).";
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
  const isPhone = /^[+\d\s().-]+$/.test(data.contact) && data.contact.replace(/\D/g, "").length >= 10 && data.contact.replace(/\D/g, "").length <= 15;
  if (data.contact.length > 200 || (!isEmail && !isPhone)) errors.contact = "Enter a valid email address or phone number, including country code where needed.";
  if (!(employeeCounts as readonly string[]).includes(data.employees)) errors.employees = "Choose an approximate employee count.";
  if (data.message.length > 2000) errors.message = "Keep your message under 2,000 characters.";
  return Object.keys(errors).length ? { errors } : { data, errors };
}
