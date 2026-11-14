"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { configureAnalytics, setAnalyticsConsent } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import { useReportWebVitals } from "next/web-vitals";
import { track } from "@/lib/analytics";

declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; }
}
const configuredId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const measurementId = /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : "";
type Choice = "unknown" | "granted" | "denied";
const storageKey = "footfalliq-analytics-consent-v1";

export default function AnalyticsProvider() {
  return measurementId ? <ConfiguredAnalytics /> : null;
}

function ConfiguredAnalytics() {
  useReportWebVitals(useCallback(metric => {
    track("web_vital", { metric: metric.name, value: metric.value, rating: metric.rating });
  }, []));
  const pathname = usePathname();
  const [choice, setChoice] = useState<Choice>("unknown");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const lastPage = useRef("");
  useEffect(() => {
    if (!measurementId) return;
    try { const saved = localStorage.getItem(storageKey); if (saved === "granted" || saved === "denied") setChoice(saved); } catch { /* Consent remains in memory when storage is unavailable. */ }
  }, []);
  useEffect(() => {
    if (!measurementId) return;
    setAnalyticsConsent(choice);
    // First-party code never sends form values, URL queries, employee details or attendance data.
    if (choice !== "granted") {
      if (window.gtag) window.gtag("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      configureAnalytics(() => {});
      lastPage.current = "";
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (..._args: unknown[]) { window.dataLayer!.push(arguments); };
    window.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    window.gtag("js", new Date());
    let referrer = "";
    try { referrer = document.referrer ? new URL(document.referrer).origin : ""; } catch { /* Ignore malformed referrer. */ }
    window.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: siteConfig.url + window.location.pathname, page_referrer: referrer });
    configureAnalytics((event, properties) => {
      const safe = Object.fromEntries(Object.entries(properties).filter(([key]) => ["location", "from", "stage", "employee_range", "metric", "value", "rating"].includes(key)));
      window.gtag?.("event", event === "demo_request_submitted" ? "generate_lead" : event, { ...safe, page_location: siteConfig.url + window.location.pathname });
    });
    return () => { configureAnalytics(() => {}); };
  }, [choice]);
  useEffect(() => {
    if (choice !== "granted" || !measurementId || !window.gtag || lastPage.current === pathname) return;
    let referrer = "";
    try { referrer = document.referrer ? new URL(document.referrer).origin : ""; } catch { /* No referrer for malformed values. */ }
    window.gtag("event", "page_view", { page_location: siteConfig.url + pathname, page_title: document.title, page_referrer: referrer });
    lastPage.current = pathname;
  }, [choice, pathname]);
  function choose(next: "granted" | "denied") {
    setAnalyticsConsent(next); setChoice(next); setSettingsOpen(false);
    try { localStorage.setItem(storageKey, next); } catch { /* The current choice still applies in memory. */ }
  }
  if (!measurementId) return null;
  return <>
    {choice === "granted" && <Script id="footfalliq-ga4" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />}
    {(choice === "unknown" || settingsOpen) ? <section className="analytics-consent" aria-label="Analytics preferences"><p>Allow optional analytics to help us understand website visits and enquiries? Attendance records and enquiry details are excluded. <a href="/privacy">Privacy draft</a></p><div><button type="button" onClick={() => choose("denied")}>Decline analytics</button><button type="button" onClick={() => choose("granted")}>Allow analytics</button></div></section> : <button type="button" className="analytics-settings" onClick={() => setSettingsOpen(true)}>Analytics preferences</button>}
  </>;
}
