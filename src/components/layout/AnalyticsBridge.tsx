"use client";
import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";
export default function AnalyticsBridge() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-track]") : null;
      if (target?.dataset.track) track(target.dataset.track as AnalyticsEvent, { location: target.dataset.location || "page" });
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="https://wa.me/"]') : null;
      if (anchor && anchor.dataset.track !== "whatsapp_click") track("whatsapp_click", { location: anchor.dataset.location || "page" });
    };
    document.addEventListener("click", click); return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
