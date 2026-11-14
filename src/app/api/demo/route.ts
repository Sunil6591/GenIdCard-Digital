import { NextResponse } from "next/server";
import { validateDemoRequest } from "@/lib/demo-request";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestOrigin = new URL(request.url).origin;
  if (origin && origin !== requestOrigin) return NextResponse.json({ error: "Please submit this form from the FootfallIQ website." }, { status: 403 });
  const body = await request.text();
  if (body.length > 16000) return NextResponse.json({ error: "Your request is too long." }, { status: 413 });
  let payload: unknown;
  try {
    payload = request.headers.get("content-type")?.includes("application/json") ? JSON.parse(body) : Object.fromEntries(new URLSearchParams(body));
  } catch { return NextResponse.json({ error: "Please check your form and try again." }, { status: 400 }); }
  const { data, errors } = validateDemoRequest(payload);
  if (!data) return NextResponse.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });
  if (data.website) return NextResponse.json({ error: "We could not accept this request." }, { status: 400 });
  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: "Demo requests are not connected yet. Your request has not been sent. Please keep your details and try again once contact is available." }, { status: 503 });
  try {
    const endpoint = new URL(webhook);
    if (endpoint.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && endpoint.hostname === "localhost")) throw new Error("Invalid provider URL");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(process.env.DEMO_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.DEMO_WEBHOOK_TOKEN}` } : {}) },
      body: JSON.stringify({ ...data, website: undefined, source: "attendance-marketing", submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Lead provider did not accept request");
    return NextResponse.json({ success: true, message: "Your demo request has been received by our contact service. Thank you for telling us about your team." });
  } catch {
    return NextResponse.json({ error: "Your request could not be delivered. Your details are still here; please try again later." }, { status: 502 });
  }
}
