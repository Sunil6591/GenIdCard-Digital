"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { employeeCounts, validateDemoRequest } from "@/lib/demo-request";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";

export default function DemoRequestForm({ connected }: { connected: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    const validation = validateDemoRequest(payload);
    setErrors(validation.errors);
    if (!validation.data) { setStatus("error"); setFeedback("Please check the highlighted fields."); const key = Object.keys(validation.errors)[0]; form.querySelector<HTMLElement>(`[name="${key}"]`)?.focus(); return; }
    setStatus("sending"); setFeedback("");
    try {
      const response = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(validation.data), signal: AbortSignal.timeout(15000) });
      const result = await response.json();
      if (!response.ok || result.success !== true) { setErrors(result.errors || {}); throw new Error(result.error || "Your request could not be delivered. Please try again."); }
      setStatus("success"); setFeedback(result.message); track("demo_request_submitted", { employee_range: validation.data.employees }); form.reset();
    } catch (error) {
      setStatus("error"); setFeedback(error instanceof Error && error.name !== "TimeoutError" ? error.message : "We could not confirm delivery. Please try again later. Your details are still in the form.");
    }
  }
  return <form className="demo-form" action="/api/demo" method="post" onSubmit={submit} aria-busy={status === "sending"}><div className="form-heading"><h3>Meet your new attendance routine.</h3><p>Tell us a little about your team.</p></div>{!connected && <p className="form-setup-note">Demo form preview · Contact delivery is awaiting setup. Requests cannot be sent yet.</p>}<div className="form-grid"><div><label htmlFor="demo-name">Your name <span>*</span></label><input id="demo-name" name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Aarav Patil" aria-invalid={!!errors.name} aria-describedby={errors.name ? "error-name" : undefined} />{errors.name && <small id="error-name" className="field-error">{errors.name}</small>}</div><div><label htmlFor="demo-business">Business name <span>*</span></label><input id="demo-business" name="business" required minLength={2} maxLength={160} autoComplete="organization" placeholder="Your company" aria-invalid={!!errors.business} aria-describedby={errors.business ? "error-business" : undefined} />{errors.business && <small id="error-business" className="field-error">{errors.business}</small>}</div><div className="form-full"><label htmlFor="demo-contact">Email or phone <span>*</span></label><input id="demo-contact" name="contact" required maxLength={200} autoComplete="email" placeholder="you@company.com or +91 …" aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "error-contact" : undefined} />{errors.contact && <small id="error-contact" className="field-error">{errors.contact}</small>}</div><div className="form-full"><label htmlFor="demo-employees">Approximate employee count <span>*</span></label><select id="demo-employees" name="employees" required defaultValue="" aria-invalid={!!errors.employees} aria-describedby={errors.employees ? "error-employees" : undefined}><option value="" disabled>Select your team size</option>{employeeCounts.map(count => <option value={count} key={count}>{count} employees</option>)}</select>{errors.employees && <small id="error-employees" className="field-error">{errors.employees}</small>}</div><div className="form-full"><label htmlFor="demo-message">Anything you’d like us to know? <small>Optional</small></label><textarea id="demo-message" name="message" maxLength={2000} rows={3} placeholder="Your sites, shift patterns, or attendance challenges…" /></div></div><div className="form-honeypot" aria-hidden="true"><label htmlFor="demo-website">Website</label><input name="website" id="demo-website" tabIndex={-1} autoComplete="off" /></div><Button type="submit" size="lg" disabled={status === "sending"} className="form-submit">{status === "sending" ? <><LoaderCircle size={17} className="loading-spinner" />Sending request…</> : <>Request a demo <ArrowUpRight size={17} /></>}</Button><p className="form-privacy">Your details are used to respond to this enquiry. <a href="/privacy">Privacy notice (draft)</a>.</p>{feedback && <p className={`form-feedback ${status}`} role={status === "error" ? "alert" : "status"}>{feedback}</p>}{siteConfig.contactEmail && <a className="form-email" href={`mailto:${siteConfig.contactEmail}`}>Or email {siteConfig.contactEmail}</a>}</form>;
}
