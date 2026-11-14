"use client";
import { useState } from "react";
import { dailyReportMessage } from "@/data/attendance-story";
import type { Locale } from "@/types/whatsapp";
import { WhatsAppMessage } from "./WhatsAppMessage";
import DemoLanguagePicker from "./DemoLanguagePicker";
export default function DailyReportPreview() {
  const [locale, setLocale] = useState<Locale>("en");
  return <div className="daily-report-preview"><div><span className="eyebrow">THE OWNER’S DAILY SUMMARY</span><h3>The overview.<br />In a familiar conversation.</h3><p>The daily-report template brings an illustrative attendance summary into the owner’s WhatsApp conversation. Explore the exact English, Hindi, and Marathi wording.</p><p className="report-context">This sample report covers 122 shifts that have started: 112 check-ins recorded and 10 missing. The dashboard’s 6 upcoming shifts are excluded from this report.</p><DemoLanguagePicker value={locale} onChange={setLocale} /><a href="#dashboard" className="text-link">View the sample dashboard ↗</a><small>Sample figures and report link shown for illustration. Actual attendance records are accessed in the application.</small></div><div className="daily-report-chat"><span className="daily-report-recipient">BUSINESS OWNER · RAJESH PATIL</span><WhatsAppMessage message={dailyReportMessage} locale={locale} animate={false} /></div></div>;
}
