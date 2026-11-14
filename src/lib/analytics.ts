export type AnalyticsEvent = "hero_cta_click" | "story_started" | "story_completed" | "story_skipped" | "story_stage_navigation" | "pricing_cta_click" | "demo_request_submitted" | "login_click" | "whatsapp_click";
type Properties = Record<string, string | number | boolean>;
type Provider = (event: AnalyticsEvent, properties: Properties) => void;
let provider: Provider | undefined;
let consent: "unknown" | "granted" | "denied" = "unknown";
let requiresConsent = true;
export function configureAnalytics(nextProvider: Provider, options: { requiresConsent: boolean } = { requiresConsent: true }) {
  provider = nextProvider; requiresConsent = options.requiresConsent;
}
export function setAnalyticsConsent(next: typeof consent) { consent = next; }
export function track(event: AnalyticsEvent, properties: Properties = {}) {
  if (!provider || (requiresConsent && consent !== "granted")) return;
  try { provider(event, properties); } catch { /* Analytics must never interrupt the experience. */ }
}
