import { Check, Minus } from "lucide-react";
const methods = [
  { name: "Paper registers", sub: "Familiar, but manual", values: ["Written entries", "No digital location record", "Manual consolidation", "Manual follow-up"] },
  { name: "Biometric systems", sub: "Hardware at the worksite", values: ["Device-based capture", "Presence at a device", "Depends on system", "Depends on system"] },
  { name: "Attendance apps", sub: "A separate employee app", values: ["App-based check-in", "Depends on app", "Depends on app", "Depends on app"] },
  { name: "FootfallIQ", sub: "The familiar WhatsApp route", values: ["WhatsApp location sharing", "Site-radius comparison", "One multi-site dashboard", "Scheduled reminders"] },
];
export default function ComparisonSection() {
  return <section className="comparison-section container" aria-labelledby="comparison-heading"><div className="section-heading"><span className="eyebrow">A DIFFERENT WAY TO SHOW UP</span><h2 id="comparison-heading">Keep what’s familiar.<br />Rethink the attendance admin.</h2><p>Choose the approach that fits your team, sites, and operating needs.</p></div><div className="comparison-grid">{methods.map((method, index) => <article className={index === 3 ? "comparison-featured" : ""} key={method.name}>{index === 3 && <span className="comparison-kicker">A SIMPLER CONNECTION</span>}<h3>{method.name}</h3><p>{method.sub}</p>{method.values.map((value, row) => <div className="comparison-row" key={value + row}><span>{["EMPLOYEE EXPERIENCE", "LOCATION CONTEXT", "MULTI-SITE VISIBILITY", "REMINDERS"][row]}</span><strong>{index === 3 ? <Check size={14} /> : <Minus size={13} />}{value}</strong></div>)}</article>)}</div><p className="comparison-note">Capabilities vary by vendor and configuration. Location verification checks coordinates; it does not prove identity or eliminate attendance fraud.</p></section>;
}
